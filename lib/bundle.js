(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/debounce.js":
/*!*************************!*\
  !*** ./src/debounce.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* eslint-disable no-undefined */\r\n\r\nvar throttle = __webpack_require__(/*! ./throttle */ \"./src/throttle.js\")\r\n\r\n/**\r\n * Debounce execution of a function, unlike throttling,\r\n * guarantees that a function is only executed a single time, either at the\r\n * very beginning of a series of calls, or at the very end.\r\n *\r\n * @param  {Number}   delay         delay in milliseconds for event callbacks,\r\n * @param  {Boolean}  atBegin       Optional, defaults to false. \r\n * If atBegin is false or unspecified, callback will only be executed `delay` milliseconds\r\n * after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.\r\n * @param  {Function} callback      A function to be executed after delay milliseconds\r\n *\r\n * @return {Function} closure. A callback wrapper HOC\r\n */\r\nmodule.exports = function(delay, atBegin, callback) {\r\n    return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);\r\n};\r\n\n\n//# sourceURL=webpack:///./src/debounce.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var throttle = __webpack_require__(/*! ./throttle */ \"./src/throttle.js\")\r\nvar debounce = __webpack_require__(/*! ./debounce */ \"./src/debounce.js\")\r\n\r\n/**\r\n * throttle and debounce\r\n * @module\r\n */\r\nmodule.exports = {\r\n    throttle: throttle,\r\n    debounce: debounce\r\n}\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/throttle.js":
/*!*************************!*\
  !*** ./src/throttle.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * @desc Throttle execution of a function. Especially useful for rate limiting execution of handlers on events like resize and scroll.\r\n * \r\n * @param {Number}      delay           delay in milliseconds\r\n * @param {Boolean}     noTrailing      Optional, defaults to undefined\r\n * @param {Function}    callback        A function to be executed after delay milliseconds\r\n * @param {Boolean}     debounceMode    If it is debounceMode\r\n * \r\n * @returns {Function} closure. A callback wrapper HOC\r\n */\r\nmodule.exports = function throttle(delay, noTrailing, callback, debounceMode) {\r\n\r\n    // Timer`s ID\r\n    // Ensure callback function execute at the proper time in throttle mode.\r\n    // Ensure the rate is regular in throttle mode.\r\n    var timeoutID\r\n\r\n    // Record the last timeStamp that callback was executed.\r\n    var lastExec = 0\r\n\r\n    // noTrailing defaults to undefined\r\n    // use throttle like this: throttle(500, callback)\r\n    if(typeof noTrailing !== 'boolean') {\r\n        debounceMode = callback\r\n        callback = noTrailing\r\n        noTrailing = undefined\r\n    }\r\n\r\n    // core closure function. HOC function.\r\n    // the wrapper function will limit the rate at which callback is executed\r\n    function wrapper() {\r\n\r\n        // init variables\r\n        var self = this\r\n        var elapsed = Number(new Date()) - lastExec\r\n        var args = arguments\r\n\r\n        // exec function that callback will be executed at last\r\n        function exec() {\r\n            // update the execution time\r\n            lastExec = Number(new Date())\r\n            callback.apply(self, args)\r\n        }\r\n\r\n        // \r\n        function clear() {\r\n            timeoutID = undefined\r\n        }\r\n\r\n        if(debounceMode && !timeoutID) {\r\n            exec()\r\n        }\r\n\r\n        // clear the timer. then we will create a new timer instead of this.\r\n        if(timeoutID) {\r\n            clearTimeout(timeoutID)\r\n        }\r\n\r\n        // throttle mode.\r\n        // the elapsed time gap has more then delay\r\n        if (debounceMode === undefined && elapsed > delay) {\r\n            exec()\r\n        } else if (noTrailing !== true) {\r\n            // create a new timer instead of old.\r\n            timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay)\r\n        }\r\n    }\r\n\r\n    // return the closure HOC\r\n    // the function will exec immediately when event has occurred\r\n    return wrapper\r\n}\n\n//# sourceURL=webpack:///./src/throttle.js?");

/***/ })

/******/ });
});