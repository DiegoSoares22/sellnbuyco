import antibreakImg from "@/assets/antibreakstrike.png";
import archerwagnerImg from "@/assets/archerwagner.jpg";
import ninjajoaoImg from "@/assets/ninjajoao.jpg";
import ninjaBreakImg from "@/assets/ninja-break.jpeg";
import archer129Img from "@/assets/archer129.jpg";
import water22Img from "@/assets/water22.jpg";
import archerBreakImg from "@/assets/archer-break.jpg";
import pirataImg from "@/assets/pirata.jpg";
import ninjaBreak2Img from "@/assets/ninja-break-2.jpg";
import ninjaPirateRchifImg from "@/assets/ninja-pirate-rchif.jpg";
import waterSellImg from "@/assets/water-sell.jpg";
import archerEpicImg from "@/assets/archer-epic.png";
import archerRuneImg from "@/assets/archer-rune.png";
import decenteWaterImg from "@/assets/decente-water.png";
import pirataIntermediarioImg from "@/assets/pirata-intermediario.png";
import topPirateImg from "@/assets/top-pirate.png";
import waterIdealImg from "@/assets/water-ideal.png";
import ninja2BreakImg from "@/assets/ninja2-break.jpg";
import ninjaHwStunImg from "@/assets/ninja-hw-stun.jpg";
import water29biImg from "@/assets/water-29bi.jpg";
import archer26biImg from "@/assets/archer-26bi.jpg";



export interface AccountListing {
  id: string;
  title: string;
  badge: string;
  badgeColor: string;
  image: string;
  className: string; // game class for filtering
  prices: { label: string; value: string }[];
  sections: { title: string; items: string[] }[];
}

