webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/SearchBar/SuggestionBox.tsx":
/*!****************************************************!*\
  !*** ./src/components/SearchBar/SuggestionBox.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_data_Pokemons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/data/Pokemons */ \"./src/assets/data/Pokemons.tsx\");\n/* harmony import */ var _assets_data_Berries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/data/Berries */ \"./src/assets/data/Berries.tsx\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/karyma/Desktop/Github/Pokemondb/src/components/SearchBar/SuggestionBox.tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\nvar SuggestionBox = function SuggestionBox(_ref) {\n  var text = _ref.text,\n      autoComplete = _ref.autoComplete;\n\n  var renderSuggestions = function renderSuggestions() {\n    var suggestions = [];\n    _assets_data_Pokemons__WEBPACK_IMPORTED_MODULE_3__[\"default\"].forEach(function (pokemon) {\n      if (pokemon.includes(text.toLowerCase())) {\n        suggestions = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(suggestions), [Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, pokemon, 'pokedex')]);\n      }\n    });\n    _assets_data_Berries__WEBPACK_IMPORTED_MODULE_4__[\"default\"].forEach(function (berry) {\n      if (berry.includes(text.toLowerCase())) {\n        suggestions = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(suggestions), [Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, berry, 'berries')]);\n      }\n    });\n\n    function sortByKey(array, key) {\n      return array.sort(function (a, b) {\n        var x = a[key];\n        var y = b[key];\n        return x < y ? -1 : x > y ? 1 : 0;\n      });\n    }\n\n    suggestions.sort(function (a, b) {\n      if (Object.keys(a) > Object.keys(b)) {\n        return 1;\n      } else {\n        return -1;\n      }\n    });\n    return suggestions.map(function (data, i) {\n      return __jsx(\"li\", {\n        key: i,\n        onClick: function onClick() {\n          return autoComplete(data);\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 45\n        }\n      }, data);\n    });\n  };\n\n  var render = text ? renderSuggestions() : null;\n  return __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, render);\n};\n\n_c = SuggestionBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SuggestionBox);\n\nvar _c;\n\n$RefreshReg$(_c, \"SuggestionBox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyL1N1Z2dlc3Rpb25Cb3gudHN4Pzg1NWIiXSwibmFtZXMiOlsiU3VnZ2VzdGlvbkJveCIsInRleHQiLCJhdXRvQ29tcGxldGUiLCJyZW5kZXJTdWdnZXN0aW9ucyIsInN1Z2dlc3Rpb25zIiwiUG9rZW1vbnMiLCJmb3JFYWNoIiwicG9rZW1vbiIsImluY2x1ZGVzIiwidG9Mb3dlckNhc2UiLCJCZXJyaWVzIiwiYmVycnkiLCJzb3J0QnlLZXkiLCJhcnJheSIsImtleSIsInNvcnQiLCJhIiwiYiIsIngiLCJ5IiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImRhdGEiLCJpIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBMEI7QUFBQSxNQUF4QkMsSUFBd0IsUUFBeEJBLElBQXdCO0FBQUEsTUFBbEJDLFlBQWtCLFFBQWxCQSxZQUFrQjs7QUFDNUMsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzVCLFFBQUlDLFdBQVcsR0FBRyxFQUFsQjtBQUVBQyxpRUFBUSxDQUFDQyxPQUFULENBQWlCLFVBQUFDLE9BQU8sRUFBSTtBQUN4QixVQUFHQSxPQUFPLENBQUNDLFFBQVIsQ0FBaUJQLElBQUksQ0FBQ1EsV0FBTCxFQUFqQixDQUFILEVBQXdDO0FBQ3BDTCxtQkFBVywwR0FBT0EsV0FBUCxrR0FBdUJHLE9BQXZCLEVBQWlDLFNBQWpDLEdBQVg7QUFDSDtBQUNKLEtBSkQ7QUFNQUcsZ0VBQU8sQ0FBQ0osT0FBUixDQUFnQixVQUFBSyxLQUFLLEVBQUk7QUFDckIsVUFBR0EsS0FBSyxDQUFDSCxRQUFOLENBQWVQLElBQUksQ0FBQ1EsV0FBTCxFQUFmLENBQUgsRUFBc0M7QUFDbENMLG1CQUFXLDBHQUFPQSxXQUFQLGtHQUF1Qk8sS0FBdkIsRUFBK0IsU0FBL0IsR0FBWDtBQUNIO0FBQ0osS0FKRDs7QUFNQSxhQUFTQyxTQUFULENBQW1CQyxLQUFuQixFQUEwQkMsR0FBMUIsRUFBK0I7QUFDM0IsYUFBT0QsS0FBSyxDQUFDRSxJQUFOLENBQVcsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDMUIsWUFBSUMsQ0FBQyxHQUFHRixDQUFDLENBQUNGLEdBQUQsQ0FBVDtBQUNBLFlBQUlLLENBQUMsR0FBR0YsQ0FBQyxDQUFDSCxHQUFELENBQVQ7QUFFQSxlQUFTSSxDQUFDLEdBQUdDLENBQUwsR0FBVSxDQUFDLENBQVgsR0FBaUJELENBQUMsR0FBR0MsQ0FBTCxHQUFVLENBQVYsR0FBYyxDQUF0QztBQUNELE9BTE0sQ0FBUDtBQU1IOztBQUVEZixlQUFXLENBQUNXLElBQVosQ0FBaUIsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDdkIsVUFBR0csTUFBTSxDQUFDQyxJQUFQLENBQVlMLENBQVosSUFBaUJJLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSixDQUFaLENBQXBCLEVBQW1DO0FBQy9CLGVBQU8sQ0FBUDtBQUNILE9BRkQsTUFFTztBQUNILGVBQU8sQ0FBQyxDQUFSO0FBQ0g7QUFDSixLQU5EO0FBUUEsV0FBT2IsV0FBVyxDQUFDa0IsR0FBWixDQUFnQixVQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSxhQUFhO0FBQUksV0FBRyxFQUFFQSxDQUFUO0FBQVksZUFBTyxFQUFFO0FBQUEsaUJBQU10QixZQUFZLENBQUNxQixJQUFELENBQWxCO0FBQUEsU0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFnREEsSUFBaEQsQ0FBYjtBQUFBLEtBQWhCLENBQVA7QUFDSCxHQWpDRDs7QUFtQ0EsTUFBTUUsTUFBTSxHQUFHeEIsSUFBSSxHQUFHRSxpQkFBaUIsRUFBcEIsR0FBeUIsSUFBNUM7QUFFQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS3NCLE1BREwsQ0FESjtBQUtILENBM0NEOztLQUFNekIsYTtBQTZDU0EsNEVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIvU3VnZ2VzdGlvbkJveC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUG9rZW1vbnMgZnJvbSAnLi4vLi4vYXNzZXRzL2RhdGEvUG9rZW1vbnMnXG5pbXBvcnQgQmVycmllcyBmcm9tICcuLi8uLi9hc3NldHMvZGF0YS9CZXJyaWVzJ1xuXG5jb25zdCBTdWdnZXN0aW9uQm94ID0gKHt0ZXh0LCBhdXRvQ29tcGxldGV9KSA9PiB7XG4gICAgY29uc3QgcmVuZGVyU3VnZ2VzdGlvbnMgPSAoKSA9PiB7XG4gICAgICAgIGxldCBzdWdnZXN0aW9ucyA9IFtdXG5cbiAgICAgICAgUG9rZW1vbnMuZm9yRWFjaChwb2tlbW9uID0+IHtcbiAgICAgICAgICAgIGlmKHBva2Vtb24uaW5jbHVkZXModGV4dC50b0xvd2VyQ2FzZSgpKSl7XG4gICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnMgPSBbLi4uc3VnZ2VzdGlvbnMsIHsgW3Bva2Vtb25dOiAncG9rZWRleCcgfV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBCZXJyaWVzLmZvckVhY2goYmVycnkgPT4ge1xuICAgICAgICAgICAgaWYoYmVycnkuaW5jbHVkZXModGV4dC50b0xvd2VyQ2FzZSgpKSl7XG4gICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnMgPSBbLi4uc3VnZ2VzdGlvbnMsIHsgW2JlcnJ5XTogJ2JlcnJpZXMnIH1dXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgZnVuY3Rpb24gc29ydEJ5S2V5KGFycmF5LCBrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnJheS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgIGxldCB4ID0gYVtrZXldO1xuICAgICAgICAgICAgICBsZXQgeSA9IGJba2V5XTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHJldHVybiAoKHggPCB5KSA/IC0xIDogKCh4ID4geSkgPyAxIDogMCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBzdWdnZXN0aW9ucy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBpZihPYmplY3Qua2V5cyhhKSA+IE9iamVjdC5rZXlzKGIpKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gMVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gc3VnZ2VzdGlvbnMubWFwKChkYXRhLCBpKSA9PiA8bGkga2V5PXtpfSBvbkNsaWNrPXsoKSA9PiBhdXRvQ29tcGxldGUoZGF0YSl9PntkYXRhfTwvbGk+KVxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlciA9IHRleHQgPyByZW5kZXJTdWdnZXN0aW9ucygpIDogbnVsbFxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtyZW5kZXJ9XG4gICAgICAgIDwvdWw+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdWdnZXN0aW9uQm94Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SearchBar/SuggestionBox.tsx\n");

/***/ })

})