"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/getPage";
exports.ids = ["pages/api/getPage"];
exports.modules = {

/***/ "notion-client":
/*!********************************!*\
  !*** external "notion-client" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("notion-client");

/***/ }),

/***/ "(api)/./pages/api/getPage.js":
/*!******************************!*\
  !*** ./pages/api/getPage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var notion_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! notion-client */ \"notion-client\");\n/* harmony import */ var notion_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(notion_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst notion = new notion_client__WEBPACK_IMPORTED_MODULE_0__.NotionAPI();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === 'GET') {\n        res.status(200).json(req);\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0UGFnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUM7QUFFekMsS0FBSyxDQUFDQyxNQUFNLEdBQUcsR0FBRyxDQUFDRCxvREFBUztBQUU1QixpRUFBTSxPQUFnQkUsR0FBRyxFQUFFQyxHQUFHLEdBQUssQ0FBQztJQUNsQyxFQUFFLEVBQUVELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLENBQUssTUFBRSxDQUFDO1FBQ3pCRCxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQ0osR0FBRztJQUMxQixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnNpdGUvLi9wYWdlcy9hcGkvZ2V0UGFnZS5qcz8wNWI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5vdGlvbkFQSSB9IGZyb20gJ25vdGlvbi1jbGllbnQnXG5cbmNvbnN0IG5vdGlvbiA9IG5ldyBOb3Rpb25BUEkoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlcSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5vdGlvbkFQSSIsIm5vdGlvbiIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/getPage.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getPage.js"));
module.exports = __webpack_exports__;

})();