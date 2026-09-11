import waterImg from "@/assets/water.jpg";
import jojoNinjaImg from "@/assets/JojoNinja.jpg";
import decenteWaterImg from "@/assets/decente-water.png";
import waterIdealImg from "@/assets/water-ideal.png";
import waterOpImg from "@/assets/water-op.jpg";

import sellWaterMaxArchiveImg from "@/assets/sell-water-max-archive.png";

import ninjahw from "@/assets/ninjahw.jpg";
import nicholas from "@/assets/nicholas.jpg";

import topWaterArchivesFullImg from "@/assets/top-water-archives-full.jpg";
import beastWaterImg from "@/assets/beast-water.jpg";
import waterFire12kImg from "@/assets/water-fire-12k.png";


import monkSacredStarP1Img from "@/assets/monk-sacred-star-p1.png";
import pirateSacredStarP9Img from "@/assets/pirate-sacred-star-p9.png.asset.json";

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
    id: "acc-81",
    title: "Pirate Sacred Star P9 — 0 Jail",
    badge: "NOVO",
    badgeColor: "bg-emerald-500",
    image: pirateSacredStarP9Img.url,
    className: "Pirata",
    prices: [{ label: "Preço", value: "10k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 140 SacredSeaPirateP9",
          "0 Jail",
          "Servidor Storm",
          "Rune Points: 111.800",
        ],
      },
      {
        title: "Atributos",
        items: [
          "HP: 75.270 | Magic: 400",
          "Attack: 4.977 ~ 52.867 | Defense: 21.195",
          "M-Attack: 22.080 | M-Defense: 6.016",
          "Dodge: 104 | Agility: 1.149 | Accuracy: 246",
          "M-Def: 87% | Blessed: 57%",
          "Final P-Attack: +10.379 | Final M-Attack: +6.829",
          "Final P-Damage: +10.479 | Final M-Damage: +6.129",
          "P-Strike: 111.60% | Block: 30.00%",
          "Break: 240.50% | Anti-Break: 58.10% | M-Strike: 47.20%",
          "Immunity: 208.10% | Penetration: 15.00%",
          "Detoxication: 72% | Parry: 7.00% | Lucky Strike: 7.00%",
          "Hit Rate: 4.00%",
          "Resistências: Metal 80 / Wood 80 / Water 80 / Fire 80",
        ],
      },
      {
        title: "Runas",
        items: [
          "Rune Points: 111.800",
          "Stage Bonus: HP 3.700 | P-Atk 1.500 | M-Atk 1.600",
          "P-Stk 10.00% | M-Stk 10.00% | Break 15.00% | Anti-Brk 15.00% | Imm 10.00%",
        ],
      },
      {
        title: "Equipamentos",
        items: [
          "Steed +12 (Zebra) — Lineage 7.325",
          "Legend Hunting Bow (Intern Archer) Lv. 15",
          "Attack 76-94 | Agility +18 | Attack Rate 111",
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
          "373 BP | Mythsoul 250",
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
    prices: [{ label: "Preço", value: "420k CPs" }],
    sections: [
      {
        title: "Destaques",
        items: [
          "Lv. 140 Sacred_Star_NinjaP8",
          "Ninja Hw/Stun build",
          "1 Jail",
          "Mythsoul 648",
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
