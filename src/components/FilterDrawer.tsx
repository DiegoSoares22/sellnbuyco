import React, { useState } from "react";
import { useAccountStore } from "@/hooks/useAccountStore";
import { useI18n } from "@/i18n";
import { ACCOUNTS } from "@/data/accounts";
import { getClassCounts } from "@/data/accounts";
import { getAvailableLevelBuckets } from "@/lib/accountFilters";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Swords, Shield, Droplet, Crosshair, Anchor, Circle, Flame, Zap, Star, Compass, HelpCircle } from "lucide-react";

interface FilterDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
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
  "DragonWarrior",
  "Thunder Strike",
  "Trojan",
  "Dune Wanderer",
];

export const FilterDrawer: React.FC<FilterDrawerProps> = ({ open, onOpenChange, filteredCount }) => {
  const { lang } = useI18n();
  const {
    selectedClasses,
    setSelectedClasses,
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
  const [localClasses, setLocalClasses] = useState<string[]>(selectedClasses);
  const [localMinPrice, setLocalMinPrice] = useState<number>(minPrice);
  const [localMaxPrice, setLocalMaxPrice] = useState<number>(maxPrice);
  const [localLevels, setLocalLevels] = useState<string[]>(levelFilter);

  // Resetar estados locais com base no store quando abrir
  React.useEffect(() => {
    if (open) {
      setLocalClasses(selectedClasses);
      setLocalMinPrice(minPrice);
      setLocalMaxPrice(maxPrice);
      setLocalLevels(levelFilter);
    }
  }, [open, selectedClasses, minPrice, maxPrice, levelFilter]);

  const handleApply = () => {
    setSelectedClasses(localClasses);
    setPriceRange(localMinPrice, localMaxPrice);
    setLevelFilter(localLevels);
    onOpenChange(false);
  };

  const handleClear = () => {
    clearFilters();
    setLocalClasses([]);
    setLocalMinPrice(5000);
    setLocalMaxPrice(270000);
    setLocalLevels([]);
    onOpenChange(false);
  };

  const toggleLocalClass = (cls: string) => {
    if (localClasses.includes(cls)) {
      setLocalClasses(localClasses.filter((c) => c !== cls));
    } else {
      setLocalClasses([...localClasses, cls]);
    }
  };

  const handleLevelRadioChange = (val: string) => {
    if (val === "all") {
      setLocalLevels([]);
    } else {
      setLocalLevels([val]);
    }
  };

  const activeLevelValue = localLevels.length === 0 ? "all" : localLevels[0];

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md bg-[#12121a] border-zinc-800 text-slate-100 flex flex-col h-full p-0"
      >
        <div className="p-6 border-b border-zinc-800">
          <SheetHeader>
            <SheetTitle className="text-slate-100 text-lg font-bold">
              {lang === "pt" ? "Filtros" : "Filters"}
            </SheetTitle>
            <SheetDescription className="text-slate-400 text-xs">
              {lang === "pt" ? "Refine sua busca por contas ideais" : "Refine your search for ideal accounts"}
            </SheetDescription>
          </SheetHeader>
        </div>

        {/* Corpo scrollável do drawer */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Preço Slider */}
          <div className="space-y-3">
            <Label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              {lang === "pt" ? "Preço (CPs)" : "Price (CPs)"}
            </Label>
            <div className="flex justify-between text-xs text-slate-400">
              <span>5k</span>
              <span>270k+</span>
            </div>
            <Slider
              min={5000}
              max={270000}
              step={5000}
              value={[localMinPrice, localMaxPrice]}
              onValueChange={([min, max]) => {
                setLocalMinPrice(min);
                setLocalMaxPrice(max);
              }}
              className="py-2"
            />
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400">Min</span>
                <div className="relative">
                  <Input
                    type="number"
                    value={localMinPrice}
                    onChange={(e) => setLocalMinPrice(Number(e.target.value))}
                    className="bg-zinc-900 border-zinc-800 text-slate-100 text-xs h-9 pl-3 pr-7"
                  />
                  <span className="absolute right-3 top-2.5 text-[10px] text-slate-500 font-bold">k</span>
                </div>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400">Max</span>
                <div className="relative">
                  <Input
                    type="number"
                    value={localMaxPrice}
                    onChange={(e) => setLocalMaxPrice(Number(e.target.value))}
                    className="bg-zinc-900 border-zinc-800 text-slate-100 text-xs h-9 pl-3 pr-7"
                  />
                  <span className="absolute right-3 top-2.5 text-[10px] text-slate-500 font-bold">k</span>
                </div>
              </div>
            </div>
          </div>

          {/* Level - Radio Group */}
          <div className="space-y-3">
            <Label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              {lang === "pt" ? "Nível da Conta" : "Account Level"}
            </Label>
            <RadioGroup value={activeLevelValue} onValueChange={handleLevelRadioChange} className="space-y-2">
              <div className="flex items-center space-x-3 rounded-xl border border-zinc-800 bg-zinc-900/30 p-3 hover:bg-zinc-900/50 transition-colors">
                <RadioGroupItem value="all" id="lvl-all" />
                <Label htmlFor="lvl-all" className="text-xs text-slate-200 cursor-pointer flex-1 font-medium">
                  {lang === "pt" ? "Todos os Levels" : "All Levels"}
                </Label>
              </div>

              {levelBuckets.map((b) => (
                <div
                  key={b.key}
                  className="flex items-center space-x-3 rounded-xl border border-zinc-800 bg-zinc-900/30 p-3 hover:bg-zinc-900/50 transition-colors"
                >
                  <RadioGroupItem value={b.key} id={`lvl-${b.key}`} />
                  <Label htmlFor={`lvl-${b.key}`} className="text-xs text-slate-200 cursor-pointer flex-grow flex items-center justify-between font-medium">
                    <span>{b.label}</span>
                    <span className="text-[10px] text-slate-500 bg-zinc-900 px-2 py-0.5 rounded-full border border-zinc-800">
                      {b.count}
                    </span>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Classe - Toggles */}
          <div className="space-y-3">
            <Label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              {lang === "pt" ? "Classes" : "Classes"}
            </Label>
            <div className="flex flex-wrap gap-2">
              {CLASS_OPTIONS.map((cls) => {
                const count = classCounts[cls] || 0;
                const Icon = CLASS_ICONS[cls] || HelpCircle;
                const isSelected = localClasses.includes(cls);

                return (
                  <button
                    key={cls}
                    onClick={() => toggleLocalClass(cls)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all duration-200 ${
                      isSelected
                        ? "bg-amber-500 text-black border-amber-500 shadow-md shadow-amber-500/10"
                        : "bg-zinc-900 border-zinc-800 text-slate-300 hover:border-zinc-700 hover:text-slate-100"
                    }`}
                  >
                    <Icon size={12} className={isSelected ? "text-black" : "text-amber-500"} />
                    <span>{cls}</span>
                    <span className={`text-[10px] opacity-75 font-normal ${isSelected ? "text-black" : "text-slate-400"}`}>
                      ({count})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer com ações */}
        <div className="p-6 border-t border-zinc-800 bg-zinc-950/40">
          <SheetFooter className="flex flex-row gap-3 w-full">
            <Button
              variant="outline"
              onClick={handleClear}
              className="flex-1 rounded-xl border-zinc-800 hover:bg-zinc-900 text-slate-300"
            >
              {lang === "pt" ? "Limpar" : "Clear"}
            </Button>
            <Button
              onClick={handleApply}
              className="flex-1 rounded-xl bg-amber-500 hover:bg-amber-600 text-black font-bold"
            >
              {lang === "pt" ? `Ver ${filteredCount} resultados` : `See ${filteredCount} results`}
            </Button>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
};
