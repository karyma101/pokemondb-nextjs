webpackHotUpdate_N_E("pages/pokedex/[id]",{

/***/ "./src/pages/pokedex/[id].tsx":
/*!************************************!*\
  !*** ./src/pages/pokedex/[id].tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Pokemon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Pokemon */ \"./src/components/Pokemon/index.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/karyma/Desktop/Github/Pokemondb/src/pages/pokedex/[id].tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar Pokedex = function Pokedex() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      pokemon = _useState[0],\n      setPokemon = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      error = _useState3[0],\n      setError = _useState3[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var name = router.query.id;\n\n    if (name) {\n      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"https://pokeapi.co/api/v2/pokemon/\".concat(name)).then(function (res) {\n        return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(res.data.species.url); // setPokemon(res.data)\n        // setLoading(false)\n      }).then(function (res) {\n        console.log(res);\n      }); // .catch(() => {\n      //     setError('Pokemon Not Found')\n      //     setLoading(false)\n      // })\n    }\n  }, [router]);\n  console.log(pokemon);\n\n  if (loading) {\n    return __jsx(\"h1\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 16\n      }\n    }, \"Loading...\");\n  } else {\n    return __jsx(_components_Pokemon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      pokemon: pokemon,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 16\n      }\n    });\n  }\n};\n\n_s(Pokedex, \"pr5QSiv2hnQKFLi5V1WZHQPOc14=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = Pokedex;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pokedex);\n\nvar _c;\n\n$RefreshReg$(_c, \"Pokedex\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Bva2VkZXgvLnRzeD83YTgzIl0sIm5hbWVzIjpbIlBva2VkZXgiLCJ1c2VTdGF0ZSIsInBva2Vtb24iLCJzZXRQb2tlbW9uIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwibmFtZSIsInF1ZXJ5IiwiaWQiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwic3BlY2llcyIsInVybCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsa0JBQ1lDLHNEQUFRLENBQUMsSUFBRCxDQURwQjtBQUFBLE1BQ1hDLE9BRFc7QUFBQSxNQUNGQyxVQURFOztBQUFBLG1CQUVZRixzREFBUSxDQUFDLElBQUQsQ0FGcEI7QUFBQSxNQUVYRyxPQUZXO0FBQUEsTUFFRkMsVUFGRTs7QUFBQSxtQkFHUUosc0RBQVEsQ0FBQyxFQUFELENBSGhCO0FBQUEsTUFHWEssS0FIVztBQUFBLE1BR0pDLFFBSEk7O0FBS2xCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTUMsSUFBSSxHQUFHSCxNQUFNLENBQUNJLEtBQVAsQ0FBYUMsRUFBMUI7O0FBQ0EsUUFBR0YsSUFBSCxFQUFRO0FBQ0pHLGtEQUFLLENBQUNDLEdBQU4sNkNBQStDSixJQUEvQyxHQUNLSyxJQURMLENBQ1UsVUFBQUMsR0FBRyxFQUFJO0FBQ1QsZUFBT0gsNENBQUssQ0FBQ0MsR0FBTixDQUFVRSxHQUFHLENBQUNDLElBQUosQ0FBU0MsT0FBVCxDQUFpQkMsR0FBM0IsQ0FBUCxDQURTLENBRVQ7QUFDQTtBQUNILE9BTEwsRUFNS0osSUFOTCxDQU1VLFVBQUFDLEdBQUcsRUFBSTtBQUNUSSxlQUFPLENBQUNDLEdBQVIsQ0FBWUwsR0FBWjtBQUNILE9BUkwsRUFESSxDQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ1A7QUFDSixHQWpCUSxFQWlCTixDQUFDVCxNQUFELENBakJNLENBQVQ7QUFtQkFhLFNBQU8sQ0FBQ0MsR0FBUixDQUFZcEIsT0FBWjs7QUFFQSxNQUFHRSxPQUFILEVBQVk7QUFDUixXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQVA7QUFDSCxHQUZELE1BRU87QUFDSCxXQUFPLE1BQUMsMkRBQUQ7QUFBUyxhQUFPLEVBQUVGLE9BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBUDtBQUNIO0FBQ0osQ0FqQ0Q7O0dBQU1GLE87VUFLYVMscUQ7OztLQUxiVCxPO0FBbUNTQSxzRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9wb2tlZGV4L1tpZF0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmltcG9ydCBQb2tlbW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUG9rZW1vbidcblxuY29uc3QgUG9rZWRleCA9ICgpID0+IHtcbiAgICBjb25zdCBbcG9rZW1vbiwgc2V0UG9rZW1vbl0gPSB1c2VTdGF0ZShudWxsKVxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJylcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBuYW1lID0gcm91dGVyLnF1ZXJ5LmlkXG4gICAgICAgIGlmKG5hbWUpe1xuICAgICAgICAgICAgYXhpb3MuZ2V0KGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vJHtuYW1lfWApXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLmdldChyZXMuZGF0YS5zcGVjaWVzLnVybClcbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0UG9rZW1vbihyZXMuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8vIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHNldEVycm9yKCdQb2tlbW9uIE5vdCBGb3VuZCcpXG4gICAgICAgICAgICAgICAgLy8gICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgfVxuICAgIH0sIFtyb3V0ZXJdKVxuXG4gICAgY29uc29sZS5sb2cocG9rZW1vbilcblxuICAgIGlmKGxvYWRpbmcpIHtcbiAgICAgICAgcmV0dXJuIDxoMT5Mb2FkaW5nLi4uPC9oMT5cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gPFBva2Vtb24gcG9rZW1vbj17cG9rZW1vbn0vPlxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9rZWRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/pokedex/[id].tsx\n");

/***/ })

})