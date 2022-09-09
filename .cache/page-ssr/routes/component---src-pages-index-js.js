"use strict";
exports.id = 678;
exports.ids = [678];
exports.modules = {

/***/ 7391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "/Users/charlie/Desktop/min-hieu.github.io/node_modules/react/index.js"
var index_js_ = __webpack_require__(4247);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./src/styles/Home.module.scss
var Home_module = __webpack_require__(3456);
;// CONCATENATED MODULE: ./src/styles/Content.module.scss
// Exports
var para = "Content-module--para--Mc8vr";
var paraDark = "Content-module--paraDark--PZO5O";
var section = "Content-module--section--j3ZCS";
var centerCon = "Content-module--centerCon--2jaGd";
var Content_module_center = "Content-module--center--kLVe+";

// EXTERNAL MODULE: ./src/components/Layout.jsx + 9 modules
var Layout = __webpack_require__(9603);
;// CONCATENATED MODULE: ./src/components/Content.jsx
const ParaDiv=({children,center})=>{const{light}=(0,index_js_.useContext)(Layout/* LightContext */.B);return/*#__PURE__*/index_js_default().createElement("div",{className:`${light?para:paraDark}
       ${center?Content_module_center:""}`},children);};const Section=({children})=>{return/*#__PURE__*/index_js_default().createElement("div",{className:section},children);};
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js
var gatsby_image_module = __webpack_require__(3040);
;// CONCATENATED MODULE: ./src/pages/index.js
const IndexPage=()=>{return/*#__PURE__*/index_js_.createElement("div",{className:Home_module/* indexMain */.RA},/*#__PURE__*/index_js_.createElement(Section,null,/*#__PURE__*/index_js_.createElement("div",{className:Home_module/* left */.t$},/*#__PURE__*/index_js_.createElement("div",{className:Home_module/* profileImage */.tz},/*#__PURE__*/index_js_.createElement(gatsby_image_module/* StaticImage */.Jv,{src:"../images/me.webp",__imageData:__webpack_require__(8848)})),/*#__PURE__*/index_js_.createElement(ParaDiv,{center:true},"Me in Busan 2022.")),/*#__PURE__*/index_js_.createElement("div",{className:Home_module/* right */.F2},/*#__PURE__*/index_js_.createElement(ParaDiv,null,"Hi! Thanks for being interested in my website. ",/*#__PURE__*/index_js_.createElement("br",null),"My name is ",/*#__PURE__*/index_js_.createElement("b",null,"Hieu")," and I am a currently a sophomore in the department of computer science and electrical engineering at KAIST, Korea. I am highly motivated about learning new things in the domain of ",/*#__PURE__*/index_js_.createElement("b",null,"computer graphics & machine learning"),". I look foward to opportunities in both industry and academia! ",/*#__PURE__*/index_js_.createElement("br",null),"Outside my specialty, I also love reading books , making art, and most recently, cooking! ",/*#__PURE__*/index_js_.createElement("br",null)))));};/* harmony default export */ const pages = (IndexPage);

/***/ }),

/***/ 8848:
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#989898","images":{"fallback":{"src":"/static/51a3f81333c7aa4e3f5915f498afcf96/7d916/me.webp","srcSet":"/static/51a3f81333c7aa4e3f5915f498afcf96/dd945/me.webp 756w,\\n/static/51a3f81333c7aa4e3f5915f498afcf96/76fb3/me.webp 1512w,\\n/static/51a3f81333c7aa4e3f5915f498afcf96/7d916/me.webp 3024w","sizes":"(min-width: 3024px) 3024px, 100vw"},"sources":[]},"width":3024,"height":4032}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map