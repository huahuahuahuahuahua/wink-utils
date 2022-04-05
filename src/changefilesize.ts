/*
 * @Author: t_winkjqzhang
 * @Date: 2022-04-02 15:12:06
 * @LastEditTime: 2022-04-02 17:57:05
 * @Description: Do not edit
 */
/**
 * @param {number} limit
 * @return {string} size
 * @Date: 2022-04-02 15:23:27
 */
export function changefilesize(limit: number): string {
  var size: string = "";
  if (limit < 0.1 * 1024) {
    //小于0.1KB，则转化成B
    size = limit.toFixed(2) + "B";
  } else if (limit < 0.1 * 1024 * 1024) {
    //小于0.1MB，则转化成KB
    size = (limit / 1024).toFixed(2) + "KB";
  } else if (limit < 0.1 * 1024 * 1024 * 1024) {
    //小于0.1GB，则转化成MB
    size = (limit / (1024 * 1024)).toFixed(2) + "MB";
  } else {
    //其他转化成GB
    size = (limit / (1024 * 1024 * 1024)).toFixed(2) + "GB";
  }

  var sizeStr: string = size + ""; //转成字符串
  var index: number = sizeStr.indexOf("."); //获取小数点处的索引
  var dou: string = sizeStr!.substr(index + 1, 2); //获取小数点后两位的值
  if (dou === "00") {
    //判断后两位是否为00，如果是则删除00
    return sizeStr.substring(0, index) + sizeStr.substr(index + 3, 2);
  }
  return size;
}
export default changefilesize;
