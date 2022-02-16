"use strict";
(() => {
var exports = {};
exports.id = 839;
exports.ids = [839];
exports.modules = {

/***/ 699:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ notionAPI)
});

;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
;// CONCATENATED MODULE: external "notion-client"
const external_notion_client_namespaceObject = require("notion-client");
;// CONCATENATED MODULE: ./pages/api/notionAPI.js


const notion = new external_notion_client_namespaceObject.NotionAPI();
/* harmony default export */ const notionAPI = (async (req, res)=>{
    if (req.method === 'GET') {
        const page = await notion.getPage('Blogs-bde62b64df0847838567b41207f030eb');
        res.status(200).json({
            data: page
        });
    } else {
    // Handle any other HTTP method
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(699));
module.exports = __webpack_exports__;

})();