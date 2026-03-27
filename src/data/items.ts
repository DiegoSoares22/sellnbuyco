export type ItemCategory = "currency" | "rune" | "awakening" | "collection" | "anima" | "donate" | "misc";

export interface GameItem {
  name: string;
  image: string | null;
  price: number | null;
  tooltip_en: string;
  tooltip_ptbr: string;
  category: ItemCategory;
  is_temporary: boolean;
}

const IMAGE_MAP: Record<string, string> = {
  "200KK Silver Bag": "https://hsimages.99.com/zfstore/productimg/47f4b477512947d48e6bb0fac65189d1.png",
  "10000CP(B)": "https://hsimages.99.com/zfstore/productimg/9506e2e0741a46ddbb57839707bb6126.png",
  "Damage Pierce (+1)(B)": "https://hsimages.99.com/zfstore/productimg/dc503473ce5c40cf9b3deecc091683ef.png",
  "Arcane Drain (+1) (B)": "https://hsimages.99.com/zfstore/productimg/9e44aff0a0cc467ca0ebec9a9dfa4292.png",
  "Firm Heart (+1) (B)": "https://hsimages.99.com/zfstore/productimg/7ec76dd2876b4424ba5971a885e51b94.png",
  "Blaze Gaze (+1) (B)": "https://hsimages.99.com/zfstore/productimg/edd907a49b3c43528bee66dafd409702.png",
  "Ashes To Ashes (+1) (B)": "https://hsimages.99.com/zfstore/productimg/1d4ccde5065b46529af502adc56f50fe.png",
  "Opposing Force (+1) (B)": "https://hsimages.99.com/zfstore/productimg/91a56f9f41724c0594f418be5ebafadd.png",
  "Spotless (+1) (B)": "https://hsimages.99.com/zfstore/productimg/6392d06fd3824a32822c63631df1ec1e.png",
  "Equalizer (+1) (B)": "https://hsimages.99.com/zfstore/productimg/6b120ddd3cf54dc8ae1a2d8955dd6d63.png",
  "Velocity Bane (+1) (B)": "https://hsimages.99.com/zfstore/productimg/fdb1cd126d0c449987f400e0e2d5e952.png",
  "Soul Annihilation (+1) (B)": "https://hsimages.99.com/zfstore/productimg/210e413ab1954265b164bb12ccbebca9.png",
  "Stealth Dragon (+1) (B)": "https://hsimages.99.com/zfstore/productimg/9255944a91094609b9822e7aa3845279.png",
  "Senior Rare Rune Box": "https://hsimages.99.com/zfstore/productimg/41db024bc9f94640943371a4af19d1d2.png",
  "Area Occupier (+1)(B)": "https://hsimages.99.com/zfstore/productimg/560e269a440742699e90326c55145f85.png",
  "Silent Blade (+1)(B)": "https://hsimages.99.com/zfstore/productimg/5206535c86ae4a7ab2be66627a1da678.png",
  "Perseverance (+1)(B)": "https://hsimages.99.com/zfstore/productimg/796bcc6069c94bc2bccf38b1e132864e.png",
  "Celestial Rope (+1)(B)": "https://hsimages.99.com/zfstore/productimg/d1ef84759c054c569df9d5bbf7b924d4.png",
  "Pure Serenity (+1)(B)": "https://hsimages.99.com/zfstore/productimg/ca717e415dfe446a97ff969a1bb365f7.png",
  "Sky Soarer (+1) (B)": "https://hsimages.99.com/zfstore/productimg/f8de3e6a23d5400ebece12c700b458c5.png",
  "Hurricane Sweep (+1) (B)": "https://hsimages.99.com/zfstore/productimg/f53d86a9b0274f2088a69cf5ee932330.png",
  "Seethrough (+1)(B)": "https://hsimages.99.com/zfstore/productimg/4308903a8c5e43e4b62ce88ea4134c54.png",
  "Impregnability (+1)(B)": "https://hsimages.99.com/zfstore/productimg/4308903a8c5e43e4b62ce88ea4134c54.png",
  "Rare Rune Box": "https://hsimages.99.com/zfstore/productimg/41db024bc9f94640943371a4af19d1d2.png",
  "Sky Veil (+1)(B)": "https://hsimages.99.com/zfstore/productimg/f8de3e6a23d5400ebece12c700b458c5.png",
  "Rare Rune Optional Box": "https://hsimages.99.com/zfstore/productimg/41db024bc9f94640943371a4af19d1d2.png",
  "Optional Rare Yellow Rune(B) Pack": "https://hsimages.99.com/zfstore/productimg/41db024bc9f94640943371a4af19d1d2.png",
  "Wavebreak (+1)(B)": "https://hsimages.99.com/zfstore/productimg/4b80cc2f6e744131ae3d0caecf2ea00c.png",
  "Universal Rune Essence (B) * 300": "https://hsimages.99.com/zfstore/productimg/41db024bc9f94640943371a4af19d1d2.png",
  "14D Strike Booster (+9) Box": "https://hsimages.99.com/zfstore/productimg/41db024bc9f94640943371a4af19d1d2.png",
  "14D Wild Cleave (+9) Box": "https://hsimages.99.com/zfstore/productimg/41db024bc9f94640943371a4af19d1d2.png",
  "Focus Pebble Box(Taoist)": "https://hsimages.99.com/zfstore/productimg/72d3298b5750473c98de6e4933ab5725.png",
  "Immense Zest Box(Pirata)": "https://hsimages.99.com/zfstore/productimg/3ed0db0be30249bba3db5f73687967ef.png",
  "Solar Orb Box(Dragon Warrior)": "https://hsimages.99.com/zfstore/productimg/a5298276927e4951a7a55c07b357f3a2.png",
  "Virtuousness Sutra * 10(Monk)": "https://hsimages.99.com/zfstore/productimg/c1a271d097434c7ca2f2e0a2f4fd83ba.png",
  "Arcane Essence Chest": "https://hsimages.99.com/zfstore/productimg/7d30ca549a35470fa1414ad3bbfe9eec.jpeg",
  "100LegendaryEssencePack": "https://hsimages.99.com/zfstore/productimg/e392d7e4901d4597ae5903f6eb535576.jpeg",
  "Super Soul Stone *10": "https://hsimages.99.com/zfstore/productimg/cdbf3ec3fe234bf2a9dd88bc0ab93aa8.png",
  "Stellar Canopy (B)": "https://hsimages.99.com/zfstore/productimg/5663ddbaab7642cc8a337be0c5477629.png",
  "Scrap Selection Box": "https://hsimages.99.com/zfstore/productimg/c1a713a8e5684ee787c611acf85085be.png",
  "Flute Scrap Box": "https://hsimages.99.com/zfstore/productimg/a348a089d75b4a11a59f73a42a305072.png",
  "P13 Anima": "https://hsimages.99.com/zfstore/productimg/405184cb6ad348a28897012ceb277e25.jpg",
  "High Phase Anima Wheel": "https://hsimages.99.com/zfstore/productimg/54189937cfc14078a2ff7ee61fa6d6d6.png",
  "1KKK Contribution Seal": "https://hsimages.99.com/zfstore/productimg/e22851948fac49c2af76c5772aa7f542.png",
  "Rare Inner Power Book Box": "https://hsimages.99.com/zfstore/productimg/463e0fbef44f4aaca0316dea38f92261.png",
  "Stone(+8)(B)": "https://hsimages.99.com/zfstore/productimg/6bcb9725656847b78ab27bd1675fee51.png",
  "Tough Drill (B) * 2": "https://hsimages.99.com/zfstore/productimg/709ea0d6718f469d976d1c6ffade23ed.png",
  "Big Permanent Stone (B)": "https://hsimages.99.com/zfstore/productimg/1f6ae8c2ad5f454fbf5603303524e497.png",
  "Super Infinity Gem": "https://hsimages.99.com/zfstore/productimg/c846edfdf1254ee2afb60299bf338d4d.png",
  "Super Fantasy Crystal": "https://hsimages.99.com/zfstore/productimg/981421f90bd347fd9ad8c620edbf17cc.png",
  "Sigil Box": "https://hsimages.99.com/zfstore/productimg/3b1b544ff98442e897e6e1568cfa4888.png",
  "Advanced Sigil Box": "https://hsimages.99.com/zfstore/productimg/e45a2767942b4858a9d4f0a9e5e528ac.png",
  "PowerEXPBall": "https://hsimages.99.com/zfstore/productimg/ad4e3cf9b1804e88a9f81061e8efccae.png",
  "L6 Mythsoul Box": "https://hsimages.99.com/zfstore/productimg/82b5830922994111978cd0100458c884.jpeg",
  "Cosmos Hammer * 5": "https://hsimages.99.com/zfstore/productimg/a12ac5f2f6cc42a2a7268f700bba5393.png",
  "Chi Booster Box": "https://hsimages.99.com/zfstore/productimg/486a635284924defad7238688fda569a.png",
  "Advanced Lunar Lottery Box": "https://hsimages.99.com/zfstore/productimg/b8d39674692143caa1bbacd59544dc5e.png",
  "Knowledge Box": "https://hsimages.99.com/zfstore/productimg/122aa56e4e3b433bb073a803e2917198.png",
  "100000 Chi Points (B)": "https://hsimages.99.com/zfstore/productimg/3d34772d952346e88a1850f774ef7ea9.png",
  "L5 New Mythsoul Box": "https://hsimages.99.com/zfstore/productimg/05996911f0e44a079f3e7c1438ae7ef7.png",
  "Prism Stone * 100": "https://hsimages.99.com/zfstore/productimg/e89bf8df9b8849b6bdc8984051cf3ff2.png",
};

