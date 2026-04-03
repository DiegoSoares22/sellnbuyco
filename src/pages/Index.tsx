import { useState, useMemo, useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { GAME_ITEMS, ItemCategory } from "@/data/items";
import HeroSection from "@/components/HeroSection";
import CategoryFilter from "@/components/CategoryFilter";
import ItemGrid from "@/components/ItemGrid";
import Chatbot from "@/components/Chatbot";
import GamerTips from "@/components/GamerTips";
import WelcomePopup from "@/components/WelcomePopup";

export default function Index() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const initialCat = useMemo(() => {
    const p = searchParams.get("cat");
    if (p && p !== "all") return p as ItemCategory;
    return "all" as const;
  }, []);

  const [activeCategory, setActiveCategory] = useState<ItemCategory | "all">(initialCat);

  const handleSelect = useCallback((cat: ItemCategory | "all") => {
    setActiveCategory(cat);
    if (cat === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ cat });
    }
  }, [setSearchParams]);

  const handleFilterFromChat = useCallback((category: ItemCategory) => {
    setActiveCategory(category);
    setSearchParams({ cat: category });
    document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" });
  }, [setSearchParams]);

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return GAME_ITEMS;
    return GAME_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-background">
      <WelcomePopup />
      <HeroSection />

      <div id="catalog" className="container py-8 space-y-4">
        <CategoryFilter selected={activeCategory} onSelect={handleSelect} />
        <ItemGrid items={filteredItems} />
      </div>

      <GamerTips activeCategory={activeCategory} />
      <Chatbot onFilterSelect={handleFilterFromChat} onNavigateRewards={() => navigate("/recompensas")} />
      <MusicPlayer />
    </div>
  );
}
