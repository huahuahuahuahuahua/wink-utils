parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"hBEh":[function(require,module,exports) {
"use strict";function e(e){return 0===(e=Number(e))?{number:e.toString(),value:""}:e>1&&e<1e3?{number:e.toString(),value:""}:e>1e3&&e<1e4?{number:(e/1e3).toFixed(2).toString(),value:"千"}:e>1e4&&e<1e6?{number:(e/1e4).toFixed(2).toString(),value:"万"}:e>1e6&&e<1e7?{number:(e/1e6).toFixed(2).toString(),value:"百万"}:e>1e7&&e<1e8?{number:(e/1e7).toFixed(2).toString(),value:"千万"}:e>1e8&&e<1e10?{number:(e/1e8).toFixed(2).toString(),value:"亿"}:{msg:"error 请输入1-10000000000 的数字"}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.formatNumber=void 0,exports.formatNumber=e,exports.default=e;
},{}]},{},["hBEh"], "singsutilsFormatnumber")
//# sourceMappingURL=/formatnumber.js.map