export type TAnyFunction = (...args: any[]) => void;

export const OldcacheAsync = (fn: TAnyFunction) => {
  const cache = Object.create(null);
  return async (str: string | number) => {
    const hit = cache[str];
    if (hit) {
      return hit;
    }
    return (cache[str] = await fn(str));
  };
};
/* 
每个请求都返回一个新的Promise, Promise的exector的执行时机，通过一个队列保存。
当队列长度为1的时候，执行一次请求，如果请求成功，那么遍历队列中的exector，拿到请求的结果然后resolve。
如果请求失败了，那么就把这个Promise reject掉，同时出栈。然后递归调用next
直到exector队列清空为止
 */
/**
 * @msg:
 * @param {*} promiseGenerator promise function
 * @param {*} symbol
 * @return {*}
 * @Descripttion:多个相同的请求，请求成功，停止，失败，继续
 */
export const UpdateCacheAsync = (promiseGenerator, symbol) => {
  const cache: Map<any, any> = new Map();
  const never: unique symbol = Symbol();
  return async (params) => {
    return new Promise((resolve, reject) => {
      symbol = symbol || params;
      let cacheCfg = cache.get(symbol);
      if (!cacheCfg) {
        cacheCfg = {
          hit: never,
          exector: [{ resolve, reject }],
        };
        cache.set(symbol, cacheCfg);
      } else {
        if (cacheCfg.hit !== never) {
          return resolve(cacheCfg.hit);
        }
        cacheCfg.exector.push({ resolve, reject });
      }
      const { exector } = cacheCfg;
      if (exector.length === 1) {
        const next = async () => {
          try {
            if (!exector.length) return;
            const response = await promiseGenerator(params);
            while (exector.length) {
              exector.shift().resolve(response);
            }
            cacheCfg.hit = response;
          } catch (error) {
            const { reject } = exector.shift();
            reject(error);
            next();
          }
        };
        next();
      }
    });
  };
};
export async function fetchData(a: string | number) {
  const data = await fetch("//127.0.0.1:8888");
  console.log(data);
  const d = JSON.stringify(data);
  console.log(d);
  return d;
}
function test() {
  const fetch2 = OldcacheAsync(fetchData);
  fetch2(2);
  fetch2(2);
  fetch2(2);
  fetch2(2);
  fetch2(2);

  async function fetch(str: string) {
    let count = 1;
    return (function () {
      let o = new Object();
      return (o = {
        str: str,
        value: count++,
      });
    })();
  }
}
