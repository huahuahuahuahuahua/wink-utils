interface IisCycleObject {
  obj: object;
  parent?: Array<object>;
}

export function isCycleObject({ obj, parent }: IisCycleObject) {
  const parentArr = parent || [obj];
  for (const i in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, i)) {
      let flag = false;
      parentArr.forEach((pObj: object) => {
        if (pObj === obj[i]) {
          flag = true;
        }
      });
      if (flag) return true;
      flag = isCycleObject({ obj: obj[i], parent: [...parentArr, obj[i]] });
      if (flag) return true;
    }
  }
  return false;
}
export default isCycleObject;
