interface IOptions {
    leading: boolean;
    trailing: boolean;
    maxWait: number;
}
/**
 * 函数去抖，也就是说当调用动作n毫秒后，才会执行该动作，若在这n毫秒内又调用此动作则将重新计算执行时间。
 *
 * @param {Function} func 需要去抖的函数.
 * @param {number} [wait=0] 延迟执行的时间.
 * @param {Object} [options={}] 选项对象.
 * @param {boolean} [options.leading=false] 指定是否在超时前调用.
 * @param {number} [options.maxWait] func延迟调用的最大时间.
 * @param {boolean} [options.trailing=true] 指定是否在超时后调用.
 * @returns {Function} 返回去抖之后的函数.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
export default function debounce(func: Function, wait?: number, options?: IOptions): Function;
export {};
