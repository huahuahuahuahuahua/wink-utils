"use strict";
exports.__esModule = true;
exports.isObject = void 0;
/*
 * @Descripttion:
 * @version:
 * @Author: huawink
 * @Date: 2022-04-05 23:59:48
 * @LastEditTime: 2022-04-06 01:01:46
 */
/**
 * @name:
 * @msg:
 * @param {object} obj 对象
 * @return {boolean}
 * @Descripttion: 判断是否为对象
 */
function isObject(obj) {
    var type = typeof obj;
    return obj != null && (type == 'object' || type == 'function');
}
exports.isObject = isObject;
exports["default"] = isObject;
