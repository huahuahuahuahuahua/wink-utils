/**
 * @msg:
 * @param {object} obj 传入的对象
 * @return {object} cloneObj 复制后的对象
 * @Descripttion:
 */
export function cloneDeep(obj: any): any {
  // 1.判断是否为null 或undefined
  if (obj == null) return obj;
  if (typeof obj == "undefined") return obj;
  // 2.判断是否为日期Date
  if (obj instanceof Date) return new Date(obj);
  // 3.判断是否为正则 typeof /\d+/ === 'object'
  if (obj instanceof RegExp) return new RegExp(obj);
  // 4.如果不是数组或对象，返回该值
  if (typeof obj !== "object") return obj;
  // 接下来，要么是对象，要么是数组 可以用 new obj.constructor得到它类型的空值
  //如果是new,用obj.constructor即可，new方法会访问构造器（构造函数）的原型，再用object.create(constructor.prototype)构造出对象
  //let cloneObj = new obj.constructor;
  //如果是直接object.create，直接使用obj.constructor.prototype属性进行构建
  const cloneObj = new obj.constructor();
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 递归深拷贝
      cloneObj[key] = cloneDeep(obj[key]);
    }
  }
  return cloneObj;
}
export default cloneDeep;
