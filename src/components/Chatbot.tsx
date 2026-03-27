import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, ExternalLink } from "lucide-react";
import { ItemCategory } from "@/data/items";

interface ChatbotProps {
  onFilterSelect: (category: ItemCategory) => void;
  onNavigateRewards: () => void;
}

const BUTTONS = [
  { emoji: "🔶", label: "Runas Amarelas", category: "rune" as ItemCategory },
  { emoji: "💰", label: "CPs & Gold", category: "currency" as ItemCategory },
  { emoji: "⚔️", label: "Awakening Items", category: "awakening" as ItemCategory },
  { emoji: "🎼", label: "Collections", category: "collection" as ItemCategory },
  { emoji: "🧰", label: "Utilitários", category: "misc" as ItemCategory },
];

export default function Chatbot({ onFilterSelect, onNavigateRewards }: ChatbotProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* FAB */}
      <button
        onClick={() => setOpen(true)}
        className={`fixed bottom-4 right-4 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-xl flex items-center justify-center animate-pulse-glow transition-transform hover:scale-110 ${open ? "hidden" : ""}`}
      >
        <MessageCircle size={24} />
      </button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-4 right-4 z-50 w-[340px] max-w-[calc(100vw-2rem)] max-h-[70vh] rounded-2xl bg-card border border-border shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-primary/5">
              <span className="font-semibold text-card-foreground text-sm">Assistente S&B</span>
              <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-hide">
              <div className="bg-muted rounded-xl p-3 text-sm text-foreground">
                Olá, Conquistador! 👋<br />
                Precisa de ajuda para encontrar o melhor item ou aproveitar suas vantagens?
              </div>

              <div className="space-y-2">
                {BUTTONS.map((btn) => (
                  <button
                    key={btn.category}
                    onClick={() => { onFilterSelect(btn.category); setOpen(false); }}
                    className="w-full text-left px-3 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm hover:bg-primary/10 transition-colors flex items-center gap-2"
                  >
                    <span>{btn.emoji}</span> {btn.label}
                  </button>
                ))}

                <button
                  onClick={() => { onNavigateRewards(); setOpen(false); }}
                  className="w-full text-left px-3 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm hover:bg-primary/10 transition-colors flex items-center gap-2"
                >
                  🎁 Ver minhas recompensas
                </button>

                <a
                  href="https://chat.whatsapp.com/D9hVSWNLJgW9d9BOiY7BDd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-left px-3 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm hover:bg-primary/10 transition-colors flex items-center gap-2"
                >
                  📢 Entrar no grupo da comunidade <ExternalLink size={12} />
                </a>
              </div>

              <div className="bg-muted/50 rounded-xl p-3 text-xs text-muted-foreground">
                🔥 Quer ficar por dentro das novidades, promoções exclusivas e trocar ideia com outros players?
                Entre agora no nosso grupo oficial 👆
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
