"use strict";function throttle(l,n,i){function u(){c=!1===i.leading?0:(new Date).getTime(),r=null,l.apply(o,a),r||(o=a=null)}function t(){var t=(new Date).getTime(),e=(c||!1!==i.leading||(c=t),n-(t-c));o=this,a=arguments,e<=0||n<e?(r&&(clearTimeout(r),r=null),c=t,l.apply(o,a),r||(o=a=null)):r||!1===i.trailing||(r=setTimeout(u,e))}var r=null,o=null,a=null,c=0;i=(i=void 0===i?{}:i)||{leading:!0,trailing:!0};return t.cancel=function(){clearTimeout(r),c=0,r=null},t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=throttle,exports.throttle=throttle;
