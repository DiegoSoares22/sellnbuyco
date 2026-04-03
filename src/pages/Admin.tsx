import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, AlertCircle, Plus, Users, ShoppingBag, Dices, Save, Trash2, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

function sanitize(val: string): string {
  return val.replace(/[<>&"'/]/g, "").trim();
}

export default function Admin() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState(false);
  const [activeSection, setActiveSection] = useState<"rewards" | "marketplace" | "roulette">("rewards");
  const [saving, setSaving] = useState(false);

  // User form
  const [newAccountId, setNewAccountId] = useState("");
  const [newUserName, setNewUserName] = useState("");

  // Transaction form
  const [txAccountId, setTxAccountId] = useState("");
  const [txAmount, setTxAmount] = useState("");
  const [txMethod, setTxMethod] = useState("Pix");
  const [txMonth, setTxMonth] = useState(() => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
  });

  // Reward form
  const [rwAccountId, setRwAccountId] = useState("");
  const [rwType, setRwType] = useState("Gold");
  const [rwValue, setRwValue] = useState("");

  // Marketplace form
  const [accTitle, setAccTitle] = useState("");
  const [accDesc, setAccDesc] = useState("");
  const [accPrice1, setAccPrice1] = useState("");
  const [accPrice2, setAccPrice2] = useState("");
  const [accHighlight, setAccHighlight] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError(true);
  };

  const handleSaveUser = async () => {
    const id = sanitize(newAccountId);
    const name = sanitize(newUserName);
    if (!id || !name) return;
    setSaving(true);
    const { error } = await supabase.from("users_rewards").insert({ account_id: id, name });
    setSaving(false);
    if (error) { toast.error("Erro ao salvar usuario"); return; }
    toast.success("Usuario criado com sucesso");
    setNewAccountId(""); setNewUserName("");
  };

  const handleSaveTransaction = async () => {
    const id = sanitize(txAccountId);
    const amount = Number(txAmount);
    if (!id || !amount || amount <= 0) return;
    setSaving(true);
    const { error } = await supabase.from("transactions").insert({
      account_id: id,
      amount_cps: amount,
      method: txMethod,
      month: txMonth,
    });
    setSaving(false);
    if (error) { toast.error("Erro ao registrar transacao"); return; }
    toast.success("Transacao registrada");
    setTxAccountId(""); setTxAmount("");
  };

  const handleSaveReward = async () => {
    const id = sanitize(rwAccountId);
    const value = sanitize(rwValue);
    if (!id || !value) return;
    setSaving(true);
    const { error } = await supabase.from("rewards").insert({
      account_id: id,
      reward_type: rwType,
      value,
    });
    setSaving(false);
    if (error) { toast.error("Erro ao registrar recompensa"); return; }
    toast.success("Recompensa registrada");
    setRwAccountId(""); setRwValue("");
  };

  const handleSaveMarketplace = async () => {
    const titulo = sanitize(accTitle);
    if (!titulo) return;
    setSaving(true);
    const { error } = await supabase.from("accounts_marketplace").insert({
      titulo,
      descricao: accDesc || null,
      preco_1: accPrice1 || null,
      preco_2: accPrice2 || null,
      destaque: accHighlight,
    });
    setSaving(false);
    if (error) { toast.error("Erro ao publicar anuncio"); return; }
    toast.success("Anuncio publicado");
    setAccTitle(""); setAccDesc(""); setAccPrice1(""); setAccPrice2(""); setAccHighlight(false);
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="max-w-sm w-full bg-card border border-border rounded-xl p-6 space-y-4">
          <div className="flex items-center gap-2 text-card-foreground">
            <Lock size={20} />
            <h1 className="text-lg font-bold">Acesso Restrito</h1>
          </div>
          <form onSubmit={handleLogin} className="space-y-3">
            <input type="password" value={password} onChange={(e) => { setPassword(e.target.value); setError(false); }}
              placeholder="Senha de administrador"
              className="w-full px-3 py-2 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" required />
            {error && (
              <div className="flex items-center gap-2 text-destructive text-sm">
                <AlertCircle size={14} /> Acesso negado.
              </div>
            )}
            <button type="submit" className="w-full py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity">
              Entrar
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  const inputClass = "px-3 py-2 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50";

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-5xl py-8 px-4">
        <h1 className="text-2xl font-bold text-foreground mb-6">Painel Administrativo</h1>

        <div className="flex gap-2 mb-6 flex-wrap">
          {([
            { key: "rewards" as const, label: "Recompensas", icon: <Users size={14} /> },
            { key: "marketplace" as const, label: "Marketplace", icon: <ShoppingBag size={14} /> },
            { key: "roulette" as const, label: "Roleta", icon: <Dices size={14} /> },
          ]).map((s) => (
            <button key={s.key} onClick={() => setActiveSection(s.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors ${activeSection === s.key ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground hover:text-foreground"}`}>
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
                <input value={newAccountId} onChange={(e) => setNewAccountId(e.target.value)} placeholder="ID da Conta" className={inputClass} maxLength={50} />
                <input value={newUserName} onChange={(e) => setNewUserName(e.target.value)} placeholder="Nome completo" className={inputClass} maxLength={100} />
              </div>
              <button onClick={handleSaveUser} disabled={saving}
                className="mt-3 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium flex items-center gap-2 hover:opacity-90 disabled:opacity-50">
                {saving ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />} Salvar Usuario
              </button>
            </div>

            {/* Add Transaction */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-sm font-semibold text-card-foreground mb-4 flex items-center gap-2">
                <Plus size={16} /> Adicionar Transacao
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <input value={txAccountId} onChange={(e) => setTxAccountId(e.target.value)} placeholder="ID da Conta" className={inputClass} maxLength={50} />
                <input value={txAmount} onChange={(e) => setTxAmount(e.target.value)} placeholder="Valor CPs" type="number" className={inputClass} />
                <select value={txMethod} onChange={(e) => setTxMethod(e.target.value)} className={inputClass}>
                  <option value="Pix">Pix</option>
                  <option value="Cartão">Cartao</option>
                </select>
                <input value={txMonth} onChange={(e) => setTxMonth(e.target.value)} placeholder="Mes (2026-04)" className={inputClass} maxLength={7} />
              </div>
              <button onClick={handleSaveTransaction} disabled={saving}
                className="mt-3 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium flex items-center gap-2 hover:opacity-90 disabled:opacity-50">
                {saving ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />} Registrar Transacao
              </button>
            </div>

            {/* Add Reward */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-sm font-semibold text-card-foreground mb-4 flex items-center gap-2">
                <Plus size={16} /> Adicionar Recompensa
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input value={rwAccountId} onChange={(e) => setRwAccountId(e.target.value)} placeholder="ID da Conta" className={inputClass} maxLength={50} />
                <select value={rwType} onChange={(e) => setRwType(e.target.value)} className={inputClass}>
                  <option value="Gold">Gold (Silver)</option>
                  <option value="CPs">CPs</option>
                </select>
                <input value={rwValue} onChange={(e) => setRwValue(e.target.value)} placeholder="Valor (ex: 50kk)" className={inputClass} maxLength={50} />
              </div>
              <button onClick={handleSaveReward} disabled={saving}
                className="mt-3 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium flex items-center gap-2 hover:opacity-90 disabled:opacity-50">
                {saving ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />} Registrar Recompensa
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
                <input value={accTitle} onChange={(e) => setAccTitle(e.target.value)} placeholder="Titulo do anuncio" className={`w-full ${inputClass}`} maxLength={200} />
                <textarea value={accDesc} onChange={(e) => setAccDesc(e.target.value)} placeholder="Descricao completa"
                  className={`w-full min-h-[100px] resize-y ${inputClass}`} maxLength={2000} />
                <div className="grid grid-cols-2 gap-3">
                  <input value={accPrice1} onChange={(e) => setAccPrice1(e.target.value)} placeholder="Preco 1 (ex: 315K CPS)" className={inputClass} />
                  <input value={accPrice2} onChange={(e) => setAccPrice2(e.target.value)} placeholder="Preco 2 (opcional)" className={inputClass} />
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="highlight" checked={accHighlight} onChange={(e) => setAccHighlight(e.target.checked)} className="rounded" />
                  <label htmlFor="highlight" className="text-sm text-card-foreground">Destaque (badge HOT)</label>
                </div>
                <button onClick={handleSaveMarketplace} disabled={saving}
                  className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium flex items-center gap-2 hover:opacity-90 disabled:opacity-50">
                  {saving ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />} Publicar Anuncio
                </button>
              </div>
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
                  As probabilidades serao configuraveis futuramente. A logica de roleta deve ser processada exclusivamente no servidor.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
