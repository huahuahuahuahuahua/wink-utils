parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"b9XL":[function(require,module,exports) {
function o(e){return module.exports=o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},module.exports.__esModule=!0,module.exports.default=module.exports,o(e)}module.exports=o,module.exports.__esModule=!0,module.exports.default=module.exports;
},{}],"zVMy":[function(require,module,exports) {
"use strict";var e=t(require("@babel/runtime/helpers/typeof"));function t(e){return e&&e.__esModule?e:{default:e}}function r(t){var r=(0,e.default)(t);return null!=t&&("object"==r||"function"==r)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.isObject=void 0,exports.isObject=r,exports.default=r;
},{"@babel/runtime/helpers/typeof":"b9XL"}],"WYSY":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.debounce=void 0;var t="Expected a function",i=Math.max,n=Math.min,r=e(require("./isObject"));function u(e,u,o){void 0===u&&(u=1e3),void 0===o&&(o={});var a,f,c,d,v,s,l=0,m=!1,p=!1,x=!0;if("function"!=typeof e)throw new TypeError(t);function h(t){var i=a,n=f;return a=f=void 0,l=t,d=e.apply(n,i)}function b(e){var t=e-s;return void 0===s||t>=u||t<0||p&&e-l>=c}function T(){var e=new Date;if(b(e))return _(e);v=setTimeout(T,function(e){var t=u-(e-s);return p?n(t,c-(e-l)):t}(e))}function _(e){return v=void 0,x&&a?h(e):(a=f=void 0,d)}function w(){var e=new Date,t=b(e);if(a=arguments,f=this,s=e,t){if(void 0===v)return function(e){return l=e,v=setTimeout(T,u),m?h(e):d}(s);if(p)return v=setTimeout(T,u),h(s)}return void 0===v&&(v=setTimeout(T,u)),d}return u=Number(u)||0,(0,r.default)(o)&&(m=!!o.leading,c=(p="maxWait"in o)?i(Number(o.maxWait)||0,u):c,x="trailing"in o?!!o.trailing:x),w.cancel=function(){void 0!==v&&clearTimeout(v),l=0,a=s=f=v=void 0},w.flush=function(){return void 0===v?d:_(new Date)},w}exports.debounce=u,exports.default=u;
},{"./isObject":"zVMy"}],"z1Fy":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.throttle=void 0;var t=require("./debounce"),r=e(require("./isObject")),i="Expected a function";function n(e,n,o){void 0===o&&(o={});var u=!0,a=!0;if("function"!=typeof e)throw new TypeError(i);return(0,r.default)(o)&&(u="leading"in o?!!o.leading:u,a="trailing"in o?!!o.trailing:a),(0,t.debounce)(e,n,{leading:u,maxWait:n,trailing:a})}exports.throttle=n,exports.default=n;
},{"./debounce":"WYSY","./isObject":"zVMy"}]},{},["z1Fy"], "singsutilsThrottle")
//# sourceMappingURL=/throttle.js.map