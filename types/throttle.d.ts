import { TAnyFunction } from "./debounce";
interface IOptions {
    leading?: boolean;
    trailing?: boolean;
}
/**
 * @param {TAnyFunction} func
 * @param {number} wait
 * @param {IOptions} options
 * @return {TAnyFunction}
 * @Date: 2022-04-02 10:57:20
 */
export declare function throttle(func: TAnyFunction, wait: number, options?: IOptions): TAnyFunction;
export default throttle;
