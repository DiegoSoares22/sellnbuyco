import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react";
import { ItemCategory, GAMER_TIPS } from "@/data/items";
import taoistImg from "@/assets/taoist.png";

interface GamerTipsProps {
  activeCategory: ItemCategory | "all" | null;
}

const WHATSAPP_CATS = new Set<string>(["collection", "anima"]);

export default function GamerTips({ activeCategory }: GamerTipsProps) {
  const [expanded, setExpanded] = useState(false);
  const category = activeCategory || "all";
  const tip = GAMER_TIPS[category];

  if (!tip) return null;

  const showWhatsapp = WHATSAPP_CATS.has(category);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      key={category}
      className="fixed top-20 left-4 z-40 max-w-[280px]"
    >
      <button
        onClick={() => setExpanded((p) => !p)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-card border border-border shadow-lg text-sm font-medium text-card-foreground hover:border-primary/50 transition-colors"
      >
        <img
          src={taoistImg}
          alt="Dicas"
          className="w-7 h-7 rounded-full object-cover"
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
            className="mt-2 p-3 rounded-xl bg-card border border-border shadow-lg text-xs text-card-foreground whitespace-pre-line overflow-hidden space-y-2"
          >
            <p>{tip}</p>
            {showWhatsapp && (
              <a
                href={`https://wa.me/5575981382799?text=${encodeURIComponent("Olá, Diego. Gostaria de saber mais sobre os itens disponíveis.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary text-[11px] font-medium hover:underline"
              >
                <MessageCircle size={12} /> Falar comigo no WhatsApp
              </a>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