const TOOLTIPS_PTBR: Record<string, string> = {
  currency: "Moeda do jogo — CPs ou Gold para uso geral.",
  rune: "Runa permanente para melhorar atributos do personagem.",
  awakening: "Item de despertar de classe — necessário para evoluções.",
  collection: "Item de coleção que garante bônus permanentes.",
  anima: "Anima para evolução de Battle Power.",
  donate: "Item de doação/contribuição para guild ou servidor.",
  misc: "Utilitário geral — pedras, gemas, itens de suporte.",
};

function buildItem(name: string, category: ItemCategory): GameItem {
  return {
    name,
    image: IMAGE_MAP[name] || null,
    price: null,
    tooltip_en: `${category.charAt(0).toUpperCase() + category.slice(1)} item from the Conquer Online store.`,
    tooltip_ptbr: TOOLTIPS_PTBR[category],
    category,
    is_temporary: false,
  };
}

export const GAME_ITEMS: GameItem[] = [
  // Currency
  buildItem("200KK Silver Bag", "currency"),
  buildItem("10000CP(B)", "currency"),
  // Runes
  buildItem("Damage Pierce (+1)(B)", "rune"),
  buildItem("Arcane Drain (+1) (B)", "rune"),
  buildItem("Firm Heart (+1) (B)", "rune"),
  buildItem("Blaze Gaze (+1) (B)", "rune"),
  buildItem("Ashes To Ashes (+1) (B)", "rune"),
  buildItem("Opposing Force (+1) (B)", "rune"),
  buildItem("Spotless (+1) (B)", "rune"),
  buildItem("Equalizer (+1) (B)", "rune"),
  buildItem("Velocity Bane (+1) (B)", "rune"),
  buildItem("Soul Annihilation (+1) (B)", "rune"),
  buildItem("Stealth Dragon (+1) (B)", "rune"),
  buildItem("Senior Rare Rune Box", "rune"),
  buildItem("Area Occupier (+1)(B)", "rune"),
  buildItem("Silent Blade (+1)(B)", "rune"),
  buildItem("Perseverance (+1)(B)", "rune"),
  buildItem("Celestial Rope (+1)(B)", "rune"),
  buildItem("Pure Serenity (+1)(B)", "rune"),
  buildItem("Sky Soarer (+1) (B)", "rune"),
  buildItem("Hurricane Sweep (+1) (B)", "rune"),
  buildItem("Seethrough (+1)(B)", "rune"),
  buildItem("Impregnability (+1)(B)", "rune"),
  buildItem("Rare Rune Box", "rune"),
  buildItem("Sky Veil (+1)(B)", "rune"),
  buildItem("Rare Rune Optional Box", "rune"),
  buildItem("Optional Rare Yellow Rune(B) Pack", "rune"),
  buildItem("Wavebreak (+1)(B)", "rune"),
  buildItem("Universal Rune Essence (B) * 300", "rune"),
  buildItem("14D Strike Booster (+9) Box", "rune"),
  buildItem("14D Wild Cleave (+9) Box", "rune"),
  // Awakening
  buildItem("Focus Pebble Box(Taoist)", "awakening"),
  buildItem("Immense Zest Box(Pirata)", "awakening"),
  buildItem("Solar Orb Box(Dragon Warrior)", "awakening"),
  buildItem("Virtuousness Sutra * 10(Monk)", "awakening"),
  buildItem("Arcane Essence Chest", "awakening"),
  buildItem("100LegendaryEssencePack", "awakening"),
  buildItem("Super Soul Stone *10", "awakening"),
  // Collection
  buildItem("Stellar Canopy (B)", "collection"),
  buildItem("Scrap Selection Box", "collection"),
  buildItem("Flute Scrap Box", "collection"),
  // Anima
  buildItem("High Phase Anima Wheel", "anima"),
  buildItem("P13 Anima", "anima"),
  // Donate
  buildItem("1KKK Contribution Seal", "donate"),
  // Misc
  buildItem("Rare Inner Power Book Box", "misc"),
  buildItem("Stone(+8)(B)", "misc"),
  buildItem("Tough Drill (B) * 2", "misc"),
  buildItem("Big Permanent Stone (B)", "misc"),
  buildItem("Super Infinity Gem", "misc"),
  buildItem("Super Fantasy Crystal", "misc"),
  buildItem("Sigil Box", "misc"),
  buildItem("Advanced Sigil Box", "misc"),
  buildItem("PowerEXPBall", "misc"),
  buildItem("L6 Mythsoul Box", "misc"),
  buildItem("Cosmos Hammer * 5", "misc"),
  buildItem("Chi Booster Box", "misc"),
  buildItem("Advanced Lunar Lottery Box", "misc"),
  buildItem("Knowledge Box", "misc"),
  buildItem("100000 Chi Points (B)", "misc"),
  buildItem("L5 New Mythsoul Box", "misc"),
  buildItem("Prism Stone * 100", "misc"),
];

export const CATEGORY_LABELS: Record<ItemCategory | "all", { label: string; emoji: string }> = {
  all: { label: "Geral", emoji: "🏪" },
  currency: { label: "CPs / Gold", emoji: "💰" },
  rune: { label: "Runas", emoji: "🔶" },
  awakening: { label: "Awakening", emoji: "⚔️" },
  collection: { label: "Collections", emoji: "🎼" },
  anima: { label: "Animas", emoji: "🔮" },
  donate: { label: "Donate", emoji: "💎" },
  misc: { label: "Utilitários", emoji: "🧰" },
};

export const GAMER_TIPS: Record<ItemCategory, string> = {
  rune: "Se for roleta de anima... fuja 😅\nPassar de 45k CPs é mais comum do que parece.",
  awakening: "Atalho caro. Eventos costumam compensar mais.",
  collection: "Ótimo pra server novo. Pode sair mais barato em eventos.",
  anima: "Boa pra BP rápido. Server antigo? Pesquisa antes 👍",
  currency: "Interessante em servidores novos ou em último caso.\nFale com a gente pra melhores valores.",
  donate: "Contribuição pra guild. Verifique se vale a pena no seu server.",
  misc: "Perfeito pra quem está começando ou voltando.",
};
