import { useState } from "react";
import { motion } from "framer-motion";
import { Gift, ArrowLeft, MessageCircle, Loader2, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

function sanitize(val: string): string {
  return val.replace(/[<>&"'/]/g, "").trim();
}

export default function Rewards() {
  const [accountId, setAccountId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
      <div className="min-h-screen bg-background/85 dark:bg-background/80 glass-panel">
        <div className="container max-w-3xl py-8 px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft size={16} /> Voltar à Loja
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-6">
              <Gift className="text-primary" size={28} />
              <h1 className="text-2xl font-bold text-foreground">Sistema de Recompensas</h1>
            </div>

            <p className="text-muted-foreground text-sm mb-6">
              Se você comprou recentemente, já pode ter recompensas disponíveis.
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
                {/* Dashboard sections - empty state */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h2 className="text-sm font-semibold text-card-foreground mb-3">Total Gasto (Mês Atual)</h2>
                  <p className="text-muted-foreground text-sm">Você ainda não possui registros.</p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h2 className="text-sm font-semibold text-card-foreground mb-3">Histórico de Transações</h2>
                  <div className="text-muted-foreground text-sm">
                    <p>Você ainda não possui registros.</p>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h2 className="text-sm font-semibold text-card-foreground mb-3">Recompensas Recebidas</h2>
                  <div className="text-muted-foreground text-sm">
                    <p>Você ainda não possui registros.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    disabled
                    className="flex-1 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium opacity-50 cursor-not-allowed"
                  >
                    Exportar PDF
                  </button>
                  <button
                    disabled
                    className="flex-1 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium opacity-50 cursor-not-allowed"
                  >
                    Exportar Excel
                  </button>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <p className="text-muted-foreground text-sm">
                    Não encontramos dados para essa conta no momento.
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Se tiver qualquer problema, entre em contato comigo:
                  </p>
                  <a
                    href={`https://wa.me/5575981382799?text=${encodeURIComponent("Olá, Diego. Gostaria de verificar minhas recompensas.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium"
                  >
                    <MessageCircle size={16} /> Falar no WhatsApp
                  </a>
                </div>

                <button onClick={() => { setSubmitted(false); setError(null); }} className="text-sm text-primary hover:underline">
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
