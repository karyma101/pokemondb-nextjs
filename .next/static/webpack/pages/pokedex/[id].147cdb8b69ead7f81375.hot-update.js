webpackHotUpdate_N_E("pages/pokedex/[id]",{

/***/ "./src/components/Pokemon/Evolution.tsx":
/*!**********************************************!*\
  !*** ./src/components/Pokemon/Evolution.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/karyma/Desktop/Github/Pokemondb/src/components/Pokemon/Evolution.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Evolution = function Evolution(_ref) {\n  _s();\n\n  var evolution_chain = _ref.evolution_chain,\n      pokemon_name = _ref.pokemon_name;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      evolution = _useState[0],\n      setEvolution = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(evolution_chain.url).then(function (res) {\n      console.log(res.data);\n      setEvolution(res.data);\n    });\n  }, []);\n\n  if (evolution) {\n    var evolvesTo = evolution.chain.evolves_to[0].evolves_to[0].species.name;\n    return __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 13\n      }\n    }, pokemon_name, \" evolves to \", evolvesTo);\n  } else {\n    return null;\n  }\n};\n\n_s(Evolution, \"02G2/aEGdK8RGngcwPn1qxD0i9o=\");\n\n_c = Evolution;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Evolution);\n\nvar _c;\n\n$RefreshReg$(_c, \"Evolution\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9rZW1vbi9Fdm9sdXRpb24udHN4PzY3ZjQiXSwibmFtZXMiOlsiRXZvbHV0aW9uIiwiZXZvbHV0aW9uX2NoYWluIiwicG9rZW1vbl9uYW1lIiwidXNlU3RhdGUiLCJldm9sdXRpb24iLCJzZXRFdm9sdXRpb24iLCJ1c2VFZmZlY3QiLCJheGlvcyIsImdldCIsInVybCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImV2b2x2ZXNUbyIsImNoYWluIiwiZXZvbHZlc190byIsInNwZWNpZXMiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFxQztBQUFBOztBQUFBLE1BQW5DQyxlQUFtQyxRQUFuQ0EsZUFBbUM7QUFBQSxNQUFsQkMsWUFBa0IsUUFBbEJBLFlBQWtCOztBQUFBLGtCQUNqQkMsc0RBQVEsQ0FBQyxJQUFELENBRFM7QUFBQSxNQUM1Q0MsU0FENEM7QUFBQSxNQUNqQ0MsWUFEaUM7O0FBR25EQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsZ0RBQUssQ0FBQ0MsR0FBTixDQUFVUCxlQUFlLENBQUNRLEdBQTFCLEVBQ0tDLElBREwsQ0FDVSxVQUFBQyxHQUFHLEVBQUk7QUFDVEMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQUcsQ0FBQ0csSUFBaEI7QUFDQVQsa0JBQVksQ0FBQ00sR0FBRyxDQUFDRyxJQUFMLENBQVo7QUFDSCxLQUpMO0FBS0gsR0FOUSxFQU1OLEVBTk0sQ0FBVDs7QUFRQSxNQUFHVixTQUFILEVBQWM7QUFDVixRQUFNVyxTQUFTLEdBQUdYLFNBQVMsQ0FBQ1ksS0FBVixDQUFnQkMsVUFBaEIsQ0FBMkIsQ0FBM0IsRUFBOEJBLFVBQTlCLENBQXlDLENBQXpDLEVBQTRDQyxPQUE1QyxDQUFvREMsSUFBdEU7QUFFQSxXQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDS2pCLFlBREwsa0JBQytCYSxTQUQvQixDQURKO0FBS0gsR0FSRCxNQVFPO0FBQ0gsV0FBTyxJQUFQO0FBQ0g7QUFDSixDQXRCRDs7R0FBTWYsUzs7S0FBQUEsUztBQXdCU0Esd0VBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qb2tlbW9uL0V2b2x1dGlvbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5jb25zdCBFdm9sdXRpb24gPSAoe2V2b2x1dGlvbl9jaGFpbiwgcG9rZW1vbl9uYW1lfSkgPT4ge1xuICAgIGNvbnN0IFtldm9sdXRpb24sIHNldEV2b2x1dGlvbl0gPSB1c2VTdGF0ZShudWxsKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXhpb3MuZ2V0KGV2b2x1dGlvbl9jaGFpbi51cmwpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxuICAgICAgICAgICAgICAgIHNldEV2b2x1dGlvbihyZXMuZGF0YSlcbiAgICAgICAgICAgIH0pXG4gICAgfSwgW10pXG5cbiAgICBpZihldm9sdXRpb24pIHtcbiAgICAgICAgY29uc3QgZXZvbHZlc1RvID0gZXZvbHV0aW9uLmNoYWluLmV2b2x2ZXNfdG9bMF0uZXZvbHZlc190b1swXS5zcGVjaWVzLm5hbWVcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7cG9rZW1vbl9uYW1lfSBldm9sdmVzIHRvIHtldm9sdmVzVG99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdm9sdXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Pokemon/Evolution.tsx\n");

/***/ })

})