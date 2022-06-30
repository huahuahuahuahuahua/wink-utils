import { isCycleObject } from "../src/index";

describe("isCycleObject", () => {
  describe("should return a isCycleObject false", () => {
    test("param:o = { d: { a: 3 }, c },return false", () => {
      const a = 1;
      const b = { a, aa: 0 };
      const c = { b };
      const o = { d: { a: 3 }, c };
      o.c.b.aa = a;
      expect(isCycleObject({ obj: o })).toBe(false);
    });
  });
});
