import { calculateConversion } from "./calculateConversion";
import { formatNumberWithCommas } from "./formatNumber";

describe("calculateConversion", () => {
  it("should return 0 for trueAmount and markedUpAmount if amount or rate is missing", () => {
    expect(calculateConversion(null, 1.5)).toEqual({
      trueAmount: 0,
      markedUpAmount: 0,
    });
    expect(calculateConversion(100, null)).toEqual({
      trueAmount: 0,
      markedUpAmount: 0,
    });
  });

  it("should calculate trueAmount and markedUpAmount correctly with default markup", () => {
    const result = calculateConversion(100, 1.5);
    expect(result.trueAmount).toBe(150);
    expect(result.markedUpAmount).toBeCloseTo(149.93, 2);
  });

  it("should calculate trueAmount and markedUpAmount with custom markup", () => {
    const result = calculateConversion(100, 1.5, 0.1); // 0.1% markup
    expect(result.trueAmount).toBe(150);
    expect(result.markedUpAmount).toBeCloseTo(135, 2);
  });

  it("should handle string inputs gracefully", () => {
    const result = calculateConversion("100", "1.5");
    expect(result.trueAmount).toBe(150);
    expect(result.markedUpAmount).toBeCloseTo(149.93, 2);
  });
});

describe("formatNumberWithCommas", () => {
  it("should format numbers with commas correctly", () => {
    expect(formatNumberWithCommas(1000)).toBe("1,000");
    expect(formatNumberWithCommas(1000000)).toBe("1,000,000");
    expect(formatNumberWithCommas(1234567890)).toBe("1,234,567,890");
  });

  it("should format floating-point numbers correctly", () => {
    expect(formatNumberWithCommas(1234.56)).toBe("1,234.56");
    expect(formatNumberWithCommas(1000000.99)).toBe("1,000,000.99");
  });

  it("should return '0' for invalid inputs", () => {
    expect(formatNumberWithCommas("abc")).toBe("0");
    expect(formatNumberWithCommas(null)).toBe("0");
    expect(formatNumberWithCommas(undefined)).toBe("0");
  });

  it("should handle string numbers", () => {
    expect(formatNumberWithCommas("1234.56")).toBe("1,234.56");
    expect(formatNumberWithCommas("1000")).toBe("1,000");
  });
});
