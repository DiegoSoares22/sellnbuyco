import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, MessageCircle, ShieldAlert, X, ChevronLeft, ChevronRight, Flame, Star, Sword, Shield, Zap, Crown } from "lucide-react";
import { Link } from "react-router-dom";
import taoistImg from "@/assets/taoist.png";

interface AccountItem {
  id: string;
  title: string;
  badge: string;
  badgeColor: string;
  image: string;
  highlights: string[];
  prices: { label: string; value: string; color: string }[];
  details: {
    stats: string[];
    runes: string[];
    sets: string[];
    extras: string[];
  };
  images: string[];
}

const ACCOUNTS: AccountItem[] = [
  {
    id: "acc-001",
    title: "AMAZING Ninja Strike, Anti-Break (TOP)",
    badge: "HOT",
    badgeColor: "bg-red-500",
    image: "https://hsimages.99.com/zfstore/productimg/9506e2e0741a46ddbb57839707bb6126.png",
    highlights: [
      "Ninja Strike full build",
      "Anti-Break configurado",
      "Donation elevada",
      "Ninpo Score alto"
    ],
    prices: [
      { label: "Sem Mythoul", value: "315K CPS", color: "text-emerald-500" },
      { label: "Com Mythoul", value: "335K CPS", color: "text-blue-500" },
    ],
    details: {
      stats: [
        "Level: 140",
        "Reborn: 2nd",
        "BP: 850.000+",
        "Donation: 45.000+",
        "Ninpo Score: 320+"
      ],
      runes: [
        "Full Yellow Runes +1",
        "Blue Pirate Rune",
        "Area Occupier +1",
        "Silent Blade +1",
        "Stealth Dragon +1"
      ],
      sets: [
        "Full Set +12 (Super)",
        "Weapon +12 Refined",
        "Garment Exclusiva"
      ],
      extras: [
        "VIP ativo",
        "Montaria rara",
        "Pets treinados",
        "Inventario completo"
      ]
    },
    images: [
      "https://hsimages.99.com/zfstore/productimg/9506e2e0741a46ddbb57839707bb6126.png",
      "https://hsimages.99.com/zfstore/productimg/dc503473ce5c40cf9b3deecc091683ef.png",
      "https://hsimages.99.com/zfstore/productimg/41db024bc9f94640943371a4af19d1d2.png",
    ]
  },
  {
    id: "acc-002",
    title: "OP Ninja Strike, Full Build (Premium)",
    badge: "TOP",
    badgeColor: "bg-purple-500",
    image: "https://hsimages.99.com/zfstore/productimg/dc503473ce5c40cf9b3deecc091683ef.png",
    highlights: [
      "Full Build Premium",
      "Runes completas",
      "Sets refinados",
      "Pronto para PvP"
    ],
    prices: [
      { label: "Valor sob consulta", value: "Consultar", color: "text-primary" },
    ],
    details: {
      stats: [
        "Level: 140",
        "Reborn: 2nd",
        "BP: 720.000+",
        "Donation: 38.000+",
        "Ninpo Score: 280+"
      ],
      runes: [
        "Full Yellow Runes +1",
        "Senior Rare Rune Box",
        "Damage Pierce +1",
        "Soul Annihilation +1"
      ],
      sets: [
        "Full Set +12",
        "Weapon +12",
        "Accessory Set completo"
      ],
      extras: [
        "Montaria exclusiva",
        "Garment rara",
        "Title de evento"
      ]
    },
    images: [
      "https://hsimages.99.com/zfstore/productimg/dc503473ce5c40cf9b3deecc091683ef.png",
      "https://hsimages.99.com/zfstore/productimg/9506e2e0741a46ddbb57839707bb6126.png",
    ]
  },
];

