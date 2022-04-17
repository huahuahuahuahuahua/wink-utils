/**
 * @name:
 * @msg:
 * @param {object} obj 对象
 * @return {boolean}
 * @Descripttion: 判断是否为对象
 */
export function isObject(obj: object): boolean {
  const type = typeof obj;
  return obj != null && (type == "object" || type == "function");
}
export default isObject;
