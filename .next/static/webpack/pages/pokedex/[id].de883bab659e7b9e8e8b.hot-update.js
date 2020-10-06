webpackHotUpdate_N_E("pages/pokedex/[id]",{

/***/ "./src/components/Pokemon/Evolution.tsx":
/*!**********************************************!*\
  !*** ./src/components/Pokemon/Evolution.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/karyma/Desktop/Github/Pokemondb/src/components/Pokemon/Evolution.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Evolution = function Evolution(_ref) {\n  _s();\n\n  var evolution_chain = _ref.evolution_chain,\n      pokemon_name = _ref.pokemon_name;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      evolution = _useState[0],\n      setEvolution = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(evolution_chain.url).then(function (res) {\n      console.log(res.data);\n      setEvolution(res.data);\n    });\n  }, []);\n\n  if (evolution) {\n    var first = evolution.chain.species.name;\n    var second = evolution.chain.evolves_to[0].species.name;\n    var third = evolution.chain.evolves_to[0].evolves_to[0].species.name | null;\n    var description = \"Bulbasaur is the evolves to Ivysaur at level 16. Ivysaur evolves to Venasaur at level\";\n    return __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 13\n      }\n    });\n  } else {\n    return null;\n  }\n};\n\n_s(Evolution, \"02G2/aEGdK8RGngcwPn1qxD0i9o=\");\n\n_c = Evolution;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Evolution);\n\nvar _c;\n\n$RefreshReg$(_c, \"Evolution\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9rZW1vbi9Fdm9sdXRpb24udHN4PzY3ZjQiXSwibmFtZXMiOlsiRXZvbHV0aW9uIiwiZXZvbHV0aW9uX2NoYWluIiwicG9rZW1vbl9uYW1lIiwidXNlU3RhdGUiLCJldm9sdXRpb24iLCJzZXRFdm9sdXRpb24iLCJ1c2VFZmZlY3QiLCJheGlvcyIsImdldCIsInVybCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImZpcnN0IiwiY2hhaW4iLCJzcGVjaWVzIiwibmFtZSIsInNlY29uZCIsImV2b2x2ZXNfdG8iLCJ0aGlyZCIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFxQztBQUFBOztBQUFBLE1BQW5DQyxlQUFtQyxRQUFuQ0EsZUFBbUM7QUFBQSxNQUFsQkMsWUFBa0IsUUFBbEJBLFlBQWtCOztBQUFBLGtCQUNqQkMsc0RBQVEsQ0FBQyxJQUFELENBRFM7QUFBQSxNQUM1Q0MsU0FENEM7QUFBQSxNQUNqQ0MsWUFEaUM7O0FBR25EQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsZ0RBQUssQ0FBQ0MsR0FBTixDQUFVUCxlQUFlLENBQUNRLEdBQTFCLEVBQ0tDLElBREwsQ0FDVSxVQUFBQyxHQUFHLEVBQUk7QUFDVEMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQUcsQ0FBQ0csSUFBaEI7QUFDQVQsa0JBQVksQ0FBQ00sR0FBRyxDQUFDRyxJQUFMLENBQVo7QUFDSCxLQUpMO0FBS0gsR0FOUSxFQU1OLEVBTk0sQ0FBVDs7QUFRQSxNQUFHVixTQUFILEVBQWM7QUFDVixRQUFNVyxLQUFLLEdBQUdYLFNBQVMsQ0FBQ1ksS0FBVixDQUFnQkMsT0FBaEIsQ0FBd0JDLElBQXRDO0FBQ0EsUUFBTUMsTUFBTSxHQUFHZixTQUFTLENBQUNZLEtBQVYsQ0FBZ0JJLFVBQWhCLENBQTJCLENBQTNCLEVBQThCSCxPQUE5QixDQUFzQ0MsSUFBckQ7QUFDQSxRQUFNRyxLQUFLLEdBQUdqQixTQUFTLENBQUNZLEtBQVYsQ0FBZ0JJLFVBQWhCLENBQTJCLENBQTNCLEVBQThCQSxVQUE5QixDQUF5QyxDQUF6QyxFQUE0Q0gsT0FBNUMsQ0FBb0RDLElBQXBELEdBQTJELElBQXpFO0FBRUEsUUFBTUksV0FBVywwRkFBakI7QUFFQSxXQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESjtBQUtILEdBWkQsTUFZTztBQUNILFdBQU8sSUFBUDtBQUNIO0FBQ0osQ0ExQkQ7O0dBQU10QixTOztLQUFBQSxTO0FBNEJTQSx3RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1Bva2Vtb24vRXZvbHV0aW9uLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmNvbnN0IEV2b2x1dGlvbiA9ICh7ZXZvbHV0aW9uX2NoYWluLCBwb2tlbW9uX25hbWV9KSA9PiB7XG4gICAgY29uc3QgW2V2b2x1dGlvbiwgc2V0RXZvbHV0aW9uXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBheGlvcy5nZXQoZXZvbHV0aW9uX2NoYWluLnVybClcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXG4gICAgICAgICAgICAgICAgc2V0RXZvbHV0aW9uKHJlcy5kYXRhKVxuICAgICAgICAgICAgfSlcbiAgICB9LCBbXSlcblxuICAgIGlmKGV2b2x1dGlvbikge1xuICAgICAgICBjb25zdCBmaXJzdCA9IGV2b2x1dGlvbi5jaGFpbi5zcGVjaWVzLm5hbWUgXG4gICAgICAgIGNvbnN0IHNlY29uZCA9IGV2b2x1dGlvbi5jaGFpbi5ldm9sdmVzX3RvWzBdLnNwZWNpZXMubmFtZVxuICAgICAgICBjb25zdCB0aGlyZCA9IGV2b2x1dGlvbi5jaGFpbi5ldm9sdmVzX3RvWzBdLmV2b2x2ZXNfdG9bMF0uc3BlY2llcy5uYW1lIHwgbnVsbFxuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gYEJ1bGJhc2F1ciBpcyB0aGUgZXZvbHZlcyB0byBJdnlzYXVyIGF0IGxldmVsIDE2LiBJdnlzYXVyIGV2b2x2ZXMgdG8gVmVuYXNhdXIgYXQgbGV2ZWxgXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2b2x1dGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Pokemon/Evolution.tsx\n");

/***/ })

})