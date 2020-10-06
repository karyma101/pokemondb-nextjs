webpackHotUpdate_N_E("pages/pokedex/[id]",{

/***/ "./src/components/Pokemon/Evolution.tsx":
/*!**********************************************!*\
  !*** ./src/components/Pokemon/Evolution.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/karyma/Desktop/Github/Pokemondb/src/components/Pokemon/Evolution.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Evolution = function Evolution(_ref) {\n  _s();\n\n  var evolution_chain = _ref.evolution_chain,\n      pokemon_name = _ref.pokemon_name;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      evolution = _useState[0],\n      setEvolution = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(evolution_chain.url).then(function (res) {\n      console.log(res.data);\n      setEvolution(res.data);\n    });\n  }, []);\n\n  if (evolution) {\n    var evolvesFrom = evolution.chain.species.name === pokemon_name ? null : \"\".concat(pokemon_name.uppercase(), \" is the evolved form of \").concat(evolution.chain.species.name);\n    var evolesTo = evolution.chain.evolves_to[0];\n    return __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 13\n      }\n    }, evolvesFrom);\n  } else {\n    return null;\n  }\n};\n\n_s(Evolution, \"02G2/aEGdK8RGngcwPn1qxD0i9o=\");\n\n_c = Evolution;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Evolution);\n\nvar _c;\n\n$RefreshReg$(_c, \"Evolution\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9rZW1vbi9Fdm9sdXRpb24udHN4PzY3ZjQiXSwibmFtZXMiOlsiRXZvbHV0aW9uIiwiZXZvbHV0aW9uX2NoYWluIiwicG9rZW1vbl9uYW1lIiwidXNlU3RhdGUiLCJldm9sdXRpb24iLCJzZXRFdm9sdXRpb24iLCJ1c2VFZmZlY3QiLCJheGlvcyIsImdldCIsInVybCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImV2b2x2ZXNGcm9tIiwiY2hhaW4iLCJzcGVjaWVzIiwibmFtZSIsInVwcGVyY2FzZSIsImV2b2xlc1RvIiwiZXZvbHZlc190byJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBcUM7QUFBQTs7QUFBQSxNQUFuQ0MsZUFBbUMsUUFBbkNBLGVBQW1DO0FBQUEsTUFBbEJDLFlBQWtCLFFBQWxCQSxZQUFrQjs7QUFBQSxrQkFDakJDLHNEQUFRLENBQUMsSUFBRCxDQURTO0FBQUEsTUFDNUNDLFNBRDRDO0FBQUEsTUFDakNDLFlBRGlDOztBQUduREMseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLGdEQUFLLENBQUNDLEdBQU4sQ0FBVVAsZUFBZSxDQUFDUSxHQUExQixFQUNLQyxJQURMLENBQ1UsVUFBQUMsR0FBRyxFQUFJO0FBQ1RDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFHLENBQUNHLElBQWhCO0FBQ0FULGtCQUFZLENBQUNNLEdBQUcsQ0FBQ0csSUFBTCxDQUFaO0FBQ0gsS0FKTDtBQUtILEdBTlEsRUFNTixFQU5NLENBQVQ7O0FBUUEsTUFBR1YsU0FBSCxFQUFjO0FBQ1YsUUFBTVcsV0FBVyxHQUFHWCxTQUFTLENBQUNZLEtBQVYsQ0FBZ0JDLE9BQWhCLENBQXdCQyxJQUF4QixLQUFpQ2hCLFlBQWpDLEdBQWdELElBQWhELGFBQTBEQSxZQUFZLENBQUNpQixTQUFiLEVBQTFELHFDQUE2R2YsU0FBUyxDQUFDWSxLQUFWLENBQWdCQyxPQUFoQixDQUF3QkMsSUFBckksQ0FBcEI7QUFDQSxRQUFNRSxRQUFRLEdBQUdoQixTQUFTLENBQUNZLEtBQVYsQ0FBZ0JLLFVBQWhCLENBQTJCLENBQTNCLENBQWpCO0FBRUEsV0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0tOLFdBREwsQ0FESjtBQUtILEdBVEQsTUFTTztBQUNILFdBQU8sSUFBUDtBQUNIO0FBQ0osQ0F2QkQ7O0dBQU1mLFM7O0tBQUFBLFM7QUF5QlNBLHdFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUG9rZW1vbi9Fdm9sdXRpb24udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuY29uc3QgRXZvbHV0aW9uID0gKHtldm9sdXRpb25fY2hhaW4sIHBva2Vtb25fbmFtZX0pID0+IHtcbiAgICBjb25zdCBbZXZvbHV0aW9uLCBzZXRFdm9sdXRpb25dID0gdXNlU3RhdGUobnVsbClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGF4aW9zLmdldChldm9sdXRpb25fY2hhaW4udXJsKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcbiAgICAgICAgICAgICAgICBzZXRFdm9sdXRpb24ocmVzLmRhdGEpXG4gICAgICAgICAgICB9KVxuICAgIH0sIFtdKVxuXG4gICAgaWYoZXZvbHV0aW9uKSB7XG4gICAgICAgIGNvbnN0IGV2b2x2ZXNGcm9tID0gZXZvbHV0aW9uLmNoYWluLnNwZWNpZXMubmFtZSA9PT0gcG9rZW1vbl9uYW1lID8gbnVsbCA6IGAke3Bva2Vtb25fbmFtZS51cHBlcmNhc2UoKX0gaXMgdGhlIGV2b2x2ZWQgZm9ybSBvZiAke2V2b2x1dGlvbi5jaGFpbi5zcGVjaWVzLm5hbWV9YFxuICAgICAgICBjb25zdCBldm9sZXNUbyA9IGV2b2x1dGlvbi5jaGFpbi5ldm9sdmVzX3RvWzBdXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2V2b2x2ZXNGcm9tfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZvbHV0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Pokemon/Evolution.tsx\n");

/***/ })

})