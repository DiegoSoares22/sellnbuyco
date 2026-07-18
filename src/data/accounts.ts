import archerwagnerImg from "@/assets/archerwagner.jpg";
import ninjaBreakImg from "@/assets/ninja-break.jpeg";
import archer129Img from "@/assets/archer129.jpg";


import archerEpicImg from "@/assets/archer-epic.png";
import decenteWaterImg from "@/assets/decente-water.png";
import pirataIntermediarioImg from "@/assets/pirata-intermediario.png";
import topPirateImg from "@/assets/top-pirate.png";
import waterIdealImg from "@/assets/water-ideal.png";
import archer26biImg from "@/assets/archer-26bi.jpg";
import waterOpImg from "@/assets/water-op.jpg";
import opNinjaHwStunImg from "@/assets/opNinjaHwStunImg.jpg";
import turquoiseImg from "@/assets/turquoise.png";

import waterLowImg from "@/assets/water-low.png";
import waterDellImg from "@/assets/water-dell.png";
import topNinja129Img from "@/assets/top-ninja-129.jpg";
import water2JailsImg from "@/assets/water-2jails.jpg";
import sellWaterMaxArchiveImg from "@/assets/sell-water-max-archive.png";

import archer140_16biImg from "@/assets/archer-140-16bi.png";
import sellWaterFullCrownImg from "@/assets/sell-water-full-crown.jpg";
import sellArcherBreakImg from "@/assets/sell-archer-break.png";
import jojomonkImg from "@/assets/jojomonk.jpg";
import rnspirata from "@/assets/rnspirata.jpg";
import ninjahw from "@/assets/ninja-hw.jpg";


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
    id: "acc-61",
    title: "Decente monk defensivo",
    badge: "DECENTE",
    badgeColor: "bg-cyan-500",
    image: jojomonkImg,
    className: "Monk",
    prices: [{ label: "Preço", value: "18k CPs" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "Lv. 140 Sacred Star Monk P2",
          "1 Jail",
          "HP: 76.349 · Rune Points: 191.300",
          "Anti-break: 304.8% · Immunity: 237.83%",
          "Break: 68.5% · P-Strike: 93.34%",
        ],
      },
      {
        title: "Equipamentos",
        items: [
          "Steed +12 (Lineage 12) Unbound",
          "9 coroas unbound",
          "World Cup Trophy Lv. 15",
        ],
      },
    ],
  },
  {
    id: "acc-62",
    title: "Pirata Break",
    badge: "DESTAQUE",
    badgeColor: "bg-red-500",
    image: rnspirata,
    className: "Pirata",
    prices: [{ label: "Preço", value: "65k CPs" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "Build Break",
          "Chi Full: Break, Immunity, HP, P-Attack",
          "Jiang Hu: Full",
          "Inner Power: 3200",
          "Rune Score: 30.330",
          "Rare Runes: Iron Bone, Sky Veil",
          "Rune Ideal: 3",
        ],
      },
      {
        title: "Progressão",
        items: [
          "Gold Trophy",
          "Relic Resonance: Break / P-Attack",
          "Astral Edge: 95, 75",
          "Eon Spirit: Lv. 9, Lv. 8, Lv. 8, Lv. 8, Lv. 6",
          "Donation: 19B",
        ],
      },
      {
        title: "Archives",
        items: [
          "Trojan: 100k",
          "Archer: 31, 21, 23",
          "Water: Todos Lv. 30",
          "Warrior: 41, 35, 12",
          "Pirate: Todos Full",
        ],
      },
    ],
  },
  {
    id: "acc-63",
    title: "Ninja P2 Break",
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
    id: "acc-60",
    title: "Sell Archer Break",
    badge: "NEW",
    badgeColor: "bg-emerald-500",
    image: sellArcherBreakImg,
    className: "Archer",
    prices: [{ label: "Preço", value: "15K CPS" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "Full coroa - 648 Perfection",
          "32B de Donation",
          "0 BJ (Jail)",
          "Chi full",
        ],
      },
      {
        title: "Runas",
        items: [
          "Runas de archer lvl max",
          "Iron Bone lvl 6",
          "Slot de runas all open (Todos abertos)",
        ],
      },
      {
        title: "Arquivos",
        items: [
          "Arquivos principais full",
        ],
      },
      {
        title: "WarDrobe",
        items: [
          "142 Garments",
          "84 Mounts",
          "3x 5-Stars",
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
    id: "acc-31",
    title: "OP Ninja for sale",
    badge: "OP",
    badgeColor: "bg-red-500",
    image: opNinjaHwStunImg,
    className: "Ninja",
    prices: [
      { label: "Sem MythSoul/Bag", value: "200K CPS" },
      { label: "Com tudo incluso", value: "250K CPS" },
    ],
    sections: [
      {
        title: "Atributos",
        items: [
          "HeavenWonders + Stun",
          "63B Donate",
          "Relic Ressonance done",
          "301K Rune Score",
          "Bound Gears",
          "1 Jail",
        ],
      },
      {
        title: "Runas",
        items: [
          "5 Credit Yellow Runes",
          "Circle of Life",
          "Solidness",
          "Conqueror Blade",
          "Tempered Glaive",
          "Whetted Blade",
          "1 Unbound Yellow Rune +8",
        ],
      },
      {
        title: "WardRobe",
        items: [
          "167 Garments",
          "106 Mounts",
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
    id: "acc-41",
    title: "Decent Water Taoist 196k Rune Score",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: waterDellImg,
    className: "Taoist",
    prices: [{ label: "Preço", value: "25K CPS" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "Lv. 140 Sacred Star Water Taoist P1",
          "Rune Score: 196.000 (Iron Bone & Nature Shield)",
          "0 Jail",
        ],
      },
      {
        title: "Runas",
        items: [
          "1 slot de runa faltando",
          "Só 51 hammers para completar",
        ],
      },
      {
        title: "Equipamentos",
        items: [
          "Hossu com 2 gens Super -3",
        ],
      },
      {
        title: "Archives",
        items: [
          "Max Taoist Archives",
          "Monk Archives: 20-20-20",
        ],
      },
    ],
  },

  {
    id: "acc-46",
    title: "Vende-se - Turquoise",
    badge: "NEW",
    badgeColor: "bg-emerald-500",
    image: turquoiseImg,
    className: "Warrior",
    prices: [{ label: "Preço", value: "R$ 230,00" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "Warrior 140",
          "JIANG: Alinhado",
          "CHI: 75%",
          "EPIC: Trojan",
          "0 JAIL",
        ],
      },
      {
        title: "Equipamentos",
        items: [
          "GARMENT: 1 X 5 STAR",
          "MOUNT: 1 X 5 STAR",
        ],
      },
      {
        title: "Observações",
        items: [
          "Não ACOMPANHA RELIC",
        ],
      },
    ],
  },
  {
    id: "acc-51",
    title: "Top Ninja lv129",
    badge: "TOP",
    badgeColor: "bg-red-500",
    image: topNinja129Img,
    className: "Ninja",
    prices: [{ label: "Preço", value: "270k CPs" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "Top ninja lv129",
          "1 Jail",
          "Lv. 129 Night Ninja",
          "P-Strike: 280.10% · Break: 88.1%",
          "Immunity: 130.70% · Anti-break: 304.1%",
          "M-Strike: 58.20% · Block: 30.00%",
          "Final P-Attack: 13.643 · Final M-Attack: 9.700",
          "Final P-Damage: 14.647 · Final M-Damage: 9.086",
        ],
      },
      {
        title: "Ninja Sprint & Runas",
        items: [
          "Ninpo Score: 43.535",
          "Gates Lv9 (Gate of Dawn, Gate of Rest, Gate of Life, Gate of Limit, Gate of Vow, Gate of Pain, Gate of Shock, Gate of Death)",
          "Rune Points: 355.800",
          "Sigil Album",
        ],
      },
      {
        title: "Equipamentos",
        items: [
          "Gold Trophy Lv. 15",
          "Relic: LoyalFirmness ImperialTripodVessel (Anti-break +4.00% x2)",
          "Steed +12 Lineage 12 (20.144 attack)",
          "LegendMonsterSaber +12 · LegendStarTower +12",
          "78B Donation · Noble Rank: Princess",
        ],
      },
      {
        title: "Astredge & Clubs",
        items: [
          "Viodragon Club Recognition 95% · Love Forever Recognition 45% · Heart Lock Recognition 45%",
          "Sphere Astredge Auto-activated (Rating 130+)",
          "Astredge Attack +15760 / +7875 · Astredge Defense +2625 / +250",
          "Tiger Chi Score: 400 · Seal Retreater Study Score: 400",
        ],
      },
      {
        title: "Cosméticos",
        items: [
          "SpringFestivalWings · Radiant Return · Phoenix Grace",
        ],
      },
    ],
  },

  {
    id: "acc-59",
    title: "Water com 2 jails",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: water2JailsImg,
    className: "Taoist",
    prices: [{ label: "Preço", value: "40k CPs" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "Lv. 140 Sacred Star Water Taoist P3",
          "2 Jails · 388 BP",
          "HP: 82.819 · Defense: 31.908",
          "P-Strike: 99.60% · Break: 60.5%",
          "Anti-break: 290.2% · Immunity: 253.00%",
          "M-Strike: 71.20% · Penetration: 29.00%",
          "Rune Points: 212.100",
          "Taoist Tool Max",
        ],
      },
      {
        title: "Chi & Inner Power",
        items: [
          "Chi: Tiger 400, Turtle 400, Dragon 400, Phoenix 399",
          "Inner Power Total Score: 3400",
          "Superb Manual · Violet Glow · Divine North Skill · Essence of Yin",
        ],
      },
      {
        title: "Equipamentos",
        items: [
          "LegendTornadoSword (+12) 2x TortoiseGem",
          "LegendNetherArmor (+12)",
          "LegendStarTower (+12)",
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
  {
    id: "acc-55",
    title: "Archer 140 - 16Bil Donation",
    badge: "TOP",
    badgeColor: "bg-amber-500",
    image: archer140_16biImg,
    className: "Archer",
    prices: [{ label: "Preço", value: "30k CPs" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "Archer 140 · 0 Jail",
          "16 Bil Donation (+ 20k CPs Bound)",
          "Lv 99 Gear · All gear P7, hat P6",
          "Material Astredge 90 - 35",
          "142 Ancient Flame",
          "Rank Rune 175K (1 Ideal) + 58 Hammers",
          "Pode reivindicar SVIP Platinum",
          "Faltam 2 Strike in Chi · Has Break in Retreat (em todos)",
          "Inner Power 2900 Score",
          "Ninpo Score 14900",
        ],
      },
      {
        title: "Archives & Eon Spirit",
        items: [
          "Archer Archive Max 45",
          "Monk Archive Max 20-20-21",
          "Trojan Archive 70K",
          "Eon Spirit: Archer 9 · Water 9 · Warrior 9 · Monk 8 · Dune 5",
        ],
      },
      {
        title: "Equipamentos & Extras",
        items: [
          "Variety of accessories",
          "100 MoonCliffMap UNBOUND Items (Steed Full Perf)",
          "Double Relic Strike",
          "60 Small Perm Stones",
          "Pode jogar Trojan · Ninja · Warrior",
          "Vendendo a conta sem Mythsouls",
        ],
      },
    ],
  },
  {
    id: "acc-57",
    title: "Sell Water Full Crouwn",
    badge: "NEW",
    badgeColor: "bg-emerald-500",
    image: sellWaterFullCrownImg,
    className: "Taoist",
    prices: [{ label: "Preço", value: "70K CPS" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "Lv. 140 Sacred Star Water Taoist",
          "0 JB",
          "Rune Score: 225.600",
          "Inner Power: 2.900",
          "Jhiang Grade 15",
          "Chi Full (Final P Dmg · Max HP · Anti-Break · Immunity)",
          "Outfit 67 Mount / 137 Garment",
        ],
      },
      {
        title: "Arquivos",
        items: [
          "Archives Water Full",
          "Archives Trojan 94k",
          "Archives Monk 20-28-30",
        ],
      },
      {
        title: "Runas",
        items: [
          "Rare rune NatureShield",
          "Credit rune SilentBlade",
          "Rune Points: 225.600",
        ],
      },
      {
        title: "Relíquia & Equipamentos",
        items: [
          "Relic 2x Anti-Break Full",
          "Hossu 2x Socket 2x Gem Ref -7",
        ],
      },
      {
        title: "Astredge & Skills",
        items: [
          "Astredge ativo",
          "Dragon Club Level 4",
          "Love Forever Level 2",
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
