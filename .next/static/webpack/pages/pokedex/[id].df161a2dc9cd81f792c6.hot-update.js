webpackHotUpdate_N_E("pages/pokedex/[id]",{

/***/ "./src/pages/pokedex/[id].tsx":
/*!************************************!*\
  !*** ./src/pages/pokedex/[id].tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Pokemon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Pokemon */ \"./src/components/Pokemon/index.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/karyma/Desktop/Github/Pokemondb/src/pages/pokedex/[id].tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar Pokedex = function Pokedex() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      pokemon = _useState[0],\n      setPokemon = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      error = _useState3[0],\n      setError = _useState3[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var name = router.query.id;\n\n    if (name) {\n      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"https://pokeapi.co/api/v2/pokemon/\".concat(name)).then(function (res) {\n        setPokemon(res.data);\n        setLoading(false);\n      })[\"catch\"](function () {\n        setError('Pokemon Not Found');\n        setLoading(false);\n      });\n    }\n  }, [router]);\n  console.log(pokemon);\n\n  if (loading) {\n    return __jsx(\"h1\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 16\n      }\n    }, \"Loading...\");\n  } else {\n    return __jsx(_components_Pokemon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      pokemon: pokemon,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 16\n      }\n    });\n  }\n};\n\n_s(Pokedex, \"pr5QSiv2hnQKFLi5V1WZHQPOc14=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = Pokedex;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pokedex);\n\nvar _c;\n\n$RefreshReg$(_c, \"Pokedex\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Bva2VkZXgvLnRzeD83YTgzIl0sIm5hbWVzIjpbIlBva2VkZXgiLCJ1c2VTdGF0ZSIsInBva2Vtb24iLCJzZXRQb2tlbW9uIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwibmFtZSIsInF1ZXJ5IiwiaWQiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFBQSxrQkFDWUMsc0RBQVEsQ0FBQyxJQUFELENBRHBCO0FBQUEsTUFDWEMsT0FEVztBQUFBLE1BQ0ZDLFVBREU7O0FBQUEsbUJBRVlGLHNEQUFRLENBQUMsSUFBRCxDQUZwQjtBQUFBLE1BRVhHLE9BRlc7QUFBQSxNQUVGQyxVQUZFOztBQUFBLG1CQUdRSixzREFBUSxDQUFDLEVBQUQsQ0FIaEI7QUFBQSxNQUdYSyxLQUhXO0FBQUEsTUFHSkMsUUFISTs7QUFLbEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxJQUFJLEdBQUdILE1BQU0sQ0FBQ0ksS0FBUCxDQUFhQyxFQUExQjs7QUFDQSxRQUFHRixJQUFILEVBQVE7QUFDSkcsa0RBQUssQ0FBQ0MsR0FBTiw2Q0FBK0NKLElBQS9DLEdBQ0tLLElBREwsQ0FDVSxVQUFBQyxHQUFHLEVBQUk7QUFDVGQsa0JBQVUsQ0FBQ2MsR0FBRyxDQUFDQyxJQUFMLENBQVY7QUFDQWIsa0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDSCxPQUpMLFdBS1csWUFBTTtBQUNURSxnQkFBUSxDQUFDLG1CQUFELENBQVI7QUFDQUYsa0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDSCxPQVJMO0FBU0g7QUFDSixHQWJRLEVBYU4sQ0FBQ0csTUFBRCxDQWJNLENBQVQ7QUFlQVcsU0FBTyxDQUFDQyxHQUFSLENBQVlsQixPQUFaOztBQUVBLE1BQUdFLE9BQUgsRUFBWTtBQUNSLFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBUDtBQUNILEdBRkQsTUFFTztBQUNILFdBQU8sTUFBQywyREFBRDtBQUFTLGFBQU8sRUFBRUYsT0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBQ0g7QUFDSixDQTdCRDs7R0FBTUYsTztVQUthUyxxRDs7O0tBTGJULE87QUErQlNBLHNFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3Bva2VkZXgvW2lkXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuaW1wb3J0IFBva2Vtb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qb2tlbW9uJ1xuXG5jb25zdCBQb2tlZGV4ID0gKCkgPT4ge1xuICAgIGNvbnN0IFtwb2tlbW9uLCBzZXRQb2tlbW9uXSA9IHVzZVN0YXRlKG51bGwpXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKVxuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSByb3V0ZXIucXVlcnkuaWRcbiAgICAgICAgaWYobmFtZSl7XG4gICAgICAgICAgICBheGlvcy5nZXQoYGh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8ke25hbWV9YClcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRQb2tlbW9uKHJlcy5kYXRhKVxuICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoJ1Bva2Vtb24gTm90IEZvdW5kJylcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSwgW3JvdXRlcl0pXG5cbiAgICBjb25zb2xlLmxvZyhwb2tlbW9uKVxuXG4gICAgaWYobG9hZGluZykge1xuICAgICAgICByZXR1cm4gPGgxPkxvYWRpbmcuLi48L2gxPlxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiA8UG9rZW1vbiBwb2tlbW9uPXtwb2tlbW9ufS8+XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb2tlZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/pokedex/[id].tsx\n");

/***/ })

})