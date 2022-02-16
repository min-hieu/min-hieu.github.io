(() => {
var exports = {};
exports.id = 820;
exports.ids = [820];
exports.modules = {

/***/ 150:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "error_container__0WkAu",
	"errorMsg": "error_errorMsg__CvKHo"
};


/***/ }),

/***/ 563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_error_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(150);
/* harmony import */ var _styles_error_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_error_module_scss__WEBPACK_IMPORTED_MODULE_1__);


function Error({ statusCode  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_error_module_scss__WEBPACK_IMPORTED_MODULE_1___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                src: "https://archive.org/embed/DukeNukem",
                width: "560",
                height: "384",
                frameborder: "0",
                webkitallowfullscreen: "true",
                mozallowfullscreen: "true",
                allowfullscreen: true
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: (_styles_error_module_scss__WEBPACK_IMPORTED_MODULE_1___default().errorMsg),
                children: [
                    statusCode ? `An error ${statusCode} occurred on server ` : 'An error occurred on client ',
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "but you can still play Duke :)"
                ]
            })
        ]
    }));
}
Error.getInitialProps = ({ res , err  })=>{
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return {
        statusCode
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error);


/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(563));
module.exports = __webpack_exports__;

})();