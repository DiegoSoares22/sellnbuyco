import { useState } from "react";
import { motion } from "framer-motion";
import { Gift, ArrowLeft, MessageCircle, Loader2, AlertCircle, TrendingUp, History, Sparkles, Dices } from "lucide-react";
import { Link } from "react-router-dom";

function sanitize(val: string): string {
  return val.replace(/[<>&"'/]/g, "").trim();
}

/* ── Mock data (visualização) ── */
const MOCK_TRANSACTIONS = [
  { id: "tx-001", date: "2026-03-28 14:32", amount: 85.00, method: "Pix" as const },
  { id: "tx-002", date: "2026-03-22 09:15", amount: 120.00, method: "Cartão" as const },
  { id: "tx-003", date: "2026-03-15 18:47", amount: 45.00, method: "Pix" as const },
  { id: "tx-004", date: "2026-03-10 11:03", amount: 200.00, method: "Pix" as const },
  { id: "tx-005", date: "2026-03-05 20:22", amount: 60.00, method: "Cartão" as const },
  { id: "tx-006", date: "2026-02-28 16:10", amount: 150.00, method: "Pix" as const },
];

const MOCK_REWARDS = [
  { id: "rw-001", type: "Gold" as const, value: "10kk", date: "2026-03-28 14:33" },
  { id: "rw-002", type: "CPs" as const, value: "250", date: "2026-03-22 09:16" },
  { id: "rw-003", type: "Gold" as const, value: "30kk", date: "2026-03-15 18:48" },
  { id: "rw-004", type: "CPs" as const, value: "100", date: "2026-03-10 11:04" },
  { id: "rw-005", type: "Gold" as const, value: "10kk", date: "2026-03-05 20:23" },
  { id: "rw-006", type: "CPs" as const, value: "500", date: "2026-02-28 16:11" },
];

const MOCK_ROULETTE_HISTORY = [
  { id: "rl-001", date: "2026-03-28 14:33", type: "Gold" as const, result: "10kk", animation: "won" },
  { id: "rl-002", date: "2026-03-22 09:16", type: "CPs" as const, result: "250", animation: "won" },
  { id: "rl-003", date: "2026-03-15 18:48", type: "Gold" as const, result: "30kk", animation: "won" },
];

const CURRENT_MONTH_TOTAL = 510.00; // R$ sum of March transactions

export default function Rewards() {
  const [accountId, setAccountId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "roulette">("overview");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const safeId = sanitize(accountId);
    const safeFn = sanitize(firstName);
    const safeLn = sanitize(lastName);

    if (!safeId || !safeFn || !safeLn) {
      setError("Preencha todos os campos corretamente.");
      return;
    }

    setLoading(true);
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
      <div className="min-h-screen bg-background/85 dark:bg-background/80">
        <div className="container max-w-4xl py-8 px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft size={16} /> Voltar à Loja
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-6">
              <Gift className="text-primary" size={28} />
              <h1 className="text-2xl font-bold text-foreground">Sistema de Recompensas</h1>
            </div>

            <p className="text-muted-foreground text-sm mb-6">
              Se voce comprou recentemente, ja pode ter recompensas disponiveis.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 bg-card border border-border rounded-xl p-6">
                <p className="text-xs text-muted-foreground mb-2">
                  Utilize o ID da conta que realizou compras conosco.
                </p>
                <div>
                  <label className="text-sm font-medium text-card-foreground">ID da Conta *</label>
                  <input
                    type="text"
                    value={accountId}
                    onChange={(e) => setAccountId(e.target.value)}
                    className="mt-1 w-full px-3 py-2 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="70006285222 (Seu ID utilizado para recebimento de gold e cps)"
                    required
                    maxLength={50}
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-sm font-medium text-card-foreground">Nome *</label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="mt-1 w-full px-3 py-2 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                      maxLength={50}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-card-foreground">Sobrenome *</label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="mt-1 w-full px-3 py-2 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                      maxLength={50}
                    />
                  </div>
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-destructive text-sm">
                    <AlertCircle size={14} />
                    {error}
                  </div>
                )}

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
                {/* Tab switcher */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === "overview" ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground hover:text-foreground"}`}
                  >
                    Visao Geral
                  </button>
                  <button
                    onClick={() => setActiveTab("roulette")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === "roulette" ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground hover:text-foreground"}`}
                  >
                    Historico de Roletas
                  </button>
                </div>

                {activeTab === "overview" ? (
                  <>
                    {/* Total Gasto */}
                    <div className="bg-card border border-border rounded-xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingUp size={18} className="text-primary" />
                        <h2 className="text-sm font-semibold text-card-foreground">Total Gasto (Mes Atual)</h2>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-foreground">R$ {CURRENT_MONTH_TOTAL.toFixed(2)}</span>
                        <span className="text-xs text-muted-foreground">marco 2026</span>
                      </div>
                      <div className="mt-3 h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "68%" }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className="h-full bg-primary rounded-full"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">68% do objetivo mensal (R$ 750,00)</p>
                    </div>

                    {/* Historico de Transacoes */}
                    <div className="bg-card border border-border rounded-xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <History size={18} className="text-primary" />
                        <h2 className="text-sm font-semibold text-card-foreground">Historico de Transacoes</h2>
                      </div>
                      {/* Desktop table */}
                      <div className="hidden sm:block overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-border text-left">
                              <th className="pb-2 text-muted-foreground font-medium">Data e Hora</th>
                              <th className="pb-2 text-muted-foreground font-medium">Valor</th>
                              <th className="pb-2 text-muted-foreground font-medium">Metodo</th>
                            </tr>
                          </thead>
                          <tbody>
                            {MOCK_TRANSACTIONS.map((tx) => (
                              <tr key={tx.id} className="border-b border-border/50 last:border-0">
                                <td className="py-3 text-card-foreground">{tx.date}</td>
                                <td className="py-3 text-card-foreground font-medium">R$ {tx.amount.toFixed(2)}</td>
                                <td className="py-3">
                                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${tx.method === "Pix" ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-blue-500/10 text-blue-600 dark:text-blue-400"}`}>
                                    {tx.method}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      {/* Mobile cards */}
                      <div className="sm:hidden space-y-3">
                        {MOCK_TRANSACTIONS.map((tx) => (
                          <div key={tx.id} className="bg-muted/50 rounded-lg p-3 space-y-1">
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-muted-foreground">{tx.date}</span>
                              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${tx.method === "Pix" ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-blue-500/10 text-blue-600 dark:text-blue-400"}`}>
                                {tx.method}
                              </span>
                            </div>
                            <p className="text-card-foreground font-semibold">R$ {tx.amount.toFixed(2)}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recompensas Recebidas */}
                    <div className="bg-card border border-border rounded-xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Sparkles size={18} className="text-primary" />
                        <h2 className="text-sm font-semibold text-card-foreground">Recompensas Recebidas</h2>
                      </div>
                      <div className="hidden sm:block overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-border text-left">
                              <th className="pb-2 text-muted-foreground font-medium">Tipo</th>
                              <th className="pb-2 text-muted-foreground font-medium">Valor</th>
                              <th className="pb-2 text-muted-foreground font-medium">Data</th>
                            </tr>
                          </thead>
                          <tbody>
                            {MOCK_REWARDS.map((rw) => (
                              <tr key={rw.id} className="border-b border-border/50 last:border-0">
                                <td className="py-3">
                                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${rw.type === "Gold" ? "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400" : "bg-purple-500/10 text-purple-600 dark:text-purple-400"}`}>
                                    {rw.type}
                                  </span>
                                </td>
                                <td className="py-3 text-card-foreground font-medium">{rw.value}</td>
                                <td className="py-3 text-muted-foreground">{rw.date}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="sm:hidden space-y-3">
                        {MOCK_REWARDS.map((rw) => (
                          <div key={rw.id} className="bg-muted/50 rounded-lg p-3 space-y-1">
                            <div className="flex justify-between items-center">
                              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${rw.type === "Gold" ? "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400" : "bg-purple-500/10 text-purple-600 dark:text-purple-400"}`}>
                                {rw.type}
                              </span>
                              <span className="text-xs text-muted-foreground">{rw.date}</span>
                            </div>
                            <p className="text-card-foreground font-semibold">{rw.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Export */}
                    <div className="flex gap-3">
                      <button className="flex-1 py-2.5 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium hover:opacity-80 transition-opacity">
                        Exportar PDF
                      </button>
                      <button className="flex-1 py-2.5 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium hover:opacity-80 transition-opacity">
                        Exportar Excel
                      </button>
                    </div>
                  </>
                ) : (
                  /* Roulette History Tab */
                  <div className="space-y-4">
                    <div className="bg-card border border-border rounded-xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Dices size={18} className="text-primary" />
                        <h2 className="text-sm font-semibold text-card-foreground">Resultados das Roletas</h2>
                      </div>
                      <p className="text-xs text-muted-foreground mb-4">
                        Cada compra qualificada gera automaticamente um giro na roleta de recompensas.
                      </p>
                      <div className="space-y-3">
                        {MOCK_ROULETTE_HISTORY.map((rl) => (
                          <motion.div
                            key={rl.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-4 bg-muted/50 rounded-lg p-4"
                          >
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${rl.type === "Gold" ? "bg-yellow-500/15" : "bg-purple-500/15"}`}>
                              <Dices size={18} className={rl.type === "Gold" ? "text-yellow-500" : "text-purple-500"} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${rl.type === "Gold" ? "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400" : "bg-purple-500/10 text-purple-600 dark:text-purple-400"}`}>
                                  {rl.type}
                                </span>
                                <span className="text-card-foreground font-semibold text-sm">{rl.result}</span>
                              </div>
                              <p className="text-xs text-muted-foreground mt-1">{rl.date}</p>
                            </div>
                            <span className="text-xs text-emerald-500 font-medium shrink-0">Ganhou</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-card border border-border rounded-xl p-6 text-center">
                      <p className="text-muted-foreground text-sm">
                        As recompensas sao geradas automaticamente apos cada compra qualificada. Os resultados sao processados no servidor.
                      </p>
                    </div>
                  </div>
                )}

                {/* Contact */}
                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <p className="text-muted-foreground text-sm">
                    Precisa de ajuda ou encontrou algum problema?
                  </p>
                  <a
                    href={`https://wa.me/5575981382799?text=${encodeURIComponent("Olá, Diego. Gostaria de verificar minhas recompensas.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    <MessageCircle size={16} /> Falar no WhatsApp
                  </a>
                </div>

                <button onClick={() => { setSubmitted(false); setActiveTab("overview"); setError(null); }} className="text-sm text-primary hover:underline">
                  Tentar novamente
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}