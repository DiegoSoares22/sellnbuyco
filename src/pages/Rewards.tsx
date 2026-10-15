import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, ArrowLeft, MessageCircle, Loader2, AlertCircle, TrendingUp, History, Sparkles, Dices, FileText, Table } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Footer } from "@/components/Footer";
import { buildWa } from "@/lib/whatsapp";

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
      setError("Preencha o ID da conta, o nome e o sobrenome.");
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
      setError("Não encontramos esse ID. Confira o número e tente de novo, ou fale com a gente no WhatsApp.");
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

  const cardClass = "rounded-md bg-surface-card p-lg sm:p-xl";
  const methodPill = (method: string) =>
    `inline-flex items-center rounded-full px-2.5 py-0.5 text-caption-sm ${
      method === "Pix" ? "bg-primary text-on-primary" : "border border-ash-light text-ink"
    }`;

  return (
    <div>
      {/* Faixa escura: título */}
      <section className="band-dark">
        <div className="page-container band-y">
          <Link to="/" className="link-dark inline-flex items-center gap-1 text-caption-md no-underline hover:underline">
            <ArrowLeft size={14} aria-hidden="true" /> Voltar à loja
          </Link>
          <div className="mt-lg flex items-center gap-sm">
            <Gift size={32} aria-hidden="true" className="text-link-dark" />
            <h1 className="text-display-lg text-on-dark">Recompensas</h1>
          </div>
          <p className="mt-md max-w-[46ch] text-body-md text-body-dark">
            Se você comprou recentemente, já pode ter recompensas disponíveis.
          </p>
        </div>
      </section>

      {/* Faixa clara: consulta e resultados */}
      <section className="band-light">
        <div className="page-container band-y">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-3xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className={`${cardClass} space-y-lg`} noValidate>
                <div>
                  <h2 className="text-heading-lg text-ink">Consultar recompensas</h2>
                  <p className="mt-1 text-body-sm text-body-light">Use o ID da conta que fez compras com a gente.</p>
                </div>
                <div className="space-y-1">
                  <label htmlFor="rw-account-id" className="text-caption-md text-ink">
                    ID da conta
                  </label>
                  <input
                    id="rw-account-id"
                    name="account-id"
                    type="text"
                    inputMode="numeric"
                    autoComplete="off"
                    spellCheck={false}
                    value={accountId}
                    onChange={(e) => setAccountId(e.target.value)}
                    className="text-input"
                    placeholder="Ex.: 70006285222…"
                    aria-describedby="rw-account-id-hint"
                    required
                    maxLength={50}
                  />
                  <p id="rw-account-id-hint" className="text-caption-md text-mute-light">
                    O mesmo ID usado para receber gold e CPs.
                  </p>
                </div>
                <div className="grid gap-sm sm:grid-cols-2">
                  <div className="space-y-1">
                    <label htmlFor="rw-first-name" className="text-caption-md text-ink">
                      Nome
                    </label>
                    <input
                      id="rw-first-name"
                      name="given-name"
                      type="text"
                      autoComplete="given-name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="text-input"
                      required
                      maxLength={50}
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="rw-last-name" className="text-caption-md text-ink">
                      Sobrenome
                    </label>
                    <input
                      id="rw-last-name"
                      name="family-name"
                      type="text"
                      autoComplete="family-name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="text-input"
                      required
                      maxLength={50}
                    />
                  </div>
                </div>

                <div aria-live="polite">
                  {error && (
                    <p role="alert" className="flex items-center gap-xs text-caption-md text-warning">
                      <AlertCircle size={16} aria-hidden="true" />
                      {error}
                    </p>
                  )}
                </div>

                <button type="submit" disabled={loading} className="btn btn-primary w-full">
                  {loading ? (
                    <>
                      <Loader2 size={16} aria-hidden="true" className="animate-spin" /> Verificando…
                    </>
                  ) : (
                    "Verificar recompensas"
                  )}
                </button>
              </form>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-lg">
                {/* Abas */}
                <div className="flex flex-wrap gap-xs" role="group" aria-label="Seções">
                  <button type="button" onClick={() => setActiveTab("overview")} aria-pressed={activeTab === "overview"} className="filter-pill">
                    Visão geral
                  </button>
                  <button type="button" onClick={() => setActiveTab("roulette")} aria-pressed={activeTab === "roulette"} className="filter-pill">
                    Roleta de recompensas
                  </button>
                </div>

                {activeTab === "overview" ? (
                  <>
                    {/* Progresso */}
                    <div className={cardClass}>
                      <h2 className="flex items-center gap-xs text-heading-md text-ink">
                        <TrendingUp size={18} aria-hidden="true" className="text-primary" />
                        Progresso para a roleta
                      </h2>
                      <div className="mt-md flex flex-wrap items-baseline gap-x-sm">
                        <span className="tabular text-price-lg text-ink">{totalCps.toLocaleString("pt-BR")} CPs</span>
                        <span className="tabular text-caption-md text-mute-light">de {CPS_GOAL.toLocaleString("pt-BR")} CPs</span>
                      </div>
                      <div
                        className="mt-sm h-2 overflow-hidden rounded-full bg-surface-soft"
                        role="progressbar"
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuenow={cpsPercent}
                        aria-label="Progresso para desbloquear a roleta"
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${cpsPercent}%` }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className="h-full rounded-full bg-primary"
                        />
                      </div>
                      <p className="mt-xs text-caption-md text-mute-light">
                        {cpsPercent}% concluído
                        {!rouletteUnlocked && `, faltam ${(CPS_GOAL - totalCps).toLocaleString("pt-BR")} CPs para desbloquear a roleta`}
                      </p>
                    </div>

                    {/* Filtro de mês */}
                    <div className="flex flex-wrap items-center gap-sm">
                      <label htmlFor="rw-month" className="text-caption-md text-body-light">
                        Mês
                      </label>
                      <select
                        id="rw-month"
                        name="mes"
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth(e.target.value)}
                        className="h-10 rounded-full border border-ash-light bg-canvas-light px-md text-button-md text-ink hover:border-ink"
                      >
                        {availableMonths.map((m) => (
                          <option key={m.value} value={m.value}>
                            {m.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Transações */}
                    <div className={cardClass}>
                      <h2 className="flex items-center gap-xs text-heading-md text-ink">
                        <History size={18} aria-hidden="true" className="text-primary" />
                        Histórico de transações
                      </h2>
                      {filteredTransactions.length === 0 ? (
                        <p className="py-lg text-center text-body-sm text-mute-light">Nenhuma compra encontrada neste mês.</p>
                      ) : (
                        <>
                          <div className="mt-md hidden overflow-x-auto sm:block">
                            <table className="w-full text-left text-body-sm">
                              <thead>
                                <tr className="border-b border-hairline-light text-caption-md text-mute-light">
                                  <th scope="col" className="pb-xs font-medium">Data e hora</th>
                                  <th scope="col" className="pb-xs font-medium">Valor (CPs)</th>
                                  <th scope="col" className="pb-xs font-medium">Método</th>
                                </tr>
                              </thead>
                              <tbody>
                                {filteredTransactions.map((tx) => (
                                  <tr key={tx.id} className="border-b border-hairline-light last:border-0">
                                    <td className="tabular py-sm text-body-light">{new Date(tx.created_at).toLocaleString("pt-BR")}</td>
                                    <td className="tabular py-sm font-semibold text-ink">{tx.amount_cps.toLocaleString("pt-BR")}</td>
                                    <td className="py-sm">
                                      <span className={methodPill(tx.method)}>{tx.method}</span>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                          <ul className="mt-md space-y-xs sm:hidden">
                            {filteredTransactions.map((tx) => (
                              <li key={tx.id} className="space-y-1 rounded-md bg-canvas-light p-sm">
                                <div className="flex items-center justify-between gap-sm">
                                  <span className="tabular text-caption-md text-mute-light">{new Date(tx.created_at).toLocaleString("pt-BR")}</span>
                                  <span className={methodPill(tx.method)}>{tx.method}</span>
                                </div>
                                <p className="tabular font-semibold text-ink">{tx.amount_cps.toLocaleString("pt-BR")} CPs</p>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>

                    {/* Recompensas */}
                    <div className={cardClass}>
                      <h2 className="flex items-center gap-xs text-heading-md text-ink">
                        <Sparkles size={18} aria-hidden="true" className="text-primary" />
                        Recompensas recebidas
                      </h2>
                      {rewards.length === 0 ? (
                        <p className="py-lg text-center text-body-sm text-mute-light">Você ainda não tem registros.</p>
                      ) : (
                        <ul className="mt-md">
                          {rewards.map((rw) => (
                            <li key={rw.id} className="flex flex-wrap items-center justify-between gap-sm border-b border-hairline-light py-sm last:border-0">
                              <div className="flex items-center gap-xs">
                                <span className="badge-info">{rw.reward_type}</span>
                                <span className="text-body-sm font-semibold text-ink">{rw.value}</span>
                              </div>
                              <span className="tabular text-caption-md text-mute-light">{new Date(rw.created_at).toLocaleString("pt-BR")}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Exportar */}
                    <div className="flex flex-col gap-sm sm:flex-row">
                      <button type="button" onClick={() => handleExport("pdf")} className="btn btn-secondary-light flex-1">
                        <FileText size={16} aria-hidden="true" /> Exportar PDF
                      </button>
                      <button type="button" onClick={() => handleExport("excel")} className="btn btn-secondary-light flex-1">
                        <Table size={16} aria-hidden="true" /> Exportar Excel
                      </button>
                    </div>
                  </>
                ) : (
                  <div className={`${cardClass} space-y-lg`}>
                    <h2 className="flex items-center gap-xs text-heading-md text-ink">
                      <Dices size={18} aria-hidden="true" className="text-primary" />
                      Roleta de recompensas
                    </h2>

                    {!rouletteUnlocked ? (
                      <div className="space-y-sm py-lg text-center">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-surface-soft">
                          <Dices size={28} aria-hidden="true" className="text-mute-light" />
                        </div>
                        <p className="text-body-sm text-body-light">
                          Roleta bloqueada. Atinja {CPS_GOAL.toLocaleString("pt-BR")} CPs para desbloquear.
                        </p>
                        <div className="mx-auto h-2 max-w-xs overflow-hidden rounded-full bg-surface-soft">
                          <div className="h-full rounded-full bg-primary" style={{ width: `${cpsPercent}%` }} />
                        </div>
                        <p className="text-caption-md text-mute-light">{cpsPercent}% concluído</p>
                      </div>
                    ) : (
                      <>
                        <div className="flex flex-wrap gap-xs" role="group" aria-label="Tipo de roleta">
                          <button
                            type="button"
                            onClick={() => {
                              setRouletteType("silver");
                              setRouletteResult(null);
                            }}
                            aria-pressed={rouletteType === "silver"}
                            className="filter-pill"
                          >
                            Roleta Silver
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setRouletteType("cps");
                              setRouletteResult(null);
                            }}
                            aria-pressed={rouletteType === "cps"}
                            className="filter-pill"
                          >
                            Roleta CPs
                          </button>
                        </div>

                        <ul className="grid grid-cols-2 gap-xs sm:grid-cols-4">
                          {(rouletteType === "silver" ? SILVER_OPTIONS : CPS_OPTIONS).map((opt, i) => (
                            <li
                              key={i}
                              className={`rounded-md border px-xs py-sm text-center transition-[border-color,background-color,transform] ${
                                rouletteResult === opt.label
                                  ? "scale-105 border-primary bg-canvas-light"
                                  : "border-hairline-light bg-canvas-light"
                              }`}
                            >
                              <p className="text-caption-md font-semibold text-ink">{opt.label}</p>
                            </li>
                          ))}
                        </ul>

                        <button type="button" onClick={handleSpin} disabled={spinning} className="btn btn-primary w-full">
                          <Dices size={16} aria-hidden="true" className={spinning ? "animate-spin" : ""} />
                          {spinning ? "Girando…" : "Girar roleta"}
                        </button>

                        <div aria-live="polite">
                          <AnimatePresence>
                            {rouletteResult && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                className="rounded-md bg-canvas-light py-lg text-center"
                              >
                                <p className="text-caption-md text-mute-light">Você ganhou</p>
                                <p className="mt-1 text-heading-xl text-ink">{rouletteResult}</p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* Contato */}
                <div className={`${cardClass} text-center`}>
                  <p className="text-body-sm text-body-light">Precisa de ajuda ou encontrou algum problema?</p>
                  <a
                    href={buildWa("Olá, Diego. Gostaria de verificar minhas recompensas.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary-light mt-md"
                  >
                    <MessageCircle size={16} aria-hidden="true" /> Falar no WhatsApp
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setActiveTab("overview");
                    setError(null);
                  }}
                  className="link-light text-caption-md"
                >
                  Consultar outro ID
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Confirmação de exportação (dialog-card) */}
      <DialogPrimitive.Root open={showExportConfirm !== null} onOpenChange={(open) => !open && setShowExportConfirm(null)}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-canvas-dark/80 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
          <DialogPrimitive.Content className="band-light fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 -translate-y-1/2 space-y-md rounded-lg p-lg shadow-[0_24px_64px_rgba(0,0,0,0.35)] outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95">
            <DialogPrimitive.Title className="text-heading-lg text-ink">Confirmar exportação</DialogPrimitive.Title>
            <DialogPrimitive.Description className="text-body-sm text-body-light">
              Exportar o histórico de transações do mês selecionado em {showExportConfirm === "pdf" ? "PDF" : "Excel"}?
            </DialogPrimitive.Description>
            <div className="flex gap-sm">
              <DialogPrimitive.Close className="btn btn-md btn-secondary-light flex-1">Cancelar</DialogPrimitive.Close>
              <button type="button" onClick={confirmExport} className="btn btn-md btn-primary flex-1">
                Exportar {showExportConfirm === "pdf" ? "PDF" : "Excel"}
              </button>
            </div>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>

      <Footer />
    </div>
  );
}
