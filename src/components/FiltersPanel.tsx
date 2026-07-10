import { useState } from "react";
import { Filter, X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { useI18n } from "@/i18n";

export interface LevelBucketOption {
  key: string;
  label: string;
  count: number;
}

interface FiltersPanelProps {
  priceMin: number;
  priceMax: number;
  priceRange: [number, number];
  onPriceChange: (r: [number, number]) => void;
  levelBuckets: LevelBucketOption[];
  selectedLevels: string[];
  onLevelsChange: (keys: string[]) => void;
  activeCount: number;
  onClear: () => void;
}

export default function FiltersPanel({
  priceMin,
  priceMax,
  priceRange,
  onPriceChange,
  levelBuckets,
  selectedLevels,
  onLevelsChange,
  activeCount,
  onClear,
}: FiltersPanelProps) {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  const toggleLevel = (key: string) => {
    if (selectedLevels.includes(key)) {
      onLevelsChange(selectedLevels.filter((k) => k !== key));
    } else {
      onLevelsChange([...selectedLevels, key]);
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className="inline-flex items-center gap-2 h-9 px-4 rounded-lg border border-primary/40 bg-primary/5 text-primary text-sm font-semibold hover:bg-primary/10 transition-colors"
          aria-label={t("acc.filters") || "Filtros"}
        >
          <Filter size={14} />
          <span>{t("acc.filters") || "Filtros"}</span>
          {activeCount > 0 && (
            <span className="ml-1 inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-primary text-primary-foreground text-[11px] font-bold">
              {activeCount}
            </span>
          )}
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-full sm:max-w-md p-0 flex flex-col data-[state=open]:duration-300 max-sm:!bottom-0 max-sm:!top-auto max-sm:!h-[85vh] max-sm:!w-full max-sm:!max-w-full max-sm:rounded-t-2xl max-sm:!border-t max-sm:!border-x-0 max-sm:!border-b-0"
      >
        <SheetHeader className="px-6 py-4 border-b border-border flex-row items-center justify-between space-y-0">
          <SheetTitle className="text-base font-bold">Filtros</SheetTitle>
          {activeCount > 0 && (
            <button
              onClick={() => {
                onClear();
              }}
              className="text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
            >
              <X size={12} /> Limpar tudo
            </button>
          )}
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">
          {/* Price */}
          <section>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-foreground">Preço (CPs)</h3>
              <span className="text-xs text-muted-foreground font-medium">
                {priceMin}k – {priceMax}k
              </span>
            </div>
            <Slider
              min={priceRange[0]}
              max={priceRange[1]}
              step={1}
              value={[priceMin, priceMax]}
              onValueChange={(v) => onPriceChange([v[0], v[1]] as [number, number])}
              className="my-4"
            />
            <div className="flex items-center justify-between text-[11px] text-muted-foreground mt-1">
              <span>{priceRange[0]}k</span>
              <span>{priceRange[1]}k</span>
            </div>
          </section>

          {/* Level */}
          {levelBuckets.length > 0 && (
            <section>
              <h3 className="text-sm font-semibold text-foreground mb-3">Level</h3>
              <div className="space-y-2">
                {levelBuckets.map((b) => {
                  const checked = selectedLevels.includes(b.key);
                  return (
                    <label
                      key={b.key}
                      className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg border border-border hover:border-primary/40 hover:bg-primary/5 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <Checkbox
                          checked={checked}
                          onCheckedChange={() => toggleLevel(b.key)}
                        />
                        <span className="text-sm text-foreground font-medium">{b.label}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">({b.count})</span>
                    </label>
                  );
                })}
              </div>
            </section>
          )}
        </div>

        <div className="px-6 py-4 border-t border-border">
          <button
            onClick={() => setOpen(false)}
            className="w-full py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition"
          >
            Ver resultados
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
