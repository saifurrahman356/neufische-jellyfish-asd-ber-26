import { describe, expect, it } from "vitest";
import { maskify } from "../src/maskify";

describe("maskify", () => {
  it("masks all but the last four characters", () => {
    expect(maskify("4556364607935616")).toBe("############5616");
  });

  it("masks a string with eleven characters", () => {
    expect(maskify("64607935616")).toBe("#######5616");
  });

  it("does not mask a single character", () => {
    expect(maskify("1")).toBe("1");
  });

  it("returns an empty string unchanged", () => {
    expect(maskify("")).toBe("");
  });

  it("does not mask strings of four characters", () => {
    expect(maskify("1234")).toBe("1234");
  });

  it("masks characters in a pet name", () => {
    expect(maskify("Skippy")).toBe("##ippy");
  });

  it("preserves the last four characters, including spaces", () => {
    expect(maskify("Batman!")).toBe("###man!");
  });
});
