webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/SearchBar/SuggestionBox.tsx":
/*!****************************************************!*\
  !*** ./src/components/SearchBar/SuggestionBox.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_data_Pokemons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/data/Pokemons */ \"./src/assets/data/Pokemons.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/karyma/Desktop/Github/Pokemondb/src/components/SearchBar/SuggestionBox.tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar SuggestionBox = function SuggestionBox(_ref) {\n  var text = _ref.text,\n      autoComplete = _ref.autoComplete;\n\n  var renderSuggestions = function renderSuggestions() {\n    var filteredSuggestions = _assets_data_Pokemons__WEBPACK_IMPORTED_MODULE_1__[\"default\"].filter(function (data) {\n      if (data.includes(text.toLowerCase())) {\n        return true;\n      }\n    });\n    return filteredSuggestions.map(function (data, i) {\n      return __jsx(\"li\", {\n        key: i,\n        onClick: function onClick() {\n          return autoComplete(data);\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 53\n        }\n      }, data);\n    });\n  };\n\n  var render = text ? renderSuggestions() : null;\n  return __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, render);\n};\n\n_c = SuggestionBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SuggestionBox);\n\nvar _c;\n\n$RefreshReg$(_c, \"SuggestionBox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyL1N1Z2dlc3Rpb25Cb3gudHN4Pzg1NWIiXSwibmFtZXMiOlsiU3VnZ2VzdGlvbkJveCIsInRleHQiLCJhdXRvQ29tcGxldGUiLCJyZW5kZXJTdWdnZXN0aW9ucyIsImZpbHRlcmVkU3VnZ2VzdGlvbnMiLCJQb2tlbW9ucyIsImZpbHRlciIsImRhdGEiLCJpbmNsdWRlcyIsInRvTG93ZXJDYXNlIiwibWFwIiwiaSIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBR0EsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUEwQjtBQUFBLE1BQXhCQyxJQUF3QixRQUF4QkEsSUFBd0I7QUFBQSxNQUFsQkMsWUFBa0IsUUFBbEJBLFlBQWtCOztBQUM1QyxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDNUIsUUFBTUMsbUJBQW1CLEdBQUdDLDZEQUFRLENBQUNDLE1BQVQsQ0FBZ0IsVUFBQ0MsSUFBRCxFQUFVO0FBQ2xELFVBQUdBLElBQUksQ0FBQ0MsUUFBTCxDQUFjUCxJQUFJLENBQUNRLFdBQUwsRUFBZCxDQUFILEVBQXFDO0FBQ2pDLGVBQU8sSUFBUDtBQUNIO0FBQ0osS0FKMkIsQ0FBNUI7QUFNQSxXQUFPTCxtQkFBbUIsQ0FBQ00sR0FBcEIsQ0FBd0IsVUFBQ0gsSUFBRCxFQUFPSSxDQUFQO0FBQUEsYUFBYTtBQUFJLFdBQUcsRUFBRUEsQ0FBVDtBQUFZLGVBQU8sRUFBRTtBQUFBLGlCQUFNVCxZQUFZLENBQUNLLElBQUQsQ0FBbEI7QUFBQSxTQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQWdEQSxJQUFoRCxDQUFiO0FBQUEsS0FBeEIsQ0FBUDtBQUNILEdBUkQ7O0FBVUEsTUFBTUssTUFBTSxHQUFHWCxJQUFJLEdBQUdFLGlCQUFpQixFQUFwQixHQUF5QixJQUE1QztBQUdBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLUyxNQURMLENBREo7QUFLSCxDQW5CRDs7S0FBTVosYTtBQXFCU0EsNEVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIvU3VnZ2VzdGlvbkJveC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUG9rZW1vbnMgZnJvbSAnLi4vLi4vYXNzZXRzL2RhdGEvUG9rZW1vbnMnXG5pbXBvcnQgQmVycmllcyBmcm9tICcuLi8uLi9hc3NldHMvZGF0YS9CZXJyaWVzJ1xuXG5jb25zdCBTdWdnZXN0aW9uQm94ID0gKHt0ZXh0LCBhdXRvQ29tcGxldGV9KSA9PiB7XG4gICAgY29uc3QgcmVuZGVyU3VnZ2VzdGlvbnMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkU3VnZ2VzdGlvbnMgPSBQb2tlbW9ucy5maWx0ZXIoKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmKGRhdGEuaW5jbHVkZXModGV4dC50b0xvd2VyQ2FzZSgpKSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gZmlsdGVyZWRTdWdnZXN0aW9ucy5tYXAoKGRhdGEsIGkpID0+IDxsaSBrZXk9e2l9IG9uQ2xpY2s9eygpID0+IGF1dG9Db21wbGV0ZShkYXRhKX0+e2RhdGF9PC9saT4pXG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyID0gdGV4dCA/IHJlbmRlclN1Z2dlc3Rpb25zKCkgOiBudWxsXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtyZW5kZXJ9XG4gICAgICAgIDwvdWw+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdWdnZXN0aW9uQm94Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SearchBar/SuggestionBox.tsx\n");

/***/ })

})