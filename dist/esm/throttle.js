parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"z1Fy":[function(require,module,exports) {
"use strict";function e(e,l,t){void 0===t&&(t={});var n=null,i=null,u=null,a=0;t||(t={leading:!0,trailing:!0});var r=function(){a=!1===t.leading?0:(new Date).getTime(),n=null,e.apply(i,u),n||(i=u=null)},o=function(){var o=(new Date).getTime();a||!1!==t.leading||(a=o);var c=l-(o-a);i=this,u=arguments,c<=0||c>l?(n&&(clearTimeout(n),n=null),a=o,e.apply(i,u),n||(i=u=null)):n||!1===t.trailing||(n=setTimeout(r,c))};return o.cancel=function(){clearTimeout(n),a=0,n=null},o}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,exports.throttle=e;var l=e;exports.default=l;
},{}]},{},["z1Fy"], "singsutilsThrottle")
//# sourceMappingURL=/throttle.js.map