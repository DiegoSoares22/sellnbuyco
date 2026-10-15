import React, { useEffect, useMemo, useState } from "react";
import { useAccountStore } from "@/hooks/useAccountStore";
import { useI18n } from "@/i18n";
import { ACCOUNTS } from "@/data/accounts";
import { filterAccounts } from "@/lib/accountFilters";
import { LEVEL_OPTIONS, NEGOTIABLE_COUNT, PRICE_CEILING, PRICE_STEP } from "@/lib/catalog";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface FilterDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/**
 * Gaveta "Preço e level". Tudo sai das contas à venda: o teto do preço, as faixas de level e a
 * quantidade de contas "A combinar". O botão mostra quantas contas a escolha atual vai mostrar,
 * com a mesma regra da lista (filterAccounts), antes de aplicar.
 */
export const FilterDrawer: React.FC<FilterDrawerProps> = ({ open, onOpenChange }) => {
  const { lang } = useI18n();
  const {
    searchQuery,
    selectedClass,
    minPrice,
    maxPrice,
    setPriceRange,
    includeNegotiable,
    setIncludeNegotiable,
    levelFilter,
    setLevelFilter,
  } = useAccountStore();

  // Edição local; só vai para a lista ao aplicar
  const [localMin, setLocalMin] = useState(minPrice);
  const [localMax, setLocalMax] = useState(maxPrice);
  const [localNegotiable, setLocalNegotiable] = useState(includeNegotiable);
  const [localLevel, setLocalLevel] = useState<string>(levelFilter[0] ?? "all");

  // Ao abrir, parte do que está aplicado
  useEffect(() => {
    if (open) {
      setLocalMin(minPrice);
      setLocalMax(maxPrice);
      setLocalNegotiable(includeNegotiable);
      setLocalLevel(levelFilter[0] ?? "all");
    }
  }, [open, minPrice, maxPrice, includeNegotiable, levelFilter]);

  const clamp = (n: number) => Math.min(Math.max(0, Number.isFinite(n) ? n : 0), PRICE_CEILING);
  const low = Math.min(clamp(localMin), clamp(localMax));
  const high = Math.max(clamp(localMin), clamp(localMax));

  const previewCount = useMemo(
    () =>
      filterAccounts(ACCOUNTS, {
        search: searchQuery,
        className: selectedClass,
        minPrice: low,
        maxPrice: high,
        includeNegotiable: localNegotiable,
        levels: localLevel === "all" ? [] : [localLevel],
      }).length,
    [searchQuery, selectedClass, low, high, localNegotiable, localLevel],
  );

  const handleApply = () => {
    setPriceRange(low, high);
    setIncludeNegotiable(localNegotiable);
    setLevelFilter(localLevel === "all" ? [] : [localLevel]);
    onOpenChange(false);
  };

  const handleReset = () => {
    setLocalMin(0);
    setLocalMax(PRICE_CEILING);
    setLocalNegotiable(true);
    setLocalLevel("all");
  };

  const sectionLabel = "text-caption-sm uppercase tracking-[0.08em] text-mute-light";
  const accountsWord = (n: number) => (n === 1 ? (lang === "pt" ? "conta" : "account") : lang === "pt" ? "contas" : "accounts");

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        closeLabel={lang === "pt" ? "Fechar filtros" : "Close filters"}
        className="band-light flex h-full w-full flex-col gap-0 border-0 bg-canvas-light p-0 text-ink sm:max-w-md"
      >
        <div className="border-b border-hairline-light p-lg pr-16">
          <SheetHeader className="space-y-1 text-left">
            <SheetTitle className="text-heading-xl text-ink">{lang === "pt" ? "Preço e level" : "Price & Level"}</SheetTitle>
            <SheetDescription className="text-caption-md text-mute-light">
              {lang === "pt"
                ? "As opções acompanham as contas que estão à venda agora."
                : "Options follow the accounts for sale right now."}
            </SheetDescription>
          </SheetHeader>
        </div>

        <div className="flex-1 space-y-xl overflow-y-auto overscroll-contain p-lg">
          {/* Preço */}
          <fieldset className="space-y-md">
            <legend className={sectionLabel}>{lang === "pt" ? "Preço em CPs" : "Price in CPs"}</legend>
            <p className="tabular text-heading-lg text-ink" aria-live="polite">
              {low}k – {high}k <span className="text-body-sm text-mute-light">CPs</span>
            </p>
            <Slider
              min={0}
              max={PRICE_CEILING}
              step={PRICE_STEP}
              value={[low, high]}
              onValueChange={([min, max]) => {
                setLocalMin(min);
                setLocalMax(max);
              }}
              thumbLabels={lang === "pt" ? ["Preço mínimo", "Preço máximo"] : ["Minimum price", "Maximum price"]}
              className="py-sm"
            />
            <div className="grid grid-cols-2 gap-sm">
              {(
                [
                  ["min", localMin, setLocalMin, lang === "pt" ? "Mínimo" : "Minimum"],
                  ["max", localMax, setLocalMax, lang === "pt" ? "Máximo" : "Maximum"],
                ] as const
              ).map(([key, value, setValue, label]) => (
                <div key={key} className="space-y-1">
                  <Label htmlFor={`preco-${key}`} className="text-caption-md text-body-light">
                    {label}
                  </Label>
                  <div className="relative">
                    <input
                      id={`preco-${key}`}
                      name={`preco-${key}`}
                      type="number"
                      inputMode="numeric"
                      autoComplete="off"
                      min={0}
                      max={PRICE_CEILING}
                      step={PRICE_STEP}
                      value={value}
                      onChange={(e) => setValue(Number(e.target.value))}
                      onBlur={() => setValue(clamp(value))}
                      className="text-input tabular pr-10"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute right-md top-1/2 -translate-y-1/2 text-caption-md text-mute-light"
                    >
                      k
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-caption-md text-mute-light">
              {lang === "pt"
                ? `A conta mais cara hoje está na faixa até ${PRICE_CEILING}k.`
                : `The most expensive account today is within ${PRICE_CEILING}k.`}
            </p>

            {NEGOTIABLE_COUNT > 0 && (
              <label className="flex cursor-pointer items-start gap-sm rounded-md bg-surface-card p-md">
                <input
                  type="checkbox"
                  name="acombinar"
                  checked={localNegotiable}
                  onChange={(e) => setLocalNegotiable(e.target.checked)}
                  className="mt-0.5 h-5 w-5 shrink-0 accent-primary"
                />
                <span>
                  <span className="block text-body-sm text-ink">
                    {lang === "pt" ? "Incluir contas \"A combinar\"" : "Include \"Negotiable\" accounts"}
                    <span className="tabular text-mute-light"> ({NEGOTIABLE_COUNT})</span>
                  </span>
                  <span className="mt-0.5 block text-caption-md text-mute-light">
                    {lang === "pt"
                      ? "Não têm preço fixo, então aparecem em qualquer faixa."
                      : "They have no fixed price, so they show up in any range."}
                  </span>
                </span>
              </label>
            )}
          </fieldset>

          {/* Level */}
          <fieldset>
            <legend className={sectionLabel}>Level</legend>
            <RadioGroup value={localLevel} onValueChange={setLocalLevel} className="mt-xs gap-0">
              {[
                { key: "all", label: lang === "pt" ? "Qualquer level" : "Any Level", count: ACCOUNTS.length },
                ...LEVEL_OPTIONS.map((b) => ({ key: b.key, label: lang === "pt" ? b.label : b.labelEn, count: b.count })),
              ].map((b) => (
                <Label
                  key={b.key}
                  htmlFor={`lvl-${b.key}`}
                  className="flex cursor-pointer items-center gap-sm border-b border-hairline-light py-sm text-body-sm text-ink last:border-0"
                >
                  <RadioGroupItem value={b.key} id={`lvl-${b.key}`} className="h-5 w-5" />
                  <span className="flex-1">{b.label}</span>
                  <span className="tabular text-caption-md text-mute-light">{b.count}</span>
                </Label>
              ))}
            </RadioGroup>
          </fieldset>
        </div>

        {/* Ações */}
        <div className="flex gap-sm border-t border-hairline-light p-lg">
          <button type="button" onClick={handleReset} className="btn btn-secondary-light">
            {lang === "pt" ? "Limpar" : "Clear"}
          </button>
          <button type="button" onClick={handleApply} disabled={previewCount === 0} className="btn btn-primary flex-1">
            {previewCount === 0
              ? lang === "pt"
                ? "Nenhuma conta nessa faixa"
                : "No accounts in this range"
              : `${lang === "pt" ? "Ver" : "See"} ${previewCount} ${accountsWord(previewCount)}`}
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
