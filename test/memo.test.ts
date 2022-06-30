import { memo } from "../src/index";
const fibonacci = (x: number) => {
  if (x === 1 || x === 2) {
    return 1;
  }
  return fibonacci(x - 1) + fibonacci(x - 2);
};
describe("memo Test", () => {
  test("memo Second Get should be Zero", () => {
    const cachedfFibonacci = memo(fibonacci);
    // 然后看下效果
    let startTime = new Date().getTime();
    cachedfFibonacci(40);
    let needTime = new Date().getTime() - startTime;
    // 第一次运行时间还是959毫秒
    // 再调一次
    startTime = new Date().getTime();
    expect(needTime).toBeGreaterThanOrEqual(0);
    cachedfFibonacci(40);
    needTime = new Date().getTime() - startTime;

    // 时间直接变为0了，直接取缓存，快到1毫秒都不要
    expect(needTime).toBeLessThan(10);
  });
});
