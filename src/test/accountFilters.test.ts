import { describe, expect, it } from "vitest";
import type { AccountListing } from "@/data/accounts";
import { filterAccounts, getAvailableLevelBuckets, getPriceCeiling } from "@/lib/accountFilters";

const account = (id: string, price: string, level: number, className = "Ninja"): AccountListing => ({
  id,
  title: `Conta ${id}`,
  badge: "",
  badgeColor: "",
  image: "",
  className,
  prices: [{ label: "Preço", value: price }],
  sections: [{ title: "Destaques", items: [`Lv. ${level} Sacred Star`] }],
});

const base = {
  search: "",
  className: null,
  minPrice: 0,
  maxPrice: 1000,
  includeNegotiable: true,
  levels: [],
};

describe("getPriceCeiling", () => {
  it("arredonda o maior preço para cima e acompanha contas mais caras", () => {
    expect(getPriceCeiling([account("a", "370k CPs", 140)])).toBe(400);
    expect(getPriceCeiling([account("a", "370k CPs", 140), account("b", "420k CPs", 140)])).toBe(450);
    expect(getPriceCeiling([account("a", "370k CPs", 140), account("b", "900k CPs", 140)])).toBe(900);
    expect(getPriceCeiling([account("a", "25k CPs", 140)])).toBe(30);
  });

  it("sem nenhuma conta com preço, usa um teto padrão", () => {
    expect(getPriceCeiling([account("a", "A combinar", 140)])).toBe(100);
  });
});

describe("filterAccounts", () => {
  const list = [
    account("barata", "25k CPs", 140),
    account("cara", "370k CPs", 140, "Pirata"),
    account("combinar", "A combinar", 109),
  ];

  it("filtra pela faixa de preço", () => {
    const ids = filterAccounts(list, { ...base, minPrice: 0, maxPrice: 100 }).map((a) => a.id);
    expect(ids).toEqual(["barata", "combinar"]);
  });

  it("tira as contas \"A combinar\" quando pedido", () => {
    const ids = filterAccounts(list, { ...base, includeNegotiable: false }).map((a) => a.id);
    expect(ids).toEqual(["barata", "cara"]);
  });

  it("filtra por faixa de level e ignora chaves antigas", () => {
    expect(filterAccounts(list, { ...base, levels: ["lt110"] }).map((a) => a.id)).toEqual(["combinar"]);
    // "130+" era uma faixa antiga: link velho não pode zerar a lista
    expect(filterAccounts(list, { ...base, levels: ["130+"] })).toHaveLength(3);
  });

  it("filtra por classe", () => {
    expect(filterAccounts(list, { ...base, className: "Pirata" }).map((a) => a.id)).toEqual(["cara"]);
  });
});

describe("getAvailableLevelBuckets", () => {
  it("só devolve faixas que têm conta", () => {
    const keys = getAvailableLevelBuckets([account("a", "1k CPs", 140), account("b", "1k CPs", 98)]).map((b) => b.key);
    expect(keys).toEqual(["140", "lt110"]);
  });
});
