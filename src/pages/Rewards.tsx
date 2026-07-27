import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, ArrowLeft, MessageCircle, Loader2, AlertCircle, TrendingUp, History, Sparkles, Dices, FileText, Table } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Footer } from "@/components/Footer";

function sanitize(val: string): string {
  return val.replace(/[<>&"'/]/g, "").trim();
}

const CPS_GOAL = 40000;

const SILVER_OPTIONS = [
  { label: "20kk Silver", weight: 60 },
  { label: "50kk Silver", weight: 45 },
  { label: "100kk Silver", weight: 10 },
  { label: "150kk Silver", weight: 3 },
];

const CPS_OPTIONS = [
  { label: "100 CPs", weight: 60 },
  { label: "300 CPs", weight: 30 },
  { label: "600 CPs", weight: 10 },
  { label: "1000 CPs", weight: 5 },
];

function weightedPick(options: { label: string; weight: number }[]): string {
  const totalWeight = options.reduce((s, o) => s + o.weight, 0);
  let rand = Math.random() * totalWeight;
  for (const opt of options) {
    rand -= opt.weight;
    if (rand <= 0) return opt.label;
  }
  return options[options.length - 1].label;
}

function getAvailableMonths() {
  const months = [];
  const now = new Date();
  const start = new Date(2026, 3, 1); // April 2026
  let cur = new Date(start);
  while (cur <= now) {
    const y = cur.getFullYear();
    const m = String(cur.getMonth() + 1).padStart(2, "0");
    months.push({ value: `${y}-${m}`, label: `${m}/${y}` });
    cur.setMonth(cur.getMonth() + 1);
  }
  if (months.length === 0) {
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, "0");
    months.push({ value: `${y}-${m}`, label: `${m}/${y}` });
  }
  return months;
}

async function exportPDF(
  transactions: { created_at: string; amount_cps: number; method: string }[],
  rewards: { reward_type: string; value: string; created_at: string }[]
) {
  const { default: jsPDF } = await import("jspdf");
  await import("jspdf-autotable");
  const doc = new jsPDF();
  doc.setFontSize(16);
  doc.text("Relatorio de Transacoes", 14, 20);
  doc.setFontSize(10);
  doc.text(`Data: ${new Date().toLocaleDateString("pt-BR")}`, 14, 28);

  (doc as any).autoTable({
    startY: 36,
    head: [["Data", "Valor (CPs)", "Metodo"]],
    body: transactions.map((t) => [
      new Date(t.created_at).toLocaleString("pt-BR"),
      t.amount_cps.toLocaleString("pt-BR"),
      t.method,
    ]),
    theme: "grid",
    headStyles: { fillColor: [255, 140, 0] },
  });

  doc.save("transacoes-relatorio.pdf");
}

async function exportExcel(
  transactions: { created_at: string; amount_cps: number; method: string }[]
) {
  const XLSX = await import("xlsx");
  const wb = XLSX.utils.book_new();
  const data = transactions.map((t) => ({
    Data: new Date(t.created_at).toLocaleString("pt-BR"),
    "Valor (CPs)": t.amount_cps,
    Metodo: t.method,
  }));
  const ws = XLSX.utils.json_to_sheet(data);
  XLSX.utils.book_append_sheet(wb, ws, "Transacoes");
  XLSX.writeFile(wb, "transacoes-dados.xlsx");
}

type Transaction = { id: string; created_at: string; amount_cps: number; method: string; month: string };
type Reward = { id: string; created_at: string; reward_type: string; value: string };

export default function Rewards() {
  const [accountId, setAccountId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "roulette">("overview");

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [rewards, setRewards] = useState<Reward[]>([]);
  const [selectedMonth, setSelectedMonth] = useState(() => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
  });

  const [rouletteType, setRouletteType] = useState<"silver" | "cps">("silver");
  const [spinning, setSpinning] = useState(false);
  const [rouletteResult, setRouletteResult] = useState<string | null>(null);
  const [showExportConfirm, setShowExportConfirm] = useState<"pdf" | "excel" | null>(null);

  const availableMonths = useMemo(() => getAvailableMonths(), []);

  const filteredTransactions = useMemo(
    () => transactions.filter((t) => t.month === selectedMonth),
    [transactions, selectedMonth]
  );

  const totalCps = useMemo(
    () => transactions.reduce((sum, t) => sum + t.amount_cps, 0),
    [transactions]
  );
  const cpsPercent = Math.min(Math.round((totalCps / CPS_GOAL) * 100), 100);
  const rouletteUnlocked = totalCps >= CPS_GOAL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const safeId = sanitize(accountId);
    const safeName = sanitize(`${firstName} ${lastName}`);
    if (!safeId || !safeName.trim()) {
      setError("Preencha todos os campos corretamente.");
      return;
    }
    setLoading(true);

    const { data: user } = await supabase
      .from("users_rewards")
      .select("*")
      .eq("account_id", safeId)
      .maybeSingle();

    if (!user) {
      setLoading(false);
      setError("Dados nao encontrados. Verifique as informacoes inseridas.");
      return;
    }

    const [txRes, rwRes] = await Promise.all([
      supabase.from("transactions").select("*").eq("account_id", safeId).order("created_at", { ascending: false }),
      supabase.from("rewards").select("*").eq("account_id", safeId).order("created_at", { ascending: false }),
    ]);

    setTransactions((txRes.data || []) as Transaction[]);
    setRewards((rwRes.data || []) as Reward[]);
    setLoading(false);
    setSubmitted(true);
  };

  const handleSpin = () => {
    if (spinning || !rouletteUnlocked) return;
    setSpinning(true);
    setRouletteResult(null);
    setTimeout(() => {
      const result = weightedPick(rouletteType === "silver" ? SILVER_OPTIONS : CPS_OPTIONS);
      setRouletteResult(result);
      setSpinning(false);
    }, 2500);
  };

  const handleExport = (type: "pdf" | "excel") => {
    setShowExportConfirm(type);
  };

  const confirmExport = () => {
    if (showExportConfirm === "pdf") {
      exportPDF(filteredTransactions, rewards);
    } else {
      exportExcel(filteredTransactions);
    }
    setShowExportConfirm(null);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url('https://w0.peakpx.com/wallpaper/67/757/HD-wallpaper-video-game-conquer-online.jpg')` }}
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
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}
                      className="mt-1 w-full px-3 py-2 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required maxLength={50} />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-card-foreground">Sobrenome *</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}
                      className="mt-1 w-full px-3 py-2 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required maxLength={50} />
                  </div>
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-destructive text-sm">
                    <AlertCircle size={14} />
                    {error}
                  </div>
                )}

                <button type="submit" disabled={loading}
                  className="w-full py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50">
                  {loading ? <><Loader2 size={16} className="animate-spin" /> Verificando...</> : "Verificar Recompensas"}
                </button>
              </form>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                {/* Tabs */}
                <div className="flex gap-2">
                  <button onClick={() => setActiveTab("overview")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === "overview" ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground hover:text-foreground"}`}>
                    Visao Geral
                  </button>
                  <button onClick={() => setActiveTab("roulette")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === "roulette" ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground hover:text-foreground"}`}>
                    Roleta de Recompensas
                  </button>
                </div>

                {activeTab === "overview" ? (
                  <>
                    {/* Progress */}
                    <div className="bg-card border border-border rounded-xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingUp size={18} className="text-primary" />
                        <h2 className="text-sm font-semibold text-card-foreground">Progresso para Roleta</h2>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-foreground">{totalCps.toLocaleString("pt-BR")} CPs</span>
                        <span className="text-xs text-muted-foreground">de {CPS_GOAL.toLocaleString("pt-BR")} CPs</span>
                      </div>
                      <div className="mt-3 h-3 bg-muted rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={{ width: `${cpsPercent}%` }} transition={{ duration: 1, delay: 0.3 }} className="h-full bg-primary rounded-full" />
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        {cpsPercent}% concluido{!rouletteUnlocked && `, faltam ${(CPS_GOAL - totalCps).toLocaleString("pt-BR")} CPs para desbloquear a roleta`}
                      </p>
                    </div>

                    {/* Month Filter */}
                    <div className="flex items-center gap-3">
                      <label className="text-sm text-muted-foreground">Filtrar por mes:</label>
                      <select
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth(e.target.value)}
                        className="px-3 py-1.5 rounded-lg bg-card border border-border text-foreground text-sm"
                      >
                        {availableMonths.map((m) => (
                          <option key={m.value} value={m.value}>{m.label}</option>
                        ))}
                      </select>
                    </div>

                    {/* Transactions */}
                    <div className="bg-card border border-border rounded-xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <History size={18} className="text-primary" />
                        <h2 className="text-sm font-semibold text-card-foreground">Historico de Transacoes</h2>
                      </div>
                      {filteredTransactions.length === 0 ? (
                        <p className="text-sm text-muted-foreground text-center py-6">Nenhuma compra encontrada para este mes</p>
                      ) : (
                        <>
                          <div className="hidden sm:block overflow-x-auto">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="border-b border-border text-left">
                                  <th className="pb-2 text-muted-foreground font-medium">Data e Hora</th>
                                  <th className="pb-2 text-muted-foreground font-medium">Valor (CPs)</th>
                                  <th className="pb-2 text-muted-foreground font-medium">Metodo</th>
                                </tr>
                              </thead>
                              <tbody>
                                {filteredTransactions.map((tx) => (
                                  <tr key={tx.id} className="border-b border-border/50 last:border-0">
                                    <td className="py-3 text-card-foreground">{new Date(tx.created_at).toLocaleString("pt-BR")}</td>
                                    <td className="py-3 text-card-foreground font-medium">{tx.amount_cps.toLocaleString("pt-BR")}</td>
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
                          <div className="sm:hidden space-y-3">
                            {filteredTransactions.map((tx) => (
                              <div key={tx.id} className="bg-muted/50 rounded-lg p-3 space-y-1">
                                <div className="flex justify-between items-center">
                                  <span className="text-xs text-muted-foreground">{new Date(tx.created_at).toLocaleString("pt-BR")}</span>
                                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${tx.method === "Pix" ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-blue-500/10 text-blue-600 dark:text-blue-400"}`}>
                                    {tx.method}
                                  </span>
                                </div>
                                <p className="text-card-foreground font-semibold">{tx.amount_cps.toLocaleString("pt-BR")} CPs</p>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Rewards */}
                    <div className="bg-card border border-border rounded-xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Sparkles size={18} className="text-primary" />
                        <h2 className="text-sm font-semibold text-card-foreground">Recompensas Recebidas</h2>
                      </div>
                      {rewards.length === 0 ? (
                        <p className="text-sm text-muted-foreground text-center py-6">Voce ainda nao possui registros.</p>
                      ) : (
                        <div className="space-y-3">
                          {rewards.map((rw) => (
                            <div key={rw.id} className="flex items-center justify-between bg-muted/50 rounded-lg p-3">
                              <div className="flex items-center gap-2">
                                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${rw.reward_type === "Gold" ? "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400" : "bg-purple-500/10 text-purple-600 dark:text-purple-400"}`}>
                                  {rw.reward_type}
                                </span>
                                <span className="text-card-foreground font-medium text-sm">{rw.value}</span>
                              </div>
                              <span className="text-xs text-muted-foreground">{new Date(rw.created_at).toLocaleString("pt-BR")}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Export */}
                    <div className="flex gap-3">
                      <button onClick={() => handleExport("pdf")}
                        className="flex-1 py-2.5 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium hover:opacity-80 transition-opacity flex items-center justify-center gap-2">
                        <FileText size={14} /> Exportar PDF
                      </button>
                      <button onClick={() => handleExport("excel")}
                        className="flex-1 py-2.5 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium hover:opacity-80 transition-opacity flex items-center justify-center gap-2">
                        <Table size={14} /> Exportar Excel
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="space-y-6">
                    <div className="bg-card border border-border rounded-xl p-6 space-y-5">
                      <div className="flex items-center gap-2 mb-2">
                        <Dices size={18} className="text-primary" />
                        <h2 className="text-sm font-semibold text-card-foreground">Roleta de Recompensas</h2>
                      </div>

                      {!rouletteUnlocked ? (
                        <div className="text-center py-8 space-y-3">
                          <div className="w-16 h-16 mx-auto rounded-full bg-muted flex items-center justify-center">
                            <Dices size={28} className="text-muted-foreground" />
                          </div>
                          <p className="text-muted-foreground text-sm">
                            Roleta bloqueada. Voce precisa atingir {CPS_GOAL.toLocaleString("pt-BR")} CPs para desbloquear.
                          </p>
                          <div className="h-2 bg-muted rounded-full overflow-hidden max-w-xs mx-auto">
                            <div className="h-full bg-primary rounded-full" style={{ width: `${cpsPercent}%` }} />
                          </div>
                          <p className="text-xs text-muted-foreground">{cpsPercent}% concluido</p>
                        </div>
                      ) : (
                        <>
                          <div className="flex gap-3">
                            <button onClick={() => { setRouletteType("silver"); setRouletteResult(null); }}
                              className={`flex-1 py-3 rounded-lg text-sm font-medium transition-colors border ${rouletteType === "silver" ? "bg-yellow-500/10 border-yellow-500/30 text-yellow-600 dark:text-yellow-400" : "bg-card border-border text-muted-foreground"}`}>
                              Roleta Silver
                            </button>
                            <button onClick={() => { setRouletteType("cps"); setRouletteResult(null); }}
                              className={`flex-1 py-3 rounded-lg text-sm font-medium transition-colors border ${rouletteType === "cps" ? "bg-purple-500/10 border-purple-500/30 text-purple-600 dark:text-purple-400" : "bg-card border-border text-muted-foreground"}`}>
                              Roleta CPs
                            </button>
                          </div>

                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {(rouletteType === "silver" ? SILVER_OPTIONS : CPS_OPTIONS).map((opt, i) => (
                              <div key={i} className={`text-center py-3 px-2 rounded-lg border transition-all ${rouletteResult === opt.label ? "border-primary bg-primary/10 scale-105" : "border-border bg-muted/50"}`}>
                                <p className={`font-bold text-sm ${rouletteType === "silver" ? "text-yellow-500" : "text-purple-500"}`}>{opt.label}</p>
                              </div>
                            ))}
                          </div>

                          <button onClick={handleSpin} disabled={spinning}
                            className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50">
                            {spinning ? <><Dices size={16} className="animate-spin" /> Girando...</> : <><Dices size={16} /> Girar Roleta</>}
                          </button>

                          <AnimatePresence>
                            {rouletteResult && (
                              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                                className="text-center py-6 bg-primary/5 border border-primary/20 rounded-xl">
                                <p className="text-xs text-muted-foreground mb-1">Voce ganhou</p>
                                <p className={`text-2xl font-bold ${rouletteType === "silver" ? "text-yellow-500" : "text-purple-500"}`}>{rouletteResult}</p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      )}
                    </div>
                  </div>
                )}

                {/* Contact */}
                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <p className="text-muted-foreground text-sm">Precisa de ajuda ou encontrou algum problema?</p>
                  <a href={`https://wa.me/5575981382799?text=${encodeURIComponent("Olá, Diego. Gostaria de verificar minhas recompensas.")}`}
                    target="_blank" rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
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

      {/* Export Confirmation Modal */}
      <AnimatePresence>
        {showExportConfirm && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
            onClick={() => setShowExportConfirm(null)}>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              className="bg-card border border-border rounded-xl p-6 max-w-sm w-full space-y-4"
              onClick={(e) => e.stopPropagation()}>
              <h3 className="text-sm font-semibold text-card-foreground">Confirmar exportacao</h3>
              <p className="text-sm text-muted-foreground">
                Deseja exportar o historico de transacoes do mes selecionado em formato {showExportConfirm === "pdf" ? "PDF" : "Excel"}?
              </p>
              <div className="flex gap-3">
                <button onClick={() => setShowExportConfirm(null)}
                  className="flex-1 py-2 rounded-lg border border-border text-sm text-muted-foreground hover:text-foreground">
                  Cancelar
                </button>
                <button onClick={confirmExport}
                  className="flex-1 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90">
                  Exportar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
