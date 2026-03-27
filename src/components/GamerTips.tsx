import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, ChevronDown, ChevronUp } from "lucide-react";
import { ItemCategory, GAMER_TIPS } from "@/data/items";

interface GamerTipsProps {
  activeCategory: ItemCategory | null;
}

export default function GamerTips({ activeCategory }: GamerTipsProps) {
  const [expanded, setExpanded] = useState(false);
  const tip = activeCategory ? GAMER_TIPS[activeCategory] : null;

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
        <Bot size={18} className="text-primary animate-float" />
        <span className="hidden sm:inline">Dica do Robot</span>
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
