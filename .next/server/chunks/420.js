exports.id = 420;
exports.ids = [420];
exports.modules = {

/***/ 31:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Navbar_container__n_MIF",
	"titleContainer": "Navbar_titleContainer__8OwAG",
	"navBarIcon": "Navbar_navBarIcon__1h_jx",
	"canvas": "Navbar_canvas__CxkC_",
	"title": "Navbar_title__J_BSP",
	"subtitle": "Navbar_subtitle__O9307",
	"btnContainer": "Navbar_btnContainer__U_DSY",
	"navBtn": "Navbar_navBtn__z9hsf",
	"navPressed": "Navbar_navPressed__pBjVl"
};


/***/ }),

/***/ 420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Navbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
// EXTERNAL MODULE: ./styles/Navbar.module.scss
var Navbar_module = __webpack_require__(31);
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);
;// CONCATENATED MODULE: ./components/button.tsx

const Btn = ({ text , cls , click  })=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: cls,
            onClick: click,
            children: text
        })
    })
;
/* harmony default export */ const components_button = (Btn);

// EXTERNAL MODULE: external "react-spring"
var external_react_spring_ = __webpack_require__(417);
;// CONCATENATED MODULE: ./components/Boat.jsx


function Boat() {
    const transform = (0,external_react_spring_.useSpring)({
        loop: {
            reverse: true
        },
        from: {
            rotateZ: -10,
            width: "5vw",
            left: "8vw",
            top: "10vw",
            position: "absolute"
        },
        to: {
            rotateZ: 10
        },
        config: {
            duration: 1000,
            easing: external_react_spring_.easings.easeInQuad
        }
    });
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_spring_.animated.img, {
        src: "/canoe.png",
        style: transform
    }));
};

;// CONCATENATED MODULE: ./components/Navbar.jsx





const pages = [
    {
        name: "🏠 Home",
        id: "/"
    },
    {
        name: "📚 Blogs",
        id: "blogs"
    },
    {
        name: "🕹 Projects",
        id: "projects"
    },
    {
        name: "🤖 About",
        id: "about"
    },
    {
        name: "📄 Publications",
        id: "publications"
    },
    {
        name: "💼 Resume",
        id: "resume"
    }, 
];
function Navbar({ thisPage: thisPage1  }) {
    const router = (0,router_.useRouter)();
    const handleClick = (path)=>router.push(path)
    ;
    const tabs = (thisPage)=>pages.map((page, idx)=>/*#__PURE__*/ jsx_runtime_.jsx(components_button, {
                text: page.name,
                click: ()=>handleClick(page.id)
                ,
                cls: thisPage == page.id ? (Navbar_module_default()).navPressed : (Navbar_module_default()).navBtn
            }, idx)
        )
    ;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Navbar_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Navbar_module_default()).titleContainer,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (Navbar_module_default()).subtitle,
                        children: "This is"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (Navbar_module_default()).title,
                        children: "Hieu's"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (Navbar_module_default()).title,
                        children: "Digital"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (Navbar_module_default()).title,
                        children: "Oasis"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Boat, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Navbar_module_default()).btnContainer,
                children: [
                    tabs(thisPage1),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_button, {
                        text: "📞 Contact",
                        cls: (Navbar_module_default()).navBtn
                    })
                ]
            })
        ]
    }));
};


/***/ })

};
;