export const ACCOUNTS: AccountListing[] = [
  {
    id: "acc-1",
    title: "Amazing Ninja Strike Anti Break",
    badge: "HOT",
    badgeColor: "bg-red-500",
    image: antibreakImg,
    className: "Ninja",
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
    id: "acc-4",
    title: "Strike Archer com Epics",
    badge: "NEW",
    badgeColor: "bg-emerald-500",
    image: archerwagnerImg,
    className: "Archer",
    prices: [{ label: "Preço", value: "50K CPS" }],
    sections: [
      {
        title: "Atributos",
        items: ["Arquivos 50 - max - Max", "26k donate"],
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
    id: "acc-6",
    title: "Ninja 437K Rune Score Premium",
    badge: "HOT",
    badgeColor: "bg-red-500",
    image: ninjajoaoImg,
    className: "Ninja",
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
    id: "acc-11",
    title: "🥷 Ninja Break Volcano",
    badge: "NEW",
    badgeColor: "bg-emerald-500",
    image: ninjaBreakImg,
    className: "Ninja",
    prices: [{ label: "Preço", value: "35K CPS" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "0 Jail",
          "Serve Volcano 💥",
          "28B de Donation",
          "Full Coroa P7 fixo -7",
          "Relic 2x P-Attack",
          "Inner Power Full 3500 score",
          "Jhiang Grade 15",
          "Chi Full (P-Attack, Break, M-HP, Immunity)",
          "Ninpo Score 39040",
          "Astrage 85% Nivel 4",
        ],
      },
      {
        title: "Runas",
        items: [
          "Rune Points 195500",
          "Runa Creditada",
          "Sky Veil",
        ],
      },
      {
        title: "Equipamentos",
        items: [
          "Set Tortoise",
          "Cap",
          "Neck",
          "Armor",
          "Boots",
        ],
      },
      {
        title: "Archives",
        items: [
          "Arquivo Trojan 77675",
          "Arquivo Monk lvl 20 all",
        ],
      },
      {
        title: "WarDrobe",
        items: [
          "146 Garments",
          "82 Mounts",
        ],
      },
      {
        title: "HairStyles",
        items: [
          "FantasyBall",
          "Rat",
          "XmasSnow",
          "FreshLotus",
          "RedSnow",
          "DelicateFox",
          "MagicPoker",
          "NightofFear",
          "PumpKinHead",
          "DragonFire",
          "Nebula",
          "Cloud",
        ],
      },
    ],
  },
  {
    id: "acc-12",
    title: "Archer/Ninja 129",
    badge: "NEW",
    badgeColor: "bg-emerald-500",
    image: archer129Img,
    className: "Archer",
    prices: [
      { label: "Preço", value: "12K CPS" },
      { label: "Ou", value: "R$ 600,00" },
    ],
    sections: [
      {
        title: "Atributos",
        items: ["Archer/Ninja 129", "0 Jail"],
      },
    ],
  },
  {
    id: "acc-13",
    title: "Water Taoist 127",
    badge: "NEW",
    badgeColor: "bg-emerald-500",
    image: water22Img,
    className: "Taoist",
    prices: [
      { label: "Preço", value: "5K CPS" },
      { label: "Ou", value: "R$ 250,00" },
    ],
    sections: [
      {
        title: "Atributos",
        items: ["0 Jail"],
      },
    ],
  },
  {
    id: "acc-14",
    title: "Archer (Break Build)",
    badge: "NEW",
    badgeColor: "bg-emerald-500",
    image: archerBreakImg,
    className: "Archer",
    prices: [{ label: "Preço", value: "8K CPS" }],
    sections: [
      {
        title: "Atributos",
        items: ["Archer (Break Build)", "0 Jail"],
      },
    ],
  },
  {
    id: "acc-16",
    title: "Ninja Break",
    badge: "NEW",
    badgeColor: "bg-emerald-500",
    image: ninjaBreak2Img,
    className: "Ninja",
    prices: [{ label: "Preço", value: "A combinar" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "Chi full break (strike retrátil)",
          "260k de runa",
          "1 runa do site (Conqueror)",
          "Slash break",
        ],
      },
      {
        title: "Equipamentos",
        items: [
          "1 relíquia break 3x full",
          "1 relíquia P-Attack 3x full",
          "5 Mythsoul L5 com mutação",
          "2 Mythsoul L4",
        ],
      },
      {
        title: "Archives",
        items: [
          "Arquivo de Trojan 80k",
          "Arquivo de Monk 15/15/15",
        ],
      },
    ],
  },
  {
    id: "acc-15",
    title: "Pirata (Boa oportunidade de entrada)",
    badge: "NEW",
    badgeColor: "bg-emerald-500",
    image: pirataImg,
    className: "Pirata",
    prices: [{ label: "Preço", value: "4K CPS" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "Servidor: Sunshine",
          "0 Jail",
          "Pode ser: Warrior / Dune / Trojan",
        ],
      },
    ],
  },
  {
    id: "acc-17",
    title: "Ninja/Pirata RChif",
    badge: "NEW",
    badgeColor: "bg-emerald-500",
    image: ninjaPirateRchifImg,
    className: "Ninja",
    prices: [{ label: "Preço", value: "125K CPS" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "40B Donate",
          "1 Jail",
          "Stun e Slash Sigil",
          "Gold Trophy",
          "Arquivo de Pirata Full",
        ],
      },
      {
        title: "Runas",
        items: [
          "3 Runas do site",
          "1 Azul Water",
          "335K de Runa",
        ],
      },
      {
        title: "Equipamentos",
        items: [
          "4 Itens Unbound",
          "3 Relic Ressonance",
        ],
      },
    ],
  },
  {
    id: "acc-18",
    title: "Sell Water",
    badge: "NEW",
    badgeColor: "bg-emerald-500",
    image: waterSellImg,
    className: "Taoist",
    prices: [
      { label: "Preço", value: "14K CPS" },
      { label: "Com Relic 2x Immu", value: "15K CPS" },
    ],
    sections: [
      {
        title: "Atributos",
        items: [
          "Slot runa atualizada",
          "Faltando 1 slot de runa pra abrir",
        ],
      },
    ],
  },
  {
    id: "acc-19",
    title: "Decente Archer Epic",
    badge: "EPIC",
    badgeColor: "bg-purple-500",
    image: archerEpicImg,
    className: "Archer",
    prices: [{ label: "Preço", value: "38K CPS" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "Lv. 140 Sacred Star Archer P1",
          "P-Strike: 275.80%",
          "Break: 86.5%",
          "Rune Points: 181.200",
          "Huntress Artemis P7 100%",
          "Conqueror Xiang Yu P7 100%",
        ],
      },
    ],
  },
  {
    id: "acc-20",
    title: "Archer Intermediário",
    badge: "INTERMEDIÁRIO",
    badgeColor: "bg-blue-500",
    image: archerRuneImg,
    className: "Archer",
    prices: [{ label: "Preço", value: "95K CPS" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "Lv. 140 Sacred Star Archer P3",
          "P-Strike: 284.90%",
          "Break: 89.5%",
          "Rune Points: 270.300",
          "Gold Trophy",
          "Relic Brilliant Force 3x P-Strike",
        ],
      },
    ],
  },
  {
    id: "acc-21",
    title: "Decente Water",
    badge: "DECENTE",
    badgeColor: "bg-cyan-500",
    image: decenteWaterImg,
    className: "Taoist",
    prices: [{ label: "Preço", value: "105K CPS" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "Lv. 140 Sacred Star Water Taoist P3",
          "P-Strike: 49.70%",
          "Break: 47.5%",
          "Anti-break: 289.1%",
          "Rune Points: 259.700",
          "Warmaster Lady P8",
          "StarChain (Water) Max",
          "Relic Fierce Tenacity 3x Immunity",
        ],
      },
    ],
  },
  {
    id: "acc-22",
    title: "Pirata Intermediário",
    badge: "INTERMEDIÁRIO",
    badgeColor: "bg-blue-500",
    image: pirataIntermediarioImg,
    className: "Pirata",
    prices: [{ label: "Preço", value: "125K CPS" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "Lv. 140 Ghost Pirate",
          "P-Strike: 257.90%",
          "Break: 106.5%",
          "Rune Points: 351.500",
          "49.4B Donation",
          "Huntress Artemis P9 100%",
          "Gold Trophy + Relic Brilliant Force",
          "Unbound Items + STG Gears",
        ],
      },
    ],
  },
  {
    id: "acc-23",
    title: "TOP Pirate",
    badge: "TOP",
    badgeColor: "bg-amber-500",
    image: topPirateImg,
    className: "Pirata",
    prices: [{ label: "Preço", value: "$4550 USD" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "Lv. 140 Death Pirate",
          "P-Strike: 138.30%",
          "Break: 288.9%",
          "Rune Points: 409.200",
          "90.1B Donation",
          "Huntress Artemis P9",
          "Pirate Rank Archive #1",
          "Unbound Gears Full",
          "New Relic +650 P-Attack / +2.05% Break",
          "FrostyHeart Plume + CelestialWings + EmeraldGlowWing",
        ],
      },
    ],
  },
  {
    id: "acc-24",
    title: "Water com Ideal Rune",
    badge: "IDEAL",
    badgeColor: "bg-cyan-500",
    image: waterIdealImg,
    className: "Taoist",
    prices: [{ label: "Preço", value: "125K CPS" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "Lv. 140 Wave Water Taoist",
          "P-Strike: 80.60%",
          "Break: 46.7%",
          "Anti-break: 288.3%",
          "Immunity: 256.10%",
          "Warmaster Lady P8 Celestial Taoist",
          "StarChain (Water) Max",
          "Demon Wings (Gory)",
        ],
      },
      {
        title: "Runas",
        items: [
          "Rune Points: 258.100",
          "New Rune x3 Immunity",
          "P7 DragonSoul (Internal Taoist)",
          "Lvl 6 Intensification +800",
        ],
      },
      {
        title: "Equipamentos",
        items: [
          "Gold Trophy Lv. 15",
          "Relic 3x Immunity (+0.20% cada)",
          "Socket Gem: SuperInfinityGem x2",
          "44.4B Donation",
        ],
      },
    ],
  },
  {
    id: "acc-25",
    title: "Ninja Break",
    badge: "BREAK",
    badgeColor: "bg-red-500",
    image: ninja2BreakImg,
    className: "Ninja",
    prices: [{ label: "Preço", value: "50K CPS" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "Lv. 140 Sacred Star Ninja P4",
          "P-Strike: 117.60%",
          "Break: 305.5%",
          "Anti-break: 61.0%",
          "Immunity: 226.87%",
          "0 Jail",
          "VIP 7 Owner",
          "Frost Phoenix Wings",
        ],
      },
      {
        title: "Runas",
        items: [
          "Rune Points: 260.100",
          "260K Runa",
          "1 Runa Rara (Conqueror's Blade)",
          "1 Ideal",
          "Stun + Slash Sigil",
        ],
      },
      {
        title: "Equipamentos",
        items: [
          "40B Donation",
          "Gold Trophy Lv. 15",
          "Gears STG",
          "Steed +12 Lineage Lv. 12",
          "Ninpo Score: 38034",
        ],
      },
    ],
  },
  {
    id: "acc-26",
    title: "Ninja HW e Stun",
    badge: "TOP",
    badgeColor: "bg-amber-500",
    image: ninjaHwStunImg,
    className: "Ninja",
    prices: [
      { label: "CPS", value: "45K CPS" },
      { label: "PIX", value: "R$ 2.000" },
    ],
    sections: [
      {
        title: "Atributos",
        items: [
          "0 Jail",
          "Serve Crystal",
          "18B de Donation",
          "Full Coroa P7 Fixo -7",
          "Inner Powerpoint 2900 Score",
          "Chi Full (P-Attack, Immunity, Break, Max-HP)",
        ],
      },
      {
        title: "Runas",
        items: [
          "Rune Score: 172K",
          "Arquivo Monk 20 - 20 - 20",
          "Ninpo Score: 38.700",
          "Sigil BloodLine HW",
          "Infinite Mist",
          "Stun",
        ],
      },
      {
        title: "Equipamentos",
        items: [
          "WardRobe: 162",
          "Mount: 67",
          "Astrage 70% Nível 3",
        ],
      },
    ],
  },
  {
    id: "acc-27",
    title: "Water 29B Donation",
    badge: "TOP",
    badgeColor: "bg-amber-500",
    image: water29biImg,
    className: "Taoist",
    prices: [{ label: "Preço", value: "A combinar" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "29B Donation",
          "Water Taoist",
          "0 Jail",
          "Trojan Archive 100K",
          "Astread 90% - 65%",
        ],
      },
      {
        title: "Runas",
        items: [
          "Rune Score: 255K",
          "1 Ideal",
          "Archive Max",
          "4 Credit Yellow (Silent Blade, Impregnability, Solidness, Circle of Life)",
          "1 Credit Blue (Soulreap Lv. 27)",
        ],
      },
      {
        title: "Equipamentos",
        items: [
          "Hossu Unbound + 2 Gem Super",
          "Steed Unbound",
        ],
      },
    ],
  },
  {
    id: "acc-28",
    title: "Archer/Pirate 26B Donation",
    badge: "TOP",
    badgeColor: "bg-amber-500",
    image: archer26biImg,
    className: "Archer",
    prices: [{ label: "Preço", value: "A combinar" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "26B Donation",
          "Archer / Pirate",
          "Strike / Immunity (Break on Retreat)",
          "0 Jail",
          "1 Cup",
          "Astread 90% - 80%",
          "Have Action and Footprint",
        ],
      },
      {
        title: "Runas",
        items: [
          "Rune Score: 312K",
          "1 Ideal",
          "5 Credit Yellow",
          "1 Credit Blue",
          "Archer Archive: Max - 42 - Max",
          "Pirate Archive: 4M",
          "Monk Archive: 20 - 20 - 20",
        ],
      },
      {
        title: "Equipamentos",
        items: [
          "1 Unbound Max Violet Shield",
        ],
      },
    ],
  },
];

export const CLASS_OPTIONS = [
  "Ninja",
  "Warrior",
  "Taoist",
  "Archer",
  "DragonWarrior",
  "Thunder Strike",
  "Trojan",
  "Pirata",
  "Dune Wanderer",
] as const;

export type GameClass = (typeof CLASS_OPTIONS)[number];

export function getClassCounts(accounts: AccountListing[]) {
  const counts: Record<string, number> = {};
  for (const cls of CLASS_OPTIONS) {
    const count = accounts.filter((a) => a.className === cls).length;
    if (count > 0) counts[cls] = count;
  }
  return counts;
}
