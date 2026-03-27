import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ItemCategory, GAMER_TIPS } from "@/data/items";

interface GamerTipsProps {
  activeCategory: ItemCategory | "all" | null;
}

const ROBOT_IMAGE = "https://imgs.search.brave.com/C0w9x_jJYHZcSKpagnUFZnDfdbfpNIZwHyw2QEHSWc8/rs:fit:860:900:1/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/MS8zMS8xNS8yMi9j/eWJvcmctMjAyMjQ1/OF82NDAuanBn";

export default function GamerTips({ activeCategory }: GamerTipsProps) {
  const [expanded, setExpanded] = useState(false);
  const category = activeCategory || "all";
  const tip = GAMER_TIPS[category];

  if (!tip) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed top-20 left-4 z-40 max-w-[260px]"
    >
      <button
        onClick={() => setExpanded((p) => !p)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-card border border-border shadow-lg text-sm font-medium text-card-foreground hover:border-primary/50 transition-colors"
      >
        <img
          src={ROBOT_IMAGE}
          alt="Robot"
          className="w-6 h-6 rounded-full object-cover"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
        <span className="hidden sm:inline">Dicas / Sugestões</span>
        {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-2 p-3 rounded-xl bg-card border border-border shadow-lg text-xs text-card-foreground whitespace-pre-line overflow-hidden"
          >
            {tip}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
