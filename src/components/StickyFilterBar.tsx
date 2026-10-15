import React from "react";
import { SlidersHorizontal } from "lucide-react";
import { useAccountStore } from "@/hooks/useAccountStore";
import { useI18n } from "@/i18n";
import { ACCOUNTS, getClassCounts } from "@/data/accounts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface StickyFilterBarProps {
  onOpenFilters: () => void;
  filtersOpen: boolean;
  filteredCount: number;
}

const CLASS_OPTIONS = ["Ninja", "Warrior", "Taoist", "Archer", "Pirata", "Monk"];

const SORT_OPTIONS = [
  { value: "newest", pt: "Mais recentes", en: "Newest" },
  { value: "price-asc", pt: "Menor preço", en: "Lowest Price" },
  { value: "price-desc", pt: "Maior preço", en: "Highest Price" },
  { value: "level-desc", pt: "Maior level", en: "Highest Level" },
];

export const StickyFilterBar: React.FC<StickyFilterBarProps> = ({ onOpenFilters, filtersOpen, filteredCount }) => {
  const { lang } = useI18n();
  const { selectedClass, setSelectedClass, toggleClass, sortBy, setSortBy, activeFiltersCount } = useAccountStore();

  const classCounts = getClassCounts(ACCOUNTS);
  const classes = CLASS_OPTIONS;

  return (
    <div className="band-light z-30 border-y border-hairline-light py-sm lg:sticky lg:top-nav-height">
      <div className="page-container flex flex-col gap-sm lg:flex-row lg:items-center lg:justify-between">
        {/* -my-1 py-1: espaço para o anel de foco não ser cortado pelo overflow */}
        <div className="-mx-4 -my-1 flex gap-xs overflow-x-auto overscroll-x-contain px-4 py-1 scrollbar-hide sm:-mx-1 sm:px-1">
          <button
            type="button"
            onClick={onOpenFilters}
            aria-haspopup="dialog"
            aria-expanded={filtersOpen}
            className="filter-pill"
          >
            <SlidersHorizontal size={15} aria-hidden="true" />
            <span>{lang === "pt" ? "Filtros" : "Filters"}</span>
            {activeFiltersCount > 0 && (
              <span className="badge-info tabular h-5 min-w-5 justify-center px-1.5 py-0">{activeFiltersCount}</span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setSelectedClass(null)}
            aria-pressed={selectedClass === null}
            className="filter-pill"
          >
            {lang === "pt" ? "Todas" : "All"}
          </button>

          {classes.map((cls) => (
            <button
              key={cls}
              type="button"
              onClick={() => toggleClass(cls)}
              aria-pressed={selectedClass === cls}
              className="filter-pill"
            >
              <span translate="no">{cls}</span>
              <span className="tabular font-medium opacity-70">{classCounts[cls] || 0}</span>
            </button>
          ))}
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
    </div>
  );
};
