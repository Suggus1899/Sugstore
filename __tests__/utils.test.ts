import { describe, it, expect } from "vitest";
import { formatPrice } from "@/lib/utils";

describe("formatPrice", () => {
  it("formats EUR correctly", () => {
    const result = formatPrice(89, "EUR");
    expect(result).toContain("89");
    expect(result).toContain("€");
  });

  it("formats USD correctly", () => {
    const result = formatPrice(99, "USD");
    expect(result).toContain("99");
    expect(result).toContain("$");
  });

  it("handles zero", () => {
    const result = formatPrice(0, "EUR");
    expect(result).toContain("0");
  });
});
