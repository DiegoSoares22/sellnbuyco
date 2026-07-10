import archerwagnerImg from "@/assets/archerwagner.jpg";
import ninjajoaoImg from "@/assets/ninjajoao.jpg";
import ninjaBreakImg from "@/assets/ninja-break.jpeg";
import archer129Img from "@/assets/archer129.jpg";

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
import turquoiseImg from "@/assets/turquoise.png";
import ninjaLucianoImg from "@/assets/ninja-luciano.jpg";
import monkEagleImg from "@/assets/monk-eagle.png";
import ninjaMercuryImg from "@/assets/ninja-mercury.png";
import archerFatalImg from "@/assets/archer-fatal.png";
import ninjaHwSupermanImg from "@/assets/ninja-hw-superman.png";
import ninjaBreakLowImg from "@/assets/ninja-break-low.png";
import waterLowImg from "@/assets/water-low.png";
import waterDellImg from "@/assets/water-dell.png";
import sellArcherBreakImg from "@/assets/sell-archer-break.png";
import opNinjaStrikeAntibreakImg from "@/assets/op-ninja-strike-antibreak.jpg";
import ninjaHwStun42kImg from "@/assets/ninja-hw-stun-42k.jpg";
import topNinja129Img from "@/assets/top-ninja-129.jpg";
import ninjaImg from "@/assets/ninja.png";
import waterImg from "@/assets/water.png";
import archerSacredSkyEagleImg from "@/assets/archer-sacred-sky-eagle.png";
import sellWaterMaxArchiveImg from "@/assets/sell-water-max-archive.png";
import ninjaHeavenwonders42kImg from "@/assets/ninja-heavenwonders-42k.png";
import archer140_16biImg from "@/assets/archer-140-16bi.png";
import ninjaLowLvEventsImg from "@/assets/ninja-low-lv-events.jpg.asset.json";
import sellWaterFullCrownImg from "@/assets/sell-water-full-crown.png.asset.json";
import ninjaLv140Img from "@/assets/ninja-lv140.png.asset.json";
import water648Img from "@/assets/water-648-perfection.png.asset.json";




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
    id: "acc-33",
    title: "Water Full Unbound",
    badge: "NEW",
    badgeColor: "bg-emerald-500",
    image: waterFullUnboundImg,
    className: "Taoist",
    prices: [{ label: "Preço", value: "75K CPS" }],
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
    prices: [{ label: "Preço a combinar", value: "14k CPs" }],
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
    id: "acc-45",
    title: "Sell archer break",
    badge: "NEW",
    badgeColor: "bg-emerald-500",
    image: sellArcherBreakImg,
    className: "Archer",
    prices: [{ label: "Preço", value: "26K CPS" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "Full Coroa - 648 Perfection",
          "Arquivos principais full",
          "Chi full",
          "32B de Donation",
          "0 BJ",
          "142 Garments",
          "3 - 5 Stars",
          "84 Mounts",
        ],
      },
      {
        title: "Runas",
        items: [
          "Runas de Archer lvl max",
          "Iron Bone lvl 6",
          "Slot de runas all open",
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
    id: "acc-47",
    title: "OP Ninja for sale(Heavenwonders + Stun)",
    badge: "OP",
    badgeColor: "bg-red-500",
    image: opNinjaStrikeAntibreakImg,
    className: "Ninja",
    prices: [{ label: "Preço", value: "410k CPs" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "build: Strike & AntiBreak",
          "1 jail",
          "105b donate",
          "Relic ressonance done",
          "inner power fixed",
          "SVIP next quarter",
        ],
      },
      {
        title: "Runas",
        items: [
          "3 ideal runes",
          "6 credit runes",
          "Missing 2 new rare blue runes",
        ],
      },
      {
        title: "Archives",
        items: [
          "Monk: 20-20-21",
          "Trojan: 100k",
          "Ninja: 30.805",
        ],
      },
      {
        title: "Equipamentos & Extra",
        items: [
          "2 Gold trophy",
          "Unbound stuffs: 2x weapons 9 crowns(ninja), cap ninja, boot, steed",
          "Astredge: 100% - 95% - 50%",
          "EON Spirit: Celestial Archer lv9 - Warmaster lady lv8 - Conqueror xiang yu lv8 - Victorious Buddha lv6",
        ],
      },
    ],
  },
  {
    id: "acc-48",
    title: "Ninja HW Stun 42k Ninpo",
    badge: "NEW",
    badgeColor: "bg-emerald-500",
    image: ninjaHwStun42kImg,
    className: "Ninja",
    prices: [{ label: "Preço", value: "255K CPS" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "Lv. 140 Sacred Star Ninja P7",
          "86B Donation",
          "Astredge 100% - 90% - 20%",
          "P-Strike: 131.60% · Break: 274.30%",
          "Immunity: 252.80% · Anti-break: 59.1%",
          "HW Stun (HeavenWonders + Stun)",
        ],
      },
      {
        title: "Runas",
        items: [
          "Rune Points: 346.000",
          "7 Runas amarelas do site",
        ],
      },
      {
        title: "Ninja Sprint",
        items: [
          "Ninpo Score: 42.662",
          "Gates lvl 9",
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
    id: "acc-50",
    title: "Decente Water",
    badge: "OPORTUNIDADE",
    badgeColor: "bg-emerald-500",
    image: waterImg,
    className: "Taoist",
    prices: [{ label: "Preço", value: "9k CPs" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "Decente water(Ótima oportunidade de entrada)",
          "Lv. 140 SacredSkyWaterTaoistP3",
          "M-Strike: 71.25% · Break: 55.2%",
          "Immunity: 238.90% · Anti-break: 267.6%",
          "P-Strike: 73.00% · Penetration: 29.00%",
          "Final M-Attack: 8.889 · Final M-Damage: 7.659",
        ],
      },
      {
        title: "Chi & Inner Power",
        items: [
          "Chi Full (Tiger 400, Turtle 400, Dragon 400, Phoenix 400)",
          "Superb Manual (Perfect) · Violet Glow (Perfect) · Divine North Skill (Perfect)",
          "Jiang Hu Grade 15 (Talent A 4)",
        ],
      },
      {
        title: "Equipamentos & Runas",
        items: [
          "Rune Points: 163.500",
          "LegendUniversalLotus (+12) - P7 DragonSoul",
          "Taoist Tool Score 13.500 / 13.700 (Max)",
          "Viodragon Club Recognition 60%",
        ],
      },
      {
        title: "Extras & Cosméticos",
        items: [
          "Asas: VioletLightning, StarlightWings, VioletCloudWing, NeonRhythm, MoonlightWings, AmberMelody",
          "FrozenFantasy (Glaze) Garment",
          "PK Titles: Legendary, Grandmaster, Master",
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
    id: "acc-54",
    title: "Ninja com heavenwonders",
    badge: "NEW",
    badgeColor: "bg-emerald-500",
    image: ninjaHeavenwonders42kImg,
    className: "Ninja",
    prices: [{ label: "Preço", value: "42k CPs" }],
    sections: [
      {
        title: "Atributos",
        items: ["0 Jail"],
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
    id: "acc-56",
    title: "Ótima oportunidade para eventos Low Lv",
    badge: "OPORTUNIDADE",
    badgeColor: "bg-emerald-500",
    image: ninjaLowLvEventsImg.url,
    className: "Ninja",
    prices: [{ label: "Preço", value: "125K CPS" }],
    sections: [
      {
        title: "Atributos",
        items: [
          "Lv. 119 Ninja Master P7",
          "0 Jail",
          "P-Strike: 261.90% · Break: 30.00%",
          "Anti-break: 312.6% · Immunity: 132.68%",
          "M-Strike: 47.80% · Block: 88.1%",
          "Final P-Attack: 12.659 · Final M-Attack: 9.089",
          "Ninpo Score: 31.780",
          "Rune Points: 87.800",
        ],
      },
      {
        title: "Runas",
        items: [
          "Violet Shield (+9) Max",
          "Iron Bone (+9) Max",
          "Universal Shield (+3)",
          "Strike Booster · Enormous Crusher · Conqueror's Blade",
          "Might (+1) · Whetted Blade (+1) · Fearless (+1)",
        ],
      },
      {
        title: "Equipamentos",
        items: [
          "Legend Monster Saber (+12)",
          "Original Nobunaga's Cracking Claw",
          "Original Myth Katana",
          "Super Crying Heavy Ring (+8)",
        ],
      },
      {
        title: "Inner Power",
        items: [
          "The Essence of Yang (A/B/C)",
          "Viodragon Club · Love Forever · Heart Lock",
          "Recognition: 95% / 90% / 50%",
        ],
      },
    ],
  },
  {
    id: "acc-57",
    title: "Sell Water Full Crouwn",
    badge: "NEW",
    badgeColor: "bg-emerald-500",
    image: sellWaterFullCrownImg.url,
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
