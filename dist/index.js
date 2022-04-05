'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var throttle_ts = require('./throttle');
var UrlGetRequest_ts = require('./UrlGetRequest');
var debounce_ts = require('./debounce');
var changefilesize_ts = require('./changefilesize');
var formatnumber_ts = require('./formatnumber');



Object.keys(throttle_ts).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () { return throttle_ts[k]; }
	});
});
Object.keys(UrlGetRequest_ts).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () { return UrlGetRequest_ts[k]; }
	});
});
Object.keys(debounce_ts).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () { return debounce_ts[k]; }
	});
});
Object.keys(changefilesize_ts).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () { return changefilesize_ts[k]; }
	});
});
Object.keys(formatnumber_ts).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () { return formatnumber_ts[k]; }
	});
});
