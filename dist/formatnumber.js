'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/*
 * @Author: t_winkjqzhang
 * @Date: 2022-04-02 16:18:36
 * @LastEditTime: 2022-04-02 17:58:19
 * @Description:
 */
/**
 * @param {number} num //
 * @returns {string} //返回
 * @Date: 2022-04-02 16:46:28
 */
function formatNumber(num) {
    num = Number(num);
    if (num === 0) {
        return num.toString();
    }
    else if (num > 1 && num < 1000) {
        return num.toString();
    }
    else if (num > 1000 && num < 10000) {
        //千
        return (num / 1000).toFixed(2);
    }
    else if (num > 10000 && num < 1000000) {
        //万
        return (num / 10000).toFixed(2);
    }
    else if (num > 1000000 && num < 10000000) {
        //百万
        return (num / 1000000).toFixed(2);
    }
    else if (num > 10000000 && num < 100000000) {
        //千万
        return (num / 10000000).toFixed(2);
    }
    else if (num > 100000000 && num < 10000000000) {
        //亿
        return (num / 100000000).toFixed(2);
    }
    //    else if (num > 10000000000 && num < 100000000000) {
    //     //百亿
    //     return (num / 10000000000).toFixed(2);
    //   } else if (num > 100000000000 && num < 1000000000000) {
    //     //千亿
    //     return (num / 100000000000).toFixed(2);
    //   } else if (num > 1000000000000 && num < 10000000000000) {
    //     //万亿
    //     return (num / 1000000000000).toFixed(2);
    //   }
    else {
        return "error 请输入1-10000000000 的数字";
    }
}
var formatnumber = {
    formatNumber: formatNumber
};

exports["default"] = formatnumber;
exports.formatNumber = formatNumber;
