import React from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { useAccountStore } from "@/hooks/useAccountStore";
import { useI18n } from "@/i18n";
import { LEVEL_BUCKETS } from "@/lib/accountFilters";
import { CLASS_COUNTS, PRICE_CEILING } from "@/lib/catalog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface StickyFilterBarProps {
  onOpenFilters: () => void;
  filtersOpen: boolean;
  filteredCount: number;
}

const SORT_OPTIONS = [
  { value: "newest", pt: "Mais recentes", en: "Newest" },
  { value: "price-asc", pt: "Menor preço", en: "Lowest Price" },
  { value: "price-desc", pt: "Maior preço", en: "Highest Price" },
  { value: "level-desc", pt: "Maior level", en: "Highest Level" },
];

/**
 * Barra de filtros: classe direto nos chips (só as classes que têm conta à venda), preço e level
 * na gaveta, e uma linha com o que está aplicado, cada item removível com um clique.
 */
export const StickyFilterBar: React.FC<StickyFilterBarProps> = ({ onOpenFilters, filtersOpen, filteredCount }) => {
  const { lang } = useI18n();
  const {
    selectedClass,
    setSelectedClass,
    toggleClass,
    sortBy,
    setSortBy,
    activeFiltersCount,
    minPrice,
    maxPrice,
    setPriceRange,
    includeNegotiable,
    setIncludeNegotiable,
    levelFilter,
    setLevelFilter,
    clearFilters,
  } = useAccountStore();

  // Uma classe vinda de link antigo pode não ter conta hoje: o chip aparece mesmo assim, para dar para desmarcar
  const classes =
    selectedClass && !CLASS_COUNTS.some(([cls]) => cls === selectedClass)
      ? [...CLASS_COUNTS, [selectedClass, 0] as [string, number]]
      : CLASS_COUNTS;

  // O que está aplicado na gaveta, em palavras
  const applied: { key: string; label: string; clear: () => void }[] = [];
  if (minPrice !== 0 || maxPrice !== PRICE_CEILING) {
    applied.push({
      key: "price",
      label: `${minPrice}k – ${maxPrice}k CPs`,
      clear: () => setPriceRange(0, PRICE_CEILING),
    });
  }
  if (!includeNegotiable) {
    applied.push({
      key: "negotiable",
      label: lang === "pt" ? "Sem \"A combinar\"" : "No \"Negotiable\"",
      clear: () => setIncludeNegotiable(true),
    });
  }
  for (const key of levelFilter) {
    const bucket = LEVEL_BUCKETS.find((b) => b.key === key);
    if (bucket) {
      applied.push({
        key: `level-${key}`,
        label: lang === "pt" ? bucket.label : bucket.labelEn,
        clear: () => setLevelFilter(levelFilter.filter((l) => l !== key)),
      });
    }
  }

  return (
    <div className="band-light z-30 border-y border-hairline-light py-sm lg:sticky lg:top-nav-height">
      <div className="page-container flex flex-col gap-sm lg:flex-row lg:items-center lg:justify-between">
        {/* -my-1 py-1: espaço para o anel de foco não ser cortado pelo overflow */}
        <div className="-mx-4 -my-1 flex items-center gap-xs overflow-x-auto overscroll-x-contain px-4 py-1 scrollbar-hide sm:-mx-1 sm:px-1">
          <button
            type="button"
            onClick={onOpenFilters}
            aria-haspopup="dialog"
            aria-expanded={filtersOpen}
            className="filter-pill"
          >
            <SlidersHorizontal size={15} aria-hidden="true" />
            <span>{lang === "pt" ? "Preço e level" : "Price & Level"}</span>
            {activeFiltersCount > 0 && (
              <span className="badge-info tabular h-5 min-w-5 justify-center px-1.5 py-0">{activeFiltersCount}</span>
            )}
          </button>

          <span aria-hidden="true" className="mx-1 h-6 w-px shrink-0 bg-hairline-light" />

          <div role="group" aria-label={lang === "pt" ? "Classe" : "Class"} className="flex gap-xs">
            <button
              type="button"
              onClick={() => setSelectedClass(null)}
              aria-pressed={selectedClass === null}
              className="filter-pill"
            >
              {lang === "pt" ? "Todas as classes" : "All Classes"}
            </button>

            {classes.map(([cls, count]) => (
              <button
                key={cls}
                type="button"
                onClick={() => toggleClass(cls)}
                aria-pressed={selectedClass === cls}
                className="filter-pill"
              >
                <span translate="no">{cls}</span>
                <span className="tabular font-medium opacity-70">{count}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-md lg:justify-end">
          <span className="tabular text-caption-md text-mute-light" aria-live="polite">
            {filteredCount}{" "}
            {filteredCount === 1 ? (lang === "pt" ? "conta" : "account") : lang === "pt" ? "contas" : "accounts"}
          </span>

          <Select value={sortBy} onValueChange={(val) => setSortBy(val)}>
            <SelectTrigger
              className="h-10 w-[190px] rounded-full border-ash-light bg-canvas-light px-md text-button-md text-ink hover:border-ink focus:ring-0 focus:ring-offset-0 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-canvas-light"
              aria-label={lang === "pt" ? "Ordenar por" : "Sort by"}
            >
              <SelectValue placeholder={lang === "pt" ? "Ordenar por" : "Sort by"} />
            </SelectTrigger>
            <SelectContent className="rounded-md border-hairline-light bg-canvas-light text-ink shadow-[0_24px_64px_rgba(0,0,0,0.18)]">
              {SORT_OPTIONS.map((o) => (
                <SelectItem key={o.value} value={o.value} className="rounded-sm text-caption-md focus:bg-surface-soft focus:text-ink">
                  {lang === "pt" ? o.pt : o.en}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* O que está aplicado na gaveta: cada filtro sai com um clique */}
      {applied.length > 0 && (
        <div className="page-container mt-sm flex flex-wrap items-center gap-xs">
          <span className="text-caption-md text-mute-light">{lang === "pt" ? "Aplicado:" : "Applied:"}</span>
          {applied.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={f.clear}
              aria-label={`${lang === "pt" ? "Remover filtro" : "Remove filter"} ${f.label}`}
              className="inline-flex h-8 items-center gap-1.5 rounded-full border border-ash-light px-sm text-caption-md text-ink transition-colors hover:border-ink"
            >
              <span className="tabular">{f.label}</span>
              <X size={14} aria-hidden="true" />
            </button>
          ))}
          <button type="button" onClick={clearFilters} className="link-light ml-xs text-caption-md">
            {lang === "pt" ? "Limpar tudo" : "Clear All"}
          </button>
        </div>
      )}
    </div>
  );
};
