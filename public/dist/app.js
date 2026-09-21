/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/ws/browser.js"
/*!************************************!*\
  !*** ./node_modules/ws/browser.js ***!
  \************************************/
(module) {

eval("{\n\nmodule.exports = function () {\n  throw new Error(\n    'ws does not work in the browser. Browser clients must use the native ' +\n      'WebSocket object'\n  );\n};\n\n\n//# sourceURL=webpack://chatbot/./node_modules/ws/browser.js?\n}");

/***/ },

/***/ "./src/client/app.ts"
/*!***************************!*\
  !*** ./src/client/app.ts ***!
  \***************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ws__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ws */ \"./node_modules/ws/browser.js\");\n\n\n// UI \nconst sendbtn = document.getElementById(\"send-btn\")                     ;\nconst userinput = document.getElementById(\"userinput\")                       ;\nconst displaybox = document.getElementById(\"displaybox\")                  ;\nconst clearhistory = document.getElementById(\"clear-history\")                     ;\nconst spinner = document.getElementById(\"loading-spinner\")                  ;\n\n// for localhost\n// let ws = new WebSocket(\"ws://localhost:8000/ws\");\n\n// for cloud server https deployment\nlet websocketstring = '';\n\nif(window.location.hostname === \"localhost\" || window.location.hostname === \"127.0.0.1\"){\n    websocketstring = `ws://localhost:8000/ws`; // local\n}else{\n    websocketstring = `wss://${window.location.hostname}/ws`; // https deployment\n}\n\nlet ws = new ws__WEBPACK_IMPORTED_MODULE_0__(websocketstring);\nconsole.log(\"ws\", ws);\n\nws.onopen = () => console.log(\"Websocket connection established\");\n\nws.onerror = (err) => {\n    console.log(\"Websocket connection error:\", err);\n    spinner.style.display = \"none\";\n}\n\nws.onclose = (event) => {\n    console.log(\"Websocket connection closed:\", event);\n    spinner.style.display = \"none\";\n}\n\n//# sourceURL=webpack://chatbot/./src/client/app.ts?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/client/app.ts");
/******/ 	
/******/ })()
;