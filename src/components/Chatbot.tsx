import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, ExternalLink, ShoppingBag, CreditCard, Truck, HelpCircle, Gift, Users } from "lucide-react";
import { ItemCategory } from "@/data/items";
import { useI18n } from "@/i18n";

interface ChatbotProps {
  onFilterSelect: (category: ItemCategory) => void;
  onNavigateRewards: () => void;
}

export default function Chatbot({ onFilterSelect, onNavigateRewards }: ChatbotProps) {
  const [open, setOpen] = useState(false);
  const [activeAnswer, setActiveAnswer] = useState<string | null>(null);
  const { t } = useI18n();

  const answers = {
    bestsellers: t("chat.ans.bestsellers"),
    howto: t("chat.ans.howto"),
    payment: t("chat.ans.payment"),
    delivery: t("chat.ans.delivery"),
    grupo: t("chat.ans.group"),
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`fixed bottom-4 right-4 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-xl flex items-center justify-center animate-pulse-glow transition-transform hover:scale-110 ${open ? "hidden" : ""}`}
      >
        <MessageCircle size={24} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-4 right-4 z-50 w-[340px] max-w-[calc(100vw-2rem)] max-h-[70vh] rounded-2xl bg-card border border-border shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-primary/5">
              <span className="font-semibold text-card-foreground text-sm">{t("chat.title")}</span>
              <button onClick={() => { setOpen(false); setActiveAnswer(null); }} className="text-muted-foreground hover:text-foreground">
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-hide">
              <div className="bg-muted rounded-xl p-3 text-sm text-foreground whitespace-pre-line">
                {t("chat.greeting")}
              </div>

              {activeAnswer && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-primary/10 rounded-xl p-3 text-sm text-foreground whitespace-pre-line"
                >
                  {activeAnswer}
                  {activeAnswer === answers.grupo && (
                    <a
                      href="https://chat.whatsapp.com/D9hVSWNLJgW9d9BOiY7BDd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-primary text-xs font-medium hover:underline"
                    >
                      {t("chat.enterGroup")} <ExternalLink size={12} />
                    </a>
                  )}
                </motion.div>
              )}

              <div className="space-y-2">
                <button
                  onClick={() => setActiveAnswer(answers.bestsellers)}
                  className="w-full text-left px-3 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm hover:bg-primary/10 transition-colors flex items-center gap-2"
                >
                  <ShoppingBag size={14} /> {t("chat.bestsellers")}
                </button>

                <button
                  onClick={() => setActiveAnswer(answers.howto)}
                  className="w-full text-left px-3 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm hover:bg-primary/10 transition-colors flex items-center gap-2"
                >
                  <HelpCircle size={14} /> {t("chat.howto")}
                </button>

                <button
                  onClick={() => setActiveAnswer(answers.payment)}
                  className="w-full text-left px-3 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm hover:bg-primary/10 transition-colors flex items-center gap-2"
                >
                  <CreditCard size={14} /> {t("chat.payment")}
                </button>

                <button
                  onClick={() => setActiveAnswer(answers.delivery)}
                  className="w-full text-left px-3 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm hover:bg-primary/10 transition-colors flex items-center gap-2"
                >
                  <Truck size={14} /> {t("chat.delivery")}
                </button>

                <a
                  href={`https://wa.me/5575981382799?text=${encodeURIComponent(t("wa.help"))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-left px-3 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm hover:bg-primary/10 transition-colors flex items-center gap-2"
                >
                  <MessageCircle size={14} /> {t("chat.whatsapp")}
                </a>

                <button
                  onClick={() => { onNavigateRewards(); setOpen(false); }}
                  className="w-full text-left px-3 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm hover:bg-primary/10 transition-colors flex items-center gap-2"
                >
                  <Gift size={14} /> {t("chat.rewards")}
                </button>

                <button
                  onClick={() => setActiveAnswer(answers.grupo)}
                  className="w-full text-left px-3 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm hover:bg-primary/10 transition-colors flex items-center gap-2"
                >
                  <Users size={14} /> {t("chat.group")}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
