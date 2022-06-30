/**
 * @msg:a good method for adding iterator
 * @param {object} obj
 * @return {object} newObj //深拷贝后添加迭代器
 * @Descripttion: 给对象添加迭代器，make it possiable to for...in map forEach
 */
declare function addObjIterator(obj: object): object;
export default addObjIterator;
