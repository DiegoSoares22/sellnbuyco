import octoberAccount3Img from "@/assets/account-oct18-3.jpg";
import octoberAccount4Img from "@/assets/account-oct18-4.jpg";
import waterImg from "@/assets/water.jpg";
import decenteWaterImg from "@/assets/decente-water.png";
import waterIdealImg from "@/assets/water-ideal.png";
import pirateDeath488bpImg from "@/assets/pirate-death-488bp.webp";
import pirate100kImg from "@/assets/pirate-100k.jpg";

import pirataImg from "@/assets/pirata.jpg";
import ninjaArtemis451bpImg from "@/assets/ninja-artemis-451bp.jpg";
import archerTigerP7Img from "@/assets/archer-tiger-p7.jpg";
import waterDuchess458bpImg from "@/assets/water-duchess-458bp.jpg";
import fireorwaterImg from "@/assets/fireorwater.png";

import sellWaterMaxArchiveImg from "@/assets/sell-water-max-archive.png";


import topWaterArchivesFullImg from "@/assets/top-water-archives-full.jpg";
import waterFire12kImg from "@/assets/water-fire-12k.png";
import archerEpicOriginsImg from "@/assets/archer-epic-origins.png";
import archerBreak0JailImg from "@/assets/archer-break-0jail.png";
import archer1IdealRuneImg from "@/assets/archer-1-ideal-rune-lv140.webp";
import waterTaoistSnowWhite467bpImg from "@/assets/water-taoist-snowwhite-467bp.webp";
import waterTaoistVolcanoLv140Img from "@/assets/water-taoist-volcano-lv140.webp";
import warriorSunshineP5Img from "@/assets/warrior-sunshine-p5.png";
import archerSunshineP1Img from "@/assets/archer-sunshine-p1.png";
import ninjaHeavenwondersP2Img from "@/assets/ninja-heavenwonders-p2.png";
import ninjaHeavenwonders38kImg from "@/assets/ninja-heavenwonders-38k.webp";
import ninjaConquerorBladeImg from "@/assets/ninja-conqueror-blade.webp";
import archer2Epics1IdealRuneImg from "@/assets/archer-2-epics-1-ideal-rune.webp";
import ninjaPerfectHolygrailP8Img from "@/assets/ninja-perfect-holygrail-p8.webp";
import archer2EpicsWeapon1CreditRuneImg from "@/assets/archer-2-epics-weapon-1-credit-rune.webp";
import ninjaHolygrailHwImg from "@/assets/ninja-holygrail-hw.webp";
import ninjaPerfectBreakP8Img from "@/assets/ninja-perfect-break-p8.jpg";
import ninja4IdealRunesP4Img from "@/assets/ninja-4-ideal-runes-p4.jpg";
import ninjaHeavenwondersEpicP1Img from "@/assets/ninja-heavenwonders-epic-p1.jpg";
import ninjaHeavenwondersRetreatP8Img from "@/assets/ninja-heavenwonders-retreat-p8.jpg";
import fireTaoistPerfect521kImg from "@/assets/fire-taoist-perfect-521k.webp";
import ninjaPerfect111kNinpoImg from "@/assets/ninja-perfect-111k-ninpo.webp";
import ninjaIniciantesP1Lv109Img from "@/assets/ninja-iniciantes-p1-lv109.webp";
import archerIniciantesP3Img from "@/assets/archer-iniciantes-p3.webp";
import waterTaoistPerfectP5Img from "@/assets/water-taoist-perfect-p5-archives.webp";
import ninjaInicianteP3EarlImg from "@/assets/ninja-iniciante-p3-earl.webp";


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
    id: "acc-151",
    title: "Ninja p/ iniciante — 0 Jail",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: ninjaInicianteP3EarlImg,
    className: "Ninja",
    prices: [{ label: "Preço", value: "A combinar" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 140 Sacred_Star_NinjaP3",
          "Rune Points: 192.800 · Ninpo Score 42.880",
          "Earl (Donation: 23.692.089.994)",
          "0 Jail",
          "Preço: A combinar",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP 76.874 · Attack 53.392–56.738 · Defense 25.696",
          "Break 269,0% · P-Strike 107,60% · Immunity 213,97%",
          "Anti-break 58,1% · Block 30% · Blessed 57% · Detoxication 72%",
          "Final P-Attack 12.059 · Final P-Damage 12.705",
          "Resistências Metal / Wood / Water / Fire: 80",
        ],
      },
      {
        title: "Equipamentos, Runas & Progressão",
        items: [
          "Runas principais em Max · Gates Lv.9",
          "Viodragon Club Recognition 90% · Sphere Astredge Recognition 80%",
          "Mighty Dragon 15 · Heavenly Tiger 19 · Cosmic Roc 15",
          "Weapon Archives: Belt · Governor · Conception",
        ],
      },
    ],
  },
  {
    id: "acc-150",
    title: "Perfect Water c/ 4 credit runes — 0 Jail",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: waterTaoistPerfectP5Img,
    className: "Taoist",
    prices: [{ label: "Preço", value: "130k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 140 Sacred_Star_Water_TaoistP5",
          "4 runas credit · Max Archives",
          "Rune Points: 273.400 | Mythsoul 648",
          "Countess (Donation: 28.852.000.000)",
          "0 Jail",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP 88.362 · M-Attack 38.273 · Defense 32.613 · M-Defense 9.658",
          "M-Strike 85,70% · Immunity 266,80% · Anti-break 291,7% · Penetration 29%",
          "Block 30% · Blessed 52% · Detoxication 72%",
          "Final M-Attack 13.304 · Final M-Damage 13.102",
          "Resistências Metal / Wood / Water / Fire: 80",
        ],
      },
      {
        title: "Equipamentos, Runas & Progressão",
        items: [
          "Unbound · 2 socket gem · Super Hossu -3",
          "Runas principais em Max · Stage Bonus: HP 4.200 · P-Atk 2.300 · M-Atk 3.600 · P-Stk / M-Stk / Imm 15% · Break / Anti-Brk 15%",
          "Outer Gates 20 Heavenl / 20 Mighty / 20 Cosmic · Recognition: 90% · 90% · 25%",
          "Steed +12 (Blazehoof · Lineage 7.707)",
          "Sub-Classes: P8 100% · P8 100% · P7 100% · P7 100%",
        ],
      },
    ],
  },
  {
    id: "acc-149",
    title: "Decent Archer p/ iniciantes — 0 Jail",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: archerIniciantesP3Img,
    className: "Archer",
    prices: [{ label: "Preço", value: "16k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 140 Sacred_Star_ArcherP3",
          "Rune Points: 184.500 | Mythsoul 648",
          "Huntress Artemis (P9 Celestial Archer)",
          "Contribution: 13.455.000.000",
          "0 Jail",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP 86.497 · Attack 50.035–51.344 · Defense 28.603",
          "Break 258,8% · P-Strike 115,30% · Immunity 222,90%",
          "Anti-break 58,7% · Block 30% · Blessed 49% · Detoxication 72%",
          "Final P-Attack 10.214 · Final P-Damage 10.254",
          "Resistências Metal / Wood / Water / Fire: 80",
        ],
      },
      {
        title: "Equipamentos, Runas & Progressão",
        items: [
          "LegendArchonWand (+8) · P6 WandSoul · LegendMoonHeadgear (+12) · P7 HeadgearSoul",
          "Runas principais em Max · Recognition: 95% · 80%",
          "Inner Power: Superb Manual · Violet Glow · Divine North Skill · Essence of Yin",
          "Chi: Stone Cracker Lv.46 · Cold Moon Lv.27 · Thorn Cutter Max",
        ],
      },
    ],
  },
  {
    id: "acc-148",
    title: "Ninja p/ iniciantes — 0 Jail",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: ninjaIniciantesP1Lv109Img,
    className: "Ninja",
    prices: [{ label: "Preço", value: "9k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 109 Sacred_Star_NinjaP1",
          "Rune Points: 173.900 | Mythsoul 545",
          "LegendSkyHammer (+12) e SacredSkyHammer (+12) · P7 1-handedSoul",
          "Divine North Skill (A): Perfect",
          "0 Jail",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP 75.180 · Attack 43.748–46.218 · Defense 18.462",
          "Break 265,5% · P-Strike 111,60% · Immunity 224,65%",
          "Anti-break 58,2% · Block 30% · Blessed 57% · Detoxication 72%",
          "Final P-Attack 10.412 · Final P-Damage 10.489",
          "Resistências Metal / Wood / Water / Fire: 80",
        ],
      },
      {
        title: "Equipamentos, Runas & Progressão",
        items: [
          "Runas principais em Max · Stage Bonus: HP 3.700 · P-Atk 1.500 · M-Atk 2.600 · P-Stk / Imm 12% · Break / Anti-Brk 15%",
          "Inner Power: Superb Manual · Violet Glow · Divine North Skill · Essence of Yin",
          "Chi: Stone Cracker Lv.24 · Cold Moon Lv.7 · Thorn Cutter Lv.39",
          "Steed +11 (Lineage Level 11) · Viodragon Club Recognition 55%",
        ],
      },
    ],
  },
  {
    id: "acc-147",
    title: "Perfect Ninja Account 111k Ninpo — 0 Jail",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: ninjaPerfect111kNinpoImg,
    className: "Ninja",
    prices: [{ label: "Preço", value: "1400k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 140 Sacred_Star_NinjaP8 · HolyGrail",
          "HeavenWonders & Stun · Break ou Strike (on retreat)",
          "Ninpo 111.139 (Ranking 1) · Ninpo Score 60.172",
          "Rune Points: 540.700 · 19 runas amarelas e 5 azuis unbound · 25 amarelas credit · todas as azuis",
          "Prince (Donation: 252.944.999.997 — Ranking 7)",
          "0 Jail",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP 103.984 · Attack 65.047–68.753 · Defense 33.225",
          "Break 270,1% · P-Strike 150,31% · Immunity 290,80%",
          "Anti-break 76,0% · Block 30% · Blessed 57% · Detoxication 72%",
          "Final P-Attack 13.350",
          "Resistências Metal / Wood / Water / Fire: 80",
        ],
      },
      {
        title: "Equipamentos, Runas & Progressão",
        items: [
          "Gear unbound (exceto asas e montaria)",
          "Relíquias +9: Silent Blade · StrikeBooster · DeadlySight · TortoiseBreaker · Healer · Sturdiness",
          "Gates Lv.9 · Yutang Point Lv.12 · Dazhui Point Lv.11 · Weidao Point Lv.9",
          "Asas: Golden Papilio (Fancy) · HolyWings · CelestialWings · Supreme",
          "Sub-Classes: P9 100% · P9 100% · P9 100% · P9 100% · P8 100% · P7 100%",
        ],
      },
    ],
  },
  {
    id: "acc-146",
    title: "Perfect Fire Taoist 521k rune score — 0 Jail",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: fireTaoistPerfect521kImg,
    className: "Taoist",
    prices: [{ label: "Preço", value: "1650k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 140 Spark Fire Taoist",
          "Rune Points: 521.500 · 13 runas Ideal · 20 runas amarelas credit · todas as runas azuis",
          "Princess (Donation: 360.313.999.981 — Ranking 4)",
          "112k essences · Lineage 2.000.000 · Rankings altos em Archives",
          "0 Jail",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP 111.955 · M-Attack 105.049 · Defense 29.661 · M-Defense 12.347",
          "M-Strike 106,20% · Immunity 302,80% · Break 156,3% · Penetration 73%",
          "Anti-break 82,1% · Block 30% · Blessed 56% · Detoxication 72%",
          "Final M-Attack 17.315 · Final M-Damage 15.862",
          "Resistências Metal / Wood / Water / Fire: 80",
        ],
      },
      {
        title: "Equipamentos, Runas & Progressão",
        items: [
          "Runas principais em Max · Stage Bonus: HP 18.000 · P-Atk 7.800 · M-Atk 9.000 · P-Stk / M-Stk / Imm 25% · Break / Anti-Brk 25%",
          "SENSE · ARMED · OVERLORD Lv.9 · Dragonhowl · Bloodlust · Redcourse Lv.32",
          "Outer Gates 52 Heavenl / 51 Mighty / 54 Cosmic · Mythsoul 648",
          "Huiyin Point Lv.21 · Weidao Point Lv.20 · Zhongshu Point Lv.20",
          "Steed +12 · Asas: Dragon Flight · Astral Thunder · Golden Papilio (Fancy)",
          "Sub-Classes: P9 100% · P9 100% · P9 100% · P9 100% · P9 100%",
        ],
      },
    ],
  },
  {
    id: "acc-145",
    title: "Ninja c/ Heavenwonders (Break/Strike on retreat) — 1 Jail",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: ninjaHeavenwondersRetreatP8Img,
    className: "Ninja",
    prices: [{ label: "Preço", value: "305k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 140 Sacred_Star_NinjaP8",
          "HeavenWonders + Stun · Break / Strike on retreat",
          "Rune Points: 420.200 · 4 runas amarelas unbound",
          "Princess (Donation: 106.621.000.996 — Ranking 13) · 35k CPs bound",
          "1 Jail",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP 91.929 · Attack 64.176–67.882 · Defense 32.861",
          "Break 288,8% · P-Strike 144,70% · Immunity 243,70%",
          "Anti-break 89,0% · Block 30% · Blessed 57% · Detoxication 72%",
          "Final P-Attack 12.699 · Final P-Damage 14.203",
          "Resistências Metal / Wood / Water / Fire: 80",
        ],
      },
      {
        title: "Equipamentos, Runas & Progressão",
        items: [
          "LegendSkyHammer (+12) · P7 1-handedSoul · LegendRocBoots (+12) · P3 BootsDragonSoul · Steed +12",
          "Runas principais em Max · 2 Ressonâncias · Stage Bonus: HP 12.000 · P-Atk 6.000 · M-Atk 6.000 · P-Stk / M-Stk / Imm 22,5% · Break / Anti-Brk 25%",
          "Gates Lv.9 · Outer Gates 20 Heavenl / 21 Mighty / 20 Cosmic · Mythsoul 648",
          "Recognition: 100% · 95% · 60%",
          "Sub-Classes: P9 100% · P8 100% · P8 100% · P7 100%",
        ],
      },
    ],
  },
  {
    id: "acc-144",
    title: "Ninja c/ Heavenwonders (1x Epic weapon) — 0 Jail",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: ninjaHeavenwondersEpicP1Img,
    className: "Ninja",
    prices: [{ label: "Preço", value: "25k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 140 Sacred_Star_NinjaP1",
          "Heaven's Wonder (Bloodline Sigil Lv.9)",
          "1x Epic weapon: LegendDemonScythe (+12) · P7 ScytheSoul",
          "Rune Points: 193.800",
          "Earl (Donation: 50.652.000.000)",
          "0 Jail",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP 75.320 · Attack 51.726–55.221 · Defense 31.210",
          "Break 240,4% · P-Strike 116,90% · Immunity 210,60%",
          "Anti-break 59,8% · Block 30% · Blessed 57% · Detoxication 72%",
          "Final P-Attack 11.966 · Final P-Damage 12.304",
          "Resistências Metal / Wood / Water / Fire: 80",
        ],
      },
      {
        title: "Equipamentos, Runas & Progressão",
        items: [
          "Runas principais em Max · Stage Bonus: HP 3.700 · P-Atk 1.500 · M-Atk 2.600 · P-Stk / M-Stk / Imm 12% · Break / Anti-Brk 15%",
          "Outer Gates 20 Heavenl / 20 Mighty / 20 Cosmic",
          "Sub-Classes: P7 100% · P7 100% · P6 100% · P6 100%",
        ],
      },
    ],
  },
  {
    id: "acc-143",
    title: "Ninja/Warrior/Pirate 4 ideal runes & bom donate — 0 Jail",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: ninja4IdealRunesP4Img,
    className: "Ninja",
    prices: [{ label: "Preço", value: "35k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 140 Sacred_Star_NinjaP4",
          "4 runas Ideal | Mythsoul 648",
          "Rune Points: 279.700",
          "Duchess (Donation: 78.341.000.100 — Ranking 44)",
          "0 Jail",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP 76.331 · Attack 51.484–54.830 · Defense 31.736",
          "Break 118,5% · P-Strike 246,50% · Immunity 216,20%",
          "Anti-break 58,1% · Block 30% · Blessed 41% · Detoxication 72%",
          "Final P-Attack 11.929 · Final P-Damage 11.208",
          "Resistências Metal / Wood / Water / Fire: 80",
        ],
      },
      {
        title: "Equipamentos, Runas & Progressão",
        items: [
          "Runas principais em Max · Stage Bonus: HP 4.200 · P-Atk 2.300 · M-Atk 3.600 · P-Stk / M-Stk / Imm / Break / Anti-Brk 15%",
          "SENSE Lv.7 · ARMED Lv.3 · OVERLORD Lv.3",
          "Recognition: 90% · 40%",
          "Sub-Classes: P9 100% · P9 100% · P9 100% · P8 100%",
        ],
      },
    ],
  },
  {
    id: "acc-142",
    title: "Perfect Break Account — 0 Jail",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: ninjaPerfectBreakP8Img,
    className: "Ninja",
    prices: [{ label: "Preço", value: "270k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 140 Sacred_Star_NinjaP8",
          "Break 295,1% | Mythsoul 648",
          "Rune Points: 353.500",
          "Prince (Donation: 78.299.999.985 — Ranking 11)",
          "0 Jail",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP 86.824 · Attack 63.313–67.019 · Defense 33.908",
          "Break 295,1% · P-Strike 118,70% · Immunity 272,40%",
          "Anti-break 77,5% · Block 30% · Blessed 57% · Detoxication 72%",
          "Final P-Attack 13.990 · Final P-Damage 15.068",
          "Resistências Metal / Wood / Water / Fire: 80",
        ],
      },
      {
        title: "Equipamentos, Runas & Progressão",
        items: [
          "Runas principais em Max · Stage Bonus: HP 6.500 · P-Atk 4.000 · M-Atk 4.600 · P-Stk / M-Stk / Imm 18%",
          "Relíquias +9: Supreme Armor · Honed Soul · Unbreakable · Battle Reaper",
          "Ninpo Score: 49.944 · Gates Lv.9 · Outer Gates 20 Heavenl / 20 Mighty / 20 Cosmic",
          "Recognition: 90% · 90% · 65%",
          "Sub-Classes: P8 100% · P8 100% · P7 100% · P6 100%",
          "Asas: Golden Papilio (Fancy) · VioletLightning · VioletCloudWing",
        ],
      },
    ],
  },
  {
    id: "acc-141",
    title: "Perfect Ninja c/ HeavenWonders & HolyGrail — 1 Jail",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: ninjaHolygrailHwImg,
    className: "Ninja",
    prices: [
      { label: "C/ runas unbound", value: "900k CPs" },
      { label: "Sem runas unbound", value: "550k CPs" },
    ],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 140 Sacred_Star_NinjaP8 (HolyGrail)",
          "HeavenWonders",
          "Mythsoul 648",
          "Rune Points: 495.500",
          "Princess (Donation: 232.985.555.546 — Ranking 5)",
          "1 Jail",
          "Estoque: 17 runas azuis unbound · 10 runas amarelas",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "Attack 63.137–66.843 · Defense 32.845 · Magic 1600",
          "Break 130,7% · P-Strike 304,80% · Immunity 288,70%",
          "Anti-break 91,3% · Blessed 57% · Detoxication 72%",
          "Final P-Attack 12.118 · Final P-Damage 12.417",
          "Resistências Metal / Wood / Water / Fire: 80",
        ],
      },
      {
        title: "Equipamentos, Runas & Progressão",
        items: [
          "Full set +12 com P-Souls (Moon Headgear · Nether Armor · Monster Saber)",
          "Runas principais em Max · Stage Bonus: HP 15.000 · P-Atk 6.800 · M-Atk 8.000",
          "4 Ressonâncias ativas com foco em P-Strike e Immunity",
          "Talismãs +12: Star Tower · Heaven Fan · Tempest Wing · Riding Crop (Synergized 3239 Pts)",
          "Ninpo Score: 43.271 · Chi: Stone Cracker Max · Thorn Cutter Max",
          "Wushu Adept Lv.17 · Dazhui e Yutang Mastery Lv.12 · Outer Gates 31 Cosmic / 31 Mighty / 31 Heavenl",
          "SENSE · ARMED · OVERLORD: Lv.9 · Asas: Golden Phoenix · Soaring Thunder · Luminous Plume",
        ],
      },
    ],
  },
  {
    id: "acc-140",
    title: "Ninja c/ HeavenWonders — 0 Jail",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: ninjaHeavenwonders38kImg,
    className: "Ninja",
    prices: [{ label: "Preço", value: "38k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 140 Sacred_Star_NinjaP2 (Fu Seeker)",
          "457 BP | Mythsoul 648",
          "Rune Points: 198.700",
          "HeavenWonders",
          "0 Jail",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP 78.609 · Attack 53.572–56.918 · Defense 33.871",
          "Break 263,2% · P-Strike 118,50% · Immunity 217,40%",
          "Anti-break 58,8% · Blessed 54% · Detoxication 72%",
          "Flame Ninja: Total Score 81.000 (Grade 15, Talent 4)",
          "Resistências Metal / Wood / Water / Fire: 80",
        ],
      },
      {
        title: "Equipamentos, Runas & Progressão",
        items: [
          "Full set +12 com P-Souls",
          "Runas principais em Max",
          "Chi: Turtle Lv.99 · Tiger Lv.99 · Dragon Lv.99 · Phoenix Lv.94 (2.296.793 Chi Pts)",
          "Selos: Fire / Water / Earth / Wind / Lightning (vários em MAX)",
          "Recognition: 95% · 80%",
        ],
      },
    ],
  },
  {
    id: "acc-139",
    title: "Archer c/ 2 epics weapon | 1 credit rune — 0 Jail",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: archer2EpicsWeapon1CreditRuneImg,
    className: "Archer",
    prices: [{ label: "Preço", value: "25k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 140 SacredSkyArcherP2 (servidor FatalBlow)",
          "2 Epic weapons | 1 Credit Rune",
          "388 BP | Mythsoul 361 | Rune Points: 154.400",
          "Noble Rank: King (Contribution: 19.414.999.998)",
          "0 Jail",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP 78.723 · Attack 48.167–50.959 · Defense 19.332",
          "Break 86,5% · P-Strike 227,40% · Immunity 208,10%",
          "Anti-break 59,9% · Blessed 57% · Detoxication 72%",
        ],
      },
      {
        title: "Equipamentos, Runas & Progressão",
        items: [
          "Full set +12 com P-Souls e gemas",
          "Runas principais em Max",
          "Talismãs +12: Fan · Tower · Riding Crop",
          "Talentos: Stone Cracker Lv.55 · Thorn Cutter Lv.36 · Dragonhowl Lv.31 · Bloodlust Lv.40",
          "Asas de fogo equipadas",
        ],
      },
    ],
  },
  {
    id: "acc-138",
    title: "Perfect Holygrail Ninja — 0 Jail",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: ninjaPerfectHolygrailP8Img,
    className: "Ninja",
    prices: [{ label: "Preço", value: "800k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 140 Sacred_Star_NinjaP8",
          "648 BP | Rune Points: 464.600",
          "Noble Rank: Prince (Donation: 327.281.222.219) — Ranking 4",
          "Runas ideais em Max (+9)",
          "0 Jail",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP 94.199 · Attack 63.788–67.494 · Defense 37.648",
          "Break 103,2% · P-Strike 299,80% · Immunity 150,21%",
          "Anti-break 289,5% · Blessed 57% · Block 30,00%",
        ],
      },
      {
        title: "Equipamentos, Runas & Progressão",
        items: [
          "Full set +12 com 2 sockets e gemas",
          "Runas em Max: XP Devourer · Supreme Armor · Invincible Resolve · Cosmic Balance · Unbreakable · Tortoise Predator · Battle Reaper · Honed Soul",
          "Talismãs Lendários +12: LegendHeavenFan · LegendStarTower · LegendRidingCrop",
          "Relíquia: [Loyal Firmness] ImperialTripodVessel — 4.529 Pts (Synergized)",
          "Steed +12 · Lineage 12 (945.928 pts) · Asas: Scorpius · FairyWings · VioletLightning · MoonlightWings",
        ],
      },
    ],
  },
  {
    id: "acc-137",
    title: "Archer c/ 2 epics | 1 ideal rune — 0 Jail",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: archer2Epics1IdealRuneImg,
    className: "Archer",
    prices: [{ label: "Preço", value: "40k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 140 Hawk Archer (servidor FatalBlow)",
          "2 Epic Archers | 1 Ideal Rune",
          "405 BP | Mythsoul 648",
          "Noble Rank: Duke (Donation: 24.143.999.998)",
          "0 Jail",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP 83.850 · Attack 53.350–56.142 · Defense 29.520",
          "Break 107,1% · P-Strike 280,30% · Immunity 231,00%",
          "Anti-break 73,0% · Blessed 57% · Block 30,00%",
        ],
      },
      {
        title: "Equipamentos, Runas & Progressão",
        items: [
          "Full set +12 com P-Souls",
          "Runas principais em Max · Stage Bonus completo",
          "Tortoise set no equipamento alternativo",
          "Asas: Sparrow Feather · Violet Lightning · Violet Cloud Wing",
          "Talentos: Sense Lv.9 · Overlord Lv.9 · Stone Cracker Lv.51 · Thorn Cutter Lv.45",
        ],
      },
    ],
  },
  {
    id: "acc-136",
    title: "Ninja c/ Conqueror Blade — 0 Jail",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: ninjaConquerorBladeImg,
    className: "Ninja",
    prices: [{ label: "Preço", value: "A combinar" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 140 Sacred_Star_NinjaP4 (servidor Storm)",
          "416 BP | Mythsoul 648",
          "Rune Points: 262.800",
          "Conqueror Blade",
          "0 Jail",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP 79.550 · Attack 56.497–59.843 · Defense 32.163",
          "Break 287,8% · P-Strike 117,60% · Immunity 229,30%",
          "Anti-break 73,3% · Blessed 57%",
        ],
      },
      {
        title: "Equipamentos, Runas & Progressão",
        items: [
          "Full set +12 com P-Souls",
          "Runas principais em Max · Stage Bonus completo",
          "Tortoise set no equipamento alternativo",
          "Astredge: Viodragon Club (ChaoticDance Lv.4) · Love Forever (EternalWarsoul Lv.3)",
          "Relíquia: Beads of Calm Sea — 7.296 Pts",
        ],
      },
    ],
  },
  {
    id: "acc-133",
    title: "Warrior Sacred Star P5 — Servidor Sunshine — 0 Jail",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: warriorSunshineP5Img,
    className: "Warrior",
    prices: [{ label: "Preço", value: "4k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 140 SacredSeaWarriorP5 (servidor Sunshine)",
          "402 BP | Mythsoul 239",
          "Noble Rank: Countess (Donation: 5.077.000.000)",
          "Rune Points: 108.700",
          "0 Jail",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP 74.094 · Attack 45.440–46.922 · Defense 30.267",
          "Break 112,4% · P-Strike 204,54% · Immunity 202,64%",
          "Cosmic 20 · Mighty 20 · Heavenl 23",
        ],
      },
      {
        title: "Equipamentos, Runas & Progressão",
        items: [
          "Full set +12 com P-Souls",
          "Runas principais em Max",
          "Chi: Dragon Lv.45 · Phoenix Lv.29 · Turtle Lv.26 (Study Chi)",
          "Recognition: 70%",
        ],
      },
    ],
  },
  {
    id: "acc-134",
    title: "Archer Sacred Star P1 — Servidor Sunshine — 0 Jail",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: archerSunshineP1Img,
    className: "Archer",
    prices: [{ label: "Preço", value: "4k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 140 SacredSeaArcherP1 (servidor Sunshine)",
          "399 BP | Mythsoul 170",
          "Noble Rank: Countess (Donation: 4.746.000.000)",
          "Rune Points: 83.900",
          "0 Jail",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP 75.278 · Attack 40.420–41.729 · Defense 19.360",
          "Break 232,9% · P-Strike 105,60% · Immunity 169,16%",
          "Stone Cracker Lv.15 · Thorn Cutter Lv.33",
        ],
      },
      {
        title: "Equipamentos, Runas & Progressão",
        items: [
          "Full set +12 com P-Souls",
          "Runas principais em Max",
          "Chi: Dragon Lv.54 · Phoenix Lv.81 · Turtle Lv.69 (Study Chi)",
          "Recognition: 60%",
        ],
      },
    ],
  },
  {
    id: "acc-135",
    title: "Ninja w/ Heavenwonders — 0 Jail",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: ninjaHeavenwondersP2Img,
    className: "Ninja",
    prices: [{ label: "Preço", value: "A combinar" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 140 Sacred_Star_NinjaP2 (Fu Seeker)",
          "457 BP | Mythsoul 648",
          "Rune Points: 198.700",
          "Heavenwonders",
          "0 Jail",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP 78.609 · Attack 53.572–56.918 · Defense 33.871",
          "Break 263,2% · P-Strike 118,50% · Immunity 217,40%",
          "Flame Ninja: Total Score 81.000 (Grade 15, Talent 4)",
        ],
      },
      {
        title: "Equipamentos, Runas & Progressão",
        items: [
          "Full set +12 com P-Souls",
          "Runas principais em Max",
          "Chi: Turtle Lv.99 · Tiger Lv.99 · Dragon Lv.99 · Phoenix Lv.94 (2.296.793 Chi Pts)",
          "Recognition: 95% · 80%",
        ],
      },
    ],
  },
  {
    id: "acc-131",
    title: "Water Taoist P3 — 467 BP — SnowWhite",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: waterTaoistSnowWhite467bpImg,
    className: "Taoist",
    prices: [{ label: "Preço", value: "150k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 129 Sacred_Star_Water_TaoistP3 (servidor SnowWhite)",
          "467 BP | Mythsoul 648",
          "Noble Rank: Countess (Donation: 14.319.711.111)",
          "Rune Points: 194.300",
          "10 Ideal Runes",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "StarChain (Water): Max",
          "Heavenl 31 · Mighty 31 · Cosmic 31",
        ],
      },
      {
        title: "Equipamentos, Runas & Progressão",
        items: [
          "Full set +12 com P-Souls",
          "Runas principais em Max",
          "Inventário: 287 runas vermelhas · 285 amarelas · 10 ideais",
          "Steed +12 (Pink Steed) · Lineage 12 · 30.250 points",
          "Chi: Turtle Lv.99 · Dragon Lv.99 · Tiger Lv.99 · Phoenix Lv.82 (400 Study Chi)",
          "Recognition: 95% · 30%",
        ],
      },
    ],
  },
  {
    id: "acc-132",
    title: "Water Taoist P3 — Lv 140 — Volcano",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: waterTaoistVolcanoLv140Img,
    className: "Taoist",
    prices: [{ label: "Preço", value: "25k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 140 SacredSkyWaterTaoistP3 (servidor Volcano)",
          "403 BP | Mythsoul 648",
          "Noble Rank: Earl (Donation: 7.761.000.000)",
          "Rune Points: 161.600",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "StarChain (Water): Max",
          "Cosmic 20 · Mighty 20 · Heavenl 23",
        ],
      },
      {
        title: "Equipamentos, Runas & Progressão",
        items: [
          "Full set +12",
          "SacredNetherArmor +12 (EternalRobe) · P7 Armor Soul [P-Defense]",
          "SacredStarHeadgear +12 (DistinctCap) · P7 Headgear Soul [Immunity]",
          "Runas: Sacrifice · Comprehension · Pitching · FrostArrows · Assassin · Acalanatha · TideTrap · SwingingTail · BurningSky",
          "Recognition: 30% · 90%",
        ],
      },
    ],
  },
  {
    id: "acc-129",
    title: "Archer 1 Ideal Rune — Lv 140 — 0 Jail",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: archer1IdealRuneImg,
    className: "Archer",
    prices: [{ label: "Preço", value: "25k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "0 Jail",
          "1 Ideal Rune",
          "Lv. 140 Sacred_Star_ArcherP1 (servidor Honor)",
          "464 BP | Mythsoul 643",
          "Noble Rank: Earl (Donation: 17.101.000.000)",
          "Rune Points: 174.300",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "P-Strike: 127.90% | Break: 307.0% | Anti-Break: 72.2%",
          "Immunity: 241.05% | Penetration: 15.00% | Block: 30.00%",
          "Recognition: 90% · 70%",
        ],
      },
      {
        title: "Equipamentos, Runas & Progressão",
        items: [
          "Full set +12",
          "Runas principais em Max (16 em Max)",
          "Ideal Collection: Thorn Cutter Lv.56 · Stone Cracker Lv.45 · Cold Moon Lv.27",
          "Astredge: P9 100% · P7 100% · P7 100% · P6 100% · P6 100%",
        ],
      },
    ],
  },
  {
    id: "acc-125",
    title: "Ninja Sacred Star P5 — 320k Rune Points — 1 Jail",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: octoberAccount3Img,
    className: "Ninja",
    prices: [{ label: "Preço", value: "90k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 140 Sacred_Star_NinjaP5",
          "1 Jail",
          "Perfection 648",
          "Rune Points: 320.300",
          "Ninpo Score: 44.316 (Ninja Sprint)",
          "Total Rating: 100.160"
        ]
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP: 81.428 | Attack: 61.341 ~ 65.047",
          "P-Strike: 103.60% | Break: 280.1%",
          "Immunity: 236.34% | Anti-Break: 76.3%"
        ]
      },
      {
        title: "Equipamentos, Runas & Progressão",
        items: [
          "Runas principais em Max",
          "Astredge: Viodragon Club 95% · Love Forever 90% · Heart Lock 50%",
          "Chi: Lv.99 — 400",
          "Wings: Starry Featherfall · Phoenix Grace",
          "Archives Perfect: Superb Manual · Violet Glow · Divine North · The Essence of Star"
        ]
      }
    ]
  },
  {
    id: "acc-126",
    title: "Ninja Sacred Star P5 — 332k Rune Points — 41B Donation",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: octoberAccount4Img,
    className: "Ninja",
    prices: [{ label: "Preço", value: "130k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 140 Sacred_Star_NinjaP5",
          "405 BP | Perfection 648",
          "Donation: 41.474.000.000",
          "Rune Points: 332.400",
          "Ninpo Score: 44.714 (Ninja Sprint)"
        ]
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP: 83.711 | Attack: 58.342 ~ 62.048",
          "Break: 275.5% | Immunity: 237.13%"
        ]
      },
      {
        title: "Equipamentos, Runas & Progressão",
        items: [
          "Astredge: Heart Lock 75% · Love Forever 95% · Viodragon Club 90%",
          "Wings: Starry Featherfall · Phoenix Grace · HolyWings",
          "Thorn Cutter Max · Cold Moon Max · Stone Cracker Max",
          "Jiang Hu: Cosmic 20 · Mighty 20 · Heaven 20",
          "Runas principais em Max"
        ]
      }
    ]
  },
  {
    id: "acc-104",
    title: "Archer break — 0 Jail — 25k CPs",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: archerBreak0JailImg,
    className: "Archer",
    prices: [{ label: "Preço", value: "25k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Servidor Honor",
          "0 Jail",
          "Preço: 25k CPs",
          "Lv. 140 Sacred_Star_ArcherP1",
          "B.P.: 443",
          "Noble Rank: Earl (Donation: 17.013.000.000)",
          "Perfection: 641",
          "Rune Points: 174.300",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP: 90.764",
          "Attack: 50.934 ~ 52.243 | Defense: 31.879",
          "Final P-Attack: +12.227 | Final P-Damage: -12.977",
          "P-Strike: 127.90% | Break: 306.8% | Anti-Break: 72.2%",
          "Immunity: 241.05% | M-Strike: 48.30% | Block: 30.00%",
          "Parry: 7.00% | Lucky Strike: 7.00% | Dash Rate: 1.00%",
        ],
      },
      {
        title: "Runas",
        items: [
          "Rune Points: 174.300",
          "Stone Cracker Lv 45 · Cold Moon Lv 27 · Thorn Cutter Lv 56",
          "Runas principais em Max",
          "Stage Bonus: HP +3.700 · P-Atk +1.500 · M-Atk +2.600",
          "Stage Bonus: P-Stk 12% · M-Stk 10% · Imm 12% · Break 15% · Anti.Brk 15%",
        ],
      },
      {
        title: "Equipamentos",
        items: [
          "Set completo +12 com bênção -7% dano",
          "Talismãs +12 (refino 8/8)",
          "Steeds: P9 100% · P7 100% (x2) · P6 100% (x2) · P5 0% · P4 0% · P3 0% (x2)",
        ],
      },
    ],
  },
  {
    id: "acc-101",
    title: "Archer epic c/ runa creditada [Servidor Origins/ApeMount]",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: archerEpicOriginsImg,
    className: "Archer",
    prices: [{ label: "Preço", value: "A combinar" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Archer epic com runa creditada (Ideal Collection)",
          "Servidor Origins / ApeMount",
          "Preço: A combinar",
          "Lv. 140 ArcherMasterP2 (Superman)",
          "B.P.: 407",
          "Rune Points: 164.500 (runas principais em Max)",
          "Perfection: 536",
          "Equipamento Solar Steel +12 (B) — 1-handed Weapon",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP: 69.492 | Magic: 1.692",
          "Attack: 47.070 ~ 51.698 | Defense: 27.070",
          "M-Attack: 20.208 | M-Defense: 5.939",
          "Dodge: 104 | Agility: 1.073 | Accuracy: 876",
          "Hit Rate: 210% | M-Det: 362% | P-Det: 621%",
          "Final P-Attack: +9.728 | Final M-Attack: +6.307",
          "Final P-Damage: +9.798 | Final M-Damage: +5.743",
          "P-Strike: 255.43% | Block: 11.00% | Break: 361.4%",
          "Anti-Break: 68.0% | M-Strike: 43.28%",
          "Immunity: 236.30% | Penetration: 15.00% | Detoxication: 72%",
          "Fury: 20% | Lucky Strike: 7.00%",
          "Resistências: Metal 80 / Wood 80 / Water 80",
        ],
      },
      {
        title: "Runas & Stage Bonus",
        items: [
          "Main: Sharpness +9 (Max) | Judgment +9 (Max) | BloodFeast +9 (Max)",
          "Healer +9 (Max) | XPBooster +9 (Max) | UniversalShield +9 (Max)",
          "Miracle Touch +8 | Conqueror's Blade +9 (Max) | Tortoise Breaker +9 (Max)",
          "Ideal Collection desbloqueada — runa creditada",
          "Stage Bonus: HP 3.700 | P-Atk 15.00 | M-Atk 2.600",
          "P-Stk 12.00% | M-Stk 10.00% | Imm 12.00%",
          "Break 15.00% | Anti-Brk 15.00%",
        ],
      },
    ],
  },
 {
    id: "acc-93",
    title: "Ninja Sacred Star P5 — 451 BP — Artemis P9 — 369k Runes",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: ninjaArtemis451bpImg,
    className: "Ninja",
    prices: [{ label: "Preço", value: "A combinar" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 140 Sacred_Star_NinjaP5",
          "451 BP (Noble Pioneer / Prince)",
          "Noble Rank: Prince (Donation: 58.753.944.438)",
          "Rune Points: 369.200",
          "Ninpo Score: 33.381",
          "Huntress Artemis: P9 Celestial Archer P9 100% Ativado",
          "Mega Phoenix Wings",
          "GoldTrophy Lv.15 (12 Gold Trophies)",
          "Recognition: 95% & 90%",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP: 85.278 | Magic: 1.500",
          "Attack: 58.101 ~ 61.807 | Defense: 32.597",
          "M-Attack: 27.144 | M-Defense: 8.720",
          "Final P-Attack: +12.364 | Final M-Attack: +8.814",
          "Final P-Damage: +13.497 | Final M-Damage: +8.613",
          "P-Strike: 150.48% | Block: 30.00%",
          "Break: 211.9% | Anti-break: 61.5%",
          "M-Strike: 56.20% | Immunity: 242.78% | Penetration: 15.00%",
          "Resistências: Metal 80 / Wood 80 / Water 80 / Fire 80",
        ],
      },
      {
        title: "Talisman, Asas & Sub-Classes",
        items: [
          "GoldTrophy Level 15 (P-Strike +1%, M-Strike +1%, Immunity +1%, Break +1%, Anti-break +1%, Resisting Dash +1.50%)",
          "Mega Phoenix Wings",
          "Sub-Classes: Superb Manual, Violet Glow, Divine North Skill, The Essence of Yin, The Essence of Yang",
          "Rune Points: 369.200 (Stage Bonus Maximizado)",
        ],
      },
    ],
  },
  {
    id: "acc-91",
    title: "Water Taoist — 458 BP Superman — Duchess 15B — 287% Anti-Break",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: waterDuchess458bpImg,
    className: "Taoist",
    prices: [{ label: "Preço", value: "A combinar" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 140 Surge Water Taoist",
          "458 BP (Superman)",
          "Noble Rank: Duchess (Donation: 15.402.000.000)",
          "Rune Points: 195.200",
          "Anti-break: 287.2% | Immunity: 245.70% | M-Strike: 89.20%",
          "Final P-Damage: +18.224 | Final M-Damage: +8.609",
          "Backsword & Lotus P7 Soul (+12)",
          "Relic: [Tenacity] BellOfDoom com Tenacity & Imunidade",
          "Recognition: 30%",
        ],
      },
      {
        title: "Atributos & Magia",
        items: [
          "HP: 83.263 | Magic: 2.950",
          "Attack: 22.556 ~ 23.527 | Defense: 33.832",
          "M-Attack: 30.428 | M-Defense: 9.914",
          "Final P-Attack: +11.534 | Final M-Attack: +10.734",
          "Final P-Damage: +18.224 | Final M-Damage: +8.609",
          "Anti-break: 287.2% | Immunity: 245.70%",
          "M-Strike: 89.20% | P-Strike: 56.60% | Break: 81.5%",
          "Penetration: 25.00% | Block: 30.00%",
          "Resistências: Metal 80 / Wood 80 / Water 80 / Fire 80",
        ],
      },
      {
        title: "Equipamentos & Sub-Classes",
        items: [
          "LegendTimeBacksword(+12) [P7 Backsword Soul, Magic Atk +4282, Lvl 5 Skill Critical Strike +12% Permanent, M-Strike 10.00%]",
          "LegendUniversalLotus(+12)(B) [P7 Dragon Soul, Magic Def +2240, Immunity 6.00%, P7 Anima BP +5, BonusAttribute +12%]",
          "Relic: [Tenacity] BellOfDoom (Immunity +4.00%(+0.10%), Tenacity +4.00%(+0.10%), Immunity: +0.1%)",
          "Sub-Classes: Superb Manual, Violet Glow, Divine North Skill, The Essence of Yin, Max, Evolution, Thrill, Birth-death",
        ],
      },
    ],
  },
  {
    id: "acc-90",
    title: "Archer Sacred Sea P7 — Lv. 98 — 357 BP — 203% Break",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: archerTigerP7Img,
    className: "Archer",
    prices: [{ label: "Preço", value: "A combinar" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 98 SacredSeaArcherP7",
          "357 BP (Roaring Tiger) | Perfection 299",
          "Noble Rank: Earl (Donation: 4.103.000.000)",
          "Rune Points: 90.800",
          "Break: 203.2% | P-Strike: 147.83%",
          "Immunity: 178.90% | M-Strike: 40.73%",
          "Skills de Archer já treinadas (Stone Cracker Lv.36, Cold Moon Lv.16, Thorn Cutter Lv.49)",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP: 72.702 | Magic: 875",
          "Attack: 38.947 ~ 39.543 | Defense: 19.490",
          "M-Attack: 19.600 | M-Defense: 8.361",
          "Final P-Attack: +10.539 | Final M-Attack: +6.727",
          "Final P-Damage: +10.139 | Final M-Damage: +6.047",
          "P-Strike: 147.83% | Block: 30.00%",
          "Break: 203.2% | Anti-break: 54.3%",
          "Immunity: 178.90% | Penetration: 12.00%",
          "Resistências: Metal 40 / Wood 40 / Water 40 / Fire 40",
        ],
      },
      {
        title: "Runas & Habilidades",
        items: [
          "Rune Points: 90.800 (Stage Bonus HP +2200, P-Atk +1000, M-Atk +1600, Break +15.00%, Anti-Brk +15.00%, Imm +10.00%)",
          "Skills: Stone Cracker Lv.36, Cold Moon Lv.16, Thorn Cutter Lv.49",
          "Excelente base pronta para evolução ou conta de suporte/PvP",
        ],
      },
    ],
  },
  {
    id: "acc-88",
    title: "Water Taoist P1 — 388 BP — 14k CPs",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: fireorwaterImg,
    className: "Taoist",
    prices: [{ label: "Preço", value: "14k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 140 Sacred_Star_Water_TaoistP1",
          "388 BP | Perfection 382",
          "Preço: 14k CPs",
          "Noble Rank: Earl (Donation: 11.929.000.000)",
          "Rune Points: 160.200 (Heaven Max)",
          "Skill: StarChain (Water) 500% DMG/s",
        ],
      },
      {
        title: "Atributos & Magia",
        items: [
          "HP: 75.289 | Magic: 5.600",
          "Attack: 18.798 ~ 18.803 | Defense: 21.031",
          "M-Attack: 61.079 | M-Defense: 7.619",
          "Final P-Attack: +10.364 | Final M-Attack: +6.864",
          "Final P-Damage: +11.454 | Final M-Damage: +6.129",
          "P-Strike: 87.60% | Block: 30.00%",
          "Break: 140.5% | Anti-break: 133.6% | M-Strike: 71.20%",
          "Immunity: 179.52% | Penetration: 29.00%",
          "Resistências: Metal 80 / Wood 80 / Water 80 / Fire 80",
        ],
      },
      {
        title: "Runas & Sub-Classes",
        items: [
          "Rune Points: 160.200 (Stage Bonus HP +3700, P-Atk +1500, M-Atk +2600, Imm +12.00%)",
          "Skill StarChain (Water) Maximizada",
          "Sub-Classes: P9 (0%), P7 (100%), P7 (100%), P4 (100%), P4 (100%)",
        ],
      },
    ],
  },
  {
    id: "acc-85",
    title: "Death Pirate 480 BP — Top Archives & Eonspirit",
    badge: "TOP",
    badgeColor: "bg-amber-500",
    image: pirataImg,
    className: "Pirata",
    prices: [{ label: "Preço", value: "A combinar" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Donation: 46B",
          "Chi: FULL (immu, HP, P-strike and P-Attack)",
          "2 chi with Break retreat P-Strike",
          "Rune Score - 313500 (Easy 335k)",
          "Runes - 3 ideals ( can make 6 more)",
          "3 hammers",
          "Soulreap +18 / Calamity Finger +17",
          "World Cup Trophy",
          "157 Garments - 93 Mounts",
          "Preço à combinar",
        ],
      },
      {
        title: "Runas & Relíquias",
        items: [
          "9 credited yellow Runes (Circle of life+9, Unswerving+9, Conqueror Blade+9, Silent Blade+9, Whetted Blade+9, Tempered Glaive+9, Solidness+9, Ironbone+6, Skyveil+6)",
          "Relics (3x P-atk ressonance + equipped 3x P-atk )",
          "Inner need The essence of Yang (C)",
          "Astredge: Viodragon Club - 90% | Love Forever - 90% | Heart Lock - 50%",
        ],
      },
      {
        title: "Archives & Eonspirit",
        items: [
          "Pirate - Full 2M621",
          "Warrior - 30 / 35 / 13",
          "Monk - 20 / 20 / 20",
          "Trojan - 62520k",
          "Water - 20/20/20/20/28",
          "Eonspirit: Archer P9, Monk P8, Water P9, Dune P7, Warrior P9",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "Lv. 140 Death Pirate | 480 BP | Perfection 648",
          "HP: 86.300 | Attack: 61.879 ~ 65.282 | Defense: 33.244",
          "M-Attack: 25.934 | M-Defense: 8.322",
          "Final P-Attack: +14.144 | Final P-Damage: +15.485",
          "P-Strike: 150.42% | Block: 30.00% | Break: 238.3% | Anti-break: 60.5%",
          "Immunity: 239.00% | Penetration: 15.00%",
          "Resistências: Metal 80 / Wood 80 / Water 80 / Fire 80",
        ],
      },
    ],
  },
  {
    id: "acc-83",
    title: "Death Pirate 488 BP — 1 Jail",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: pirateDeath488bpImg,
    className: "Pirata",
    prices: [{ label: "Preço", value: "340k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 140 Death Pirate",
          "1 Jail",
          "488 BP | Perfection 648",
          "Donation: 140.000.000.000 (Rank 5 Princess)",
          "Weapon Archives: 103.325",
          "Rune Points: 421.700",
          "Título / Aura: Starry Promise",
        ],
      },
      {
        title: "Atributos",
        items: [
          "HP: 94.801 | Magic: 1.500",
          "Attack: 63.880 ~ 67.284 | Defense: 32.720",
          "M-Attack: 28.248 | M-Defense: 8.741",
          "Dodge: 108 | Agility: 1.149 | Accuracy: 256",
          "Attack: 195% | M-Def: 126% | Damage: 6% | Blessed: 57%",
          "Final P-Attack: +14.234 | Final M-Attack: +9.374",
          "Final P-Damage: +17.138 | Final M-Damage: +9.397",
          "P-Strike: 294.40% | Block: 30.00%",
          "Break: 132.2% | Anti-Break: 75.5% | M-Strike: 62.10%",
          "Immunity: 269.05% | Penetration: 15.00%",
          "Detoxication: 72% | Parry: 8.00% | Lucky Strike: 8.00%",
          "Dash Rate: 2.50% | Dodge Rate: 7.00% | Hit Rate: 7.00% | Resist: 1.50%",
          "Resistências: Metal 80 / Wood 80 / Water 80 / Fire 80",
        ],
      },
      {
        title: "Runas & Relíquia",
        items: [
          "Rune Points: 421.700 (Ciclo completo em Max / Ideal Resonance)",
          "Recognition: 40% / 90% / 90% / 100%",
          "Relíquia: Ferocious Roar HeartlessSeal (5.727 Pts)",
          "Bônus Relíquia: P-Attack +650(+20) x3 | Final M-Damage +301 | Immunity +1.74%",
          "Weapon Archives Total Rating: 103.325",
          "Unbound Gear +12 completo",
        ],
      },
      {
        title: "Jiang Hu, Gong & Sub-Classes",
        items: [
          "Jiang Hu: Heaven 32 | Mighty 32 | Cosmic 31",
          "Stone Cracker Lv.31 | Cold Moon Lv.30 | Thorn Cutter Lv.31",
          "Inner Power / Gong: Belt Vessel Lv.11 | Governor Vessel Lv.11 | Conception Vessel Lv.15",
          "Nut Refine: Todos Lv. 10",
          "Sub-Classes: Warmaster Lady P9 (100%), Desert Nightblade P7 (100%)",
          "Victorious Buddha P9 (0%), Huntress Artemis P9 (0%), Conqueror Xiang Yu P9 (0%)",
        ],
      },
    ],
  },
  {
    id: "acc-82",
    title: "Pirate Sacred Star P5 — 1 Jail",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: pirate100kImg,
    className: "Pirata",
    prices: [{ label: "Preço", value: "100k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 140 Sacred_Star_PirateP5",
          "1 Jail",
          "407 BP | Perfection 648",
          "Noble Rank: Prince",
          "Weapon Archives: 100.400",
          "Rune Points: 344.200",
        ],
      },
      {
        title: "Atributos",
        items: [
          "HP: 84.713 | Magic: 800",
          "Attack: 56.857 ~ 60.260 | Defense: 29.803",
          "M-Attack: 25.374 | M-Defense: 7.508",
          "Dodge: 104 | Agility: 1.149 | Accuracy: 246",
          "Attack: 210% | M-Def: 124% | Blessed: 55%",
          "Final P-Attack: +10.926 | Final M-Attack: +6.926",
          "Final P-Damage: +10.616 | Final M-Damage: +6.241",
          "P-Strike: 123.45% | Block: 30.00%",
          "Break: 276.2% | Anti-Break: 58.1% | M-Strike: 55.20%",
          "Immunity: 242.30% | Penetration: 15.00%",
          "Detoxication: 72% | Parry: 7.00% | Lucky Strike: 7.00%",
          "Dash Rate: 0.50% | Dodge Rate: 4.00% | Hit Rate: 7.00%",
          "Resistências: Metal 80 / Wood 80 / Water 80 / Fire 80",
        ],
      },
      {
        title: "Runas & Relíquia",
        items: [
          "Rune Points: 344.200 (Runas em Max)",
          "Recognition: 95% / 70%",
          "Relíquia: Tenacity BellofDoom (7.146 Pts)",
          "Bônus Relíquia: P-Strike +1.85% | Immunity +4.00%(+0.10%) x2",
          "Weapon Archives: 100.400",
          "Equipamentos +12 com sockets",
        ],
      },
      {
        title: "Inner Power & Sub-Classes",
        items: [
          "Inner Power: Superb Manual, Violet Glow, Divine North Skill, The Essence of Yin",
          "Nut Refine em níveis avançados (Lv 10, L9, L8, L7, L6, L5, L4, L2)",
          "Sub-Classes: Huntress Artemis P8 Celestial Archer (100% Ativado)",
        ],
      },
    ],
  },
  {
    id: "acc-80",
    title: "Water Taoist P6 — Lv 129",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: waterImg,
    className: "Taoist",
    prices: [{ label: "Preço", value: "4k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 129 SacredSeaWaterTaoistP6",
          "373 BP | Perfection 250",
          "Rune Points: 124.600",
          "My Potency: 10.740",
        ],
      },
      {
        title: "Atributos",
        items: [
          "HP: 75.295 | Magic: 1.150",
          "Attack: 13.138 ~ 13.460 | Defense: 25.984",
          "M-Attack: 21.279 | M-Defense: 7.804",
          "Dodge: 10 | Agility: 1.009",
          "M-Def: 105% | Damage: 72% | Blessed: 51%",
          "Final P-Attack: +9.500 | Final M-Attack: +6.529",
          "Final P-Damage: +26.993 | Final M-Damage: +14.609",
          "P-Strike: 70.38% | Block: 30.00%",
          "Break: 77.31% | Anti-Break: 221.60% | M-Strike: 41.98%",
          "Immunity: 207.36% | Penetration: 25.00%",
          "Detoxication: 72% | Parry: 6.00% | Lucky Strike: 6.00%",
          "Dodge Rate: 13.80%",
          "Resistências: Metal 55 / Wood 55 / Water 55 / Fire 55",
        ],
      },
      {
        title: "Chi & Inner Power",
        items: [
          "Turtle Lv.99 — 400 Chi",
          "Dragon Lv.99 — 400 Chi",
          "Tiger Lv.41 — 269 Chi",
          "Phoenix Lv.26 — 362 Chi",
          "Remaining Chi: 31 (Max Recovery 16.500)",
          "Inner Power: Universal Concept, Secret of Breath, Demon Rider, Dragon Tactics",
          "Inner Power: Boundless Heart, Doctrine of Deity, Puzzle of Life, Pure Yang Concept",
        ],
      },
      {
        title: "Runas",
        items: [
          "Main Runas em Max (ciclo completo)",
          "Rune Points: 124.600",
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
          "394 BP | Perfection 364",
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
    id: "acc-67",
    title: "Top Water Archives full",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: topWaterArchivesFullImg,
    className: "Taoist",
    prices: [{ label: "Preço", value: "90k CPs" }],
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
          "405 BP (Perfection 648)",
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
          "Perfection: 648",
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
