parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"b9XL":[function(require,module,exports) {
function o(e){return module.exports=o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},module.exports.__esModule=!0,module.exports.default=module.exports,o(e)}module.exports=o,module.exports.__esModule=!0,module.exports.default=module.exports;
},{}],"lH7o":[function(require,module,exports) {
"use strict";var e=r(require("@babel/runtime/helpers/typeof"));function r(e){return e&&e.__esModule?e:{default:e}}function t(r){if(null==r)return r;if(void 0===r)return r;if(r instanceof Date)return new Date(r);if(r instanceof RegExp)return new RegExp(r);if("object"!==(0,e.default)(r))return r;var n=new r.constructor;for(var o in r)r.hasOwnProperty(o)&&(n[o]=t(r[o]));return n}Object.defineProperty(exports,"__esModule",{value:!0}),exports.cloneDeep=void 0,exports.cloneDeep=t,exports.default=t;
},{"@babel/runtime/helpers/typeof":"b9XL"}],"zVMy":[function(require,module,exports) {
"use strict";var e=t(require("@babel/runtime/helpers/typeof"));function t(e){return e&&e.__esModule?e:{default:e}}function r(t){var r=(0,e.default)(t);return null!=t&&("object"==r||"function"==r)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.isObject=void 0,exports.isObject=r,exports.default=r;
},{"@babel/runtime/helpers/typeof":"b9XL"}],"Gh0M":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("./cloneDeep")),r=e(require("./isObject"));function u(e){if((0,r.default)(e)){var u=(0,t.default)(e);return u.prototype[Symbol.iterator]=function(){var e=this,t=Object.keys(this),r=0;return{next:function(){return{value:e[t[r++]],done:r>e.length}}}},u}return{msg:"请传入object普通对象"}}exports.default=u;
},{"./cloneDeep":"lH7o","./isObject":"zVMy"}]},{},["Gh0M"], "singsutilsAddObjIterator")
//# sourceMappingURL=/addObjIterator.js.map