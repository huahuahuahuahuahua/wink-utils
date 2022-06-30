import { TAnyFunction } from "./debounce";

export type TAnyFunc = (...args: any[]) => any;

export const memo = function (fn: TAnyFunction, hasher?: TAnyFunc) {
  const memoFun = function (...argument: any[]) {
    const cache = memoFun.cache;
    // 转换为数组
    // console.log(this,arguments)
    // const args = [].slice.apply(arguments);
    const hashKey = hasher ? hasher.apply(this, argument) : argument[0];
    if (!cache[hashKey]) {
      cache[hashKey] = fn.apply(this, argument);
    }
    return cache[hashKey];
  };
  memoFun.cache = {};
  return memoFun;
};
export default memo;
