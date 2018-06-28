/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./application/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./application/classes/class1.js":
/*!***************************************!*\
  !*** ./application/classes/class1.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass test1{}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (test1);\n\n\n//# sourceURL=webpack:///./application/classes/class1.js?");

/***/ }),

/***/ "./application/classes/class2.js":
/*!***************************************!*\
  !*** ./application/classes/class2.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass test2{}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (test2);\n\n\n//# sourceURL=webpack:///./application/classes/class2.js?");

/***/ }),

/***/ "./application/classes/index.js":
/*!**************************************!*\
  !*** ./application/classes/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _class1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class1 */ \"./application/classes/class1.js\");\n/* harmony import */ var _class2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class2 */ \"./application/classes/class2.js\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({ test1: _class1__WEBPACK_IMPORTED_MODULE_0__[\"default\"], test2: _class2__WEBPACK_IMPORTED_MODULE_1__[\"default\"] });\n\n\n//# sourceURL=webpack:///./application/classes/index.js?");

/***/ }),

/***/ "./application/index.js":
/*!******************************!*\
  !*** ./application/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ \"./application/classes/index.js\");\n/* harmony import */ var _modules_3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/3 */ \"./application/modules/3.js\");\n/*\n\n  Модули в JS\n  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/import\n\n  Так как для экспорта и импорта нету родной поддержки в\n  браузерах, то нам понадобится сборщик который это умеет делать\n\n  Выбор пал на вебпак\n\n  npm i\n  npm run cli\n\n  Затестим - в консоли наберем команду webpack\n*/\nconsole.log(\"WEBPACK WORKING5\");\n// Для экспорта и импорта обязательно нужно имя\n// import myVar from './modules/1';\n\n// console.log('index module1', myVar);\nconsole.log( 'Classes', _classes__WEBPACK_IMPORTED_MODULE_0__[\"default\"] );\n// let x = {\n//   prop1: 'test',\n//   prop2: 12,\n//   prop3: {}\n// }\n//\n// let { prop1, prop2 } = x;\n// console.log( prop1, prop2 );\n\n// import someObj from './modules/2';\n// console.log(someObj);\n// //\n\nconsole.log( _modules_3__WEBPACK_IMPORTED_MODULE_1__[\"mArray\"], _modules_3__WEBPACK_IMPORTED_MODULE_1__[\"mObj\"], _modules_3__WEBPACK_IMPORTED_MODULE_1__[\"User\"]);\n// //\nconst Butch = new _modules_3__WEBPACK_IMPORTED_MODULE_1__[\"User\"]('Butch');\nconsole.log(Butch);\n\n\n//# sourceURL=webpack:///./application/index.js?");

/***/ }),

/***/ "./application/modules/3.js":
/*!**********************************!*\
  !*** ./application/modules/3.js ***!
  \**********************************/
/*! exports provided: mArray, mObj, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mArray\", function() { return mArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mObj\", function() { return mObj; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"User\", function() { return User; });\nconst mArray = ['1','2','3'];\nconst mObj = {\n  data: ['...']\n};\n\nclass User {\n  constructor(name)  {\n    this.name = name;\n  }\n}\n\n\n\n\n//# sourceURL=webpack:///./application/modules/3.js?");

/***/ })

/******/ });