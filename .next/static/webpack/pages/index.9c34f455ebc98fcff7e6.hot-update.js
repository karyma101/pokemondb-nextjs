webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/SearchBar/SuggestionBox.tsx":
/*!****************************************************!*\
  !*** ./src/components/SearchBar/SuggestionBox.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_data_Pokemons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/data/Pokemons */ \"./src/assets/data/Pokemons.tsx\");\n/* harmony import */ var _assets_data_Berries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/data/Berries */ \"./src/assets/data/Berries.tsx\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/karyma/Desktop/Github/Pokemondb/src/components/SearchBar/SuggestionBox.tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\nvar SuggestionBox = function SuggestionBox(_ref) {\n  var text = _ref.text,\n      autoComplete = _ref.autoComplete;\n\n  var renderSuggestions = function renderSuggestions() {\n    var suggestions = [];\n    _assets_data_Pokemons__WEBPACK_IMPORTED_MODULE_3__[\"default\"].forEach(function (pokemon) {\n      if (pokemon.includes(text.toLowerCase())) {\n        suggestions = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(suggestions), [Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, pokemon, 'pokedex')]);\n      }\n    });\n    _assets_data_Berries__WEBPACK_IMPORTED_MODULE_4__[\"default\"].forEach(function (berry) {\n      if (berry.includes(text.toLowerCase())) {\n        suggestions = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(suggestions), [Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, berry, 'berries')]);\n      }\n    });\n\n    function sortByKey(array, key) {\n      return array.sort(function (a, b) {\n        var x = a[key];\n        var y = b[key];\n        return x < y ? -1 : x > y ? 1 : 0;\n      });\n    }\n\n    suggestions.sort(function (a, b) {\n      if (Object.keys(a) > Object.keys(b)) {\n        return 1;\n      } else {\n        return -1;\n      }\n    });\n    console.log(suggestions);\n    return null; // return filteredSuggestions.map((data, i) => <li key={i} onClick={() => autoComplete(data)}>{data}</li>)\n  }; // const render = text ? renderSuggestions() : null\n\n\n  return __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }, renderSuggestions());\n};\n\n_c = SuggestionBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SuggestionBox);\n\nvar _c;\n\n$RefreshReg$(_c, \"SuggestionBox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyL1N1Z2dlc3Rpb25Cb3gudHN4Pzg1NWIiXSwibmFtZXMiOlsiU3VnZ2VzdGlvbkJveCIsInRleHQiLCJhdXRvQ29tcGxldGUiLCJyZW5kZXJTdWdnZXN0aW9ucyIsInN1Z2dlc3Rpb25zIiwiUG9rZW1vbnMiLCJmb3JFYWNoIiwicG9rZW1vbiIsImluY2x1ZGVzIiwidG9Mb3dlckNhc2UiLCJCZXJyaWVzIiwiYmVycnkiLCJzb3J0QnlLZXkiLCJhcnJheSIsImtleSIsInNvcnQiLCJhIiwiYiIsIngiLCJ5IiwiT2JqZWN0Iiwia2V5cyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUEwQjtBQUFBLE1BQXhCQyxJQUF3QixRQUF4QkEsSUFBd0I7QUFBQSxNQUFsQkMsWUFBa0IsUUFBbEJBLFlBQWtCOztBQUM1QyxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDNUIsUUFBSUMsV0FBVyxHQUFHLEVBQWxCO0FBRUFDLGlFQUFRLENBQUNDLE9BQVQsQ0FBaUIsVUFBQUMsT0FBTyxFQUFJO0FBQ3hCLFVBQUdBLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQlAsSUFBSSxDQUFDUSxXQUFMLEVBQWpCLENBQUgsRUFBd0M7QUFDcENMLG1CQUFXLDBHQUFPQSxXQUFQLGtHQUF1QkcsT0FBdkIsRUFBaUMsU0FBakMsR0FBWDtBQUNIO0FBQ0osS0FKRDtBQU1BRyxnRUFBTyxDQUFDSixPQUFSLENBQWdCLFVBQUFLLEtBQUssRUFBSTtBQUNyQixVQUFHQSxLQUFLLENBQUNILFFBQU4sQ0FBZVAsSUFBSSxDQUFDUSxXQUFMLEVBQWYsQ0FBSCxFQUFzQztBQUNsQ0wsbUJBQVcsMEdBQU9BLFdBQVAsa0dBQXVCTyxLQUF2QixFQUErQixTQUEvQixHQUFYO0FBQ0g7QUFDSixLQUpEOztBQU1BLGFBQVNDLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCQyxHQUExQixFQUErQjtBQUMzQixhQUFPRCxLQUFLLENBQUNFLElBQU4sQ0FBVyxVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUMxQixZQUFJQyxDQUFDLEdBQUdGLENBQUMsQ0FBQ0YsR0FBRCxDQUFUO0FBQ0EsWUFBSUssQ0FBQyxHQUFHRixDQUFDLENBQUNILEdBQUQsQ0FBVDtBQUVBLGVBQVNJLENBQUMsR0FBR0MsQ0FBTCxHQUFVLENBQUMsQ0FBWCxHQUFpQkQsQ0FBQyxHQUFHQyxDQUFMLEdBQVUsQ0FBVixHQUFjLENBQXRDO0FBQ0QsT0FMTSxDQUFQO0FBTUg7O0FBRURmLGVBQVcsQ0FBQ1csSUFBWixDQUFpQixVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUN2QixVQUFHRyxNQUFNLENBQUNDLElBQVAsQ0FBWUwsQ0FBWixJQUFpQkksTUFBTSxDQUFDQyxJQUFQLENBQVlKLENBQVosQ0FBcEIsRUFBbUM7QUFDL0IsZUFBTyxDQUFQO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsZUFBTyxDQUFDLENBQVI7QUFDSDtBQUNKLEtBTkQ7QUFRQUssV0FBTyxDQUFDQyxHQUFSLENBQVluQixXQUFaO0FBRUEsV0FBTyxJQUFQLENBbEM0QixDQW1DNUI7QUFDSCxHQXBDRCxDQUQ0QyxDQXNDNUM7OztBQUdBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLRCxpQkFBaUIsRUFEdEIsQ0FESjtBQUtILENBOUNEOztLQUFNSCxhO0FBZ0RTQSw0RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci9TdWdnZXN0aW9uQm94LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQb2tlbW9ucyBmcm9tICcuLi8uLi9hc3NldHMvZGF0YS9Qb2tlbW9ucydcbmltcG9ydCBCZXJyaWVzIGZyb20gJy4uLy4uL2Fzc2V0cy9kYXRhL0JlcnJpZXMnXG5cbmNvbnN0IFN1Z2dlc3Rpb25Cb3ggPSAoe3RleHQsIGF1dG9Db21wbGV0ZX0pID0+IHtcbiAgICBjb25zdCByZW5kZXJTdWdnZXN0aW9ucyA9ICgpID0+IHtcbiAgICAgICAgbGV0IHN1Z2dlc3Rpb25zID0gW11cblxuICAgICAgICBQb2tlbW9ucy5mb3JFYWNoKHBva2Vtb24gPT4ge1xuICAgICAgICAgICAgaWYocG9rZW1vbi5pbmNsdWRlcyh0ZXh0LnRvTG93ZXJDYXNlKCkpKXtcbiAgICAgICAgICAgICAgICBzdWdnZXN0aW9ucyA9IFsuLi5zdWdnZXN0aW9ucywgeyBbcG9rZW1vbl06ICdwb2tlZGV4JyB9XVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIEJlcnJpZXMuZm9yRWFjaChiZXJyeSA9PiB7XG4gICAgICAgICAgICBpZihiZXJyeS5pbmNsdWRlcyh0ZXh0LnRvTG93ZXJDYXNlKCkpKXtcbiAgICAgICAgICAgICAgICBzdWdnZXN0aW9ucyA9IFsuLi5zdWdnZXN0aW9ucywgeyBbYmVycnldOiAnYmVycmllcycgfV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBmdW5jdGlvbiBzb3J0QnlLZXkoYXJyYXksIGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGFycmF5LnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgbGV0IHggPSBhW2tleV07XG4gICAgICAgICAgICAgIGxldCB5ID0gYltrZXldO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgcmV0dXJuICgoeCA8IHkpID8gLTEgOiAoKHggPiB5KSA/IDEgOiAwKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1Z2dlc3Rpb25zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIGlmKE9iamVjdC5rZXlzKGEpID4gT2JqZWN0LmtleXMoYikpe1xuICAgICAgICAgICAgICAgIHJldHVybiAxXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnNvbGUubG9nKHN1Z2dlc3Rpb25zKVxuXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIC8vIHJldHVybiBmaWx0ZXJlZFN1Z2dlc3Rpb25zLm1hcCgoZGF0YSwgaSkgPT4gPGxpIGtleT17aX0gb25DbGljaz17KCkgPT4gYXV0b0NvbXBsZXRlKGRhdGEpfT57ZGF0YX08L2xpPilcbiAgICB9XG4gICAgLy8gY29uc3QgcmVuZGVyID0gdGV4dCA/IHJlbmRlclN1Z2dlc3Rpb25zKCkgOiBudWxsXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtyZW5kZXJTdWdnZXN0aW9ucygpfVxuICAgICAgICA8L3VsPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3VnZ2VzdGlvbkJveCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SearchBar/SuggestionBox.tsx\n");

/***/ })

})