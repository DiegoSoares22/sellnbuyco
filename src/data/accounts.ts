import antibreakImg from "@/assets/antibreakstrike.png";
import archerwagnerImg from "@/assets/archerwagner.jpg";
import ninjajoaoImg from "@/assets/ninjajoao.jpg";
import archerFullCrownImg from "@/assets/archer-full-crown.jpeg";
import ninjaBreakImg from "@/assets/ninja-break.jpeg";
import archer129Img from "@/assets/archer129.jpg";
import water22Img from "@/assets/water22.jpg";
import archerBreakImg from "@/assets/archer-break.jpg";



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
    id: "acc-10",
    title: "Archer Full Crown",
    badge: "NEW",
    badgeColor: "bg-emerald-500",
    image: archerFullCrownImg,
    className: "Archer",
    prices: [{ label: "Preço", value: "30K CPS" }],
    sections: [
      {
        title: "Atributos",
        items: ["Archer Full Crown", "31B Donation", "0 Jail"],
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
