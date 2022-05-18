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
exports.id = "pages/api/[getPageId]";
exports.ids = ["pages/api/[getPageId]"];
exports.modules = {

/***/ "notion-client":
/*!********************************!*\
  !*** external "notion-client" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("notion-client");

/***/ }),

/***/ "(api)/./pages/api/[getPageId].js":
/*!**********************************!*\
  !*** ./pages/api/[getPageId].js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var notion_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! notion-client */ \"notion-client\");\n/* harmony import */ var notion_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(notion_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst notion = new notion_client__WEBPACK_IMPORTED_MODULE_0__.NotionAPI();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { getPageId  } = req.query;\n    if (req.method === 'GET') {\n        const page = await notion.getPage(getPageId);\n        res.status(200).json({\n            data: page\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvW2dldFBhZ2VJZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlDO0FBRXpDLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLEdBQUcsQ0FBQ0Qsb0RBQVM7QUFFNUIsaUVBQU0sT0FBZ0JFLEdBQUcsRUFBRUMsR0FBRyxHQUFLLENBQUM7SUFDbEMsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxFQUFDLENBQUMsR0FBR0YsR0FBRyxDQUFDRyxLQUFLO0lBRS9CLEVBQUUsRUFBRUgsR0FBRyxDQUFDSSxNQUFNLEtBQUssQ0FBSyxNQUFFLENBQUM7UUFDekIsS0FBSyxDQUFDQyxJQUFJLEdBQUcsS0FBSyxDQUFDTixNQUFNLENBQUNPLE9BQU8sQ0FBQ0osU0FBUztRQUMzQ0QsR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUFDQyxJQUFJLEVBQUVKLElBQUk7UUFBQyxDQUFDO0lBQ3JDLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2Vic2l0ZS8uL3BhZ2VzL2FwaS9bZ2V0UGFnZUlkXS5qcz84NzJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5vdGlvbkFQSSB9IGZyb20gJ25vdGlvbi1jbGllbnQnXG5cbmNvbnN0IG5vdGlvbiA9IG5ldyBOb3Rpb25BUEkoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHsgZ2V0UGFnZUlkIH0gPSByZXEucXVlcnlcblxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICBjb25zdCBwYWdlID0gYXdhaXQgbm90aW9uLmdldFBhZ2UoZ2V0UGFnZUlkKVxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YTogcGFnZSB9KVxuICB9XG59XG4iXSwibmFtZXMiOlsiTm90aW9uQVBJIiwibm90aW9uIiwicmVxIiwicmVzIiwiZ2V0UGFnZUlkIiwicXVlcnkiLCJtZXRob2QiLCJwYWdlIiwiZ2V0UGFnZSIsInN0YXR1cyIsImpzb24iLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/[getPageId].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/[getPageId].js"));
module.exports = __webpack_exports__;

})();