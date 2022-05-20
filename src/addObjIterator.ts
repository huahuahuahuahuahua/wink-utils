import cloneDeep from "./cloneDeep";
import isObject from "./isObject";

/**
 * @msg:a good method for add iterator
 * @param {object} obj
 * @return {object} newObj //深拷贝后添加迭代器
 * @Descripttion: 给对象添加迭代器，make it possiable to for...in map forEach
 */
function addObjIterator(obj: object): object {
  if (isObject(obj)) {
    const newObj: any = cloneDeep(obj);
    newObj.prototype[Symbol.iterator] = function (): any {
      const keys: string[] = Object.keys(this);
      let index = 0;
      return {
        next: () => {
          return {
            value: this[keys[index++]],
            done: index > this.length,
          };
        },
      };
    };
    return newObj;
  } else {
    return {
      msg: "请传入object普通对象",
    };
  }
}
export default addObjIterator;
