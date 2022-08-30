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
exports.id = "pages/api/blogs/[getPageId]";
exports.ids = ["pages/api/blogs/[getPageId]"];
exports.modules = {

/***/ "notion-client":
/*!********************************!*\
  !*** external "notion-client" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("notion-client");;

/***/ }),

/***/ "(api)/./pages/api/blogs/[getPageId].js":
/*!****************************************!*\
  !*** ./pages/api/blogs/[getPageId].js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var notion_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! notion-client */ \"notion-client\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([notion_client__WEBPACK_IMPORTED_MODULE_0__]);\nnotion_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst notion = new notion_client__WEBPACK_IMPORTED_MODULE_0__.NotionAPI();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { getPageId  } = req.query;\n    if (req.method === \"GET\") {\n        const page = await notion.getPage(getPageId);\n        res.status(200).json({\n            data: page\n        });\n    }\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYmxvZ3MvW2dldFBhZ2VJZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUM7QUFFekMsTUFBTUMsTUFBTSxHQUFHLElBQUlELG9EQUFTLEVBQUU7QUFFOUIsaUVBQWUsT0FBT0UsR0FBRyxFQUFFQyxHQUFHLEdBQUs7SUFDakMsTUFBTSxFQUFFQyxTQUFTLEdBQUUsR0FBR0YsR0FBRyxDQUFDRyxLQUFLO0lBRS9CLElBQUlILEdBQUcsQ0FBQ0ksTUFBTSxLQUFLLEtBQUssRUFBRTtRQUN4QixNQUFNQyxJQUFJLEdBQUcsTUFBTU4sTUFBTSxDQUFDTyxPQUFPLENBQUNKLFNBQVMsQ0FBQztRQUM1Q0QsR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxJQUFJLEVBQUVKLElBQUk7U0FBRSxDQUFDO0tBQ3JDO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJzaXRlLy4vcGFnZXMvYXBpL2Jsb2dzL1tnZXRQYWdlSWRdLmpzPzU2YzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTm90aW9uQVBJIH0gZnJvbSAnbm90aW9uLWNsaWVudCdcblxuY29uc3Qgbm90aW9uID0gbmV3IE5vdGlvbkFQSSgpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgeyBnZXRQYWdlSWQgfSA9IHJlcS5xdWVyeVxuXG4gIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xuICAgIGNvbnN0IHBhZ2UgPSBhd2FpdCBub3Rpb24uZ2V0UGFnZShnZXRQYWdlSWQpXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBkYXRhOiBwYWdlIH0pXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOb3Rpb25BUEkiLCJub3Rpb24iLCJyZXEiLCJyZXMiLCJnZXRQYWdlSWQiLCJxdWVyeSIsIm1ldGhvZCIsInBhZ2UiLCJnZXRQYWdlIiwic3RhdHVzIiwianNvbiIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/blogs/[getPageId].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/blogs/[getPageId].js"));
module.exports = __webpack_exports__;

})();