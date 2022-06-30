import { TAnyFunction } from "./debounce";
export declare type TAnyFunc = (...args: any[]) => any;
export declare const memo: (fn: TAnyFunction, hasher?: TAnyFunc) => {
    (...argument: any[]): any;
    cache: {};
};
export default memo;
