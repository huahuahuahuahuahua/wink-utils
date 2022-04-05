export declare type TAnyFunction = (...args: any[]) => void;
export declare const OldcacheAsync: (fn: TAnyFunction) => (str: string | number) => Promise<any>;
/**
 * @msg:
 * @param {*} promiseGenerator promise function
 * @param {*} symbol
 * @return {*}
 * @Descripttion:多个相同的请求，请求成功，停止，失败，继续
 */
export declare const UpdateCacheAsync: (promiseGenerator: any, symbol: any) => (params: any) => Promise<unknown>;
export declare function fetchData(a: string | number): Promise<string>;
