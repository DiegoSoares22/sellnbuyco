import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, MessageCircle, X } from "lucide-react";
import { Link } from "react-router-dom";

import antibreakImg from "@/assets/antibreakstrike.png";
import ninja1Img from "@/assets/ninja1.png";
import ninjalucasImg from "@/assets/ninjalucas.jpg";
import archerwagnerImg from "@/assets/archerwagner.jpg";
import waterImg from "@/assets/water.jpg";
import ninjajoaoImg from "@/assets/ninjajoao.jpg";
import ninjamichelImg from "@/assets/ninjamichel.jpg";

interface AccountListing {
  id: string;
  title: string;
  badge: string;
  badgeColor: string;
  image: string;
  prices: { label: string; value: string }[];
  sections: { title: string; items: string[] }[];
}

const ACCOUNTS: AccountListing[] = [
  {
    id: "acc-1",
    title: "Amazing Ninja Strike Anti Break",
    badge: "HOT",
    badgeColor: "bg-red-500",
    image: antibreakImg,
    prices: [
      { label: "Sem MythSoul", value: "315K CPS" },
      { label: "Com MythSoul", value: "335K CPS" },
    ],
    sections: [
      {
        title: "Atributos",
        items: [
          "103,6 Bil Donation",
          "Astredge 100% - 95% - 35%",
          "Eonspirit (Archer Lv8) (Water Lv8) (Warrior Lv8) (Monk Lv6)",
          "Ninpo 28K no have HW",
          "Archive Trojan 100K",
          "Archive Monk 20 - 21 - 20",
          "Inner power full",
          "Chi full, retrat immunity with 23m chi",
        ],
      },
      {
        title: "Runas",
        items: [
          "Credit Runes Yellow (+9 todas)",
          "Soldiness",
          "Conquerer's Blade",
          "Circle Of Life",
          "Impregnability",
          "Tempered",
          "Perseverance",
          "SkyVeil, IronBone, BlazeGaze",
          "Blue rune missing only: SoulReap, WaveBreak",
          "Rank Rune: 402,2K",
          "Strike Buster",
          "3 Ideals",
          "139 Hammers",
        ],
      },
      {
        title: "Equipamentos",
        items: ["1 Epic Ninja Unbound", "Boots"],
      },
      {
        title: "Extras",
        items: [
          "Relic full strike anti-break (perfect resonance)",
          "1 Jail",
        ],
      },
    ],
  },
  {
    id: "acc-2",
    title: "OP Ninja Strike Full Build",
    badge: "TOP",
    badgeColor: "bg-amber-500",
    image: ninja1Img,
    prices: [{ label: "Preço", value: "Consultar" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "Donation: 84B",
          "Ninpo Score: 52.348",
          "Astred: Love Forever 90%, Viodragon 90%, Heart Lock 50%",
          "Eonspirit: Archer P8, Water P8, Warrior P7",
          "Inner full",
          "CHI full - STRIKE",
        ],
      },
      {
        title: "Runas",
        items: [
          "323K",
          "8 Credit Runes",
          "Ideal Rune: 1",
          "Tempered",
          "Conqueros",
          "Circle of Life",
          "Solidess",
          "Megaquake",
          "Sky Veil",
          "Iron Bone",
          "SilentBlade",
        ],
      },
      {
        title: "Equipamentos",
        items: [
          "Set Ninja (5 unbound full crown)",
          "Set Tortoise (+12)",
          "Set Windwalker +12",
        ],
      },
      {
        title: "Extras",
        items: [
          "Goldtrophy",
          "Rare Wings (Withered)",
          "VIP 6",
          "Rank 3º Ninpo",
          "34 hammers",
          "Garment 167",
          "Mount 96",
          "1 BJ",
        ],
      },
    ],
  },
  {
    id: "acc-4",
    title: "Strike Archer com Epics",
    badge: "NEW",
    badgeColor: "bg-emerald-500",
    image: archerwagnerImg,
    prices: [{ label: "Preço", value: "50K CPS" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "Arquivos 50 - max - Max",
          "26k donate",
        ],
      },
      {
        title: "Runas",
        items: ["2 runas creditada"],
      },
      {
        title: "Equipamentos",
        items: ["Relíquia 3 crítico"],
      },
      {
        title: "Extras",
        items: ["0 jail"],
      },
    ],
  },
  {
    id: "acc-5",
    title: "Spray Water Taoist Full Build",
    badge: "TOP",
    badgeColor: "bg-amber-500",
    image: waterImg,
    prices: [{ label: "Preço", value: "Consultar" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "70B Donation",
          "Water Full",
          "Astredge 95% Viodragon Club, 90% Love Forever, 5% Heart Lock",
          "Arquivo Trojan 100K",
          "Monk 30/27/27",
        ],
      },
      {
        title: "Runas",
        items: [
          "5 Runas do Site",
        ],
      },
      {
        title: "Equipamentos",
        items: [
          "BS e Ring coroa unbound",
          "Hossu 2 sock 2 Gem super Unbound -5",
        ],
      },
      {
        title: "Extras",
        items: [
          "Ressonance 3x Immunity full",
          "Relic 3x Immunity full + Final P-DMG",
        ],
      },
    ],
  },
  {
    id: "acc-6",
    title: "Ninja 437K Rune Score Premium",
    badge: "HOT",
    badgeColor: "bg-red-500",
    image: ninjajoaoImg,
    prices: [{ label: "Preço", value: "650K CPS" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "Sell Ninja 437k Rune Score",
          "Price 650k CPS Without Mythsouls And Garment 2 P-Strike",
          "or 820k With Garment and Mythsouls",
          "210B Donation",
          "Supreme VIP",
          "HolyGrail",
          "HavensWonder",
          "Horse 60k Lineage",
          "90k CPS Bound",
        ],
      },
      {
        title: "Runas",
        items: [
          "7 Yellow Credit Runes",
          "All Blue runes",
          "8 Ideals",
        ],
      },
      {
        title: "Equipamentos",
        items: [
          "All Gears 9c Unbound Except Ring, Neck and Wings (300k Progress) Bound",
          "Garment 2 P-Strike",
        ],
      },
      {
        title: "Archives",
        items: [
          "Trojan 100k",
          "Archer Max/21/38",
          "Warrior 40/max/35",
          "DW 1.8M",
          "Monk 26/26/30",
        ],
      },
      {
        title: "Astredge",
        items: [
          "Viodragon Club 95%",
          "Love Forever 90%",
          "Heart Lock 80%",
        ],
      },
      {
        title: "Extras",
        items: [
          "3 Ressonance Relic (Worth 60k-80k CPS)",
          "101,200k CPS Worth Mythsoul Bag",
          "49k CPS Worth Mythsoul Gears All L6/L6 Ring and Neck L6/L6/L4",
        ],
      },
    ],
  },
  {
    id: "acc-8",
    title: "Ninja com Sigil FlashBreak",
    badge: "NEW",
    badgeColor: "bg-emerald-500",
    image: ninjamichelImg,
    prices: [{ label: "Preço", value: "Consultar" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "300K Score de Runa",
          "47K de Ninpo",
          "100K de Trojan",
          "Monk All Lvl 20+",
          "33B Donation",
        ],
      },
      {
        title: "Runas",
        items: [
          "1 Ideal",
          "9 Runas Creditadas",
          "SilentBlade, Solidiness, Conquero, Tempered",
          "Iron Bone, NatureShield, Violet Shield",
          "Sky Veil, Megaquake",
        ],
      },
      {
        title: "Equipamentos",
        items: [
          "Set Tortoise",
        ],
      },
      {
        title: "Extras",
        items: [
          "3x Ressonâncias com 3x Relics",
          "1 BJ",
        ],
      },
    ],
  },
];

export default function Accounts() {
  const [selected, setSelected] = useState<AccountListing | null>(null);
  const [imageZoomed, setImageZoomed] = useState(false);

  const getWhatsappUrl = (title: string) =>
    `https://wa.me/5575981382799?text=${encodeURIComponent(
      `Olá, Diego! Tudo bem? Fiquei interessado por ${title}. Gostaria de mais informações.`
    )}`;

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-6xl py-8 px-4">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft size={16} /> Voltar à Loja
        </Link>

        <h1 className="text-2xl font-bold text-foreground mb-2">Accounts à Venda</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Essa área é exclusiva para contas selecionadas. Normalmente disponíveis para clientes com histórico de compras mais elevado.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {ACCOUNTS.map((acc, i) => (
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
                <button className="mt-3 w-full py-2 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:opacity-90 transition-opacity">
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

                <a
                  href={getWhatsappUrl(selected.title)}
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
