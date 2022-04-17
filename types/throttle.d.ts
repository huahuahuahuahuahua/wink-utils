import { TAnyFunction } from "./debounce";
interface IOptions {
    leading?: boolean;
    trailing?: boolean;
}
export declare function throttle(func: TAnyFunction, wait: number, options?: IOptions): TAnyFunction;
export default throttle;
