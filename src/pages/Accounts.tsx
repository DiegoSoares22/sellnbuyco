import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, MessageCircle, X, Filter } from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ACCOUNTS, CLASS_OPTIONS, getClassCounts } from "@/data/accounts";
import type { AccountListing } from "@/data/accounts";

const getWhatsappUrl = (title: string) =>
  `https://wa.me/5575981382799?text=${encodeURIComponent(
    `Olá, Diego! Tudo bem? Fiquei interessado por ${title}. Gostaria de mais informações.`
  )}`;

function AccountDetail({ account }: { account: AccountListing }) {
  const [imageZoomed, setImageZoomed] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-2xl py-8 px-4">
        <Link to="/accounts" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft size={16} /> Voltar aos Accounts
        </Link>

        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="relative">
            <img
              src={account.image}
              alt={account.title}
              className="w-full h-64 object-cover cursor-zoom-in hover:brightness-110 transition-all"
              onClick={() => setImageZoomed(true)}
            />
            <span className={`absolute top-3 left-3 ${account.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-md`}>
              {account.badge}
            </span>
          </div>

          <div className="p-6 space-y-5">
            <div>
              <h1 className="text-xl font-bold text-card-foreground">{account.title}</h1>
              <div className="flex gap-3 mt-2 flex-wrap">
                {account.prices.map((p, pi) => (
                  <span key={pi} className="text-sm font-bold text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-lg">
                    {p.label}: {p.value}
                  </span>
                ))}
              </div>
            </div>

            {account.sections.map((sec, si) => (
              <div key={si}>
                <h3 className={`text-sm font-semibold mb-2 ${
                  si === 0 ? "text-amber-500" : si === 1 ? "text-purple-500" : si === 2 ? "text-blue-500" : "text-muted-foreground"
                }`}>
                  {sec.title}
                </h3>
                <ul className="space-y-1">
                  {sec.items.map((item, ii) => (
                    <li key={ii} className="text-sm text-card-foreground/80 pl-3 border-l-2 border-border">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <a
              href={getWhatsappUrl(account.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={16} /> Fiquei interessado, entrar em contato
            </a>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {imageZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setImageZoomed(false)}
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={account.image}
              alt={account.title}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function AccountsList() {
  const [selected, setSelected] = useState<AccountListing | null>(null);
  const [imageZoomed, setImageZoomed] = useState(false);
  const [classFilter, setClassFilter] = useState<string | null>(null);
  const navigate = useNavigate();

  const classCounts = useMemo(() => getClassCounts(ACCOUNTS), []);

  const filtered = useMemo(
    () => (classFilter ? ACCOUNTS.filter((a) => a.className === classFilter) : ACCOUNTS),
    [classFilter]
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-6xl py-8 px-4">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft size={16} /> Voltar à Loja
        </Link>

        <h1 className="text-2xl font-bold text-foreground mb-2">Accounts à Venda</h1>
        <p className="text-sm text-muted-foreground mb-6">
          Essa área é exclusiva para contas selecionadas. Normalmente disponíveis para clientes com histórico de compras mais elevado.
        </p>

        {/* Class filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setClassFilter(null)}
            className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
              !classFilter
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-muted-foreground border-border hover:border-primary/40"
            }`}
          >
            <Filter size={12} /> Todos ({ACCOUNTS.length})
          </button>
          {CLASS_OPTIONS.map((cls) => {
            const count = classCounts[cls];
            if (!count) return null;
            return (
              <button
                key={cls}
                onClick={() => setClassFilter(classFilter === cls ? null : cls)}
                className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
                  classFilter === cls
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:border-primary/40"
                }`}
              >
                {cls} ({count})
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((acc, i) => (
            <motion.div
              key={acc.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl overflow-hidden flex flex-col hover:border-primary/30 transition-colors cursor-pointer group"
              onClick={() => setSelected(acc)}
            >
              <div className="relative h-48 overflow-hidden">
                <img src={acc.image} alt={acc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                <span className={`absolute top-3 left-3 ${acc.badgeColor} text-white text-[10px] font-bold px-2 py-0.5 rounded-md`}>
                  {acc.badge}
                </span>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-sm font-semibold text-card-foreground line-clamp-2 mb-2">{acc.title}</h3>
                <div className="mt-auto space-y-1.5">
                  {acc.prices.map((p, pi) => (
                    <p key={pi} className="text-xs font-bold text-emerald-500">{p.label}: {p.value}</p>
                  ))}
                </div>
                <button
                  className="mt-3 w-full py-2 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:opacity-90 transition-opacity"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/accounts/${acc.id}`);
                  }}
                >
                  Ver detalhes
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image zoom overlay */}
      <AnimatePresence>
        {imageZoomed && selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setImageZoomed(false)}
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selected.image}
              alt={selected.title}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Detail modal */}
      <AnimatePresence>
        {selected && !imageZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 flex items-start justify-center overflow-y-auto p-4 pt-12"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              className="bg-card border border-border rounded-xl w-full max-w-2xl overflow-hidden mb-12"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-64 object-cover cursor-zoom-in hover:brightness-110 transition-all"
                  onClick={() => setImageZoomed(true)}
                />
                <button onClick={() => setSelected(null)} className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70">
                  <X size={16} />
                </button>
                <span className={`absolute top-3 left-3 ${selected.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-md`}>
                  {selected.badge}
                </span>
              </div>

              <div className="p-6 space-y-5">
                <div>
                  <h2 className="text-xl font-bold text-card-foreground">{selected.title}</h2>
                  <div className="flex gap-3 mt-2 flex-wrap">
                    {selected.prices.map((p, pi) => (
                      <span key={pi} className="text-sm font-bold text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-lg">
                        {p.label}: {p.value}
                      </span>
                    ))}
                  </div>
                </div>

                {selected.sections.map((sec, si) => (
                  <div key={si}>
                    <h3 className={`text-sm font-semibold mb-2 ${
                      si === 0 ? "text-amber-500" : si === 1 ? "text-purple-500" : si === 2 ? "text-blue-500" : "text-muted-foreground"
                    }`}>
                      {sec.title}
                    </h3>
                    <ul className="space-y-1">
                      {sec.items.map((item, ii) => (
                        <li key={ii} className="text-sm text-card-foreground/80 pl-3 border-l-2 border-border">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div className="flex gap-3">
                  <a
                    href={getWhatsappUrl(selected.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
                  >
                    <MessageCircle size={16} /> Fiquei interessado
                  </a>
                  <button
                    onClick={() => {
                      navigate(`/accounts/${selected.id}`);
                      setSelected(null);
                    }}
                    className="px-4 py-3 rounded-lg border border-border text-card-foreground text-sm font-medium hover:bg-muted transition-colors"
                  >
                    Link direto
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Accounts() {
  const { accountId } = useParams();

  if (accountId) {
    const account = ACCOUNTS.find((a) => a.id === accountId);
    if (!account) {
      return (
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-2">Account não encontrado</h1>
            <Link to="/accounts" className="text-primary hover:underline text-sm">Voltar aos Accounts</Link>
          </div>
        </div>
      );
    }
    return <AccountDetail account={account} />;
  }

  return <AccountsList />;
}
