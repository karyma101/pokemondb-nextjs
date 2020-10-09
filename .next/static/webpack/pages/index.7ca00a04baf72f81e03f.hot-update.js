webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/SearchBar/SuggestionBox.tsx":
/*!****************************************************!*\
  !*** ./src/components/SearchBar/SuggestionBox.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_data_Pokemons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/data/Pokemons */ \"./src/assets/data/Pokemons.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/karyma/Desktop/Github/Pokemondb/src/components/SearchBar/SuggestionBox.tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar SuggestionBox = function SuggestionBox(_ref) {\n  var text = _ref.text,\n      autoComplete = _ref.autoComplete;\n\n  var renderSuggestions = function renderSuggestions() {\n    var suggestions = [];\n    _assets_data_Pokemons__WEBPACK_IMPORTED_MODULE_1__[\"default\"].forEach(function (pokemon) {\n      if (pokemon.includes(text.toLowerCase())) {\n        [].concat(suggestions, [pokemon]);\n      }\n    }); // return filteredSuggestions.map((data, i) => <li key={i} onClick={() => autoComplete(data)}>{data}</li>)\n  }; // const render = text ? renderSuggestions() : null\n\n\n  return __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  });\n};\n\n_c = SuggestionBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SuggestionBox);\n\nvar _c;\n\n$RefreshReg$(_c, \"SuggestionBox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyL1N1Z2dlc3Rpb25Cb3gudHN4Pzg1NWIiXSwibmFtZXMiOlsiU3VnZ2VzdGlvbkJveCIsInRleHQiLCJhdXRvQ29tcGxldGUiLCJyZW5kZXJTdWdnZXN0aW9ucyIsInN1Z2dlc3Rpb25zIiwiUG9rZW1vbnMiLCJmb3JFYWNoIiwicG9rZW1vbiIsImluY2x1ZGVzIiwidG9Mb3dlckNhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUdBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBMEI7QUFBQSxNQUF4QkMsSUFBd0IsUUFBeEJBLElBQXdCO0FBQUEsTUFBbEJDLFlBQWtCLFFBQWxCQSxZQUFrQjs7QUFDNUMsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzVCLFFBQU1DLFdBQVcsR0FBRyxFQUFwQjtBQUVBQyxpRUFBUSxDQUFDQyxPQUFULENBQWlCLFVBQUFDLE9BQU8sRUFBSTtBQUN4QixVQUFHQSxPQUFPLENBQUNDLFFBQVIsQ0FBaUJQLElBQUksQ0FBQ1EsV0FBTCxFQUFqQixDQUFILEVBQXdDO0FBQ3BDLGtCQUFJTCxXQUFKLEdBQWlCRyxPQUFqQjtBQUNIO0FBQ0osS0FKRCxFQUg0QixDQVc1QjtBQUNILEdBWkQsQ0FENEMsQ0FlNUM7OztBQUdBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKO0FBS0gsQ0F2QkQ7O0tBQU1QLGE7QUF5QlNBLDRFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyL1N1Z2dlc3Rpb25Cb3gudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBva2Vtb25zIGZyb20gJy4uLy4uL2Fzc2V0cy9kYXRhL1Bva2Vtb25zJ1xuaW1wb3J0IEJlcnJpZXMgZnJvbSAnLi4vLi4vYXNzZXRzL2RhdGEvQmVycmllcydcblxuY29uc3QgU3VnZ2VzdGlvbkJveCA9ICh7dGV4dCwgYXV0b0NvbXBsZXRlfSkgPT4ge1xuICAgIGNvbnN0IHJlbmRlclN1Z2dlc3Rpb25zID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWdnZXN0aW9ucyA9IFtdXG5cbiAgICAgICAgUG9rZW1vbnMuZm9yRWFjaChwb2tlbW9uID0+IHtcbiAgICAgICAgICAgIGlmKHBva2Vtb24uaW5jbHVkZXModGV4dC50b0xvd2VyQ2FzZSgpKSl7XG4gICAgICAgICAgICAgICAgWy4uLnN1Z2dlc3Rpb25zLCBwb2tlbW9uXVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG5cblxuICAgICAgICAvLyByZXR1cm4gZmlsdGVyZWRTdWdnZXN0aW9ucy5tYXAoKGRhdGEsIGkpID0+IDxsaSBrZXk9e2l9IG9uQ2xpY2s9eygpID0+IGF1dG9Db21wbGV0ZShkYXRhKX0+e2RhdGF9PC9saT4pXG4gICAgfVxuXG4gICAgLy8gY29uc3QgcmVuZGVyID0gdGV4dCA/IHJlbmRlclN1Z2dlc3Rpb25zKCkgOiBudWxsXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIHsvKiB7cmVuZGVyfSAqL31cbiAgICAgICAgPC91bD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN1Z2dlc3Rpb25Cb3giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SearchBar/SuggestionBox.tsx\n");

/***/ })

})