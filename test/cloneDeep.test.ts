import { cloneDeep } from "../src/index";

describe("cloneDeep 深拷贝", () => {
  it("should clone object", () => {
    expect(
      {
        a: [
          {
            a: 1,
            b: 2,
            c: "string",
          },
        ],
        b: 2,
        c: "string",
      }.a[0]
    ).toEqual({
      a: 1,
      b: 2,
      c: "string",
    });
  });
  it("should clone array", () => {
    expect(
      {
        a: [
          {
            a: 1,
            b: 2,
            c: "string",
          },
        ],
        b: 2,
        c: "string",
      }.a
    ).toEqual([
      {
        a: 1,
        b: 2,
        c: "string",
      },
    ]);
  });
  it("should clone {}", () => {
    expect(cloneDeep({})).toEqual({});
  });
  it("should clone []", () => {
    expect(cloneDeep([])).toEqual([]);
  });
  it("should clone string", () => {
    expect(cloneDeep("wink")).toEqual("wink");
  });
  it("should clone signNumber", () => {
    expect(cloneDeep(-1)).toEqual(-1);
    expect(cloneDeep(+1)).toEqual(+1);
    expect(cloneDeep(0.5)).toEqual(0.5);
  });
  it("should clone boolean", () => {
    expect(cloneDeep(true)).toEqual(true);
    expect(cloneDeep(false)).toEqual(false);
  });
  it("should clone undefined or null", () => {
    expect(cloneDeep(undefined)).toEqual(undefined);
    expect(cloneDeep(null)).toEqual(null);
  });
});
