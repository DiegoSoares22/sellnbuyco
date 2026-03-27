import { useState, useMemo, useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { GAME_ITEMS, ItemCategory } from "@/data/items";
import HeroSection from "@/components/HeroSection";
import CategoryFilter from "@/components/CategoryFilter";
import ItemGrid from "@/components/ItemGrid";
import Chatbot from "@/components/Chatbot";
import GamerTips from "@/components/GamerTips";
import MusicPlayer from "@/components/MusicPlayer";
import DebugPanel from "@/components/DebugPanel";

export default function Index() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const initialCats = useMemo(() => {
    const p = searchParams.get("cat");
    if (p) return new Set(p.split(",") as (ItemCategory | "all")[]);
    return new Set<ItemCategory | "all">(["all"]);
  }, []);

  const [selectedCats, setSelectedCats] = useState<Set<ItemCategory | "all">>(initialCats);

  const handleToggle = useCallback((cat: ItemCategory | "all") => {
    setSelectedCats((prev) => {
      const next = new Set(prev);
      if (cat === "all") {
        return new Set(["all"]);
      }
      next.delete("all");
      if (next.has(cat)) {
        next.delete(cat);
        if (next.size === 0) next.add("all");
      } else {
        next.add(cat);
      }
      const arr = Array.from(next);
      if (arr.length === 1 && arr[0] === "all") {
        setSearchParams({});
      } else {
        setSearchParams({ cat: arr.join(",") });
      }
      return next;
    });
  }, [setSearchParams]);

  const handleFilterFromChat = useCallback((category: ItemCategory) => {
    setSelectedCats(new Set([category]));
    setSearchParams({ cat: category });
    document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" });
  }, [setSearchParams]);

  const filteredItems = useMemo(() => {
    if (selectedCats.has("all")) return GAME_ITEMS;
    return GAME_ITEMS.filter((item) => selectedCats.has(item.category));
  }, [selectedCats]);

  const activeCategory: ItemCategory | "all" = useMemo(() => {
    const cats = Array.from(selectedCats);
    if (cats.length === 1) return cats[0];
    return "all";
  }, [selectedCats]);

  return (
    <div className="min-h-screen bg-background">
      <DebugPanel />
      <HeroSection />

      <div id="catalog" className="container py-8 space-y-4">
        <CategoryFilter selected={selectedCats} onToggle={handleToggle} />
        <div className="text-center text-xs text-muted-foreground mb-2">
          {filteredItems.length} item(s) carregado(s)
        </div>
        <ItemGrid items={filteredItems} />
      </div>

      <GamerTips activeCategory={activeCategory} />
      <Chatbot onFilterSelect={handleFilterFromChat} onNavigateRewards={() => navigate("/recompensas")} />
      <MusicPlayer />
    </div>
  );
}
