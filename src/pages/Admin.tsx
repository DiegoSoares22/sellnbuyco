import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, AlertCircle, Plus, Users, ShoppingBag, Dices, Save, Trash2 } from "lucide-react";

function sanitize(val: string): string {
  return val.replace(/[<>&"'/]/g, "").trim();
}

export default function Admin() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState(false);
  const [activeSection, setActiveSection] = useState<"rewards" | "marketplace" | "roulette">("rewards");

  // Rewards management
  const [newUserId, setNewUserId] = useState("");
  const [newUserName, setNewUserName] = useState("");
  const [newTxAmount, setNewTxAmount] = useState("");
  const [newTxMethod, setNewTxMethod] = useState("Pix");
  const [newRewardType, setNewRewardType] = useState("Gold");
  const [newRewardValue, setNewRewardValue] = useState("");

  // Marketplace
  const [accTitle, setAccTitle] = useState("");
  const [accPrice1, setAccPrice1] = useState("");
  const [accPrice2, setAccPrice2] = useState("");
  const [accHighlight, setAccHighlight] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: real auth should use server-side validation
    setError(true);
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-sm w-full bg-card border border-border rounded-xl p-6 space-y-4"
        >
          <div className="flex items-center gap-2 text-card-foreground">
            <Lock size={20} />
            <h1 className="text-lg font-bold">Acesso Restrito</h1>
          </div>

          <form onSubmit={handleLogin} className="space-y-3">
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false); }}
              placeholder="Senha de administrador"
              className="w-full px-3 py-2 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              required
            />
            {error && (
              <div className="flex items-center gap-2 text-destructive text-sm">
                <AlertCircle size={14} />
                Acesso negado.
              </div>
            )}
            <button
              type="submit"
              className="w-full py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Entrar
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-5xl py-8 px-4">
        <h1 className="text-2xl font-bold text-foreground mb-6">Painel Administrativo</h1>

        {/* Section Tabs */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {([
            { key: "rewards" as const, label: "Recompensas", icon: <Users size={14} /> },
            { key: "marketplace" as const, label: "Marketplace", icon: <ShoppingBag size={14} /> },
            { key: "roulette" as const, label: "Roleta", icon: <Dices size={14} /> },
          ]).map((s) => (
            <button
              key={s.key}
              onClick={() => setActiveSection(s.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors ${activeSection === s.key ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground hover:text-foreground"}`}
            >
              {s.icon} {s.label}
            </button>
          ))}
        </div>

        {activeSection === "rewards" && (
          <div className="space-y-6">
            {/* Add User */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-sm font-semibold text-card-foreground mb-4 flex items-center gap-2">
                <Plus size={16} /> Adicionar Usuario
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input value={newUserId} onChange={(e) => setNewUserId(e.target.value)} placeholder="ID da Conta"
                  className="px-3 py-2 rounded-lg bg-muted border border-border text-foreground text-sm" maxLength={50} />
                <input value={newUserName} onChange={(e) => setNewUserName(e.target.value)} placeholder="Nome completo"
                  className="px-3 py-2 rounded-lg bg-muted border border-border text-foreground text-sm" maxLength={100} />
              </div>
              <button className="mt-3 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium flex items-center gap-2 hover:opacity-90">
                <Save size={14} /> Salvar Usuario
              </button>
            </div>

            {/* Add Transaction */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-sm font-semibold text-card-foreground mb-4 flex items-center gap-2">
                <Plus size={16} /> Adicionar Transacao
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input value={newUserId} onChange={(e) => setNewUserId(e.target.value)} placeholder="ID da Conta"
                  className="px-3 py-2 rounded-lg bg-muted border border-border text-foreground text-sm" maxLength={50} />
                <input value={newTxAmount} onChange={(e) => setNewTxAmount(e.target.value)} placeholder="Valor CPs" type="number"
                  className="px-3 py-2 rounded-lg bg-muted border border-border text-foreground text-sm" />
                <select value={newTxMethod} onChange={(e) => setNewTxMethod(e.target.value)}
                  className="px-3 py-2 rounded-lg bg-muted border border-border text-foreground text-sm">
                  <option value="Pix">Pix</option>
                  <option value="Cartão">Cartao</option>
                </select>
              </div>
              <button className="mt-3 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium flex items-center gap-2 hover:opacity-90">
                <Save size={14} /> Registrar Transacao
              </button>
            </div>

            {/* Add Reward */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-sm font-semibold text-card-foreground mb-4 flex items-center gap-2">
                <Plus size={16} /> Adicionar Recompensa
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input value={newUserId} onChange={(e) => setNewUserId(e.target.value)} placeholder="ID da Conta"
                  className="px-3 py-2 rounded-lg bg-muted border border-border text-foreground text-sm" maxLength={50} />
                <select value={newRewardType} onChange={(e) => setNewRewardType(e.target.value)}
                  className="px-3 py-2 rounded-lg bg-muted border border-border text-foreground text-sm">
                  <option value="Gold">Gold (Silver)</option>
                  <option value="CPs">CPs</option>
                </select>
                <input value={newRewardValue} onChange={(e) => setNewRewardValue(e.target.value)} placeholder="Valor"
                  className="px-3 py-2 rounded-lg bg-muted border border-border text-foreground text-sm" maxLength={50} />
              </div>
              <button className="mt-3 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium flex items-center gap-2 hover:opacity-90">
                <Save size={14} /> Registrar Recompensa
              </button>
            </div>
          </div>
        )}

        {activeSection === "marketplace" && (
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-sm font-semibold text-card-foreground mb-4 flex items-center gap-2">
                <Plus size={16} /> Criar Anuncio
              </h2>
              <div className="space-y-3">
                <input value={accTitle} onChange={(e) => setAccTitle(e.target.value)} placeholder="Titulo do anuncio"
                  className="w-full px-3 py-2 rounded-lg bg-muted border border-border text-foreground text-sm" maxLength={200} />
                <textarea placeholder="Descricao completa"
                  className="w-full px-3 py-2 rounded-lg bg-muted border border-border text-foreground text-sm min-h-[100px] resize-y" maxLength={2000} />
                <div className="grid grid-cols-2 gap-3">
                  <input value={accPrice1} onChange={(e) => setAccPrice1(e.target.value)} placeholder="Preco 1 (ex: 315K CPS)"
                    className="px-3 py-2 rounded-lg bg-muted border border-border text-foreground text-sm" />
                  <input value={accPrice2} onChange={(e) => setAccPrice2(e.target.value)} placeholder="Preco 2 (opcional)"
                    className="px-3 py-2 rounded-lg bg-muted border border-border text-foreground text-sm" />
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="highlight" checked={accHighlight} onChange={(e) => setAccHighlight(e.target.checked)}
                    className="rounded" />
                  <label htmlFor="highlight" className="text-sm text-card-foreground">Destaque (badge HOT)</label>
                </div>
                <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium flex items-center gap-2 hover:opacity-90">
                  <Save size={14} /> Publicar Anuncio
                </button>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-4">
              <p className="text-sm text-muted-foreground text-center">
                Anuncios existentes aparecerão aqui apos conectar o banco de dados.
              </p>
            </div>
          </div>
        )}

        {activeSection === "roulette" && (
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-sm font-semibold text-card-foreground mb-4 flex items-center gap-2">
                <Dices size={16} /> Configuracao da Roleta
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xs font-medium text-muted-foreground mb-2">Roleta Silver</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {["20kk (60%)", "50kk (45%)", "100kk (10%)", "150kk (3%)"].map((v) => (
                      <div key={v} className="bg-muted rounded-lg px-3 py-2 text-center">
                        <p className="text-sm font-medium text-yellow-500">{v}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-medium text-muted-foreground mb-2">Roleta CPs</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {["100 (60%)", "300 (30%)", "600 (10%)", "1000 (5%)"].map((v) => (
                      <div key={v} className="bg-muted rounded-lg px-3 py-2 text-center">
                        <p className="text-sm font-medium text-purple-500">{v}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-muted-foreground">
                  As probabilidades serao configuráveis apos conectar o banco de dados. A logica de roleta deve ser processada exclusivamente no servidor.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
