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
export function throttle(
  func: TAnyFunction,
  wait: number,
  options: IOptions = {}
): TAnyFunction {
  let timeout: any | null = null,
    context: object | any = null,
    args: any = null; // result
  let previous = 0;
  if (!options)
    options = {
      leading: true,
      trailing: true,
    };
  const later = function () {
    previous = options.leading === false ? 0 : new Date().getTime();
    timeout = null;
    func.apply(context, args);
    if (!timeout) context = args = null;
  };
  const throttled = function (this) {
    const now = new Date().getTime();
    if (!previous && options.leading === false) previous = now;
    const remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
  };
  throttled.cancel = () => {
    clearTimeout(timeout);
    previous = 0;
    timeout = null;
  };
  return throttled;
}
export default throttle;
