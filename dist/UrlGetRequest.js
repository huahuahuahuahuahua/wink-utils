"use strict";function UrlGetRequest(e,t){for(var e=e.split("?")[1],r=(e=e.indexOf("&openid=")<0&&0<e.indexOf("openid=")?e.replace(/openid=/,function(e){return"&"+e}):e).split("&"),s=0;s<r.length;s++){var i=r[s].split("=");if(i[0]===t)return i[1]}return!1}Object.defineProperty(exports,"__esModule",{value:!0}),exports.UrlGetRequest=void 0,exports.UrlGetRequest=UrlGetRequest,exports.default=UrlGetRequest;
