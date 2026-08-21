import ninjaBreakImg from "@/assets/ninja-break.jpeg";
import archer129Img from "@/assets/archer129.jpg";


import archerEpicImg from "@/assets/archer-epic.png";
import decenteWaterImg from "@/assets/decente-water.png";
import waterIdealImg from "@/assets/water-ideal.png";
import waterOpImg from "@/assets/water-op.jpg";

import waterLowImg from "@/assets/water-low.png";
import sellWaterMaxArchiveImg from "@/assets/sell-water-max-archive.png";

import ninjahw from "@/assets/ninjahw.jpg";
import nicholas from "@/assets/nicholas.jpg";
import decenteArcherImg from "@/assets/decente-archer.jpg";
import topWaterArchivesFullImg from "@/assets/top-water-archives-full.jpg";
import beastWaterImg from "@/assets/beast-water.jpg";
import archerWarrior45bImg from "@/assets/archer-warrior-45b.png";
import waterMulti28bImg from "@/assets/water-multi-28b.png";
import waterFire12kImg from "@/assets/water-fire-12k.png";
import waterFireMax16kImg from "@/assets/water-fire-max-16k.png";
import ninjaSacredStarP2Img from "@/assets/ninja-sacred-star-p2.png";
import archerSacredStarP2Img from "@/assets/archer-sacred-star-p2.png";
import ninjaSacredStar254kImg from "@/assets/ninja-sacred-star-p2-254k.png";
import monkSacredStarP1Img from "@/assets/monk-sacred-star-p1.png";

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
    id: "acc-75",
    title: "Archer Sacred Star P2 — 26B Donation",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: archerSacredStarP2Img,
    className: "Archer",
    prices: [{ label: "Preço", value: "A combinar" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 140 Sacred_Star_ArcherP2",
          "Donation: 26.082.533.333",
          "Noble Rank: Countess",
          "403 BP | Mythsoul 648",
          "Rune Points: 181.900",
        ],
      },
      {
        title: "Atributos",
        items: [
          "HP: 88.727 | Magic: 1.200",
          "Attack: 50.369 ~ 51.678 | Defense: 27.628",
          "M-Attack: 23.374 | M-Defense: 12.165",
          "Dodge: 104 | Agility: 1.171 | Accuracy: 200",
          "Attack: 210% | M-Def: 94% | Blessed: 57%",
          "Final P-Attack: +10.510 | Final M-Attack: +6.960",
          "Final P-Damage: -10.550 | Final M-Damage: -6.225",
          "P-Strike: 150.06% | Block: 30.00%",
          "Break: 260.2% | Anti-Break: 70.1% | M-Strike: 47.20%",
          "Immunity: 217.10% | Penetration: 15.00%",
          "Detoxication: 72% | Parry: 7.00% | Lucky Strike: 7.00%",
          "Resistências: Metal 80 / Wood 80 / Water 80 / Fire",
        ],
      },
      {
        title: "Runas & Bônus",
        items: [
          "Runas Main em Max (ciclo completo)",
          "Stage Bonus: HP 3700 | P-Atk 1500 | M-Atk 2600",
          "P-Strike 12.00% | M-Strike 10.00% | Break 15.00% | Anti-Break 15.00% | Immunity 12.00%",
          "Recognition 90% / 70%",
        ],
      },
      {
        title: "Gear & Skills",
        items: [
          "Equipamentos +12 com sockets",
          "Stone Cracker Lv 41 | Thorn Cutter Lv 56",
          "Sigilos P9 47% / P7 100% / P7 100% / P5 100% / P6 100% / P6 0% / P6 0% / P4 0% / P4 0%",
        ],
      },
    ],
  },
  {
    id: "acc-76",
    title: "Ninja Sacred Star P2 — Ninpo 33.959",
    badge: "TOP",
    badgeColor: "bg-amber-500",
    image: ninjaSacredStar254kImg,
    className: "Ninja",
    prices: [{ label: "Preço", value: "A combinar" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 140 Sacred_Star_NinjaP2",
          "Contribution: 24.543.605.554 | Noble Rank: Countess",
          "VIP Level 6 | 390 BP | Mythsoul 648",
          "Ninpo Score: 33.959",
          "Rune Points: 254.700",
          "Jiang Hu: Score 81.000 | Grade 15 | Talent 4",
        ],
      },
      {
        title: "Atributos",
        items: [
          "HP: 76.861 | Magic: 1.200",
          "Attack: 53.337 ~ 56.683 | Defense: 32.085",
          "M-Attack: 24.284 | M-Defense: 8.051",
          "Dodge: 104 | Agility: 1.073 | Accuracy: 246",
          "Attack: 210% | M-Def: 106% | Blessed: 57%",
          "Final P-Attack: +11.172 | Final M-Attack: +7.308",
          "Final P-Damage: -10.775 | Final M-Damage: -6.425",
          "P-Strike: 118.60% | Block: 30.00%",
          "Break: 274.1% | Anti-Break: 73.6% | M-Strike: 47.30%",
          "Immunity: 230.30% | Penetration: 15.00%",
          "Detoxication: 72% | Parry: 7.00% | Lucky Strike: 7.00% | Dash Rate: 1.50%",
        ],
      },
      {
        title: "Equipamentos",
        items: [
          "SacredSkyHammer (+12) — P7 1-handed Soul, Lv 140",
          "Attack 5215~7013 | Agility +23 | Speed 36",
          "Lvl 5 Breakthrough: +9% | P-Strike 6.00% | Accuracy +23 | Attack +3432 | Break 12.0%",
          "2 Socket Gems: DragonGem (Attack +15% cada)",
          "Steed (+8)(B) Maroon~Steed — Lineage 310 | Attack 10-10 | HP +100 | Vigor 30",
          "Sky Veil (+9) Max | Alternate Equipment completo",
        ],
      },
      {
        title: "Sigilos & Skills",
        items: [
          "Sigilos: P8 0% / P7 100% / P7 100% / P7 0% / P6 100% / P6 0%",
          "Chi: Tiger 400 | Phoenix 400 | Dragon 400 | Turtle 400",
          "Chi bônus: Max-HP +3500 | P-Attack +2000 | Immunity +20% | Break +20%",
          "Skills Fire/Water/Earth/Wind/Lightning Release e Bloodline",
        ],
      },
    ],
  },
  {
    id: "acc-77",
    title: "Monk Sacred Star P1 — Illusion Master",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: monkSacredStarP1Img,
    className: "Monk",
    prices: [{ label: "Preço", value: "A combinar" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 140 Sacred_Star_MonkP1",
          "Título: Illusion Master",
          "403 BP | Mythsoul 648",
          "Rune Points: 246.800",
        ],
      },
      {
        title: "Atributos",
        items: [
          "HP: 78.711 | Magic: 1.510",
          "Attack: 39.731 ~ 40.987 | Defense: 33.734",
          "M-Attack: 24.434 | M-Defense: 7.842",
          "Dodge: 104 | Agility: 1.105 | Accuracy: 223",
          "M-Def: 145% | Damage: 84% | Blessed: 56%",
          "Final P-Attack: +10.364 | Final M-Attack: +6.864",
          "Final P-Damage: -10.454 | Final M-Damage: -6.209",
          "P-Strike: 95.60% | Block: 30.00%",
          "Break: 135.6% | Anti-Break: 216.8% | M-Strike: 48.20%",
          "Immunity: 230.00% | Penetration: 15.00%",
          "Detoxication: 72% | Parry: 7.00% | Lucky Strike: 7.00%",
          "Dash Rate: 2.00% | Dodge Rate: 4.00% | Resist: 1.50%",
          "Resistências: Metal 105 / Wood 105 / Fire 105",
        ],
      },
      {
        title: "Runas, Chi & Sigilos",
        items: [
          "Runas Main em Max (ciclo completo)",
          "Chi: Dragon 400 | Phoenix 400 | Turtle 400 | Tiger 400",
          "Chi bônus: P-Attack +2000 | Max-HP +3500 | Break +20% | Immunity +20%",
          "Sigilos: P5 100% / P7 100% / P8 0% / P8 100% / P4 100% / P4 0% / P3 100% / P3 0% / P2 0%",
          "Jiang Hu: Cosmic 20 | Mighty 23 | Heavenly 25",
          "Equipamentos +12",
        ],
      },
    ],
  },
  {
    id: "acc-72",
    title: "Water/Fire — faltando 7 lv para fix archives",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: waterFire12kImg,
    className: "Taoist",
    prices: [{ label: "Preço", value: "12k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Water / Fire Taoist",
          "0 Jail",
          "Faltando 7 lv para fix archives",
          "Donation: 5.555.000.000",
          "Noble Rank: Earl",
          "394 BP | Mythsoul 364",
        ],
      },
      {
        title: "Atributos",
        items: [
          "Lv. 140 SacredSkyWaterTaoistP1",
          "HP: 75.660 | Magic: 6.600",
          "Attack: 19.949 ~ 19.957 | Defense: 32.011",
          "M-Attack: 30/17 | M-Defense: 8.439",
          "Dodge: 104 | Agility: 1.000 | M-Def: 107%",
          "Damage: 36% | Blessed: 50%",
          "Final P-Attack: +10.329 | Final M-Attack: +6.979",
          "Final P-Damage: -12.144 | Final M-Damage: -6.346",
          "P-Strike: 88.80% | Block: 30.00%",
          "Break: 7.67% | Anti-Break: 228.6%",
          "M-Strike: 43.20% | Immunity: 233.04% | Penetration: 25.00%",
          "Detoxication: 72.00% | Parry: 7.00% | Lucky Strike: 7.00%",
          "Dodge Rate: 12.00%",
          "Resistências: Metal 55 / Wood 55 / Fire 55",
        ],
      },
      {
        title: "Runas & Archives",
        items: [
          "Rune Points: 168.900",
          "Stage Bonus: HP 3700 | P-Atk 1500 | M-Atk 2600",
          "P-Strike 12.00% | M-Strike 10.00% | Break 15.00% | Anti-Break 15.00% | Immunity 12.00%",
          "Archives com vários Max (Score 13/100 em progressão)",
        ],
      },
    ],
  },
  {
    id: "acc-73",
    title: "Water/Fire Max Archives",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: waterFireMax16kImg,
    className: "Taoist",
    prices: [{ label: "Preço", value: "16k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Water / Fire Taoist",
          "Max Archives",
          "1 Jail",
          "492 BP | Mythsoul 492",
          "Recognition: 45%",
        ],
      },
      {
        title: "Atributos",
        items: [
          "Lv. 140 Sacred_Star_Fire_TaoistP3",
          "HP: 81.468 | Magic: 2.400",
          "Attack: 18.376 ~ 18.606 | Defense: 26.643",
          "M-Attack: 80.967 | M-Defense: 10.423",
          "Dodge: 53 | Agility: 1.000 | M-Attack: 105% | M-Def: 113%",
          "Damage: 24% | Blessed: 54%",
          "Final P-Attack: +10.684 | Final M-Attack: +10.984",
          "Final P-Damage: -16.089 | Final M-Damage: -9.741",
          "P-Strike: 92.60% | Block: 30.00% | Break: 7.60% | Anti-Break: 67.1%",
          "M-Strike: 73.20% | Immunity: 234.00% | Penetration: 47.00%",
          "Detoxication: 72.00% | Parry: 7.00% | Lucky Strike: 7.00%",
          "Resistências: Metal 80 / Wood 80 / Fire 80",
        ],
      },
      {
        title: "Equipamentos & Runas",
        items: [
          "LegendDivineBacksword (+12) Epic Weapon — Lv 100, 2 Socket Gems (Tortoise Gem)",
          "Perfection Progress: 1470/12000 | Enchanted HP: 255",
          "Rune Points: 216.900",
          "Runas Max: NatureShield +9, Barrier +9, BossKiller +9, FineRain +27, UniversalShield +9",
          "DivineShield +9, Deterrence +9, JusticeGuard +9",
          "Chi Full: 380 / 400 (Dissension, Turtle, Tiger, Phoenix)",
        ],
      },
    ],
  },
  {
    id: "acc-74",
    title: "Ninja Sacred Star P2 — 648 Mythsoul",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: ninjaSacredStarP2Img,
    className: "Ninja",
    prices: [{ label: "Preço", value: "A combinar" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Ninja Break Build",
          "403 BP | Mythsoul 648",
          "Ninpo Score: 35.997",
          "Recognition: 90% e 30%",
          "Steed (+12) Frostbite — Lineage Lv 12",
        ],
      },
      {
        title: "Atributos",
        items: [
          "Lv. 140 Sacred_Star_NinjaP2",
          "HP: 77.991 | Magic: 1.200",
          "Attack: 52.608 ~ 55.954 | Defense: 32.135",
          "M-Attack: 23.434 | M-Defense: 8.091",
          "Dodge: 104 | Agility: 1.073 | Accuracy: 246",
          "Attack: 210% | M-Def: 118% | Blessed: 57%",
          "Final P-Attack: +10.329 | Final M-Attack: +6.829",
          "Final P-Damage: -10.429 | Final M-Damage: -6.467",
          "P-Strike: 116.60% | Block: 30.00%",
          "Break: 274.1% | Anti-Break: 60.0%",
          "M-Strike: 47.20% | Immunity: 227.15% | Penetration: 15.00%",
          "Detoxication: 72.00% | Parry: 7.00% | Lucky Strike: 7.00%",
          "Resistências: Metal 80 / Wood 80 / Fire 80",
        ],
      },
      {
        title: "Runas & Ninpo",
        items: [
          "Rune Points: 202.700",
          "Stage Bonus: HP 3700 | P-Strike 12.00% | Break 15.00%",
          "Ninpo: Ninja Sprint — Sigil Upgrade disponível",
          "Bloodline Sigil: Paper Dance +6 (Score 1100)",
          "Acessórios: GloryFlag (B) e Blowfish (B)",
        ],
      },
    ],
  },
  {
    id: "acc-70",
    title: "Archer / Warrior — 45B Donation",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: archerWarrior45bImg,
    className: "Archer",
    prices: [{ label: "Preço", value: "35k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Archer / Warrior",
          "Servidor: Eagle",
          "0 Jail",
          "45B de Donation",
          "Full coroa P7 Fixo -7",
          "Jhiang Grade 15",
        ],
      },
      {
        title: "Equipamentos",
        items: [
          "Set Archer +12 P7 Knife / 1 Epic +12, a outra último Crystal",
          "Set Warrior +12 P7 Scepter e Scyther",
          "4x Acessórios Bound",
        ],
      },
      {
        title: "Progressão",
        items: [
          "Inner Power: 3100 score",
          "Rune Score: 241.300",
          "Chi Full: P-Attack, Immunity, Break, M-HP",
          "Astrage 90% Nível 4",
        ],
      },
      {
        title: "WarDrobe",
        items: ["165 Garments", "87 Mounts"],
      },
    ],
  },
  {
    id: "acc-71",
    title: "Water / Ninja / Warrior / Monk / Trojan — 28B Donation",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: waterMulti28bImg,
    className: "Taoist",
    prices: [{ label: "Preço", value: "30k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Water / Ninja / Warrior / Monk / Trojan",
          "Servidor: Dragon",
          "28B de Donation",
          "Full coroa P7 Fixo -7",
          "Jhiang Grade 15",
        ],
      },
      {
        title: "Equipamentos",
        items: [
          "Set Trojan +12 P7 Fix",
          "Set Ninja Epic +12 P7 Fix",
          "Shield e Scyther +12 P7",
          "Hossu +12 — Hossu +8 (1 Socket)",
          "Ring +12 P7 Coração",
          "Neck +12 Dual",
          "Boota +8 Socket",
          "4 Acessórios Vinculados",
          "Refinaria Neck / Ring / Boota Lv 6 Fixo",
        ],
      },
      {
        title: "Progressão",
        items: [
          "Inner Power: 2900 score",
          "Rune Score: 263.000",
          "Ninpo Score: 33K",
          "Chi Full: Final P-Damage, Immunity, Anti-Break, M-HP",
          "Astrage 65% Nível 3",
        ],
      },
      {
        title: "WarDrobe",
        items: ["198 Garments", "105 Mounts"],
      },
    ],
  },
  {
    id: "acc-69",
    title: "Beast Water",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: beastWaterImg,
    className: "Taoist",
    prices: [{ label: "Preço", value: "160k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Beast Water",
          "Noble Rank Princess",
          "Donation: 50.1B",
          "407 BP",
          "Preço: 160k CPs",
        ],
      },
      {
        title: "Atributos",
        items: [
          "Lv. 140 Sacred Star Water Taoist P5",
          "HP: 90.402 | Magic: 1.650",
          "Attack: 26.365 ~ 27.336 | Defense: 34.281",
          "M-Attack: 36.109 | M-Defense: 10.117",
          "Dodge: 104 | Agility: 1.027 | M-Def: 110%",
          "Damage: 72% | Blessed: 56%",
          "Final P-Attack: +10.824 | Final M-Attack: +13.284",
          "Final P-Damage: -19.737 | Final M-Damage: -13.097",
          "P-Strike: 101.40% | Block: 30.00% | Break: 67.9% | Anti-Break: 294.2%",
          "M-Strike: 68.00% | Immunity: 260.70% | Penetration: 25.00%",
          "Detoxication: 72.00% | Parry: 7.00% | Lucky Strike: 7.00%",
          "Dash Rate: 2.00% | Dodge Rate: 17.80% | Resist: 150%",
          "Resistências Elementais: Metal 80 / Wood 80 / Water 80 / Fire 80",
        ],
      },
      {
        title: "Progressão & Runas",
        items: [
          "Rune Points: 334.300 (648 Perfection)",
          "Recognition: 25% e 90%",
          "Inner Power: Super HP-Manual, Divine Spirit, Divine Swift Skill, The Essence of Vitality, The Essence of Magic",
          "Eon Spirit: Heaven 27 (P7 100%), Cosmic 26 (P6 100%), Cosmic 26 (P7 3%), P1 0%, P3 100%, P6 41%, P5 100%, P4 100%, P2 0%",
        ],
      },
    ],
  },
  {
    id: "acc-67",
    title: "Top Water Archives full",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: topWaterArchivesFullImg,
    className: "Taoist",
    prices: [{ label: "Preço", value: "120k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "1 Jail",
          "Water Archives Full",
          "Astral Edge: 90 - 80",
        ],
      },
      {
        title: "Atributos",
        items: [
          "Lv. 140 Surge Water Taoist",
          "405 BP (Myth Soul 648)",
          "HP: 90.495 | Magic: 2.650",
          "Attack: 25.560 ~ 26.531 | Defense: 34.148",
          "M-Attack: 34.486 | M-Defense: 9.852",
          "P-Strike: 116.10% | M-Strike: 77.40%",
          "Break: 64.4% | Anti-Break: 292.9%",
          "Immunity: 274.10% | Penetration: 25.00%",
          "Final P-Attack: +11.149 | Final P-Damage: -10.679",
          "Final M-Damage: +17.833 | Final M-Damage (Recebido): -8.963",
          "Detoxication: 72.00% | Dodge Rate: 17.40%",
          "Resistências: Metal 80 / Wood 80 / Water 80 / Fire 80",
        ],
      },
      {
        title: "Runas",
        items: [
          "Rune Points: 244.900",
          "Runas creditadas: Iron Bone, Silent Blade, Circle of Life, Solidness",
        ],
      },
      {
        title: "Progressão & Sub-Classes",
        items: [
          "Stone Cracker Lv 29",
          "Cold Moon Lv 26",
          "Thorn Cutter Lv 26",
          "Eon Spirit: P9 0%, P7 100%, P9 0%, P7 100%, P6 100%, P5 0%, P5 0%, P4 100%, P4 100%",
        ],
      },
    ],
  },
  {
    id: "acc-66",
    title: "Decente archer p/ quem está voltando a jogar",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: decenteArcherImg,
    className: "Archer",
    prices: [{ label: "Preço", value: "12k CPs" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "Lv. 140 SacredSkyArcherP3",
          "388 BP (Myth Soul 504)",
          "HP: 84.202",
          "Attack: 49.840 ~ 51.149",
          "Defense: 28.727",
          "M-Attack: 21.790 | M-Defense: 11.920",
          "P-Strike: 104.60% | M-Strike: 47.20%",
          "Break: 259.5% | Anti-Break: 59.4%",
          "Immunity: 220.00% | Penetration: 15.00%",
          "Final P-Attack: +10.688 | Final P-Damage: -10.872",
          "Final M-Attack: +6.829 | Final M-Damage: -6.149",
        ],
      },
      {
        title: "Chi",
        items: [
          "Dragon (Lv.99 - 400 Chi): P-Attack +2000, Immunity +20%, Max HP +3500, Break +20%",
          "Phoenix (Lv.99 - 400 Chi): P-Attack +2000, Break +20%, Immunity +20%, Max HP +3500",
          "Turtle (Lv.99 - 400 Chi): Immunity +20%, Max HP +3500, Break +20%, P-Attack +2000",
          "Tiger (Lv.99 - 400 Chi): Immunity +20%, Max HP +3500, Break +20%, P-Attack +2000",
        ],
      },
      {
        title: "Runas & Eon Spirit",
        items: [
          "Rune Points: 138.900",
          "Runas de Archer Maxadas",
          "Eon Spirit: P8 100%, P7 100% (2x), P5 100%, P3 100%, P2 100% (2x), P1 100%",
          "Recognition: 55%",
        ],
      },
      {
        title: "Sub-Classes & Equipamentos",
        items: [
          "Set Full +12 (2 Socs)",
          "Stone Cracker Lv 43",
          "Thorn Cutter Lv 45",
          "Cold Moon Lv 12",
        ],
      },
    ],
  },
  {
    id: "acc-65",
    title: "Beast Pirate P2",
    badge: "END GAME",
    badgeColor: "bg-purple-600",
    image: nicholas,
    className: "Pirata",
    prices: [{ label: "Preço", value: "260k CPs" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "1 Bot Jail",
          "Chi: HP, P-Attack, Strike e Immunity",
          "Chi Alternativo: Break",
          "7M Chi Score",
          "Inner Power: 3500 (Máximo)",
          "Gold Trophy",
        ],
      },
      {
        title: "Runas",
        items: [
          "Rune Score: 372.500 (40 Hammers)",
          "5 Ideals prontos + material para criar mais 4",
          "9 Yellow Rune Credits",
          "Adamant, Solidness, Tempered Glaive",
          "Conqueror's Blade, Circle, Silent Blade",
          "Front Break, Fearless, Whetted Blade",
          "Iron Bone e Sky Veil",
          "Violet Shield e Nature Shield",
          "Todas as Blue Runes (4 Credits)",
          "Runas Unbound: Evocation, Soul Chant e Sharpness",
        ],
      },
      {
        title: "Archives",
        items: [
          "Pirate: Full Max (2.8M Score)",
          "Main Sigils Maxados",
          "Warrior: 42 / Max / 12 (12.9M Score)",
          "Monk: 28 / 23 / 27",
          "Trojan: 100k",
        ],
      },
      {
        title: "Equipamentos",
        items: [
          "2 Weapons Unbound",
          "Armor Unbound",
          "Hat Unbound",
          "Steed Unbound",
          "Todos Full Perfection +12 P7",
          "4 Relic Resonance desbloqueadas",
          "1.800 Prism Stones investidas",
          "Diversos acessórios extras",
        ],
      },
      {
        title: "Extras",
        items: [
          "30 Bilhões de Donation",
          "Acompanha 2.000 CPs (Bound)",
          "Supreme ativo neste trimestre e no próximo",
          "175 Free Training Pills",
          "100 Knowledge Pills para Jiang Hu",
          "Conta vendida sem os Myth Souls",
        ],
      },
    ],
  },

  {
    id: "acc-63",
    title: "Ótima oportunidade de Ninja c/ HeavenWonders",
    badge: "DESTAQUE",
    badgeColor: "bg-orange-500",
    image: ninjahw,
    className: "Ninja",
    prices: [{ label: "Preço", value: "55k CPs" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "Lv. 109 Sacred Star Ninja P2",
          "HP: 75.267",
          "Attack: 43.829 ~ 46.320",
          "Defense: 21.902",
          "M-Defense: 7.079",
          "Final P-Attack: 10.404",
          "Final M-Damage: 6.129",
          "P-Strike: 245.50%",
          "Break: 96.6%",
          "Anti-Break: 58.1%",
          "Immunity: 224.86%",
          "Penetration: 15%",
        ],
      },
      {
        title: "Progressão",
        items: [
          "Rune Points: 264.400",
          "Ninpo Score: 36.882",
          "Inner Power: 648",
          "Weapon Archives: 100.270",
          "Sacred Star P2",
        ],
      },
      {
        title: "Equipamentos",
        items: [
          "Set Full +12",
          "Superb Manual",
          "Violet Glow",
          "Divine North",
          "The Essence of Yin",
          "Myth Soul",
          "Wings of Slaughter",
        ],
      },
      {
        title: "Runas e Relíquias",
        items: [
          "P-Strike +4.00%",
          "P-Strike +4.00%",
          "Immunity +1.66%",
          "2 atributos de P-Strike",
          "Durability: 87/90",
        ],
      },
      {
        title: "Eon Spirit",
        items: [
          "Gate of Rest: Lv. 9",
          "Gate of Pain: Lv. 9",
          "Gate of View: Lv. 5",
          "Gate of Death: Lv. 8",
          "Gate of Dawn: Lv. 8",
          "Gate of Life: Lv. 5",
          "Gate of Limit: Lv. 9",
          "Gate of Shock: Lv. 9",
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
    prices: [{ label: "Preço", value: "18k CPs" }],
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
      { label: "Preço", value: "9k CPS" },
      { label: "Ou", value: "R$ 450.00" },
    ],
    sections: [
      {
        title: "Atributos",
        items: ["Archer/Ninja 129", "0 Jail"],
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
    id: "acc-29",
    title: "Ótima oportunidade Water account",
    badge: "PREMIUM",
    badgeColor: "bg-cyan-500",
    image: waterOpImg,
    className: "Taoist",
    prices: [{ label: "Preço", value: "A combinar" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "Lv. 127 Sacred Sky Water Taoist P1",
          "5.09B Donation",
          "Warmaster Lady P8 · Victorious Buddha P6",
          "Conqueror Xiang Yu P2 · Huntress Artemis P6",
          "Anti-break: 319.5% · Immunity: 237.5%",
          "P-Strike: 89.4% · Break: 36%",
        ],
      },
      {
        title: "Runas",
        items: [
          "Rune Points: 140.200",
          "Iron Bone (+9) Yellow",
          "Circle of Life (+9) Yellow",
          "SoaringSpirit DragonSoul P7 · Lvl 6",
        ],
      },
      {
        title: "Equipamentos",
        items: [
          "Full set +12 (LegendStarTower, KylinBoots, OxhideArmor)",
          "LegendHeavenFan, LightNecklace, RidingCrop, CopperKing",
          "Steed +12 Lineage 1619",
          "Spotless Feather wings",
        ],
      },
      {
        title: "Inner Power",
        items: [
          "Superb Manual · Violet Glow · Divine North Skill",
          "The Essence of Yin",
          "Dragon Lv99 · Turtle Lv99 · Phoenix Lv65 · Tiger Lv97",
          "Recognition: 90% / 40%",
        ],
      },
    ],
  },


  {
    id: "acc-40",
    title: "Water Low Lv",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: waterLowImg,
    className: "Taoist",
    prices: [{ label: "Preço", value: "5K CPS" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "Lv. 98 Sacred Sea Water Taoist P5",
          "Conta low level para evoluir",
        ],
      },
    ],
  },



  {
    id: "acc-53",
    title: "Sell Water Max Archive 0 BJ",
    badge: "NEW",
    badgeColor: "bg-emerald-500",
    image: sellWaterMaxArchiveImg,
    className: "Taoist",
    prices: [{ label: "Preço", value: "A combinar" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "Lv. 140 Sacred Star Water Taoist P1",
          "Archive Max",
          "0 BJ",
          "Rank Score Rune: 263k",
          "Break: 30.00% · Immunity: 266.30%",
          "P-Strike: 103.80% · Anti-break: 52.6%",
          "Mythsoul: 648",
        ],
      },
      {
        title: "Runas",
        items: [
          "3 Rare Runes",
          "Adamant +9",
          "Solidness +9",
          "Circle of Life +9",
          "Nature Shield +9 (Unbound)",
          "Soul Reap +27",
        ],
      },
      {
        title: "Equipamentos",
        items: [
          "Rare Wings Premium",
          "Gold Cup (Gold Trophy)",
          "Relic 3x Immunity (in 3x Immunity)",
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
  "Monk",
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
