interface IOptions {
    leading?: boolean;
    trailing?: boolean;
}
/**
 * @param {Function} func
 * @param {number} wait
 * @param {IOptions} options
 * @return {*}
 * @Date: 2022-04-02 10:57:20
 */
export declare function throttle(func: Function, wait: number, options?: IOptions): Function;
export default throttle;
