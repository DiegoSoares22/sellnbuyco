import octoberAccount1Img from "@/assets/account-oct18-1.jpg";
import octoberAccount2Img from "@/assets/account-oct18-2.jpg";
import octoberAccount3Img from "@/assets/account-oct18-3.jpg";
import octoberAccount4Img from "@/assets/account-oct18-4.jpg";
import octoberAccount5Img from "@/assets/account-oct18-5.jpg";
import waterImg from "@/assets/water.jpg";
import jojoNinjaImg from "@/assets/JojoNinja.jpg";
import decenteWaterImg from "@/assets/decente-water.png";
import waterIdealImg from "@/assets/water-ideal.png";
import waterOpImg from "@/assets/water-op.jpg";
import pirate420kImg from "@/assets/pirate-420k.jpg";
import pirate100kImg from "@/assets/pirate-100k.jpg";

import pirataImg from "@/assets/pirata.jpg";
import ninja1Img from "@/assets/ninja1.png";
import filaktImg from "@/assets/filakt.png";
import ninjaStarryP3Img from "@/assets/ninja-starry-p3.jpg";
import ninjaHw240kImg from "@/assets/ninja-hw-240k.jpg";
import ninjaArtemis451bpImg from "@/assets/ninja-artemis-451bp.jpg";
import archerTigerP7Img from "@/assets/archer-tiger-p7.jpg";
import waterDuchess458bpImg from "@/assets/water-duchess-458bp.jpg";
import fireorwaterImg from "@/assets/fireorwater.png";

import sellWaterMaxArchiveImg from "@/assets/sell-water-max-archive.png";

import ninjahw from "@/assets/ninjahw.jpg";

