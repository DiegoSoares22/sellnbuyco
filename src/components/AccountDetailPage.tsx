import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  MessageCircle,
  HandCoins,
  Sparkles,
  ShieldCheck,
  Zap,
  Swords,
  Trophy,
  ZoomIn,
  Flame,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { getRarityClasses, isTemporalBadge } from "@/lib/rarityBadge";
import { getAccountLevel } from "@/lib/accountFilters";
import { ACCOUNTS, AccountListing } from "@/data/accounts";
import { useI18n } from "@/i18n";
import { toast } from "sonner";
import { Footer } from "@/components/Footer";
import { AccountCard } from "@/components/AccountCard";

const WHATSAPP = "5575981382799";
const buildWa = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

interface AccountDetailPageProps {
  account: AccountListing;
}

export const AccountDetailPage: React.FC<AccountDetailPageProps> = ({ account }) => {
  const [imageZoomed, setImageZoomed] = useState(false);
  const { t, lang, withLang } = useI18n();
  const navigate = useNavigate();

  // Scroll to top e atualizar Título para SEO ao carregar
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = `${account.title} | SellNBuyCO - Accounts Conquer Online`;
  }, [account]);

  const level = getAccountLevel(account);
  const mainPrice = account.prices[0]?.value || "Consultar";

  const handleBuyClick = () => {
    toast.success(
      lang === "pt" ? "Redirecionando para o WhatsApp... 📲" : "Redirecting to WhatsApp... 📲"
    );
  };

  // Algoritmos de recomendação e descoberta de contas
  const similarAccounts = ACCOUNTS.filter(
    (a) => a.className === account.className && a.id !== account.id
  ).slice(0, 4);

  const latestAccounts = ACCOUNTS.filter((a) => a.id !== account.id).slice(0, 4);

  const recommendedAccounts = ACCOUNTS.filter(
    (a) => a.badge === "TOP" || a.badge === "DESTAQUE" || a.badge === "OP KING"
  )
    .filter((a) => a.id !== account.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-slate-100">
      {/* Navegação Breadcrumb Superior */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
          <Link
            to={withLang("/")}
            className="hover:text-amber-400 transition-colors inline-flex items-center gap-1"
          >
            <ArrowLeft size={13} />
            <span>{t("acc.backToAccounts") || "Voltar para contas"}</span>
          </Link>
          <ChevronRight size={12} className="text-slate-600" />
          <span className="text-amber-500 font-bold">{account.className}</span>
          <ChevronRight size={12} className="text-slate-600" />
          <span className="text-slate-200 truncate max-w-[200px] sm:max-w-xs">{account.title}</span>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-8">
        {/* GALERIA E PAINEL PRINCIPAL DE VENDA (0 ADS entre Preço e CTAs) */}
        <div className="bg-[#12121a] border border-zinc-800/90 rounded-3xl overflow-hidden shadow-2xl shadow-black/60 grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* GALERIA GRANDE (Left Column - 6/12) */}
          <div className="lg:col-span-6 relative bg-zinc-950 min-h-[350px] sm:min-h-[450px] flex items-center justify-center group overflow-hidden">
            <img
              src={account.image}
              alt={account.title}
              loading="lazy"
              className="w-full h-full object-cover cursor-zoom-in group-hover:scale-105 transition-transform duration-500"
              onClick={() => setImageZoomed(true)}
            />
            {/* Overlay sutil e botão de Zoom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#12121a]/80 via-transparent to-transparent pointer-events-none" />

            <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
              <span
                className={`text-xs font-bold px-3 py-1.5 rounded-lg border shadow-lg ${getRarityClasses(
                  account.badge
                )} inline-flex items-center gap-1.5`}
              >
                {isTemporalBadge(account.badge) && <Sparkles size={12} />}
                {account.badge}
              </span>
            </div>

            <button
              onClick={() => setImageZoomed(true)}
              className="absolute bottom-4 right-4 bg-black/60 hover:bg-black/85 backdrop-blur-md text-white text-xs font-bold px-3.5 py-2 rounded-xl border border-zinc-700 flex items-center gap-1.5 transition-all shadow-lg"
            >
              <ZoomIn size={14} className="text-amber-400" />
              <span>{lang === "pt" ? "Ver Foto em Tela Cheia" : "View Fullscreen Image"}</span>
            </button>
          </div>

          {/* PAINEL DE CONVERSÃO & INFORMAÇÕES DE VENDA (Right Column - 6/12) */}
          <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-gradient-to-b from-[#12121a] to-[#0d0d14]">
            <div className="space-y-4">
              {/* Título & Badges de Especificação */}
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-50 leading-tight">
                  {account.title}
                </h1>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="text-xs font-bold text-slate-300 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-lg inline-flex items-center gap-1">
                    <Swords size={12} className="text-amber-500" />
                    {account.className}
                  </span>
                  {level && (
                    <span className="text-xs font-bold text-slate-300 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-lg inline-flex items-center gap-1">
                      <Zap size={12} className="text-emerald-500" />
                      Level {level}
                    </span>
                  )}
                  <span className="text-xs font-bold text-slate-300 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-lg inline-flex items-center gap-1">
                    <Trophy size={12} className="text-violet-500" />
                    Conquer Online Server
                  </span>
                </div>
              </div>

              {/* Bloco de Preço Principal */}
              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-amber-500/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    {lang === "pt" ? "Valor de Investimento" : "Investment Value"}
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-amber-400">
                    {mainPrice}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/20">
                  <ShieldCheck size={16} />
                  <span>{lang === "pt" ? "Intermediação Segura" : "Secure Escrow"}</span>
                </div>
              </div>

              {/* Garantias de Credibilidade & Vendedor */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span className="text-slate-300 font-medium">Vendedor Verificado</span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span className="text-slate-300 font-medium">Transferência Garantida</span>
                </div>
              </div>
            </div>

            {/* CTAs DE CONVERSÃO CRÍTICOS (0 ADS ENTRE PREÇO E BOTÕES) */}
            <div className="space-y-3 pt-2">
              <a
                href={buildWa(t("wa.interestAccount", { title: account.title }))}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleBuyClick}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-black font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all"
              >
                <MessageCircle size={18} />
                <span>{lang === "pt" ? "COMPRAR CONTA AGORA NO WHATSAPP" : "BUY ACCOUNT NOW ON WHATSAPP"}</span>
              </a>

              <a
                href={buildWa(t("wa.offer", { title: account.title }))}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleBuyClick}
                className="w-full py-3.5 rounded-2xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-400 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:border-amber-500/50 transition-all"
              >
                <HandCoins size={16} />
                <span>{lang === "pt" ? "FAZER UMA PROPOSTA / OFERTA" : "MAKE AN OFFER / PROPOSAL"}</span>
              </a>
            </div>
          </div>
        </div>

        {/* ESPECIFICAÇÕES DETALHADAS & DESCRIÇÃO COMPLETA */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-extrabold text-slate-50 flex items-center gap-2">
              <Flame size={20} className="text-amber-500" />
              <span>{lang === "pt" ? "Descrição Completa & Atributos" : "Full Description & Attributes"}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {account.sections.map((sec, si) => (
              <div
                key={si}
                className="bg-[#12121a] border border-zinc-800/80 rounded-2xl p-6 shadow-lg space-y-3"
              >
                <h3
                  className={`text-xs font-extrabold uppercase tracking-wider ${
                    si === 0
                      ? "text-amber-400"
                      : si === 1
                      ? "text-violet-400"
                      : si === 2
                      ? "text-cyan-400"
                      : "text-slate-300"
                  }`}
                >
                  {sec.title}
                </h3>
                <ul className="space-y-2">
                  {sec.items.map((item, ii) => (
                    <li
                      key={ii}
                      className="text-xs text-slate-300 pl-3 border-l-2 border-zinc-800 leading-relaxed flex items-start gap-1.5"
                    >
                      <span className="text-amber-500 font-bold shrink-0 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* SEÇÃO DE DESCOBERTA & RECOMENDAÇÕES */}
        <div className="space-y-12 pt-4">
          {/* CONTAS SEMELHANTES */}
          {similarAccounts.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-extrabold text-slate-100 flex items-center gap-2">
                  <span>{lang === "pt" ? "Contas Semelhantes" : "Similar Accounts"}</span>
                  <span className="text-xs font-normal text-slate-400">({account.className})</span>
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {similarAccounts.map((acc) => (
                  <AccountCard
                    key={acc.id}
                    account={acc}
                    onSelect={() => navigate(withLang(`/accounts/${acc.id}`))}
                    onViewDetails={() => navigate(withLang(`/accounts/${acc.id}`))}
                  />
                ))}
              </div>
            </div>
          )}

          {/* ÚLTIMAS ADICIONADAS */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-extrabold text-slate-100">
                {lang === "pt" ? "Últimas Adicionadas" : "Recently Added Accounts"}
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {latestAccounts.map((acc) => (
                <AccountCard
                  key={acc.id}
                  account={acc}
                  onSelect={() => navigate(withLang(`/accounts/${acc.id}`))}
                  onViewDetails={() => navigate(withLang(`/accounts/${acc.id}`))}
                />
              ))}
            </div>
          </div>

          {/* RECOMENDADAS / MAIS VISUALIZADAS */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-extrabold text-slate-100 flex items-center gap-2">
                <span>{lang === "pt" ? "Recomendadas & Em Destaque" : "Recommended & Featured"}</span>
                <Sparkles size={16} className="text-amber-500" />
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendedAccounts.map((acc) => (
                <AccountCard
                  key={acc.id}
                  account={acc}
                  onSelect={() => navigate(withLang(`/accounts/${acc.id}`))}
                  onViewDetails={() => navigate(withLang(`/accounts/${acc.id}`))}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MODAL FULLSCREEN DE IMAGEM */}
      <AnimatePresence>
        {imageZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setImageZoomed(false)}
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={account.image}
              alt={account.title}
              loading="lazy"
              className="max-w-[95vw] max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER DO SITE */}
      <Footer />
    </div>
  );
};
