(() => {
var exports = {};
exports.id = 55;
exports.ids = [55];
exports.modules = {

/***/ 645:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Blog_container__SO8k1",
	"title": "Blog_title___OFu6",
	"cardContainer": "Blog_cardContainer__Mx18H"
};


/***/ }),

/***/ 180:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Card_container__uGlsq",
	"background": "Card_background__caDxc",
	"title": "Card_title__DWd03"
};


/***/ }),

/***/ 262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Blog)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Navbar.jsx + 1 modules
var Navbar = __webpack_require__(998);
// EXTERNAL MODULE: ./styles/Card.module.scss
var Card_module = __webpack_require__(180);
var Card_module_default = /*#__PURE__*/__webpack_require__.n(Card_module);
;// CONCATENATED MODULE: ./components/Card.tsx


function Card({ thumbnail , title  }) {
    const backgroundImg = thumbnail ? {
        background: `url(${thumbnail})`
    } : {
        background: `url()`
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Card_module_default()).container,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Card_module_default()).background,
                    style: backgroundImg
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Card_module_default()).title,
                    children: title
                })
            ]
        })
    }));
};

// EXTERNAL MODULE: ./styles/Blog.module.scss
var Blog_module = __webpack_require__(645);
var Blog_module_default = /*#__PURE__*/__webpack_require__.n(Blog_module);
;// CONCATENATED MODULE: ./pages/blogs/index.jsx




const blog_metadata = [
    {
        thumbnail: null,
        title: 'this is a test title'
    },
    {
        thumbnail: null,
        title: 'this is a test title'
    },
    {
        thumbnail: null,
        title: 'this is a test title'
    },
    {
        thumbnail: null,
        title: 'this is a test title'
    },
    {
        thumbnail: null,
        title: 'this is a test title'
    },
    {
        thumbnail: null,
        title: 'this is a test title'
    }, 
];
const CardList = ({ metadata  })=>{
    return metadata.map(({ thumbnail , title  }, idx)=>/*#__PURE__*/ jsx_runtime_.jsx(Card, {
            thumbnail: thumbnail,
            title: title
        }, idx)
    );
};
function Blog() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar/* default */.Z, {
                thisPage: "blogs"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Blog_module_default()).container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Blog_module_default()).title,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "💭 I'm thinking about..."
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Blog_module_default()).cardContainer,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(CardList, {
                            metadata: blog_metadata
                        })
                    })
                ]
            })
        ]
    }));
};


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
var __webpack_exports__ = __webpack_require__.X(0, [998], () => (__webpack_exec__(262)));
module.exports = __webpack_exports__;

})();