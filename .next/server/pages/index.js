(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__97eC3",
	"main": "Home_main__OVLM4",
	"footer": "Home_footer__zed0_",
	"title": "Home_title__q0Qg4",
	"description": "Home_description__JhekB",
	"code": "Home_code__2i1pD",
	"grid": "Home_grid__npx0i",
	"card": "Home_card__K7aTN",
	"logo": "Home_logo__FLQOc"
};


/***/ }),

/***/ 75:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./styles/Home.module.scss
var Home_module = __webpack_require__(4);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: ./components/Navbar.jsx + 1 modules
var Navbar = __webpack_require__(998);
;// CONCATENATED MODULE: ./pages/index.tsx




const Home = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Home_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Hieu's Digital Oasis"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Hieu's Personal Website, stayput robots!"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: (Home_module_default()).main
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar/* default */.Z, {
                thisPage: "/"
            })
        ]
    }));
};
/* harmony default export */ const pages = (Home);


/***/ }),

/***/ 853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

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
var __webpack_exports__ = __webpack_require__.X(0, [998], () => (__webpack_exec__(75)));
module.exports = __webpack_exports__;

})();