import React from "react";
import { motion } from "framer-motion";
import { Heart, ArrowRight, MessageCircle, HandCoins, Swords, Shield, Droplet, Crosshair, Anchor, Circle, Flame, Zap, Star, Compass, HelpCircle } from "lucide-react";
import { useAccountStore } from "@/hooks/useAccountStore";
import { useI18n } from "@/i18n";
import { AccountListing } from "@/data/accounts";
import { getAccountLevel } from "@/lib/accountFilters";
import { getRarityClasses } from "@/lib/rarityBadge";
import { Button } from "@/components/ui/button";

interface AccountCardProps {
  account: AccountListing;
  onSelect: () => void;
  onViewDetails: () => void;
  onImageZoom?: () => void;
}

const CLASS_ICONS: Record<string, any> = {
  Ninja: Swords,
  Warrior: Shield,
  Taoist: Droplet,
  Archer: Crosshair,
  Pirata: Anchor,
  Monk: Circle,
  DragonWarrior: Flame,
  "Thunder Strike": Zap,
  Trojan: Star,
  "Dune Wanderer": Compass,
};

const WHATSAPP = "5575981382799";
const buildWa = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export const AccountCard: React.FC<AccountCardProps> = ({ account, onSelect, onViewDetails, onImageZoom }) => {
  const { lang, t } = useI18n();
  const { isFavorite, toggleFavorite } = useAccountStore();

  const level = getAccountLevel(account);
  const favorited = isFavorite(account.id);
  const ClassIcon = CLASS_ICONS[account.className] || HelpCircle;

  // Extrair preço em CPs
  const rawPrice = account.prices[0]?.value || "";
  const priceParts = rawPrice.split(" ");
  const priceValue = priceParts[0] || "Consultar";
  const priceCurrency = priceParts.slice(1).join(" ") || "CPs";

  const interestUrl = buildWa(t("wa.interestAccount", { title: account.title }));
  const offerUrl = buildWa(t("wa.offer", { title: account.title }));

  // Cores personalizadas para os badges
  const getBadgeStyle = (badge: string) => {
    switch (badge.toUpperCase()) {
      case "NOVO":
      case "NEW":
        return "bg-emerald-500/15 text-emerald-400 border-emerald-500/30 shadow-emerald-500/10";
      case "TOP":
        return "bg-amber-500/15 text-amber-400 border-amber-500/30 shadow-amber-500/10";
      case "END GAME":
        return "bg-violet-500/15 text-violet-400 border-violet-500/30 shadow-violet-500/10";
      case "DESTAQUE":
        return "bg-cyan-500/15 text-cyan-400 border-cyan-500/30 shadow-cyan-500/10";
      default:
        return "bg-zinc-800/80 text-zinc-300 border-zinc-700 shadow-none";
    }
  };

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative bg-[#12121a] rounded-2xl border border-zinc-800/60 overflow-hidden hover:border-amber-500/20 transition-all duration-500 flex flex-col h-full shine-effect premium-border"
      onClick={onSelect}
    >
      {/* Subtle top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

      {/* Imagem com Overlay */}
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
        <img
          src={account.image}
          alt={account.title}
          loading="lazy"
          onClick={(e) => {
            e.stopPropagation();
            onImageZoom?.();
          }}
          className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700 ease-out cursor-pointer"
        />
        {/* Multi-layer overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#12121a] via-[#12121a]/20 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#12121a]/30 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Badge with glassmorphism */}
        <div className="absolute top-3 left-3 flex gap-1.5 z-10 pointer-events-none">
          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-lg border backdrop-blur-md shadow-sm ${getBadgeStyle(account.badge)}`}>
            {account.badge}
          </span>
        </div>

        {/* Botão de favorito com glow */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(account.id);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md text-white transition-all z-10 shadow-sm border ${
            favorited
              ? "bg-red-500/20 border-red-500/30 shadow-red-500/20"
              : "bg-black/40 hover:bg-black/60 border-zinc-700/50 hover:border-zinc-600"
          }`}
        >
          <Heart size={14} className={favorited ? "fill-red-500 text-red-500" : "text-slate-300 hover:text-white"} />
        </button>

        {/* Classe + Level overlay premium */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-xl border border-zinc-700/50 pointer-events-none">
          <ClassIcon size={12} className="text-amber-400" />
          <span className="text-[10px] font-bold text-slate-200">
            {account.className} {level ? `· Lv ${level}` : ""}
          </span>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-4 flex flex-col flex-1 space-y-3">
        <h3 className="text-xs sm:text-sm font-semibold text-slate-100 line-clamp-2 min-h-[2.5rem] leading-snug group-hover:text-white transition-colors duration-300">
          {account.title}
        </h3>

        {/* Price with premium styling */}
        <div className="flex items-baseline gap-1.5 mt-auto">
          <span className="text-lg sm:text-xl font-black text-amber-400 group-hover:text-amber-300 transition-colors duration-300">
            {priceValue}
          </span>
          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{priceCurrency}</span>
        </div>

        {/* Ações */}
        <div className="space-y-2 pt-1">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails();
            }}
            className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs rounded-xl h-9 flex items-center justify-center gap-1.5 shadow-sm shadow-amber-500/10 hover:shadow-md hover:shadow-amber-500/20 transition-all duration-300 group/btn"
          >
            <span>{lang === "pt" ? "Ver detalhes" : "View details"}</span>
            <ArrowRight size={13} className="transition-transform group-hover/btn:translate-x-0.5" />
          </Button>

          <div className="flex gap-2">
            <a
              href={interestUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 flex items-center justify-center gap-1 py-2 rounded-xl border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10 hover:border-emerald-500/30 text-emerald-400 text-[10px] font-bold transition-all duration-300 h-8.5"
            >
              <MessageCircle size={12} />
              <span>{lang === "pt" ? "Interesse" : "Interest"}</span>
            </a>

            <a
              href={offerUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 flex items-center justify-center gap-1 py-2 rounded-xl border border-amber-500/20 bg-amber-500/5 hover:bg-amber-500/10 hover:border-amber-500/30 text-amber-400 text-[10px] font-bold transition-all duration-300 h-8.5"
            >
              <HandCoins size={12} />
              <span>{lang === "pt" ? "Oferta" : "Offer"}</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
