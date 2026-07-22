import React from "react";
import { SlidersHorizontal, Swords, Shield, Droplet, Crosshair, Anchor, Circle, Flame, Zap, Star, Compass, CircleDot, HelpCircle } from "lucide-react";
import { useAccountStore } from "@/hooks/useAccountStore";
import { useI18n } from "@/i18n";
import { ACCOUNTS, getClassCounts } from "@/data/accounts";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

interface StickyFilterBarProps {
  onOpenFilters: () => void;
  filteredCount: number;
}

const CLASS_ICONS: Record<string, any> = {
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
];

export const StickyFilterBar: React.FC<StickyFilterBarProps> = ({ onOpenFilters, filteredCount }) => {
  const { lang } = useI18n();
  const {
    selectedClass,
    setSelectedClass,
    toggleClass,
    sortBy,
    setSortBy,
    activeFiltersCount,
  } = useAccountStore();

  const classCounts = getClassCounts(ACCOUNTS);

  return (
    <div className="sticky top-[60px] z-30 bg-[#0a0a0f]/85 backdrop-blur-md border-b border-zinc-800/80 py-3 transition-all duration-200">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Lado Esquerdo: Botão Filtros + Pills rápidas por classe */}
        <div className="flex items-center gap-3 w-full sm:w-auto overflow-hidden">
          <Button
            onClick={onOpenFilters}
            className="flex items-center gap-2 rounded-xl bg-zinc-900 border border-zinc-800 text-slate-200 hover:bg-zinc-800 hover:text-slate-50 text-xs shrink-0"
          >
            <SlidersHorizontal size={14} className="text-amber-500" />
            <span>{lang === "pt" ? "Filtros" : "Filters"}</span>
            {activeFiltersCount > 0 && (
              <Badge className="bg-amber-500 hover:bg-amber-600 text-black text-[10px] font-bold h-4 px-1 rounded-full flex items-center justify-center">
                {activeFiltersCount}
              </Badge>
            )}
          </Button>

          <Separator orientation="vertical" className="h-6 bg-zinc-800 hidden sm:block shrink-0" />

          {/* Carousel horizontal de pills */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar scroll-smooth flex-1 py-1">
            <button
              onClick={() => {
                setSelectedClass(null);
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                selectedClass === null
                  ? "bg-amber-500 text-black border-amber-500 shadow-md shadow-amber-500/10"
                  : "bg-zinc-900/50 border-zinc-800 text-slate-400 hover:border-zinc-700 hover:text-slate-200"
              }`}
            >
              <CircleDot size={11} />
              <span>{lang === "pt" ? "Todos" : "All"}</span>
            </button>

            {CLASS_OPTIONS.map((cls) => {
              const count = classCounts[cls] || 0;
              const Icon = CLASS_ICONS[cls] || HelpCircle;
              const active = selectedClass === cls;

              return (
                <button
                  key={cls}
                  onClick={() => toggleClass(cls)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                    active
                      ? "bg-amber-500 text-black border-amber-500 shadow-md shadow-amber-500/10"
                      : "bg-zinc-900/50 border-zinc-800 text-slate-400 hover:border-zinc-700 hover:text-slate-200"
                  }`}
                >
                  <Icon size={11} className={active ? "text-black" : "text-amber-500"} />
                  <span>{cls}</span>
                  <span className={`text-[10px] opacity-75 font-normal ${active ? "text-black" : "text-slate-500"}`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Lado Direito: Resultados e Ordenação */}
        <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto shrink-0 border-t border-zinc-850 sm:border-0 pt-3 sm:pt-0">
          <span className="text-xs text-slate-400 font-medium">
            {filteredCount} {filteredCount === 1 ? (lang === "pt" ? "account encontrada" : "account found") : (lang === "pt" ? "accounts encontradas" : "accounts found")}
          </span>

          <div className="flex items-center gap-2">
            <Select value={sortBy} onValueChange={(val) => setSortBy(val)}>
              <SelectTrigger className="w-[140px] sm:w-[150px] bg-zinc-900 border-zinc-800 text-slate-200 text-xs h-9 rounded-xl focus:ring-amber-500">
                <SelectValue placeholder={lang === "pt" ? "Ordenar por" : "Sort by"} />
              </SelectTrigger>
              <SelectContent className="bg-[#12121a] border-zinc-800 text-slate-200">
                <SelectItem value="newest" className="text-xs focus:bg-zinc-800 focus:text-slate-100">
                  {lang === "pt" ? "Mais recentes" : "Newest"}
                </SelectItem>
                <SelectItem value="price-asc" className="text-xs focus:bg-zinc-800 focus:text-slate-100">
                  {lang === "pt" ? "Menor preço" : "Lowest Price"}
                </SelectItem>
                <SelectItem value="price-desc" className="text-xs focus:bg-zinc-800 focus:text-slate-100">
                  {lang === "pt" ? "Maior preço" : "Highest Price"}
                </SelectItem>
                <SelectItem value="level-desc" className="text-xs focus:bg-zinc-800 focus:text-slate-100">
                  {lang === "pt" ? "Maior Level" : "Highest Level"}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};
