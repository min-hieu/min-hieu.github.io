"use strict";
exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
exports.modules = {

/***/ "./src/components/Content.jsx":
/*!************************************!*\
  !*** ./src/components/Content.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CenterImg": () => (/* binding */ CenterImg),
/* harmony export */   "ParaDiv": () => (/* binding */ ParaDiv)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Home.module.scss */ "./src/styles/Home.module.scss");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout */ "./src/components/Layout.jsx");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");





const ParaDiv = ({
  children
}) => {
  const {
    light
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Layout__WEBPACK_IMPORTED_MODULE_2__.LightContext);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: light ? _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_1__.para : _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_1__.paraDark
  }, children);
};

const CenterImg = ({
  src,
  alt
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_1__.centerCon
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__.StaticImage, {
    src: src,
    alt: alt ? alt : 'image'
  }));
};



/***/ }),

/***/ "./src/pages/index.js?export=default":
/*!*******************************************!*\
  !*** ./src/pages/index.js?export=default ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Home.module.scss */ "./src/styles/Home.module.scss");
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Content */ "./src/components/Content.jsx");





const IndexPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_1__.indexMain
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_1__.section
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_1__.left
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Content__WEBPACK_IMPORTED_MODULE_2__.ParaDiv, null, "Me in Busan 2022.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_1__.right
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Content__WEBPACK_IMPORTED_MODULE_2__.ParaDiv, null, "Hi! Thanks for being interested in my website. My name is ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, "Hieu"), " and I am a currently a sophomore in the department of computer science and electrical engineering at KAIST, Korea. I am highly motivated about learning new things in the domain of computer graphics & vision. I look foward to opportunities in both industry and academia! Outside my specialty, I also love exploring nonfiction books and making art in my free time."))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map