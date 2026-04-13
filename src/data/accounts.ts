import antibreakImg from "@/assets/antibreakstrike.png";
import ninja1Img from "@/assets/ninja1.png";
import archerwagnerImg from "@/assets/archerwagner.jpg";

import ninjajoaoImg from "@/assets/ninjajoao.jpg";
import ninjamichelImg from "@/assets/ninjamichel.jpg";


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
    id: "acc-2",
    title: "OP Ninja Strike Full Build",
    badge: "TOP",
    badgeColor: "bg-amber-500",
    image: ninja1Img,
    className: "Ninja",
    prices: [{ label: "Preço", value: "200K CPS" }],
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
    id: "acc-8",
    title: "Ninja com Sigil FlashBreak",
    badge: "NEW",
    badgeColor: "bg-emerald-500",
    image: ninjamichelImg,
    className: "Ninja",
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
        items: ["Set Tortoise"],
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
