webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/SearchBar/SuggestionBox.tsx":
/*!****************************************************!*\
  !*** ./src/components/SearchBar/SuggestionBox.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_data_Pokemons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/data/Pokemons */ \"./src/assets/data/Pokemons.tsx\");\n/* harmony import */ var _assets_data_Berries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/data/Berries */ \"./src/assets/data/Berries.tsx\");\n/* harmony import */ var _SuggestionBox_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SuggestionBox.module.css */ \"./src/components/SearchBar/SuggestionBox.module.css\");\n/* harmony import */ var _SuggestionBox_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_SuggestionBox_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/karyma/Desktop/Github/Pokemondb/src/components/SearchBar/SuggestionBox.tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nvar SuggestionBox = function SuggestionBox(_ref) {\n  var text = _ref.text,\n      autoComplete = _ref.autoComplete;\n\n  var renderSuggestions = function renderSuggestions() {\n    var suggestions = [];\n    _assets_data_Berries__WEBPACK_IMPORTED_MODULE_4__[\"default\"].forEach(function (berry) {\n      console.log(text.toLowerCase());\n\n      if (berry.includes(text.toLowerCase())) {\n        suggestions = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(suggestions), [Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, berry, 'berries')]);\n      }\n    });\n    _assets_data_Pokemons__WEBPACK_IMPORTED_MODULE_3__[\"default\"].forEach(function (pokemon) {\n      if (pokemon.includes(text.toLowerCase())) {\n        suggestions = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(suggestions), [Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, pokemon, 'pokedex')]);\n      }\n    });\n    suggestions.sort(function (a, b) {\n      if (Object.keys(a) > Object.keys(b)) {\n        return 1;\n      } else {\n        return -1;\n      }\n    });\n    return suggestions.map(function (data, i) {\n      return __jsx(\"li\", {\n        className: _SuggestionBox_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.item,\n        key: i,\n        onClick: function onClick() {\n          return autoComplete(data);\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 45\n        }\n      }, Object.keys(data));\n    });\n  };\n\n  var render = text ? renderSuggestions() : null;\n  return __jsx(\"ul\", {\n    className: _SuggestionBox_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.list,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, render);\n};\n\n_c = SuggestionBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SuggestionBox);\n\nvar _c;\n\n$RefreshReg$(_c, \"SuggestionBox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyL1N1Z2dlc3Rpb25Cb3gudHN4Pzg1NWIiXSwibmFtZXMiOlsiU3VnZ2VzdGlvbkJveCIsInRleHQiLCJhdXRvQ29tcGxldGUiLCJyZW5kZXJTdWdnZXN0aW9ucyIsInN1Z2dlc3Rpb25zIiwiQmVycmllcyIsImZvckVhY2giLCJiZXJyeSIsImNvbnNvbGUiLCJsb2ciLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiUG9rZW1vbnMiLCJwb2tlbW9uIiwic29ydCIsImEiLCJiIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImRhdGEiLCJpIiwic3R5bGVzIiwiaXRlbSIsInJlbmRlciIsImxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBMEI7QUFBQSxNQUF4QkMsSUFBd0IsUUFBeEJBLElBQXdCO0FBQUEsTUFBbEJDLFlBQWtCLFFBQWxCQSxZQUFrQjs7QUFDNUMsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzVCLFFBQUlDLFdBQVcsR0FBRyxFQUFsQjtBQUVBQyxnRUFBTyxDQUFDQyxPQUFSLENBQWdCLFVBQUFDLEtBQUssRUFBSTtBQUNyQkMsYUFBTyxDQUFDQyxHQUFSLENBQVlSLElBQUksQ0FBQ1MsV0FBTCxFQUFaOztBQUNBLFVBQUdILEtBQUssQ0FBQ0ksUUFBTixDQUFlVixJQUFJLENBQUNTLFdBQUwsRUFBZixDQUFILEVBQXNDO0FBRWxDTixtQkFBVywwR0FBT0EsV0FBUCxrR0FBdUJHLEtBQXZCLEVBQStCLFNBQS9CLEdBQVg7QUFDSDtBQUNKLEtBTkQ7QUFRQUssaUVBQVEsQ0FBQ04sT0FBVCxDQUFpQixVQUFBTyxPQUFPLEVBQUk7QUFDeEIsVUFBR0EsT0FBTyxDQUFDRixRQUFSLENBQWlCVixJQUFJLENBQUNTLFdBQUwsRUFBakIsQ0FBSCxFQUF3QztBQUNwQ04sbUJBQVcsMEdBQU9BLFdBQVAsa0dBQXVCUyxPQUF2QixFQUFpQyxTQUFqQyxHQUFYO0FBQ0g7QUFDSixLQUpEO0FBTUFULGVBQVcsQ0FBQ1UsSUFBWixDQUFpQixVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUN2QixVQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWUgsQ0FBWixJQUFpQkUsTUFBTSxDQUFDQyxJQUFQLENBQVlGLENBQVosQ0FBcEIsRUFBbUM7QUFDL0IsZUFBTyxDQUFQO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsZUFBTyxDQUFDLENBQVI7QUFDSDtBQUNKLEtBTkQ7QUFRQSxXQUFPWixXQUFXLENBQUNlLEdBQVosQ0FBZ0IsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQO0FBQUEsYUFBYTtBQUFJLGlCQUFTLEVBQUVDLGdFQUFNLENBQUNDLElBQXRCO0FBQTRCLFdBQUcsRUFBRUYsQ0FBakM7QUFBb0MsZUFBTyxFQUFFO0FBQUEsaUJBQU1uQixZQUFZLENBQUNrQixJQUFELENBQWxCO0FBQUEsU0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUF3RUgsTUFBTSxDQUFDQyxJQUFQLENBQVlFLElBQVosQ0FBeEUsQ0FBYjtBQUFBLEtBQWhCLENBQVA7QUFDSCxHQTFCRDs7QUE0QkEsTUFBTUksTUFBTSxHQUFHdkIsSUFBSSxHQUFHRSxpQkFBaUIsRUFBcEIsR0FBeUIsSUFBNUM7QUFFQSxTQUNJO0FBQUksYUFBUyxFQUFFbUIsZ0VBQU0sQ0FBQ0csSUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLRCxNQURMLENBREo7QUFLSCxDQXBDRDs7S0FBTXhCLGE7QUFzQ1NBLDRFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyL1N1Z2dlc3Rpb25Cb3gudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBva2Vtb25zIGZyb20gJy4uLy4uL2Fzc2V0cy9kYXRhL1Bva2Vtb25zJ1xuaW1wb3J0IEJlcnJpZXMgZnJvbSAnLi4vLi4vYXNzZXRzL2RhdGEvQmVycmllcydcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1N1Z2dlc3Rpb25Cb3gubW9kdWxlLmNzcydcblxuY29uc3QgU3VnZ2VzdGlvbkJveCA9ICh7dGV4dCwgYXV0b0NvbXBsZXRlfSkgPT4ge1xuICAgIGNvbnN0IHJlbmRlclN1Z2dlc3Rpb25zID0gKCkgPT4ge1xuICAgICAgICBsZXQgc3VnZ2VzdGlvbnMgPSBbXVxuXG4gICAgICAgIEJlcnJpZXMuZm9yRWFjaChiZXJyeSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0ZXh0LnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICAgICBpZihiZXJyeS5pbmNsdWRlcyh0ZXh0LnRvTG93ZXJDYXNlKCkpKXtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBzdWdnZXN0aW9ucyA9IFsuLi5zdWdnZXN0aW9ucywgeyBbYmVycnldOiAnYmVycmllcycgfV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBQb2tlbW9ucy5mb3JFYWNoKHBva2Vtb24gPT4ge1xuICAgICAgICAgICAgaWYocG9rZW1vbi5pbmNsdWRlcyh0ZXh0LnRvTG93ZXJDYXNlKCkpKXtcbiAgICAgICAgICAgICAgICBzdWdnZXN0aW9ucyA9IFsuLi5zdWdnZXN0aW9ucywgeyBbcG9rZW1vbl06ICdwb2tlZGV4JyB9XVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHN1Z2dlc3Rpb25zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIGlmKE9iamVjdC5rZXlzKGEpID4gT2JqZWN0LmtleXMoYikpe1xuICAgICAgICAgICAgICAgIHJldHVybiAxXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBzdWdnZXN0aW9ucy5tYXAoKGRhdGEsIGkpID0+IDxsaSBjbGFzc05hbWU9e3N0eWxlcy5pdGVtfSBrZXk9e2l9IG9uQ2xpY2s9eygpID0+IGF1dG9Db21wbGV0ZShkYXRhKX0+e09iamVjdC5rZXlzKGRhdGEpfTwvbGk+KVxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlciA9IHRleHQgPyByZW5kZXJTdWdnZXN0aW9ucygpIDogbnVsbFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmxpc3R9PlxuICAgICAgICAgICAge3JlbmRlcn1cbiAgICAgICAgPC91bD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN1Z2dlc3Rpb25Cb3giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SearchBar/SuggestionBox.tsx\n");

/***/ })

})