webpackHotUpdate_N_E("pages/index",{

/***/ "./src/assets/data/pokemons.tsx":
/*!**************************************!*\
  !*** ./src/assets/data/pokemons.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {var pokemons = ['pikachu', 'eevee', 'bulbasaur'];\n/* harmony default export */ __webpack_exports__[\"default\"] = (pokemons);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2Fzc2V0cy9kYXRhL3Bva2Vtb25zLnRzeD9mYWRmIl0sIm5hbWVzIjpbInBva2Vtb25zIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLGtEQUFNQSxRQUFRLEdBQUcsQ0FDYixTQURhLEVBRWIsT0FGYSxFQUdiLFdBSGEsQ0FBakI7QUFNZUEsdUVBQWYiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL2RhdGEvcG9rZW1vbnMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcG9rZW1vbnMgPSBbXG4gICAgJ3Bpa2FjaHUnLFxuICAgICdlZXZlZScsXG4gICAgJ2J1bGJhc2F1cidcbl1cblxuZXhwb3J0IGRlZmF1bHQgcG9rZW1vbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/data/pokemons.tsx\n");

/***/ }),

/***/ "./src/components/SearchBar/SuggestionBox.tsx":
/*!****************************************************!*\
  !*** ./src/components/SearchBar/SuggestionBox.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_data_pokemons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/data/pokemons */ \"./src/assets/data/pokemons.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/karyma/Desktop/Github/Pokemondb/src/components/SearchBar/SuggestionBox.tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar SuggestionBox = function SuggestionBox(_ref) {\n  var text = _ref.text,\n      autoComplete = _ref.autoComplete;\n\n  var renderSuggestions = function renderSuggestions() {\n    var filteredSuggestions = _assets_data_pokemons__WEBPACK_IMPORTED_MODULE_1__[\"default\"].filter(function (data) {\n      if (data.includes(text)) {\n        return true;\n      }\n    });\n    return filteredSuggestions.map(function (data, i) {\n      return __jsx(\"li\", {\n        key: i,\n        onClick: function onClick() {\n          return autoComplete(data);\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 53\n        }\n      }, data);\n    });\n  };\n\n  var render = text ? renderSuggestions() : null;\n  return __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, render);\n};\n\n_c = SuggestionBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SuggestionBox);\n\nvar _c;\n\n$RefreshReg$(_c, \"SuggestionBox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyL1N1Z2dlc3Rpb25Cb3gudHN4Pzg1NWIiXSwibmFtZXMiOlsiU3VnZ2VzdGlvbkJveCIsInRleHQiLCJhdXRvQ29tcGxldGUiLCJyZW5kZXJTdWdnZXN0aW9ucyIsImZpbHRlcmVkU3VnZ2VzdGlvbnMiLCJwb2tlbW9ucyIsImZpbHRlciIsImRhdGEiLCJpbmNsdWRlcyIsIm1hcCIsImkiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBMEI7QUFBQSxNQUF4QkMsSUFBd0IsUUFBeEJBLElBQXdCO0FBQUEsTUFBbEJDLFlBQWtCLFFBQWxCQSxZQUFrQjs7QUFDNUMsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzVCLFFBQU1DLG1CQUFtQixHQUFHQyw2REFBUSxDQUFDQyxNQUFULENBQWdCLFVBQUNDLElBQUQsRUFBVTtBQUNsRCxVQUFHQSxJQUFJLENBQUNDLFFBQUwsQ0FBY1AsSUFBZCxDQUFILEVBQXVCO0FBQ25CLGVBQU8sSUFBUDtBQUNIO0FBQ0osS0FKMkIsQ0FBNUI7QUFNQSxXQUFPRyxtQkFBbUIsQ0FBQ0ssR0FBcEIsQ0FBd0IsVUFBQ0YsSUFBRCxFQUFPRyxDQUFQO0FBQUEsYUFBYTtBQUFJLFdBQUcsRUFBRUEsQ0FBVDtBQUFZLGVBQU8sRUFBRTtBQUFBLGlCQUFNUixZQUFZLENBQUNLLElBQUQsQ0FBbEI7QUFBQSxTQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQWdEQSxJQUFoRCxDQUFiO0FBQUEsS0FBeEIsQ0FBUDtBQUNILEdBUkQ7O0FBVUEsTUFBTUksTUFBTSxHQUFHVixJQUFJLEdBQUdFLGlCQUFpQixFQUFwQixHQUF5QixJQUE1QztBQUdBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLUSxNQURMLENBREo7QUFLSCxDQW5CRDs7S0FBTVgsYTtBQXFCU0EsNEVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIvU3VnZ2VzdGlvbkJveC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcG9rZW1vbnMgZnJvbSAnLi4vLi4vYXNzZXRzL2RhdGEvcG9rZW1vbnMnXG5cbmNvbnN0IFN1Z2dlc3Rpb25Cb3ggPSAoe3RleHQsIGF1dG9Db21wbGV0ZX0pID0+IHtcbiAgICBjb25zdCByZW5kZXJTdWdnZXN0aW9ucyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZmlsdGVyZWRTdWdnZXN0aW9ucyA9IHBva2Vtb25zLmZpbHRlcigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYoZGF0YS5pbmNsdWRlcyh0ZXh0KSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gZmlsdGVyZWRTdWdnZXN0aW9ucy5tYXAoKGRhdGEsIGkpID0+IDxsaSBrZXk9e2l9IG9uQ2xpY2s9eygpID0+IGF1dG9Db21wbGV0ZShkYXRhKX0+e2RhdGF9PC9saT4pXG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyID0gdGV4dCA/IHJlbmRlclN1Z2dlc3Rpb25zKCkgOiBudWxsXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtyZW5kZXJ9XG4gICAgICAgIDwvdWw+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdWdnZXN0aW9uQm94Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SearchBar/SuggestionBox.tsx\n");

/***/ })

})