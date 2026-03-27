import { ItemCategory, CATEGORY_LABELS } from "@/data/items";
import { motion } from "framer-motion";

interface CategoryFilterProps {
  selected: Set<ItemCategory | "all">;
  onToggle: (cat: ItemCategory | "all") => void;
}

const categories: (ItemCategory | "all")[] = ["all", "currency", "rune", "awakening", "collection", "anima", "donate", "misc"];

export default function CategoryFilter({ selected, onToggle }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center py-4">
      {categories.map((cat) => {
        const { label } = CATEGORY_LABELS[cat];
        const active = selected.has(cat);
        return (
          <motion.button
            key={cat}
            whileTap={{ scale: 0.95 }}
            onClick={() => onToggle(cat)}
            className={`
              px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border
              ${active
                ? "bg-primary text-primary-foreground border-primary shadow-lg"
                : "bg-card text-card-foreground border-border hover:border-primary/50"
              }
            `}
          >
            {label}
          </motion.button>
        );
      })}
    </div>
  );
}
