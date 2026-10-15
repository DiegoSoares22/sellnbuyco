import React, { useState } from "react";
import { useAccountStore } from "@/hooks/useAccountStore";
import { useI18n } from "@/i18n";
import { ACCOUNTS } from "@/data/accounts";
import { getClassCounts } from "@/data/accounts";
import { getAvailableLevelBuckets } from "@/lib/accountFilters";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Swords, Shield, Droplet, Crosshair, Anchor, Circle, Flame, Zap, Star, Compass, HelpCircle, type LucideIcon } from "lucide-react";

interface FilterDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CLASS_ICONS: Record<string, LucideIcon> = {
  Ninja: Swords,
  Warrior: Shield,
  Taoist: Droplet,
  Archer: Crosshair,
  Pirata: Anchor,
  Monk: Circle,
  DragonWarrior: Flame,
  "Thunder Strike": Zap,
  Trojan: Star,
  "Dune Wanderer": Compass,
};

const CLASS_OPTIONS = [
  "Ninja",
  "Warrior",
  "Taoist",
  "Archer",
  "Pirata",
  "Monk",
  "DragonWarrior",
  "Thunder Strike",
  "Trojan",
  "Dune Wanderer",
];

export const FilterDrawer: React.FC<FilterDrawerProps> = ({ open, onOpenChange }) => {
  const { lang } = useI18n();
  const {
    selectedClass,
    setSelectedClass,
    minPrice,
    maxPrice,
    setPriceRange,
    levelFilter,
    setLevelFilter,
    clearFilters,
  } = useAccountStore();

  const classCounts = getClassCounts(ACCOUNTS);
  const levelBuckets = getAvailableLevelBuckets(ACCOUNTS);

  // Estados locais para controlar a edição antes de aplicar
  const [localClass, setLocalClass] = useState<string | null>(selectedClass);
  const [localMinPrice, setLocalMinPrice] = useState<number>(minPrice);
  const [localMaxPrice, setLocalMaxPrice] = useState<number>(maxPrice);
  const [localLevels, setLocalLevels] = useState<string[]>(levelFilter);

  // Resetar estados locais com base no store quando abrir
  React.useEffect(() => {
    if (open) {
      setLocalClass(selectedClass);
      setLocalMinPrice(minPrice);
      setLocalMaxPrice(maxPrice);
      setLocalLevels(levelFilter);
    }
  }, [open, selectedClass, minPrice, maxPrice, levelFilter]);

  const handleApply = () => {
    setSelectedClass(localClass);
    setPriceRange(localMinPrice, localMaxPrice);
    setLevelFilter(localLevels);
    onOpenChange(false);
  };

  const handleClear = () => {
    clearFilters();
    setLocalClass(null);
    setLocalMinPrice(0);
    setLocalMaxPrice(1000);
    setLocalLevels([]);
    onOpenChange(false);
  };

  const toggleLocalClass = (cls: string) => {
    setLocalClass((prev) => (prev === cls ? null : cls));
  };

  const handleLevelRadioChange = (val: string) => {
    if (val === "all") {
      setLocalLevels([]);
    } else {
      setLocalLevels([val]);
    }
  };

  const activeLevelValue = localLevels.length === 0 ? "all" : localLevels[0];

  const sectionLabel = "text-caption-sm uppercase tracking-[0.08em] text-mute-light";

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        closeLabel={lang === "pt" ? "Fechar filtros" : "Close filters"}
        className="band-light flex h-full w-full flex-col gap-0 border-0 p-0 sm:max-w-md"
      >
        <div className="border-b border-hairline-light p-lg pr-16">
          <SheetHeader className="space-y-1 text-left">
            <SheetTitle className="text-heading-xl text-ink">{lang === "pt" ? "Filtros" : "Filters"}</SheetTitle>
            <SheetDescription className="text-caption-md text-mute-light">
              {lang === "pt" ? "Refine a busca por preço, level e classe." : "Narrow the search by price, level and class."}
            </SheetDescription>
          </SheetHeader>
        </div>

        {/* Corpo rolável */}
        <div className="flex-1 space-y-xl overflow-y-auto overscroll-contain p-lg">
          {/* Preço */}
          <fieldset className="space-y-md">
            <legend className={sectionLabel}>{lang === "pt" ? "Preço (CPs)" : "Price (CPs)"}</legend>
            <Slider
              min={0}
              max={1000}
              step={5}
              value={[localMinPrice, localMaxPrice]}
              onValueChange={([min, max]) => {
                setLocalMinPrice(min);
                setLocalMaxPrice(max);
              }}
              thumbLabels={lang === "pt" ? ["Preço mínimo", "Preço máximo"] : ["Minimum price", "Maximum price"]}
              className="py-sm"
            />
            <div className="grid grid-cols-2 gap-sm">
              {([
                ["min", localMinPrice, setLocalMinPrice, lang === "pt" ? "Mínimo" : "Minimum"],
                ["max", localMaxPrice, setLocalMaxPrice, lang === "pt" ? "Máximo" : "Maximum"],
              ] as const).map(([key, value, setValue, label]) => (
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
                      max={1000}
                      value={value}
                      onChange={(e) => setValue(Number(e.target.value))}
                      className="text-input tabular pr-10"
                    />
                    <span aria-hidden="true" className="pointer-events-none absolute right-md top-1/2 -translate-y-1/2 text-caption-md text-mute-light">
                      k
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </fieldset>

          {/* Level */}
          <fieldset>
            <legend className={sectionLabel}>{lang === "pt" ? "Level da conta" : "Account Level"}</legend>
            <RadioGroup value={activeLevelValue} onValueChange={handleLevelRadioChange} className="mt-xs gap-0">
              {[{ key: "all", label: lang === "pt" ? "Todos os levels" : "All Levels", count: null as number | null }, ...levelBuckets].map((b) => (
                <Label
                  key={b.key}
                  htmlFor={`lvl-${b.key}`}
                  className="flex cursor-pointer items-center gap-sm border-b border-hairline-light py-sm text-body-sm text-ink last:border-0"
                >
                  <RadioGroupItem value={b.key} id={`lvl-${b.key}`} className="h-5 w-5" />
                  <span className="flex-1">{b.label}</span>
                  {b.count !== null && <span className="tabular text-caption-md text-mute-light">{b.count}</span>}
                </Label>
              ))}
            </RadioGroup>
          </fieldset>

          {/* Classe */}
          <fieldset className="space-y-sm">
            <legend className={sectionLabel}>{lang === "pt" ? "Classe" : "Class"}</legend>
            <div className="flex flex-wrap gap-xs">
              {CLASS_OPTIONS.map((cls) => {
                const count = classCounts[cls] || 0;
                const Icon = CLASS_ICONS[cls] || HelpCircle;
                return (
                  <button
                    key={cls}
                    type="button"
                    onClick={() => toggleLocalClass(cls)}
                    aria-pressed={localClass === cls}
                    className="filter-pill"
                  >
                    <Icon size={14} aria-hidden="true" />
                    <span translate="no">{cls}</span>
                    <span className="tabular font-medium opacity-70">{count}</span>
                  </button>
                );
              })}
            </div>
          </fieldset>
        </div>

        {/* Ações */}
        <div className="flex gap-sm border-t border-hairline-light p-lg">
          <button type="button" onClick={handleClear} className="btn btn-secondary-light flex-1">
            {lang === "pt" ? "Limpar" : "Clear"}
          </button>
          <button type="button" onClick={handleApply} className="btn btn-primary flex-1">
            {lang === "pt" ? "Aplicar filtros" : "Apply Filters"}
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
