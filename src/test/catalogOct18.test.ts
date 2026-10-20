import { describe, expect, it } from "vitest";
import { ACCOUNTS } from "@/data/accounts";

describe("October 18 catalog updates", () => {
  it.each([
    ["acc-123", "30k CPs"],
    ["acc-124", "15k CPs"],
    ["acc-125", "90k CPs"],
    ["acc-126", "130k CPs"],
    ["acc-127", "150k CPs"],
    ["acc-128", "25k CPs"],
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

  it("removes the specified Gears P7 Ninja listing", () => {
    expect(ACCOUNTS.some((account) => account.id === "acc-96")).toBe(false);
  });
});