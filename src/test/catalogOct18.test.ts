import { describe, expect, it } from "vitest";
import { ACCOUNTS } from "@/data/accounts";

describe("October 18 catalog updates", () => {
  it.each([
    ["acc-124", "15k CPs"],
    ["acc-125", "90k CPs"],
    ["acc-126", "130k CPs"],
    ["acc-127", "150k CPs"],
    ["acc-128", "25k CPs"],
    ["acc-129", "25k CPs"],
  ])("stores the confirmed price for %s", (id, price) => {
    expect(ACCOUNTS.find((account) => account.id === id)?.prices[0]?.value).toBe(price);
  });

  it("includes the confirmed jail information for image 3", () => {
    const account = ACCOUNTS.find((listing) => listing.id === "acc-125");
    expect(account?.sections.flatMap((section) => section.items)).toContain("1 Jail");
  });

  it("lists the new pirate as 0 Jail with max archives", () => {
    const account = ACCOUNTS.find((listing) => listing.id === "acc-128");
    const items = account?.sections.flatMap((section) => section.items) ?? [];
    expect(items).toContain("0 Jail");
    expect(items).toContain("Archives: Max");
    expect(account?.className).toBe("Pirata");
  });

  it("lists the new archer as 0 Jail with 1 ideal rune", () => {
    const account = ACCOUNTS.find((listing) => listing.id === "acc-129");
    const items = account?.sections.flatMap((section) => section.items) ?? [];
    expect(items).toContain("0 Jail");
    expect(items).toContain("1 Ideal Rune");
    expect(account?.className).toBe("Archer");
  });

  it("removes the specified Gears P7 Ninja listing", () => {
    expect(ACCOUNTS.some((account) => account.id === "acc-96")).toBe(false);
  });
});

describe("November 6 catalog updates", () => {
  it.each([
    ["acc-130", "15k CPs"],
    ["acc-131", "150k CPs"],
    ["acc-132", "25k CPs"],
  ])("stores the confirmed price for %s", (id, price) => {
    expect(ACCOUNTS.find((account) => account.id === id)?.prices[0]?.value).toBe(price);
  });

  it("lists the Triumph pirate as 0 Jail with max archives", () => {
    const account = ACCOUNTS.find((listing) => listing.id === "acc-130");
    const items = account?.sections.flatMap((section) => section.items) ?? [];
    expect(items).toContain("0 Jail");
    expect(items).toContain("Archives: Max for Pirate");
    expect(account?.className).toBe("Pirata");
  });

  it("keeps jail out of the two water listings that did not show it", () => {
    for (const id of ["acc-131", "acc-132"]) {
      const account = ACCOUNTS.find((listing) => listing.id === id);
      const items = account?.sections.flatMap((section) => section.items) ?? [];
      expect(items.some((item) => /jail/i.test(item))).toBe(false);
      expect(account?.className).toBe("Taoist");
    }
  });
});