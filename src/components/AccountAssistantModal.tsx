import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Wallet, Swords, ArrowRight } from "lucide-react";
import { CLASS_OPTIONS, getClassCounts, ACCOUNTS } from "@/data/accounts";
import { useTypewriter } from "@/hooks/useTypewriter";

interface Props {
  open: boolean;
  onClose: () => void;
  onApply: (budgetK: number | null, className: string | null) => void;
  initialBudget?: number | null;
  initialClass?: string | null;
}

const INTRO =
  "Posso te ajudar a encontrar sua nova account!\nPreciso apenas de algumas informações:";

export default function AccountAssistantModal({
  open,
  onClose,
  onApply,
  initialBudget,
  initialClass,
}: Props) {
  const [budget, setBudget] = useState<string>(initialBudget ? String(initialBudget) : "");
  const [klass, setKlass] = useState<string | null>(initialClass ?? null);
  const { text, done } = useTypewriter(INTRO, 26, 350);

  useEffect(() => {
    if (open) {
      setBudget(initialBudget ? String(initialBudget) : "");
      setKlass(initialClass ?? null);
    }
  }, [open, initialBudget, initialClass]);

  const counts = getClassCounts(ACCOUNTS);

  const apply = () => {
    const b = budget.trim() ? parseInt(budget.replace(/\D/g, ""), 10) : null;
    onApply(Number.isFinite(b) ? b : null, klass);
    onClose();
  };

  const skip = () => {
    onApply(null, null);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[110] flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-background/70 glass-panel" />
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 24 }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-lg rounded-2xl bg-card border border-border shadow-[0_30px_80px_-20px_hsla(33,100%,50%,0.35)] overflow-hidden"
          >
            {/* glow */}
            <div className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-accent/20 blur-3xl" />

            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-background/80 flex items-center justify-center text-foreground hover:bg-background transition-colors"
              aria-label="Fechar"
            >
              <X size={16} />
            </button>

            <div className="relative p-6 sm:p-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30">
                  <Sparkles size={18} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-muted-foreground">Assistente</p>
                  <h2 className="text-base font-semibold text-card-foreground">Encontre sua account ideal</h2>
                </div>
              </div>

              <p className="text-sm text-card-foreground leading-relaxed whitespace-pre-line min-h-[44px]">
                {text}
                {!done && <span className="inline-block w-[2px] h-4 align-middle bg-primary ml-0.5 animate-pulse" />}
              </p>

              {/* Budget */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-semibold text-card-foreground">
                  <Wallet size={14} className="text-primary" />
                  Seu orçamento (em CPs)
                </label>
                <div className="relative">
                  <input
                    inputMode="numeric"
                    type="number"
                    min={0}
                    placeholder="Ex: 120"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] font-bold text-muted-foreground">
                    K CPs
                  </span>
                </div>
                <p className="text-[11px] text-muted-foreground">
                  Digitar <strong className="text-card-foreground">120</strong> equivale a <strong className="text-primary">120k CPs</strong>. Deixe vazio para ignorar.
                </p>
              </div>

              {/* Class */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-semibold text-card-foreground">
                  <Swords size={14} className="text-primary" />
                  Classe preferida
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {CLASS_OPTIONS.map((cls) => {
                    const c = counts[cls] ?? 0;
                    const active = klass === cls;
                    return (
                      <button
                        key={cls}
                        onClick={() => setKlass(active ? null : cls)}
                        className={`text-[11px] font-medium px-2.5 py-1.5 rounded-full border transition-all ${
                          active
                            ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/30"
                            : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                        }`}
                      >
                        {cls} {c > 0 && <span className="opacity-70">({c})</span>}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 pt-2">
                <button
                  onClick={apply}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium text-sm hover:opacity-95 transition shadow-lg shadow-primary/30"
                >
                  Buscar accounts <ArrowRight size={14} />
                </button>
                <button
                  onClick={skip}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg border border-border text-card-foreground text-sm font-medium hover:bg-muted transition"
                >
                  Seguir para ver as accounts
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
