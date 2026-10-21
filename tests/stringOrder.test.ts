import { describe, it, expect } from "vitest";
import { stringOrder } from "../src/stringOrder";

describe("stringOrder", () => {
  it("sorts words by their numbers", () => {
    expect(stringOrder("is2 Thi1s T4est 3a")).toBe("Thi1s is2 3a T4est");
  });

  it("sorts a longer sentence correctly", () => {
    expect(stringOrder("4of Fo1r pe6ople g3ood th5e the2")).toBe(
      "Fo1r the2 g3ood 4of th5e pe6ople",
    );
  });

  it("returns an empty string for empty input", () => {
    expect(stringOrder("")).toBe("");
  });

  it("returns an empty string for whitespace-only input", () => {
    expect(stringOrder("   ")).toBe("");
  });

  it("handles a single word", () => {
    expect(stringOrder("word1")).toBe("word1");
  });

  it("handles words that are already sorted", () => {
    expect(stringOrder("a1 b2 c3")).toBe("a1 b2 c3");
  });

  it("sorts words in reverse stringOrder", () => {
    expect(stringOrder("c3 b2 a1")).toBe("a1 b2 c3");
  });

  it("handles numbers from 1 to 9", () => {
    expect(stringOrder("i9 h8 g7 f6 e5 d4 c3 b2 a1")).toBe(
      "a1 b2 c3 d4 e5 f6 g7 h8 i9",
    );
  });
});