import topWaterArchivesFullImg from "@/assets/top-water-archives-full.jpg";
import waterWilsaoImg from "@/assets/water-wilsao.jpg";
import decenteNinja8kImg from "@/assets/decente-ninja-8k.png";
import waterFire12kImg from "@/assets/water-fire-12k.png";
import archerEpicOriginsImg from "@/assets/archer-epic-origins.png";
import archerTwinCityOriginsImg from "@/assets/archer-twincity-origins.jpg";
import ninja1Jail35kImg from "@/assets/ninja-1jail-35k.png";
import archerBreak0JailImg from "@/assets/archer-break-0jail.png";
import ninjaTortoisePredatorImg from "@/assets/ninja-tortoise-predator.webp";
import ninjaTidalVow411bpImg from "@/assets/ninja-tidalvow-411bp.jpg";
import ninjaStarrider405bpImg from "@/assets/ninja-starrider-405bp.jpg";
import ninjaMrPopularity385bpImg from "@/assets/ninja-mrpopularity-385bp.jpg";
import ninjaFuSeekerP3Img from "@/assets/ninja-fuseeker-p3.jpg";
import pirateGhost484bpImg from "@/assets/pirate-ghost-484bp.jpg";
import archerGracefulP1Img from "@/assets/archer-graceful-p1.jpg";
import ninjaMasterP4Lv119Img from "@/assets/ninja-master-p4-lv119.jpg";
import ninjaStellar383bpImg from "@/assets/ninja-stellar-383bp.jpg";
import pirateDeath478bpImg from "@/assets/pirate-death-478bp.jpg";
import ninjaStarrider372bpImg from "@/assets/ninja-starrider-372bp.jpg";
import taoistSurgeWater428bpImg from "@/assets/taoist-surge-water-428bp.jpg";
import archerMrPopularity433bpImg from "@/assets/archer-mrpopularity-433bp.jpg";
import pirateFogTortoisePredatorImg from "@/assets/pirate-fog-tortoise-predator.jpg";
import ninjaPrincess366bpImg from "@/assets/ninja-princess-366bp.jpg";
import ninjaTidalVowP2Lv140Img from "@/assets/ninja-tidalvow-p2-lv140.jpg";
import monkP3Duchess56bImg from "@/assets/monk-p3-duchess-56b.jpg";
import monkFlowerBelle380bpImg from "@/assets/monk-flowerbelle-380bp.jpg";
import pirataMaxArchivesImg from "@/assets/pirata-max-archives-lv140.webp";
import archer1IdealRuneImg from "@/assets/archer-1-ideal-rune-lv140.webp";


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
    id: "acc-128",
    title: "Pirata Max Archives — Lv 140 — 0 Jail",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: pirataMaxArchivesImg,
    className: "Pirata",
    prices: [{ label: "Preço", value: "25k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "0 Jail",
          "Archives: Max",
          "Sacred_Star_PirateP3 (servidor Eagle)",
          "372 BP | Perfection 648",
          "Noble Rank: Countess (Donation: 33.010.000.001)",
          "Rune Points: 206.400",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP: 75.214 | Magic: 1.200",
          "Attack: 44.711 ~ 46.208 | Defense: 22.182",
          "M-Attack: 24.023 | M-Defense: 6.853",
          "Final P-Attack: +11.152 | Final M-Attack: +7.102",
          "Final P-Damage: -11.517 | Final M-Damage: -6.752",
          "P-Strike: 120.70% | Break: 273.6% | Anti-Break: 72.1%",
          "M-Strike: 47.30% | Immunity: 228.20% | Penetration: 15.00%",
          "Block: 30.00% | Blessed: 57% | Attack: +210%",
        ],
      },
      {
        title: "Equipamentos, Runas & Progressão",
        items: [
          "Full set +12 (P9)",
          "Runas principais em Max (10 em Max · 1 Lv.8)",
          "Ideal Collection: 30.205 · 26.760 · 4.625 · 4.600",
          "SENSE · ARMED · OVERLORD — Lv.9",
          "Wings: Love Wings · Spotless Feather · Fluttering Flag",
          "Astredge: P9 100% · P8 66% · P6 100%",
          "Recognition: 95% · 90% · 80%",
        ],
      },
    ],
  },
  {
    id: "acc-123",
    title: "Ninja Sacred Star P2 — Lv 109 — Break build",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: octoberAccount1Img,
    className: "Ninja",
    prices: [{ label: "Preço", value: "30k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 109 Sacred_Star_NinjaP2",
          "372 BP | Perfection 648",
          "Rune Points: 241.000",
          "Ninpo Score: 38.783 (Ninja Sprint)"
        ]
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP: 78.152 | Attack: 45.149 ~ 47.640",
          "P-Strike: 96.70% | Break: 281.9%",
          "Anti-Break: 56.1% | Immunity: 228.70%"
        ]
      },
      {
        title: "Equipamentos, Runas & Progressão",
        items: [
          "Runas principais em Max",
          "Relíquia: [Cloud Shock] HeartlessSeal — 1.691 Pts",
          "Chi: Dragon, Phoenix, Tiger e Turtle — 400",
          "Astredge: Love Forever — Recognition 70%"
        ]
      }
    ]
  },
  {
    id: "acc-124",
    title: "Fire/Water — Max Archives — 1 Jail",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: octoberAccount2Img,
    className: "Taoist",
    prices: [{ label: "Preço", value: "15k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 140 Sacred_Star_Fire_TaoistP3",
          "401 BP",
          "Fire/Water — Max archives",
          "1 Jail",
          "Rune Points: 211.800"
        ]
      },
      {
        title: "Atributos & Combate",
        items: [
          "P-Strike: 102.60% | Break: 120.8%",
          "Immunity: 237.90% | Penetration: 21.00%"
        ]
      },
      {
        title: "Runas, Relíquia & Progressão",
        items: [
          "Taoist Tool: Score 13.300 | Mastery Score: 469.000 | Max",
          "Runas principais em Max",
          "Relíquia: [Fate] Keen SparklyWesternMirror — 485 Pts",
          "Astredge: Love Forever — Recognition 90%"
        ]
      }
    ]
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
    id: "acc-127",
    title: "Ninja Duke — 60B Donation — 277k Rune Points",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: octoberAccount5Img,
    className: "Ninja",
    prices: [{ label: "Preço", value: "150k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "405 BP | Perfection 648",
          "Noble Rank: Duke (Donation: 60.459.555.552)",
          "Rune Points: 277.300",
          "Weapon Archives: 100.380"
        ]
      },
      {
        title: "Equipamentos & Runas",
        items: [
          "Equipamentos +12",
          "Runas principais em Max",
          "Wings: MorningFeather · Silent Wings · Mega Phoenix Wings · HolyBlueWings"
        ]
      },
      {
        title: "Chi & Progressão",
        items: [
          "Inner Power: 3.100 (Ranking 55)",
          "Seal Retreat Study: 400",
          "P-Attack +2.000 | Max HP +3.500 | Anti-Break +20% | P-Strike +20%",
          "Astredge Recognition: 90% · 90% · 40%"
        ]
      }
    ]
  },
  {
    id: "acc-122",
    title: "Monk Saint Lv 109 P3 — 380 BP — Countess 28B",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: monkFlowerBelle380bpImg,
    className: "Monk",
    prices: [{ label: "Preço", value: "A combinar" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 109 SacredSkySaintP3 (servidor Cancer)",
          "380 BP | Perfection 648",
          "Noble Rank: Countess (Donation: 28.263.000.000)",
          "Rune Points: 190.000",
          "Weapon Archives: 101.270",
          "Astredge: Viodragon Club 95% · Love Forever 5%",
          "67 Garments + 33 Mounts",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP: 75.104 | Magic: 410",
          "Attack: 41.714 ~ 42.550 | Defense: 19.256",
          "M-Attack: 23.074 | M-Defense: 6.138",
          "Final P-Attack: +10.679 | Final M-Attack: +7.279",
          "Final P-Damage: -10.929 | Final M-Damage: -6.429",
          "P-Strike: 106.60% | Break: 255.5% | Anti-Break: 62.1%",
          "M-Strike: 47.20% | Immunity: 207.10% | Penetration: 15.00%",
        ],
      },
      {
        title: "Relíquia, Chi & Progressão",
        items: [
          "Relíquia: [Deep Roar] HeartlessSeal (2.647 Pts) — P-Attack +301 · +302",
          "Runa: VioletShield(+9) Max",
          "Chi: Dragon · Phoenix · Turtle Lv.99 · Tiger Lv.81 (400 cada)",
          "Jiang Hu: Cosmic 24 · Mighty 11 · Heaven 15",
          "Thorn Cutter Lv.45 · Cold Moon Lv.17 · Stone Cracker Lv.35",
          "Sub-Classes: P9 (100%) · P5 (100%) · P5 (100%) · P3 (100%)",
          "Garment: Cloudbloom (Sweet)",
        ],
      },
    ],
  },
  {
    id: "acc-121",
    title: "Monk Lv 140 P3 — Duchess 56B — Block 46%",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: monkP3Duchess56bImg,
    className: "Monk",
    prices: [{ label: "Preço", value: "A combinar" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 140 Sacred_Star_MonkP3 (servidor Champions_EU)",
          "Perfection 648",
          "Noble Rank: Duchess (Donation: 56.699.222.222 · Ranking 17)",
          "Rune Points: 280.800",
          "Weapon Archives: 94.015",
          "Astredge: Viodragon Club 95% · Love Forever 75%",
          "172 Garments + 101 Mounts",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP: 76.895 | Magic: 1.210",
          "Attack: 43.385 ~ 44.312 | Defense: 24.657",
          "M-Attack: 25.823 | M-Defense: 6.619",
          "Final P-Attack: +10.784 | Final M-Attack: +7.284",
          "Final P-Damage: -11.606 | Final M-Damage: -7.057",
          "P-Strike: 115.60% | Block: 46.00% | Break: 230.5% | Anti-Break: 81.2%",
          "M-Strike: 52.20% | Immunity: 241.88% | Penetration: 15.00%",
        ],
      },
      {
        title: "Equipamentos & Progressão",
        items: [
          "LegendNetherArmor(+12) P7 Armor Soul [P-Defense] · LegendMoonHeadgear(+12)(B) · LegendJustBacksword(B)",
          "Chi: Dragon · Phoenix · Tiger Lv.99 (400 cada)",
          "Jiang Hu: Cosmic 31 · Mighty 5 · Heaven 21",
          "Thorn Cutter Lv.40 · Cold Moon Lv.6 · Stone Cracker Lv.39",
          "Runa: SoulChant(+7)",
          "Sub-Classes: P8 (100%) · P7 (100%) · P7 (100%) · P6 (100%) · P6 (100%) · P5 (100%)",
        ],
      },
    ],
  },
  {
    id: "acc-120",
    title: "Ninja Lv 140 P2 — Duke 36B — Total Rating 102k",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: ninjaTidalVowP2Lv140Img,
    className: "Ninja",
    prices: [{ label: "Preço", value: "A combinar" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 140 Sacred_Star_NinjaP2 (servidor Emerald)",
          "Perfection 648",
          "Noble Rank: Duke (Donation: 36.608.000.000 · Ranking 41)",
          "Rune Points: 250.400 | Ninpo Score: 33.873",
          "Weapon Archives: 102.375",
          "Astredge: Viodragon Club 90% · Love Forever 60%",
          "171 Garments + 88 Mounts",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP: 78.431 | Magic: 1.200",
          "Attack: 52.563 ~ 55.909 | Defense: 32.425",
          "M-Attack: 24.735 | M-Defense: 8.348",
          "Final P-Attack: +11.309 | Final M-Attack: +7.575",
          "Final P-Damage: -11.307 | Final M-Damage: -6.990",
          "P-Strike: 213.28% | Break: 123.5% | Anti-Break: 58.1%",
          "M-Strike: 47.20% | Immunity: 228.20% | Penetration: 15.00%",
        ],
      },
      {
        title: "Chi & Progressão",
        items: [
          "Chi: Dragon · Phoenix · Tiger · Turtle Lv.99 (400 cada)",
          "Runas: Infinity(+16) · Rampage(+16) · All-round(+21) · SoulChant(+9) Max",
          "Jiang Hu: Heaven 11 · Cosmic 11 · Mighty 11",
          "Thorn Cutter Lv.28 · Cold Moon Lv.20 · Stone Cracker Lv.21",
          "Dragonhowl Lv.32 · Bloodlust Lv.23 · Redcurse Lv.10 | Bloodline: Bone Pulse",
        ],
      },
    ],
  },
  {
    id: "acc-119",
    title: "Ninja Lv 99 P3 — 366 BP — Princess 80B — Anti-Break 317%",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: ninjaPrincess366bpImg,
    className: "Ninja",
    prices: [{ label: "Preço", value: "A combinar" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 99 Sacred_Star_NinjaP3 (servidor Fire)",
          "366 BP | Perfection 648",
          "Noble Rank: Princess (Donation: 80.141.000.000 · Ranking 11)",
          "Rune Points: 267.000 | Ninpo Score: 45.455",
          "Bloodline: Hel Vortex (Max) · Infinite Mist (Max) · Paper Dance · Heaven's Wonder · Bone Pulse",
          "Astredge: Viodragon Club 90% · Love Forever 90% · Heart Lock 25%",
          "Footprint: Phoenix Grace",
          "140 Garments + 62 Mounts",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP: 73.537 | Magic: 1.500",
          "Attack: 44.084 ~ 46.154 | Defense: 20.636",
          "M-Attack: 25.298 | M-Defense: 7.159",
          "Final P-Attack: +10.749 | Final M-Attack: +7.249",
          "Final P-Damage: -11.342 | Final M-Damage: -7.032",
          "P-Strike: 259.50% | Break: 82.5% | Anti-Break: 317.8%",
          "M-Strike: 48.20% | Immunity: 131.50% | Penetration: 15.00%",
        ],
      },
      {
        title: "Relíquia, Chi & Progressão",
        items: [
          "Relíquia: [Wild Force] BellofDoom (7.111 Pts) — P-Strike +4.00% x2 · Anti-break +1.80%",
          "Runas: NatureShield(+9) · Sky Veil(+9) · Infinity(+15) · IronShield(+27)",
          "Chi: Tiger · Phoenix · Turtle Lv.99 · Dragon Lv.59 (400 cada)",
          "Jiang Hu: Cosmic 12 · Mighty 12 · Heaven 11",
          "Thorn Cutter Lv.43 · Stone Cracker Lv.15 · Cold Moon Lv.11",
          "Steed(+12) Blazehoof (Lineage Level 12) · Steed(+8)(B) Golden Steed",
        ],
      },
    ],
  },
  {
    id: "acc-118",
    title: "Fog Pirate Lv 140 — Duchess 65B — Ideal Tortoise Predator",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: pirateFogTortoisePredatorImg,
    className: "Pirata",
    prices: [{ label: "Preço", value: "A combinar" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 140 Fog Pirate",
          "Perfection 648",
          "Noble Rank: Duchess (Donation: 65.109.999.995 · Ranking 19)",
          "Rune Points: 301.200",
          "Runas Ideal: Tortoise Predator (Max) · Supreme Armor(+9) · Unbreakable(+9)",
          "Huntress Artemis P9 Celestial Archer (100%)",
          "Astredge: Viodragon Club 95% · Love Forever 90% · Heart Lock 60%",
          "186 Garments + 89 Mounts",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP: 85.470 | Magic: 1.200",
          "Attack: 60.115 ~ 63.519 | Defense: 33.236",
          "M-Attack: 26.338 | M-Defense: 8.442",
          "Final P-Attack: +14.126 | Final M-Attack: +9.379",
          "Final P-Damage: -14.982 | Final M-Damage: -8.672",
          "P-Strike: 130.80% | Break: 280.7% | Anti-Break: 60.1%",
          "M-Strike: 52.20% | Immunity: 235.50% | Penetration: 15.00%",
        ],
      },
      {
        title: "Equipamentos & Progressão",
        items: [
          "LegendRepentRapier(+12) · LegendMoonHeadgear(+12) P7 Headgear Soul [Immunity]",
          "Overlord Lv.9 · Armed Lv.9 · Sense Lv.9",
          "Jiang Hu: Mighty 10 · Heaven 10 · Cosmic 13",
          "Stone Cracker Lv.45 · Cold Moon Lv.9 · Thorn Cutter Lv.45",
          "Chi: Seal Retreat 400 · Dragon 400",
          "Warmaster Lady P8 · Victorious Buddha P8",
        ],
      },
    ],
  },
  {
    id: "acc-117",
    title: "Archer Lv 109 P2 — 433 BP — P-Strike 301% — Inner Power Perfect",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: archerMrPopularity433bpImg,
    className: "Archer",
    prices: [{ label: "Preço", value: "A combinar" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 109 Sacred_Star_ArcherP2",
          "433 BP | Perfection 648",
          "Rune Points: 236.900",
          "Inner Power Perfect: Superb Manual · Violet Glow · Divine North Skill · Essence of Yin · Essence of Yang",
          "Stone Cracker Lv.49 · Thorn Cutter Lv.42",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP: 75.028 | Magic: 1.200",
          "Attack: 46.894 ~ 48.359 | Defense: 23.187",
          "M-Attack: 24.313 | M-Defense: 6.879",
          "Final P-Attack: +13.254 | Final M-Attack: +9.174",
          "Final P-Damage: -13.997 | Final M-Damage: -8.302",
          "P-Strike: 301.80% | Break: 71.7% | Anti-Break: 229.7%",
          "M-Strike: 58.40% | Immunity: 150.14% | Penetration: 15.00%",
        ],
      },
      {
        title: "Relíquia & Runas",
        items: [
          "Relíquia: [Brilliant Force] BellofDoom — P-Strike +4.00% x3 · Immunity +1.54%",
          "Runa: SoulReap(+12)",
        ],
      },
    ],
  },
  {
    id: "acc-116",
    title: "Surge Water Taoist Lv 129 — 428 BP — Anti-Break 292%",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: taoistSurgeWater428bpImg,
    className: "Taoist",
    prices: [{ label: "Preço", value: "A combinar" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 129 Surge Water Taoist",
          "428 BP | Perfection 648",
          "Noble Rank: Duchess (Donation: 28.144.001.100)",
          "Rune Points: 256.000",
          "LegendUniversalLotus(+12)(B) P7 Dragon Soul",
          "Heaven Max (Vicissitude · Highest Good · Evolution · Thrill · Birth-death)",
          "Astredge: 60% · 90% · 90%",
        ],
      },
      {
        title: "Atributos & Magia",
        items: [
          "HP: 90.375 | Magic: 950",
          "Attack: 20.411 ~ 20.641 | Defense: 27.829",
          "M-Attack: 40.694 | M-Defense: 8.601",
          "Final P-Attack: +12.645 | Final M-Attack: +15.089",
          "Final P-Damage: -22.066 | Final M-Damage: -13.824",
          "P-Strike: 101.30% | Break: 74.0% | Anti-Break: 292.5%",
          "M-Strike: 67.80% | Immunity: 271.40% | Penetration: 29.00%",
        ],
      },
      {
        title: "Chi & Progressão",
        items: [
          "Chi: Tiger · Turtle · Dragon · Phoenix Lv.99 (400 cada)",
          "Buckler (Immunity +2.0% · Anti-break +2.0%) · Athanasy (Max HP +500 · Anti-break +2.0%)",
        ],
      },
    ],
  },
  {
    id: "acc-115",
    title: "Ninja Lv 109 P2 — 372 BP — Dragon Ring Break +14%",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: ninjaStarrider372bpImg,
    className: "Ninja",
    prices: [{ label: "Preço", value: "A combinar" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 109 Sacred_Star_NinjaP2 (servidor Aquarius)",
          "372 BP | Perfection 648",
          "Noble Rank: Earl (Donation: 19.296.000.001)",
          "Rune Points: 176.900 | Ninpo Score: 30.260",
          "LegendDragonRing(+12) P7 Ring Soul [Break] — Lvl 6 Breakthrough +14% permanente",
          "LegendSkyHammer(+12) P7.1-handedSoul",
          "Steed(+12) Spitfire — Lineage Level 12",
          "138 Garments + 66 Mounts",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP: 75.246 | Magic: 855",
          "Attack: 45.317 ~ 47.808 | Defense: 18.455",
          "M-Attack: 23.404 | M-Defense: 5.767",
          "Final P-Attack: +10.394 | Final M-Attack: +7.096",
          "Final P-Damage: -10.474 | Final M-Damage: -6.348",
          "P-Strike: 107.40% | Break: 275.1% | Anti-Break: 72.4%",
          "M-Strike: 47.30% | Immunity: 229.00% | Penetration: 15.00%",
        ],
      },
      {
        title: "Relíquia, Chi & Progressão",
        items: [
          "Relíquia: [Deep Roar] HeartlessSeal (7.427 Pts) — P-Attack +650 x2 · Break +2.55%",
          "Chi: Tiger · Dragon · Turtle · Phoenix Lv.99 (400 cada)",
          "Bloodlust Lv.15 · Dragonhowl Lv.29",
          "Bloodline: Paper Dance · Hel Vortex",
          "Astredge: 75%",
        ],
      },
    ],
  },
  {
    id: "acc-114",
    title: "Death Pirate Lv 140 — 478 BP — 379k Runes — Bloodlust Max",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: pirateDeath478bpImg,
    className: "Pirata",
    prices: [{ label: "Preço", value: "A combinar" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 140 Death Pirate",
          "478 BP | Perfection 648",
          "Noble Rank: Earl (Donation: 33.664.000.000)",
          "Rune Points: 379.200",
          "Runas raras amarelas: Sharpness(+9) · Evocation(+9) · SoulChant(+9)",
          "Overlord Lv.9 · Armed Lv.9 · Sense Lv.9",
          "Steed(+12) Blazehoof — Lineage Level 12 (Lineage 87.885)",
          "134 Garments + 86 Mounts",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP: 90.950 | Magic: 1.500",
          "Attack: 63.914 ~ 67.317 | Defense: 32.254",
          "M-Attack: 26.423 | M-Defense: 8.386",
          "Final P-Attack: +14.355 | Final M-Attack: +9.299",
          "Final P-Damage: -15.634 | Final M-Damage: -8.787",
          "P-Strike: 273.80% | Break: 132.5% | Anti-Break: 72.2%",
          "M-Strike: 59.10% | Immunity: 242.47% | Penetration: 15.00%",
          "Dodge Rate: 17.30% | Hit Rate: 15.80% | Resist: 3.00%",
        ],
      },
      {
        title: "Equipamentos & Progressão",
        items: [
          "LegendMoonHeadgear(+12) P7 Headgear Soul [Immunity] · LegendNetherArmor(+12) P7 Armor Soul [P-Defense]",
          "LegendDeathPistol(+12) P7 Pistol Soul · LegendRepentRapier(+12) P7 Rapier Soul",
          "Relíquia: [Brilliant Force] BellofDoom (sinergizada) — P-Strike +4.00% x3 · P-Attack +650 x6",
          "Jiang Hu: Heaven 30 · Mighty 29 · Cosmic 27",
          "Dragonhowl Lv.42 · Bloodlust Max · Redcurse Lv.12",
          "Astredge: Viodragon Club 90% · Love Forever 85%",
          "Sub-Classes: P9 (0%) · P8 (100%) · P8 (100%) · P8 (0%) · P7 (100%)",
        ],
      },
    ],
  },
  {
    id: "acc-113",
    title: "Ninja Lv 140 P3 — 383 BP — Heaven's Wonder Max",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: ninjaStellar383bpImg,
    className: "Ninja",
    prices: [{ label: "Preço", value: "A combinar" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 140 Sacred_Star_NinjaP3 (servidor Pyramid)",
          "383 BP | Perfection 630",
          "Noble Rank: Countess (Donation: 32.199.000.001)",
          "Rune Points: 270.400 | Ninpo Score: 31.903",
          "Weapon Archives: 100.260",
          "Bloodline: Heaven's Wonder (Max) · Paper Dance · Hel Vortex · Infinite Mist · Bone Pulse",
          "Astredge: Viodragon Club 95% · Love Forever 90% · Heart Lock 50%",
          "Footprint: Phoenix Grace",
          "169 Garments + 105 Mounts",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP: 77.856 | Magic: 1.200",
          "Attack: 49.119 ~ 51.816 | Defense: 28.005",
          "M-Attack: 24.904 | M-Defense: 7.646",
          "Final P-Attack: +10.552 | Final M-Attack: +6.864",
          "Final P-Damage: -10.742 | Final M-Damage: -6.129",
          "P-Strike: 112.60% | Break: 273.5% | Anti-Break: 60.1%",
          "M-Strike: 52.20% | Immunity: 230.20% | Penetration: 15.00%",
        ],
      },
      {
        title: "Chi & Progressão",
        items: [
          "Jiang Hu: Cosmic 24 · Mighty 24 · Heaven 24",
          "Chi: Dragon Lv.99 · Phoenix Lv.99 · Turtle Lv.99 · Tiger Lv.91 (400 cada)",
          "Stone Cracker Lv.30 · Cold Moon Lv.22 · Thorn Cutter Lv.31",
          "Runa: SoulChant(+9) Max",
          "LegendMoonHeadgear(+12) P7 Headgear Soul [Immunity]",
        ],
      },
    ],
  },
  {
    id: "acc-112",
    title: "Ninja Lv 119 Master P4 — Earl 11B — P-Strike 187%",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: ninjaMasterP4Lv119Img,
    className: "Ninja",
    prices: [{ label: "Preço", value: "A combinar" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 119 NinjaMasterP4 (servidor Susanoo_EU)",
          "Perfection 261",
          "Noble Rank: Earl (Donation: 11.691.500.000)",
          "Rune Points: 135.400 | Ninpo Score: 23.875",
          "Astredge: 90% · 75%",
          "Footprint: Phoenix Grace",
          "98 Garments + 45 Mounts",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP: 75.203 | Magic: 1.280",
          "Attack: 37.077 ~ 40.576 | Defense: 23.424",
          "M-Attack: 18.959 | M-Defense: 6.115",
          "Final P-Attack: +10.877 | Final M-Attack: +6.829",
          "Final P-Damage: -10.012 | Final M-Damage: -6.129",
          "P-Strike: 187.30% | Break: 150.4% | Anti-Break: 94.0%",
          "M-Strike: 45.10% | Immunity: 205.10% | Penetration: 15.00%",
        ],
      },
      {
        title: "Relíquia & Progressão",
        items: [
          "Relíquia: [Wild Force] BellofDoom (7.581 Pts) — Final P-Attack +465 · P-Strike +4.00% x2",
          "Stone Cracker Lv.14 | Bloodline: Hell Vortex",
          "Sub-Classes: P8 (100%) · P8 (100%) · P7 (100%) · P5 (100%) · P6 (0%) · P1 (0%)",
        ],
      },
    ],
  },
  {
    id: "acc-111",
    title: "Archer Lv 140 P1 — Earl 38B — Tvastar Heart — P-Strike 272%",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: archerGracefulP1Img,
    className: "Archer",
    prices: [{ label: "Preço", value: "A combinar" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 140 Sacred_Star_ArcherP1 (servidor Fire)",
          "Perfection 648",
          "Noble Rank: Earl (Donation: 38.673.500.000)",
          "Rune Points: 189.900 | Ninpo Score: 13.500",
          "Tvastar Heart (B) — Archer Epic Weapon",
          "Astredge: 95% · 80%",
          "Footprint: Phoenix Grace",
          "152 Garments + 58 Mounts",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP: 83.300 | Magic: 1.200",
          "Attack: 52.205 ~ 54.997 | Defense: 29.452",
          "M-Attack: 23.260 | M-Defense: 6.702",
          "Final P-Attack: +10.414 | Final M-Attack: +6.874",
          "Final P-Damage: -10.474 | Final M-Damage: -6.184",
          "P-Strike: 272.34% | Break: 96.6% | Anti-Break: 58.4%",
          "M-Strike: 47.60% | Immunity: 222.40% | Penetration: 15.00%",
        ],
      },
      {
        title: "Relíquia & Progressão",
        items: [
          "Relíquia: [Wild Force] BellofDoom (4.010 Pts) — P-Strike +2.73% · +2.71%",
          "Runa: SoulChant(+9) Max",
          "Stone Cracker Max · Cold Moon Lv.30 · Thorn Cutter Lv.55",
          "Inner Power: Superb Manual · Violet Glow · Divine North Skill · Essence of Yin",
        ],
      },
    ],
  },
  {
    id: "acc-110",
    title: "Ghost Pirate Lv 140 — 484 BP — Duke 32B — P-Strike 270%",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: pirateGhost484bpImg,
    className: "Pirata",
    prices: [{ label: "Preço", value: "A combinar" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 140 Ghost Pirate (servidor Emerald)",
          "484 BP | Perfection 648",
          "Noble Rank: Duke (Donation: 32.536.000.001)",
          "Rune Points: 313.500 | Ninpo Score: 19.102",
          "Weapon Archives: 62.530",
          "Overlord Lv.9 · Armed Lv.9 · Sense Lv.9",
          "Footprint: Phoenix Grace",
          "196 Garments + 104 Mounts",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP: 85.996 | Magic: 1.200",
          "Attack: 58.285 ~ 61.689 | Defense: 33.711",
          "M-Attack: 26.933 | M-Defense: 8.979",
          "Final P-Attack: +14.089 | Final M-Attack: +9.419",
          "Final P-Damage: -15.272 | Final M-Damage: -8.777",
          "P-Strike: 270.00% | Break: 118.0% | Anti-Break: 76.0%",
          "M-Strike: 52.90% | Immunity: 238.54% | Penetration: 15.00%",
        ],
      },
      {
        title: "Relíquia & Progressão",
        items: [
          "Relíquia: [Brilliant Force] BellofDoom (7.756 Pts, sinergizada) — P-Strike +4.00% x3 · Anti-break +1.12%",
          "Astredge: 95% · 95% · 35%",
          "Dragonhowl Lv.18 · Bloodlust Lv.15 · Redcurse Lv.5",
          "Stone Cracker Lv.30 · Cold Moon Lv.5 · Thorn Cutter Lv.18",
          "Sub-Classes: P9 (0%) · P8 (100%) · P8 (100%) · P7 (100%) · P6 (100%) · P6 (100%) · P5 (0%) · P4 (0%)",
        ],
      },
    ],
  },
  {
    id: "acc-109",
    title: "Ninja Lv 99 P3 — Duke 35B — P-Strike 248%",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: ninjaFuSeekerP3Img,
    className: "Ninja",
    prices: [{ label: "Preço", value: "A combinar" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 99 Sacred_Star_NinjaP3 (servidor Cancer)",
          "Perfection 648",
          "Noble Rank: Duke (Donation: 35.522.500.000)",
          "Rune Points: 265.600 | Ninpo Score: 35.660",
          "Weapon Archives: 51.930",
          "Astredge: Viodragon Club 95% · Love Forever 55%",
          "164 Garments + 71 Mounts",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP: 75.458 | Magic: 1.200",
          "Attack: 44.173 ~ 46.242 | Defense: 23.071",
          "M-Attack: 24.399 | M-Defense: 7.203",
          "Final P-Attack: +12.880 | Final M-Attack: +8.932",
          "Final P-Damage: -13.262 | Final M-Damage: -7.742",
          "P-Strike: 248.30% | Break: 84.6% | Anti-Break: 85.5%",
          "M-Strike: 48.40% | Immunity: 229.20% | Penetration: 15.00%",
        ],
      },
      {
        title: "Relíquia, Runas & Progressão",
        items: [
          "Relíquia: [Wild Force] BellofDoom (7.367 Pts) — Final P-Attack +408 · P-Strike +4.00% x2",
          "Runas: VioletShield(+8) · NatureShield(+9) · StarRaid(+23) · All-round(+27) · Caprice(+15) · Rampage(+15)",
          "Chi: P-Attack +2000 · P-Strike +20% · Immunity +20% · Max HP +3500",
          "Stone Cracker Lv.24 · Cold Moon Lv.12 · Thorn Cutter Lv.27",
          "Dragonhowl Lv.37 · Bloodlust Lv.19 | Bloodline: Paper Dance · Hel Vortex",
          "Sub-Classes: P8 (100%) · P8 (100%) · P7 (100%) · P7 (100%) · P6 (100%) · P5 (100%) · P4 (100%) · P4 (100%)",
        ],
      },
    ],
  },
  {
    id: "acc-108",
    title: "Ninja Lv 109 P2 — 385 BP — LegendSkyHammer +12",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: ninjaMrPopularity385bpImg,
    className: "Ninja",
    prices: [{ label: "Preço", value: "A combinar" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 109 Sacred_Star_NinjaP2 (servidor Dragon)",
          "385 BP | Perfection 648",
          "Noble Rank: Duchess (Donation: 19.661.000.000)",
          "Rune Points: 203.000 | Ninpo Score: 36.169",
          "LegendSkyHammer(+12) P7.1-handedSoul — Lvl 6 Breakthrough +10%",
          "Astredge: Viodragon Club 95% · Love Forever 15%",
          "132 Garments + 57 Mounts",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP: 76.434 | Magic: 800",
          "Attack: 44.465 ~ 46.956 | Defense: 22.341",
          "M-Attack: 23.374 | M-Defense: 7.233",
          "Final P-Attack: +10.964 | Final M-Attack: +7.899",
          "Final P-Damage: -11.674 | Final M-Damage: -6.884",
          "P-Strike: 96.60% | Break: 273.5% | Anti-Break: 58.2%",
          "M-Strike: 47.20% | Immunity: 229.08% | Penetration: 15.00%",
        ],
      },
      {
        title: "Chi & Progressão",
        items: [
          "Chi: Dragon Lv.95 · Phoenix Lv.99 · Turtle Lv.99 · Tiger Lv.99 (400 cada)",
          "Runa: All-round(+16)",
          "Bloodline: Paper Dance",
          "Sub-Classes: P8 (100%) · P7 (100%) · P7 (100%) · P6 (100%)",
          "Hammer of Discipline (B) x2",
        ],
      },
    ],
  },
  {
    id: "acc-107",
    title: "Ninja Lv 140 P2 — 405 BP — Duke 53B — Steed 88k",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: ninjaStarrider405bpImg,
    className: "Ninja",
    prices: [{ label: "Preço", value: "A combinar" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 140 Sacred_Star_NinjaP2 (servidor Hebby)",
          "405 BP | Perfection 648",
          "Noble Rank: Duke (Donation: 53.044.999.998 · Ranking 19)",
          "Rune Points: 181.200 | Ninpo Score: 38.356",
          "Steed(+12) Zebra — Lineage Level 12 (Lineage 88.186)",
          "Astredge: Viodragon Club 90% · Love Forever 25%",
          "151 Garments + 90 Mounts",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP: 75.311 | Magic: 1.200",
          "Attack: 52.983 ~ 56.329 | Defense: 32.135",
          "M-Attack: 23.374 | M-Defense: 8.061",
          "Final P-Attack: +10.364 | Final M-Attack: +6.864",
          "Final P-Damage: -10.454 | Final M-Damage: -6.129",
          "P-Strike: 106.60% | Break: 275.8% | Anti-Break: 58.1%",
          "M-Strike: 47.20% | Immunity: 222.76% | Penetration: 15.00%",
        ],
      },
      {
        title: "Relíquia, Chi & Progressão",
        items: [
          "Relíquia: [Deep Roar] HeartlessSeal (4.180 Pts) — P-Attack +278 · +237 · Immunity +0.66% · Break +1.78%",
          "Chi: Dragon Lv.99 · Tiger Lv.99 · Turtle Lv.89 · Phoenix Lv.99 (400 cada)",
          "Runas: All-round(+10) · SoulChant(+5)",
          "Bloodline: Infinite Mist · Paper Dance",
          "Sub-Classes: P8 (100%) · P7 (100%) · P4 (100%) · P4 (100%) · P7 (0%) · P6 (0%)",
          "Captain Morgan's Flag x2",
        ],
      },
    ],
  },
  {
    id: "acc-106",
    title: "Ninja Lv 99 P3 — 411 BP — Duke 46B — Break 276%",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: ninjaTidalVow411bpImg,
    className: "Ninja",
    prices: [{ label: "Preço", value: "A combinar" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 99 Sacred_Star_NinjaP3 (servidor Mausoleum)",
          "411 BP | Perfection 648",
          "Noble Rank: Duke (Donation: 46.391.000.000 · Ranking 18)",
          "Rune Points: 223.300",
          "Ninpo Score: 27.828 | Weapon Archives: 84.495",
          "Astredge: Love Forever 95% · Viodragon Club 95% · Heart Lock 70%",
          "Footprint: Phoenix Grace",
          "153 Garments + 95 Mounts",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP: 75.372 | Magic: 1.200",
          "Attack: 44.738 ~ 46.605 | Defense: 22.902",
          "M-Attack: 24.298 | M-Defense: 7.455",
          "Final P-Attack: +12.979 | Final M-Attack: +8.999",
          "Final P-Damage: -14.526 | Final M-Damage: -8.282",
          "P-Strike: 129.60% | Break: 276.0% | Anti-Break: 60.1%",
          "M-Strike: 48.20% | Immunity: 231.30% | Penetration: 15.00%",
        ],
      },
      {
        title: "Relíquia, Chi & Progressão",
        items: [
          "Relíquia: [Deep Roar] HeartlessSeal (7.028 Pts) — P-Attack +650 x2",
          "Chi: Dragon Lv.99 · Turtle Lv.86 · Tiger Lv.71 · Phoenix Lv.99 (400 cada)",
          "Stone Cracker Lv.21 · Cold Moon Lv.15 · Thorn Cutter Lv.31",
          "Bloodline: Paper Dance | Garment: Cloudbloom (Sweet)",
          "Sub-Classes: P9 (100%) · P9 (15%) · P9 (100%) · P9 (0%)",
          "Inner Power: Superb Manual · Violet Glow · Divine North Skill · Essence of Yin · Essence of Yang",
        ],
      },
    ],
  },
  {
    id: "acc-105",
    title: "Ninja Ideal Tortoise Predator — 0 Botjail — Break 317%",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: ninjaTortoisePredatorImg,
    className: "Ninja",
    prices: [{ label: "Preço", value: "A combinar" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 109 Sacred_Star_NinjaP2",
          "0 Botjail",
          "1 Ideal [Tortoise Predator]",
          "Max Main Sigil",
          "Slash Sigil (Max)",
          "Break with Relic Double: 317%",
          "Tortoise Gears [Armor + Necklace + Boot]",
          "Score Rune: 241k",
          "1 Footprint [Phoenix Grace]",
          "Relic [Double Break almost 4%]",
          "Astredge: Viodragon 90% + Love Forever 70%",
          "184 Garments + 104 Mounts",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "372 BP | Perfection 648",
          "HP: 78.152 | Magic: 1.200",
          "Attack: 45.149 ~ 47.640 | Defense: 23.552",
          "M-Attack: 24.934 | M-Defense: 7.444",
          "Final P-Attack: +10.364 | Final M-Attack: +6.864",
          "Final P-Damage: -10.454 | Final M-Damage: -6.239",
          "P-Strike: 96.70% | Block: 30.00%",
          "Break: 281.9% (316.9% com a relíquia) | Anti-Break: 56.1%",
          "M-Strike: 47.20% | Immunity: 228.70% | Penetration: 15.00%",
          "Detoxication: 72% | Parry: 8.00% | Lucky Strike: 7.00%",
          "Dash Rate: 1.50% | Dodge Rate: 13.40% | Hit Rate: 13.40%",
          "Resistências: Metal 80 / Wood 80 / Water 80 / Fire 80",
        ],
      },
      {
        title: "Runas, Relíquia & Progressão",
        items: [
          "Rune Points: 241.000 (runas principais em Max)",
          "Ninpo Score: 38.783 (Ninja Sprint)",
          "Relíquia: [Cloud Shock] HeartlessSeal (5.169 Pts)",
          "Break +3.55% (+0.10%) | Break +3.52% (+0.10%)",
          "Chi: Dragon Lv.87 | Tiger Lv.99 | Turtle Lv.99 | Phoenix Lv.99 (400 cada)",
          "Inner Power: Superb Manual · Violet Glow · Divine North Skill · The Essence of Yin (Perfect)",
          "Sub-Classes: P8 (100%) · P8 (96%) · P6 (100%)",
        ],
      },
    ],
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
    id: "acc-103",
    title: "8 GP account / decent donate — 1 Jail — 35k CPs",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: ninja1Jail35kImg,
    className: "Ninja",
    prices: [{ label: "Preço", value: "35k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Servidor NinjasAssemble",
          "1 Jail",
          "Preço: 35k CPs",
          "Lv. 140 Sacred_Star_NinjaP3",
          "B.P.: 347 (título Saint)",
          "Noble Rank: Prince (Donation: 78.512.000.000 · Ranking 5)",
          "Rune Points: 228.900",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP: 75.090 | Magic: 1.200",
          "Attack: 46.759 ~ 50.246 | Defense: 17.370",
          "M-Attack: 22.184 | M-Defense: 5.892",
          "Final P-Attack: +10.394 | Final P-Damage: -9.964",
          "P-Strike: 200.40% | Break: 102.5% | Anti-Break: 50.3%",
          "Immunity: 192.96% | Detoxication: 72% | Penetration: 15.00%",
          "Attack: 165% | Blessed: 35% | Block: 30.00%",
          "Dodge: 93 | Agility: 1.073 | Accuracy: 231",
          "Resistências: Metal 50 / Wood 50 / Water 50 / Fire 50",
        ],
      },
      {
        title: "Runas",
        items: [
          "Rune Points: 228.900",
          "Runas principais em Max",
          "Assassin (Main) · Comprehension · Pitching · FrostArrows",
          "Acalanatha · Tide Trap · SwingingTail · Sacrifice · BurningSky",
          "Stage Bonus: HP +3.700 · P-Atk +1.500 · M-Atk +2.600",
          "Stage Bonus: P-Stk 12% · M-Stk 10% · Imm 12% · Break 15% · Anti.Brk 15%",
        ],
      },
      {
        title: "Equipamentos",
        items: [
          "LegendDemonScythe(+12)[B] — P7ScytheSoul (InternNinja)",
          "Arma: Attack 3.350 ~ 3.423 · P-Strike 17% · Break 18%",
          "Sockets: DragonGem Attack +15% (x2)",
          "Necklace +12 · Armor +6 · Head +8 · Ring +12 · Botas +12",
          "Talismãs +7 / +8 (Lv. 4)",
          "Asas: HolyWings",
          "Steeds: Bloodlust Lv 40 · Dragonhowl Lv 31",
        ],
      },
      {
        title: "Sigils & Portões",
        items: [
          "Sigils: P7 0% · P6 100% (x3) · P4 100% · P1 0% · P6 0% · P4 0% (x2)",
          "Portões: Dawn · Life · Limit · Shock · Death · View · Pain · Rest",
          "Bônus: +2 níveis nos sigils engastados para atingir P4 Sage",
        ],
      },
    ],
  },
  {
    id: "acc-102",
    title: "Decente account server TwinCity[Origins] — 0 Jail — 18k CPs",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: archerTwinCityOriginsImg,
    className: "Archer",
    prices: [{ label: "Preço", value: "18k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Servidor TwinCity [Origins]",
          "0 Jail",
          "Preço: 18k CPs",
          "Lv. 140 ArcherMasterP2",
          "B.P.: 419",
          "Noble Rank: Countess (Donation: 20.847.000.000)",
          "Rune Points: 129.300",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP: 78.136",
          "Attack: 50.343 ~ 53.135 | Defense: 28.664",
          "M-Attack: 21.324 | M-Defense: 7.966",
          "Final P-Attack: +10.164 | Final P-Damage: +10.254",
          "P-Strike: 263.80% | Break: 65.4% | Anti-Break: 46.7%",
          "Immunity: 216.55% | Detoxication: 72% | Penetration: 15.00%",
          "Lucky Strike: 7.00% | Parry: 7.00%",
          "Dodge: 8.00% | Hit Rate: 10.00%",
          "Resistências: Metal 80 / Wood 80 / Water 80",
        ],
      },
      {
        title: "Runas",
        items: [
          "Rune Points: 129.300",
          "Runas principais em Max",
          "Cold Moon Lv 31",
          "Stone Cracker Max",
          "Thorn Cutter Lv 45",
        ],
      },
      {
        title: "Equipamentos",
        items: [
          "Set completo +12 (headgear, necklace, armor, bow, ring, boots)",
          "Acessórios e talismãs +12 com sockets",
          "Gold Trophy relic",
          "Steeds de +4 a +8 no warehouse",
        ],
      },
      {
        title: "Inner Power",
        items: [
          "Superb Manual · Violet Glow · Divine North Skill",
          "The Essence of Yin · The Essence of Yang",
          "My Potency: 31.700",
          "Dragon Lv96 · Tiger Lv99 · Phoenix Lv82 · Turtle Lv68",
          "Chi Points: 333.017",
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
    id: "acc-97",
    title: "Decente Ninja — 0 Jail — 8k CPs",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: decenteNinja8kImg,
    className: "Ninja",
    prices: [{ label: "Preço", value: "8k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Decente Ninja",
          "0 Jail",
          "Preço: 8k CPs",
          "Lv. 109 SacredSkyNinjaP3",
          "Noble Rank: Countess (Donation: 8.086.000.000)",
          "Ninpo Score: 27.975 (Ninja Sprint)",
          "Rune Points: 1.601.000",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP: 75.199 | Magic: 1.200",
          "Attack: 43.608 ~ 46.078 | Defense: 23.102",
          "M-Attack: 22.793 | M-Defense: 6.093",
          "Dodge: 69 | Agility: 1.062 | Accuracy: 246",
          "Blessed: 57%",
          "Final P-Attack: +10.364 | Final M-Attack: +6.864",
          "Final P-Damage: +10.722 | Final M-Damage: +6.129",
          "P-Strike: 106.60% | Block: 30.00% | Break: 24.1%",
          "Anti-Break: 58.1% | M-Strike: 47.20%",
          "Immunity: 21.96% | Penetration: 15.00% | Parry: 7.00%",
          "Lucky Strike: 7.00% | Dash Rate: 1.50% | Dodge Rate: 7.00% | Hit Rate: 7.00%",
          "Resistências: Metal 80 / Wood 80 / Water 80 / Fire 80",
        ],
      },
      {
        title: "Runas & Sigils",
        items: [
          "Rune Points: 1.601.000 (runas principais em Max)",
          "Sigil: aumenta o nível total dos sigils embutidos em 4 (P9 Sage)",
          "Recognition: 50%",
          "Stage-Bonus: HP +3.700 | P-Atk +1.500 | M-Atk +2.600 | Imm +12.00%",
        ],
      },
    ],
  },
  {
    id: "acc-94",
    title: "Ninja Sacred Star P5 — Heavenwonders — 1 Jail — 200k CPs",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: ninjaHw240kImg,
    className: "Ninja",
    prices: [{ label: "Preço", value: "200k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Ninja with Heavenwonders",
          "1 Jail",
          "Strike / Immunity Build",
          "Preço: 200k CPs",
          "Lv. 140 Sacred_Star_NinjaP5",
          "407 BP | Perfection 648",
          "Noble Rank: Prince (Donation: 86.832.000.000)",
          "Rune Points: 333.300",
          "Ninpo Score: 53.454",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP: 84.231 | Magic: 1.500",
          "Attack: 57.602 ~ 61.308 | Defense: 31.355",
          "M-Attack: 26.433 | M-Defense: 8.462",
          "Final P-Attack: +10.824 | Final M-Attack: +7.304",
          "Final P-Damage: +11.417 | Final M-Damage: +7.404",
          "P-Strike: 261.40% | Block: 30.00%",
          "Break: 119.9% | Anti-break: 61.7%",
          "M-Strike: 53.90% | Immunity: 237.70% | Penetration: 15.00%",
          "Resistências: Metal 80 / Wood 80 / Water 80 / Fire 80",
        ],
      },
      {
        title: "Equipamentos, Runas & Sub-Classes",
        items: [
          "Rune Points: 333.300 (Stage Bonus HP +5200, P-Atk +3100, M-Atk +4600, P-Stk +15.00%, Break +15.00%, Anti-Brk +15.00%, Imm +15.00%)",
          "Mount: Steed(+12) (Lineage Level 12 | Lineage: 2461)",
          "Recognition: 90% / 90% / 80% (21 Heavenly, 20 Mighty, 20 Cosmic)",
          "LegendNetherArmor(+12) [P7 Armor Soul P-Defense]",
          "LegendMonsterSaber(+12) [P7.1-handed Soul]",
          "LegendMoonHeadgear(+12) [P7 Headgear Soul Immunity]",
          "LegendHeavenNecklace(+12) [P7 Necklace Soul]",
          "Sub-Classes: P8 (100%), P5 (100%), P7, P8, P7, P5, P4, P3",
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
    id: "acc-92",
    title: "Ninja Sacred Star P3 — 405 BP — Duke 31B Donate — Steed 142k",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: ninjaStarryP3Img,
    className: "Ninja",
    prices: [{ label: "Preço", value: "A combinar" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 140 Sacred_Star_NinjaP3",
          "405 BP (Starry Promise)",
          "Noble Rank: Duke (Donation: 31.580.999.997 | Ranking: 30)",
          "Rune Points: 210.300",
          "Ninpo Score: 42.017",
          "Mount: Steed(+12)(B) Lineage Level 12 (Lineage: 142.892)",
          "Astredge: Love Forever (Excellence)",
          "Relic: [Deep Roar] HeartlessSeal (+650 P-Atk, +650 P-Atk, +1.64% Imm)",
          "Recognition: 50%",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP: 78.501 | Magic: 1.200",
          "Attack: 55.747 ~ 59.453 | Defense: 32.255",
          "M-Attack: 23.379 | M-Defense: 8.121",
          "Final P-Attack: +10.497 | Final M-Attack: +6.997",
          "Final P-Damage: +10.587 | Final M-Damage: +6.322",
          "P-Strike: 110.80% | Block: 30.00%",
          "Break: 134.4% | Anti-break: 51.2%",
          "M-Strike: 41.20% | Immunity: 221.84% | Penetration: 15.00%",
          "Resistências: Metal 80 / Wood 80 / Water 80 / Fire 80",
        ],
      },
      {
        title: "Runas, Relíquias & Sub-Classes",
        items: [
          "Rune Points: 210.300 (Stage Bonus HP +3700, P-Atk +1500, M-Atk +2600, P-Stk +12.00%, Break +15.00%, Imm +12.00%)",
          "Relic HeartlessSeal com duplo P-Attack +650 e Imunidade +1.64%",
          "Love Forever Excellence (P-Atk +2000, HP +3500, P-Stk +20%, Imm +20%)",
          "Sub-Classes: Superb Manual, Violet Glow, Divine North Skill, The Essence of Yin, The Essence of Yang",
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
    id: "acc-89",
    title: "Ótima oportunidade de Ninja prince/duke — 0 Jail",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: filaktImg,
    className: "Ninja",
    prices: [{ label: "Preço", value: "35k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Ótima oportunidade de Ninja prince/duke",
          "0 Jail",
          "Preço: 35k CPs",
          "Lv. 140 Sacred_Star_NinjaP3",
          "408 BP (Superman) | Perfection 648",
          "Noble Rank: Duchess (Prince / Duke donation: 75.650.000.100)",
          "Rune Points: 260.100",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP: 75.971 | Magic: 1.200",
          "Attack: 53.563 ~ 56.909 | Defense: 29.881",
          "M-Attack: 25.255 | M-Defense: 6.345",
          "Final P-Attack: +11.264 | Final M-Attack: +7.794",
          "Final P-Damage: +11.618 | Final M-Damage: +7.108",
          "P-Strike: 150.03% | Block: 30.00%",
          "Break: 245.7% | Anti-break: 72.9%",
          "Immunity: 231.70% | Penetration: 15.00%",
          "Resistências: Metal 80 / Wood 80 / Water 80 / Fire 80",
        ],
      },
      {
        title: "Runas, Jiang Hu & Sub-Classes",
        items: [
          "Rune Points: 260.100 (Stage Bonus HP +4200, P-Atk +2300, M-Atk +3600, Imm +12.00%)",
          "Recognition: 85%",
          "Jiang Hu: Dragonhowl Lv.31 | Bloodlust Lv.28",
          "Sub-Classes: P9 (100%), P9 (100%), P9 (100%), P8 (100%), P7, P6, P2 (100%)",
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
    id: "acc-86",
    title: "Ninja Sacred Star P7 — 1 Bot Jail — 160k CPs",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: ninja1Img,
    className: "Ninja",
    prices: [{ label: "Preço", value: "160k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "1 bot jail",
          "Lv. 140 Sacred_Star_NinjaP7",
          "475 BP | Perfection 648",
          "Rune Points: 315.100",
          "Preço: 160k CPs",
        ],
      },
      {
        title: "Atributos & Combate",
        items: [
          "HP: 78.876 | Magic: 1.500",
          "Attack: 60.654 ~ 64.360 | Defense: 33.297",
          "M-Attack: 26.403 | M-Defense: 8.933",
          "Final P-Attack: +13.024 | Final M-Attack: +9.411",
          "Final P-Damage: +14.267 | Final M-Damage: +8.844",
          "P-Strike: 274.20% | Block: 30.00%",
          "Break: 289.9% | Anti-break: 67.9%",
          "Immunity: 157.92% | Penetration: 15.00%",
          "Resistências: Metal 80 / Wood 80 / Water 80 / Fire 80",
        ],
      },
      {
        title: "Relíquia & Runas",
        items: [
          "Rune Points: 315.100 (Ciclo de Runas Max)",
          "Relíquia: Ferocious Roar HeartlessSeal (3.318 Pts)",
          "P-Attack +650(+20) x3 (Sinergizado)",
          "Ressonância 1: P-Strike +4.00%(+0.20%) x3 | Immunity +1.63% | Anti-break +1.57%",
          "Ressonância 2: Final M-Damage +222 | P-Attack +650(+20) x2",
          "Ressonância 3: Final M-Attack +107 | P-Strike +4.00%(+0.20%) x3 | Immunity +0.99%",
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
    image: pirate420kImg,
    className: "Pirata",
    prices: [{ label: "Preço", value: "370k CPs" }],
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
    id: "acc-79",
    title: "Ninja Sacred Star P8 — HW/Stun",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: jojoNinjaImg,
    className: "Ninja",
    prices: [{ label: "Preço", value: "340k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 140 Sacred_Star_NinjaP8",
          "Ninja Hw/Stun build",
          "1 Jail",
          "Perfection 648",
          "Supreme Diamond VIP",
          "Rune Points: 416.700",
        ],
      },
      {
        title: "Atributos",
        items: [
          "HP: 90.361 | Magic: 1.500",
          "Attack: 64.810 ~ 68.516 | Defense: 33.588",
          "M-Attack: 27.813 | M-Defense: 9.273",
          "Dodge: 107 | Agility: 1.073 | Accuracy: 256",
          "Attack: 1.070 | M-Def: 108% | Blessed: 57%",
          "Final P-Attack: +13.264 | Final M-Attack: +9.384",
          "Final P-Damage: +14.698 | Final M-Damage: +8.687",
          "P-Strike: 145.50% | Block: 30.00%",
          "Break: 27.26% | Anti-Break: 90.40% | M-Strike: 61.20%",
          "Immunity: 245.50% | Penetration: 15.00%",
          "Detoxication: 72% | Parry: 7.00% | Lucky Strike: 7.00%",
          "Dash Rate: 5.00% | Dodge Rate: 13.40% | Hit Rate: 15.80%",
          "Resist: 1.50%",
          "Resistências: Metal 80 / Wood 80 / Water 80 / Fire 80",
        ],
      },
      {
        title: "Runas & Gear",
        items: [
          "Main Runas em Max (ciclo completo)",
          "Rune Points: 416.700",
          "Recognition: 95% / 95% / 60%",
          "3 unbound yellow rune +9",
          "8 credit runes",
          "Retreat chi: 4x P strike",
          "Unbound steed / Boot",
        ],
      },
      {
        title: "Jiang Hu & Progressão",
        items: [
          "Jiang Hu: Heavenly 20 | Mighty 21 | Cosmic 20",
          "Equipamentos +12 com sockets",
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
    id: "acc-69",
    title: "Beast Water",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: waterWilsaoImg,
    className: "Taoist",
    prices: [{ label: "Preço", value: "120k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Beast Water",
          "Noble Rank Princess",
          "Donation: 50.1B",
          "407 BP",
          "Preço: 120k CPs",
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