export default function Accounts() {
  const [selectedAccount, setSelectedAccount] = useState<AccountItem | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sectionIcon: Record<string, React.ReactNode> = {
    stats: <Sword size={16} className="text-primary" />,
    runes: <Zap size={16} className="text-purple-500" />,
    sets: <Shield size={16} className="text-blue-500" />,
    extras: <Crown size={16} className="text-yellow-500" />,
  };

  const sectionLabel: Record<string, string> = {
    stats: "Atributos",
    runes: "Runas",
    sets: "Sets e Equipamentos",
    extras: "Extras",
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url('https://w0.peakpx.com/wallpaper/67/757/HD-wallpaper-video-game-conquer-online.jpg')`,
      }}
    >
      <div className="min-h-screen bg-background/85 dark:bg-background/80 glass-panel">
        <div className="container max-w-5xl py-8 px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft size={16} /> Voltar à Loja
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-6">
              <ShieldAlert className="text-primary" size={28} />
              <h1 className="text-2xl font-bold text-foreground">Accounts à Venda</h1>
            </div>

            {/* Robot hint */}
            <div className="flex items-start gap-3 mb-8 bg-card border border-border rounded-xl p-4">
              <img src={taoistImg} alt="Dicas" className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Essa área é exclusiva para contas selecionadas. Normalmente disponíveis para clientes com histórico de compras mais elevado.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              {ACCOUNTS.map((acc) => (
                <motion.div
                  key={acc.id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-card border border-border rounded-xl overflow-hidden cursor-pointer group"
                  onClick={() => { setSelectedAccount(acc); setCurrentSlide(0); }}
                >
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img src={acc.image} alt={acc.title} className="w-full h-full object-contain p-4" />
                    <span className={`absolute top-3 left-3 ${acc.badgeColor} text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1`}>
                      {acc.badge === "HOT" ? <Flame size={12} /> : <Star size={12} />}
                      {acc.badge}
                    </span>
                  </div>
                  <div className="p-4 space-y-3">
                    <h3 className="font-bold text-card-foreground text-sm leading-tight">{acc.title}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {acc.highlights.map((h, i) => (
                        <span key={i} className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">{h}</span>
                      ))}
                    </div>
                    <div className="space-y-1">
                      {acc.prices.map((p, i) => (
                        <div key={i} className="flex justify-between items-center">
                          <span className="text-xs text-muted-foreground">{p.label}</span>
                          <span className={`font-bold text-sm ${p.color}`}>{p.value}</span>
                        </div>
                      ))}
                    </div>
                    <button className="w-full py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
                      Ver detalhes
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Empty hint */}
            {ACCOUNTS.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-sm">Nenhuma conta disponível no momento.</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedAccount && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={() => setSelectedAccount(null)}
          >
            <div className="absolute inset-0 bg-background/70 glass-panel" />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative z-10 max-w-2xl w-full max-h-[85vh] rounded-2xl bg-card border border-border shadow-2xl overflow-y-auto scrollbar-hide"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Slider */}
              <div className="relative h-56 sm:h-72 bg-muted overflow-hidden">
                <img
                  src={selectedAccount.images[currentSlide]}
                  alt={selectedAccount.title}
                  className="w-full h-full object-contain p-6"
                />
                {selectedAccount.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentSlide((p) => (p === 0 ? selectedAccount.images.length - 1 : p - 1))}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 flex items-center justify-center text-foreground hover:bg-background"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={() => setCurrentSlide((p) => (p === selectedAccount.images.length - 1 ? 0 : p + 1))}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 flex items-center justify-center text-foreground hover:bg-background"
                    >
                      <ChevronRight size={16} />
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {selectedAccount.images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentSlide(i)}
                          className={`w-2 h-2 rounded-full transition-colors ${i === currentSlide ? "bg-primary" : "bg-foreground/30"}`}
                        />
                      ))}
                    </div>
                  </>
                )}
                <button
                  onClick={() => setSelectedAccount(null)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 flex items-center justify-center text-foreground hover:bg-background"
                >
                  <X size={16} />
                </button>
                <span className={`absolute top-3 left-3 ${selectedAccount.badgeColor} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>
                  {selectedAccount.badge}
                </span>
              </div>

              <div className="p-5 sm:p-6 space-y-5">
                <h2 className="text-lg font-bold text-card-foreground">{selectedAccount.title}</h2>

                {/* Prices */}
                <div className="flex flex-wrap gap-3">
                  {selectedAccount.prices.map((p, i) => (
                    <div key={i} className="bg-muted rounded-lg px-4 py-2.5 flex-1 min-w-[140px]">
                      <p className="text-xs text-muted-foreground">{p.label}</p>
                      <p className={`font-bold text-lg ${p.color}`}>{p.value}</p>
                    </div>
                  ))}
                </div>

                {/* Detail Sections */}
                {(["stats", "runes", "sets", "extras"] as const).map((section) => (
                  <div key={section}>
                    <div className="flex items-center gap-2 mb-2">
                      {sectionIcon[section]}
                      <h3 className="text-sm font-semibold text-card-foreground">{sectionLabel[section]}</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {selectedAccount.details[section].map((item, i) => (
                        <p key={i} className="text-sm text-muted-foreground bg-muted/50 rounded-lg px-3 py-1.5">{item}</p>
                      ))}
                    </div>
                  </div>
                ))}

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/5575981382799?text=${encodeURIComponent("Olá! Tenho interesse nesse account.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
                >
                  <MessageCircle size={16} /> Fiquei interessado, entrar em contato
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
