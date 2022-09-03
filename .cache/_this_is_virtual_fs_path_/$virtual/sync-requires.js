
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-index-js": preferDefault(require("/Users/charlie/Desktop/min-hieu.github.io/src/pages/index.js")),
  "component---src-pages-test-jsx": preferDefault(require("/Users/charlie/Desktop/min-hieu.github.io/src/pages/test.jsx"))
}

