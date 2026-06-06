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
import waterOpImg from "@/assets/water-op.jpg";
import ninjaOpBreakImg from "@/assets/ninja-op-break.jpg";
import opNinjaHwStunImg from "@/assets/op-ninja-hw-stun.png";
import ninjaHwFullCrownImg from "@/assets/ninja-hw-full-crown.jpg";
import waterFullUnboundImg from "@/assets/water-full-unbound.jpg";
import ninjaLucianoImg from "@/assets/ninja-luciano.jpg";
import monkEagleImg from "@/assets/monk-eagle.png";
import ninjaMercuryImg from "@/assets/ninja-mercury.png";
import archerFatalImg from "@/assets/archer-fatal.png";
import ninjaHwSupermanImg from "@/assets/ninja-hw-superman.png";
import ninjaBreakLowImg from "@/assets/ninja-break-low.png";
import waterLowImg from "@/assets/water-low.png";
import waterDellImg from "@/assets/water-dell.png";
import ninjaHwBreakBuildImg from "@/assets/ninja-heavenwonders-break.png";



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
    id: "acc-13",
    title: "Water Taoist 127",
    badge: "NEW",
    badgeColor: "bg-emerald-500",
    image: water22Img,
    className: "Taoist",
    prices: [
      { label: "Preço", value: "3K CPS" },
      { label: "Ou", value: "R$ 150,00" },
    ],
    sections: [
      {
        title: "Atributos",
        items: ["0 Jail"],
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
    id: "acc-30",
    title: "OP Break ninja",
    badge: "OP",
    badgeColor: "bg-red-500",
    image: ninjaOpBreakImg,
    className: "Ninja",
    prices: [{ label: "Preço", value: "A combinar" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "Lv. 140 Dusk Ninja",
          "Break: 302.1% (+10%)",
          "Anti-break: 72.3% · M-Strike: 62.5%",
          "Immunity: 256.14% · P-Strike: 134.10%",
          "Final P-Attack: 13.664 · Final M-Attack: 9.554",
          "HP: 93.417 · Defense: 32.813",
        ],
      },
      {
        title: "Runas",
        items: [
          "Rune Points: 449.100",
          "Full Ideal Rune (Max em todos os slots)",
          "Ninpo Score: 35.653",
          "Sigil Album",
        ],
      },
      {
        title: "Equipamentos",
        items: [
          "Mounting Lineage Lv. 12 (+100% speed)",
          "Set +12 full sockets",
          "Mythsoul: 648",
          "8 Gates of Ninja Sprint Lv.9",
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
    id: "acc-32",
    title: "Ninja HW Full Crown",
    badge: "TOP",
    badgeColor: "bg-amber-500",
    image: ninjaHwFullCrownImg,
    className: "Ninja",
    prices: [
      { label: "CPS", value: "80K CPS" },
      { label: "PIX", value: "R$ 4.000,00" },
    ],
    sections: [
      {
        title: "Atributos",
        items: [
          "Ninja C/ HW Full Crown",
          "32B de Donation",
          "0 Jail",
          "Chi full (Break / HP / Immunity / P-attack)",
          "36k de Ninpo",
          "Inner power full",
          "Outlet 161/92",
          "Acessório Clan Draco + Action",
          "Astrege lvl 4 - lvl 3",
        ],
      },
      {
        title: "Runas",
        items: [
          "249.500 Score de runa",
          "Credit rune",
          "SilentBlade",
          "Tempered",
          "IronBone",
          "Main Sigils lvl Max",
        ],
      },
      {
        title: "Eon Spirit & Archives",
        items: [
          "Eon Spirit (Archer lvl 9 / Warrior lvl 8 / Taoist lvl 8)",
          "Monk Archives all 20-20-20",
        ],
      },
      {
        title: "Observações",
        items: [
          "Não acompanha Relíquia",
          "Não acompanha Set de Mythsoul",
        ],
      },
    ],
  },
  {
    id: "acc-33",
    title: "Water Full Unbound",
    badge: "NEW",
    badgeColor: "bg-emerald-500",
    image: waterFullUnboundImg,
    className: "Taoist",
    prices: [{ label: "Preço", value: "80K CPS" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "35 Bi de Donate",
          "Arquivos Water Full",
          "Arquivos Monk 20-20-20",
          "0 Jail",
        ],
      },
      {
        title: "Runas",
        items: [
          "271.600 Ranking de Runa",
        ],
      },
      {
        title: "Equipamentos",
        items: [
          "Hossu 2 Socket Gem Super -3 Unbound",
          "Relíquia Full 3 Immunity",
          "Gold Trophy",
          "2 Asas Raras",
        ],
      },
    ],
  },
  {
    id: "acc-34",
    title: "Ninja Perfeição 648 - Honor",
    badge: "NEW",
    badgeColor: "bg-emerald-500",
    image: ninjaLucianoImg,
    className: "Ninja",
    prices: [{ label: "Preço", value: "A combinar" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "Perfeição 648",
          "Chi full",
          "Inner power faltando as últimas páginas",
          "Servidor: Honor",
        ],
      },
      {
        title: "Runas",
        items: [
          "160K de Rune Score",
          "Faltando 1 slot de runa com 34 hammer",
        ],
      },
      {
        title: "Equipamentos",
        items: [
          "1 Epic Unbound P4 fixo",
        ],
      },
    ],
  },
  {
    id: "acc-35",
    title: "Monk Eagle Sacred Star P1",
    badge: "NEW",
    badgeColor: "bg-emerald-500",
    image: monkEagleImg,
    className: "Monk",
    prices: [{ label: "Preço", value: "13K CPS" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "Lv. 99 Sacred Star Monk P1",
          "5.245B Donation",
          "Total Rating: 101.500",
          "P-Strike: 124.60% · Break: 229.5%",
          "Anti-break: 91.1% · Immunity: 235.20%",
          "+Final P-Attack: 10.399 · +Final M-Attack: 6.899",
          "Mythsoul: 648",
        ],
      },
      {
        title: "Runas",
        items: [
          "Rune Points: 172.900",
          "Violet Shield (+9) Max",
          "SoulChant (+6) · FineRain (+14) · Rampage (+8)",
        ],
      },
      {
        title: "Equipamentos",
        items: [
          "LegendDemonScythe (+12) - P7ScytheSoul",
          "LegendNetherArmor (+12) - LightArmor",
          "LegendMoonHeadgear (+12) - P7HeadgearSoul [Immunity]",
          "Relic HeartlessSeal - 2x P-Attack +305/+303",
        ],
      },
      {
        title: "Inner Power",
        items: [
          "Dragon Lv99 · Tiger Lv99",
          "Divine North Skill A:8 B:6 C:9",
          "Violet Glow A:5 B:0 C:0",
        ],
      },
    ],
  },
  {
    id: "acc-36",
    title: "Ninja Mercury Sacred Sky P3",
    badge: "NEW",
    badgeColor: "bg-emerald-500",
    image: ninjaMercuryImg,
    className: "Ninja",
    prices: [{ label: "Preço", value: "8K CPS" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "Lv. 140 Sacred Sky Ninja P3",
          "26.582B Donation",
          "P-Strike: 107.70% · Break: 276.0%",
          "Anti-break: 58.1% · Immunity: 217.20%",
          "+Final P-Attack: 10.374 · +Final M-Attack: 6.864",
          "Mythsoul: 506",
        ],
      },
      {
        title: "Runas",
        items: [
          "Rune Points: 138.800",
          "Ninpo Score: 26.667",
          "Total Rating: 37.365",
          "Ninja Sprint completo",
        ],
      },
      {
        title: "Equipamentos",
        items: [
          "LegendSkyHammer (+12) - P7 1-handedSoul",
          "Relic HeartlessSeal - 2x P-Attack +278/+276 · Break +1.94%",
          "Mount Mercury · Astredge 90%/25%",
          "Eon Spirit P7/P8/P5/P6 100%",
        ],
      },
    ],
  },
  {
    id: "acc-37",
    title: "Archer FatalBlow Sacred Sea P9",
    badge: "NEW",
    badgeColor: "bg-emerald-500",
    image: archerFatalImg,
    className: "Archer",
    prices: [{ label: "Preço", value: "14K CPS" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "Lv. 129 Sacred Sea Archer P9",
          "14.548B Donation",
          "P-Strike: 252.10% · Break: 83.9%",
          "Anti-break: 218.6% · Immunity: 150.15%",
          "+Final P-Attack: 10.329 · +Final M-Attack: 6.829",
          "Max-HP +3500 · P-Strike +20% · Anti-Break +20% · Immunity +20%",
          "Mythsoul: 429",
        ],
      },
      {
        title: "Runas",
        items: [
          "Rune Points: 127.500",
          "Astredge 95% / 65%",
        ],
      },
      {
        title: "Equipamentos",
        items: [
          "LegendMulberryBow (+5) - Archer'sBow InternArcher",
          "FatalBlow mount",
          "Garments: Cloudbloom (Sweet) · Ashen Xmas (Miracle)",
          "Phoenix Grace pet",
        ],
      },
      {
        title: "Inner Power",
        items: [
          "Tiger Lv99 · Turtle Lv28",
          "Superb Manual · Violet Glow · Divine North Skill",
          "Stone Cracker Lv54 · Cold Moon Lv6 · Thorn Cutter Lv48",
        ],
      },
    ],
  },
  {
    id: "acc-38",
    title: "Ninja HW Superman Sacred Star P3",
    badge: "TOP",
    badgeColor: "bg-amber-500",
    image: ninjaHwSupermanImg,
    className: "Ninja",
    prices: [{ label: "Preço", value: "65K CPS" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "Lv. 99 Sacred Star Ninja P3",
          "36.451B Donation · Noble Rank: Duke",
          "Ranking: 28",
          "Break: 329.8% (com bônus) / 294.8% base",
          "Anti-break: 72.3% · Immunity: 231.50%",
          "P-Strike: 107.70% · M-Strike: 48.50%",
          "+Final P-Attack: 12.079 · +Final M-Attack: 8.649",
          "Mythsoul: 648",
        ],
      },
      {
        title: "Runas",
        items: [
          "Rune Points: 249.200",
          "Ninpo Score: 45.158",
          "Ideal Rune full Max",
          "Ninja Sprint Gates lvl 9",
          "Slash Sigil · FlashSlash Sigil (Prowess)",
          "My Potency: 345.280",
        ],
      },
      {
        title: "Equipamentos",
        items: [
          "Relic HeartlessSeal (Star Shock) - 2x P-Attack +650/+650",
          "Break +2.24% (x3)",
          "Pets: Sandsong · Phoenix Grace",
          "Astredge 95% / 70%",
          "Inventory: 3.261.174 silver · 11.243 bound",
        ],
      },
      {
        title: "Inner Power",
        items: [
          "Tiger Lv99 · Turtle Lv92 · Phoenix Lv99 · Dragon Lv99 - todos 400",
          "Superb Manual · Violet Glow · Divine North Skill (Perfect)",
          "Inner Power Concepts: Perfect em todas as páginas principais",
          "Eon Spirit P8/P7/P8 · P4/P7/P5 · P4/P3/P3 100%",
        ],
      },
    ],
  },
  {
    id: "acc-39",
    title: "Ninja Break Low Lvl",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: ninjaBreakLowImg,
    className: "Ninja",
    prices: [{ label: "Preço", value: "14K CPS" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "Lv. 109 Sacred Star Ninja P1",
          "CHI Full",
          "620 packs de Arena",
        ],
      },
      {
        title: "Equipamentos",
        items: [
          "Arma de 2 mãos 9 coroas 👑",
          "Roupa e Cap de Archer +6 Dual",
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
    id: "acc-42",
    title: "Ninja Heavenwonders | Break Build",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: ninjaHwBreakBuildImg,
    className: "Ninja",
    prices: [{ label: "Preço", value: "42k CPs (Negociável)" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "1 botjail",
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
