import { useState } from "react";
import { motion } from "framer-motion";
import { Gift, ArrowLeft, MessageCircle, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

interface RewardResult {
  type: "gold" | "cps";
  amount: string;
  chance: string;
}

const GOLD_TABLE: RewardResult[] = [
  { type: "gold", amount: "10KK Gold", chance: "65%" },
  { type: "gold", amount: "30KK Gold", chance: "30%" },
  { type: "gold", amount: "50KK Gold", chance: "20%" },
  { type: "gold", amount: "100KK Gold", chance: "10%" },
];

const CPS_TABLE: RewardResult[] = [
  { type: "cps", amount: "100 CPs", chance: "65%" },
  { type: "cps", amount: "250 CPs", chance: "30%" },
  { type: "cps", amount: "500 CPs", chance: "15%" },
  { type: "cps", amount: "1000 CPs", chance: "5%" },
];

export default function Rewards() {
  const [accountId, setAccountId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!accountId.trim() || !firstName.trim() || !lastName.trim()) return;
    setLoading(true);
    // Simulate — no real backend
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url('https://w0.peakpx.com/wallpaper/67/757/HD-wallpaper-video-game-conquer-online.jpg')`,
      }}
    >
      <div className="min-h-screen bg-background/85 dark:bg-background/80 glass-panel">
        <div className="container max-w-2xl py-8 px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft size={16} /> Voltar à Loja
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-6">
              <Gift className="text-primary" size={28} />
              <h1 className="text-2xl font-bold text-foreground">Sistema de Recompensas</h1>
            </div>

            <p className="text-muted-foreground text-sm mb-6">
              💎 Se você comprou recentemente, já pode ter recompensas disponíveis.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 bg-card border border-border rounded-xl p-6">
                <div>
                  <label className="text-sm font-medium text-card-foreground">ID da Conta</label>
                  <input
                    type="text"
                    value={accountId}
                    onChange={(e) => setAccountId(e.target.value)}
                    className="mt-1 w-full px-3 py-2 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Seu ID do jogo"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-sm font-medium text-card-foreground">Nome</label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="mt-1 w-full px-3 py-2 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-card-foreground">Sobrenome</label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="mt-1 w-full px-3 py-2 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {loading ? <><Loader2 size={16} className="animate-spin" /> Verificando...</> : "Verificar Recompensas"}
                </button>
              </form>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <p className="text-muted-foreground text-sm">
                    Não encontramos recompensas para esses dados no momento.
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">Dados aguardando fonte real — nenhum dado simulado.</p>
                  <a
                    href={`https://wa.me/5575981382799?text=${encodeURIComponent("Olá, Diego. Gostaria de verificar minhas recompensas.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium"
                  >
                    <MessageCircle size={16} /> Falar no WhatsApp
                  </a>
                </div>

                {/* Reward tables */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-card border border-border rounded-xl p-4">
                    <h3 className="font-semibold text-card-foreground text-sm mb-3">💰 Tabela Gold</h3>
                    {GOLD_TABLE.map((r) => (
                      <div key={r.amount} className="flex justify-between py-1.5 border-b border-border last:border-0 text-sm">
                        <span className="text-card-foreground">{r.amount}</span>
                        <span className="text-muted-foreground text-xs">{r.chance}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-card border border-border rounded-xl p-4">
                    <h3 className="font-semibold text-card-foreground text-sm mb-3">💎 Tabela CPs</h3>
                    {CPS_TABLE.map((r) => (
                      <div key={r.amount} className="flex justify-between py-1.5 border-b border-border last:border-0 text-sm">
                        <span className="text-card-foreground">{r.amount}</span>
                        <span className="text-muted-foreground text-xs">{r.chance}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button onClick={() => setSubmitted(false)} className="text-sm text-primary hover:underline">
                  ← Tentar novamente
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
