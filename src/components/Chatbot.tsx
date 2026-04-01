import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, ExternalLink, ShoppingBag, CreditCard, Truck, HelpCircle, Gift, Users } from "lucide-react";
import { ItemCategory } from "@/data/items";

interface ChatbotProps {
  onFilterSelect: (category: ItemCategory) => void;
  onNavigateRewards: () => void;
}

export default function Chatbot({ onFilterSelect, onNavigateRewards }: ChatbotProps) {
  const [open, setOpen] = useState(false);
  const [activeAnswer, setActiveAnswer] = useState<string | null>(null);

  const FAQ_ANSWERS: Record<string, string> = {
    bestsellers: "Nossos itens mais vendidos são: Runas Amarelas, CPs e itens de Awakening. Use os filtros acima para encontrá-los!",
    howto: "1. Escolha o item desejado\n2. Clique no botão WhatsApp\n3. Confirme com nosso atendente\n4. Efetue o pagamento\n5. Receba seu item no jogo!",
    payment: "Aceitamos: PIX, transferência bancária e cartão de crédito. Consulte via WhatsApp para mais detalhes.",
    delivery: "Entrega imediata após confirmação do pagamento! Itens são enviados diretamente para sua conta no jogo.",
    grupo: "Quer acompanhar novidades, promoções e trocar ideia com outros jogadores? Nosso grupo é o melhor lugar para isso.",
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
              <span className="font-semibold text-card-foreground text-sm">Assistente S&B</span>
              <button onClick={() => { setOpen(false); setActiveAnswer(null); }} className="text-muted-foreground hover:text-foreground">
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-hide">
              <div className="bg-muted rounded-xl p-3 text-sm text-foreground">
                Olá, Conquistador!<br />
                Como posso te ajudar hoje?
              </div>

              {activeAnswer && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-primary/10 rounded-xl p-3 text-sm text-foreground whitespace-pre-line"
                >
                  {activeAnswer}
                  {activeAnswer === FAQ_ANSWERS.grupo && (
                    <a
                      href="https://chat.whatsapp.com/D9hVSWNLJgW9d9BOiY7BDd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-primary text-xs font-medium hover:underline"
                    >
                      Entrar no grupo <ExternalLink size={12} />
                    </a>
                  )}
                </motion.div>
              )}

              <div className="space-y-2">
                <button
                  onClick={() => setActiveAnswer(FAQ_ANSWERS.bestsellers)}
                  className="w-full text-left px-3 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm hover:bg-primary/10 transition-colors flex items-center gap-2"
                >
                  <ShoppingBag size={14} /> Ver produtos mais vendidos
                </button>

                <button
                  onClick={() => setActiveAnswer(FAQ_ANSWERS.howto)}
                  className="w-full text-left px-3 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm hover:bg-primary/10 transition-colors flex items-center gap-2"
                >
                  <HelpCircle size={14} /> Como comprar?
                </button>

                <button
                  onClick={() => setActiveAnswer(FAQ_ANSWERS.payment)}
                  className="w-full text-left px-3 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm hover:bg-primary/10 transition-colors flex items-center gap-2"
                >
                  <CreditCard size={14} /> Formas de pagamento
                </button>

                <button
                  onClick={() => setActiveAnswer(FAQ_ANSWERS.delivery)}
                  className="w-full text-left px-3 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm hover:bg-primary/10 transition-colors flex items-center gap-2"
                >
                  <Truck size={14} /> Prazo de entrega
                </button>

                <a
                  href={`https://wa.me/5575981382799?text=${encodeURIComponent("Olá, Diego. Preciso de ajuda.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-left px-3 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm hover:bg-primary/10 transition-colors flex items-center gap-2"
                >
                  <MessageCircle size={14} /> Falar no WhatsApp
                </a>

                <button
                  onClick={() => { onNavigateRewards(); setOpen(false); }}
                  className="w-full text-left px-3 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm hover:bg-primary/10 transition-colors flex items-center gap-2"
                >
                  <Gift size={14} /> Ver minhas recompensas
                </button>

                <button
                  onClick={() => setActiveAnswer(FAQ_ANSWERS.grupo)}
                  className="w-full text-left px-3 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm hover:bg-primary/10 transition-colors flex items-center gap-2"
                >
                  <Users size={14} /> Entrar no grupo da comunidade
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
