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
exports.id = "pages/api/blogs";
exports.ids = ["pages/api/blogs"];
exports.modules = {

/***/ "notion-client":
/*!********************************!*\
  !*** external "notion-client" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("notion-client");

/***/ }),

/***/ "(api)/./pages/api/blogs/index.js":
/*!**********************************!*\
  !*** ./pages/api/blogs/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var notion_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! notion-client */ \"notion-client\");\n/* harmony import */ var notion_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(notion_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst notion = new notion_client__WEBPACK_IMPORTED_MODULE_0__.NotionAPI();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === 'GET') {\n        const page = await notion.getPage('Blogs-bde62b64df0847838567b41207f030eb');\n        res.status(200).json({\n            data: page\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYmxvZ3MvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlDO0FBRXpDLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLEdBQUcsQ0FBQ0Qsb0RBQVM7QUFFNUIsaUVBQU0sT0FBZ0JFLEdBQUcsRUFBRUMsR0FBRyxHQUFLLENBQUM7SUFDbEMsRUFBRSxFQUFFRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxDQUFLLE1BQUUsQ0FBQztRQUN6QixLQUFLLENBQUNDLElBQUksR0FBRyxLQUFLLENBQUNKLE1BQU0sQ0FBQ0ssT0FBTyxDQUFDLENBQXdDO1FBQzFFSCxHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQUNDLElBQUksRUFBRUosSUFBSTtRQUFDLENBQUM7SUFDckMsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJzaXRlLy4vcGFnZXMvYXBpL2Jsb2dzL2luZGV4LmpzP2FhMTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTm90aW9uQVBJIH0gZnJvbSAnbm90aW9uLWNsaWVudCdcblxuY29uc3Qgbm90aW9uID0gbmV3IE5vdGlvbkFQSSgpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgY29uc3QgcGFnZSA9IGF3YWl0IG5vdGlvbi5nZXRQYWdlKCdCbG9ncy1iZGU2MmI2NGRmMDg0NzgzODU2N2I0MTIwN2YwMzBlYicpXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBkYXRhOiBwYWdlIH0pXG4gIH0gXG59XG4iXSwibmFtZXMiOlsiTm90aW9uQVBJIiwibm90aW9uIiwicmVxIiwicmVzIiwibWV0aG9kIiwicGFnZSIsImdldFBhZ2UiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/blogs/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/blogs/index.js"));
module.exports = __webpack_exports__;

})();