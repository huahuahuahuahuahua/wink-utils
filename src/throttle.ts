import { debounce, TAnyFunction } from "./debounce";
import isObject from "./isObject";
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

const FUNC_ERROR_TEXT = "Expected a function";
export function throttle(
  func: TAnyFunction,
  wait: number,
  options: IOptions = {}
): TAnyFunction {
  let leading = true,
    trailing = true;

  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    leading: leading,
    maxWait: wait,
    trailing: trailing,
  });
}
export default throttle;
