webpackHotUpdate_N_E("pages/pokedex/[id]",{

/***/ "./src/components/Pokemon/Evolution.tsx":
/*!**********************************************!*\
  !*** ./src/components/Pokemon/Evolution.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/karyma/Desktop/Github/Pokemondb/src/components/Pokemon/Evolution.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Evolution = function Evolution(_ref) {\n  _s();\n\n  var evolution_chain = _ref.evolution_chain,\n      pokemon_name = _ref.pokemon_name;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      evolution = _useState[0],\n      setEvolution = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(evolution_chain.url).then(function (res) {\n      console.log(res.data);\n      setEvolution(res.data);\n    });\n  }, []);\n\n  if (evolution) {\n    var evoChain = [];\n    var evoData = evolution.chain;\n    var description = '';\n\n    if (evoData['evolves_to'].length > 1) {\n      // Multiple Evolutions,  EX: eevee\n      evoData['evolves_to'].forEach(function (evoData) {\n        var evoDetails = evoData['evolution_details'][0];\n        evoChain.push({\n          \"species_name\": evoData.species.name,\n          \"min_level\": !evoDetails ? null : evoDetails.min_level,\n          \"min_happiness\": !evoDetails ? null : evoDetails.min_happiness,\n          \"trigger_name\": !evoDetails ? null : evoDetails.trigger.name,\n          \"item\": !evoDetails ? null : evoDetails.item\n        });\n      });\n    } else {\n      // Creates Evolution Chain\n      do {\n        var evoDetails = evoData['evolution_details'][0];\n        evoChain.push({\n          \"species_name\": evoData.species.name,\n          \"min_level\": !evoDetails ? null : evoDetails.min_level,\n          \"min_happiness\": !evoDetails ? null : evoDetails.min_happiness,\n          \"trigger_name\": !evoDetails ? null : evoDetails.trigger.name,\n          \"item\": !evoDetails ? null : evoDetails.item\n        });\n        evoData = evoData['evolves_to'][0];\n      } while (!!evoData && evoData.hasOwnProperty('evolves_to'));\n\n      for (var i = 1; i < evoChain.length; i++) {\n        var condition = '';\n\n        switch (evoChain[i].trigger_name) {\n          case 'level-up':\n            condition = \"at level \".concat(evoChain[i].min_level);\n        }\n\n        description += \"\".concat(evoChain[i - 1].species_name, \" evolves to \").concat(evoChain[i].species_name, \" \").concat(condition, \". \");\n      }\n\n      console.log(description);\n    }\n\n    return __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 13\n      }\n    });\n  } else {\n    return null;\n  }\n};\n\n_s(Evolution, \"02G2/aEGdK8RGngcwPn1qxD0i9o=\");\n\n_c = Evolution;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Evolution);\n\nvar _c;\n\n$RefreshReg$(_c, \"Evolution\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9rZW1vbi9Fdm9sdXRpb24udHN4PzY3ZjQiXSwibmFtZXMiOlsiRXZvbHV0aW9uIiwiZXZvbHV0aW9uX2NoYWluIiwicG9rZW1vbl9uYW1lIiwidXNlU3RhdGUiLCJldm9sdXRpb24iLCJzZXRFdm9sdXRpb24iLCJ1c2VFZmZlY3QiLCJheGlvcyIsImdldCIsInVybCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImV2b0NoYWluIiwiZXZvRGF0YSIsImNoYWluIiwiZGVzY3JpcHRpb24iLCJsZW5ndGgiLCJmb3JFYWNoIiwiZXZvRGV0YWlscyIsInB1c2giLCJzcGVjaWVzIiwibmFtZSIsIm1pbl9sZXZlbCIsIm1pbl9oYXBwaW5lc3MiLCJ0cmlnZ2VyIiwiaXRlbSIsImhhc093blByb3BlcnR5IiwiaSIsImNvbmRpdGlvbiIsInRyaWdnZXJfbmFtZSIsInNwZWNpZXNfbmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBcUM7QUFBQTs7QUFBQSxNQUFuQ0MsZUFBbUMsUUFBbkNBLGVBQW1DO0FBQUEsTUFBbEJDLFlBQWtCLFFBQWxCQSxZQUFrQjs7QUFBQSxrQkFDakJDLHNEQUFRLENBQUMsSUFBRCxDQURTO0FBQUEsTUFDNUNDLFNBRDRDO0FBQUEsTUFDakNDLFlBRGlDOztBQUduREMseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLGdEQUFLLENBQUNDLEdBQU4sQ0FBVVAsZUFBZSxDQUFDUSxHQUExQixFQUNLQyxJQURMLENBQ1UsVUFBQUMsR0FBRyxFQUFJO0FBQ1RDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFHLENBQUNHLElBQWhCO0FBQ0FULGtCQUFZLENBQUNNLEdBQUcsQ0FBQ0csSUFBTCxDQUFaO0FBQ0gsS0FKTDtBQUtILEdBTlEsRUFNTixFQU5NLENBQVQ7O0FBUUEsTUFBR1YsU0FBSCxFQUFjO0FBRVYsUUFBSVcsUUFBUSxHQUFHLEVBQWY7QUFDQSxRQUFJQyxPQUFPLEdBQUdaLFNBQVMsQ0FBQ2EsS0FBeEI7QUFDQSxRQUFJQyxXQUFXLEdBQUcsRUFBbEI7O0FBRUEsUUFBR0YsT0FBTyxDQUFDLFlBQUQsQ0FBUCxDQUFzQkcsTUFBdEIsR0FBK0IsQ0FBbEMsRUFBcUM7QUFFakM7QUFFQUgsYUFBTyxDQUFDLFlBQUQsQ0FBUCxDQUFzQkksT0FBdEIsQ0FBOEIsVUFBQ0osT0FBRCxFQUFhO0FBQ3ZDLFlBQUlLLFVBQVUsR0FBR0wsT0FBTyxDQUFDLG1CQUFELENBQVAsQ0FBNkIsQ0FBN0IsQ0FBakI7QUFFQUQsZ0JBQVEsQ0FBQ08sSUFBVCxDQUFjO0FBQ1YsMEJBQWdCTixPQUFPLENBQUNPLE9BQVIsQ0FBZ0JDLElBRHRCO0FBRVYsdUJBQWEsQ0FBQ0gsVUFBRCxHQUFjLElBQWQsR0FBcUJBLFVBQVUsQ0FBQ0ksU0FGbkM7QUFHViwyQkFBaUIsQ0FBQ0osVUFBRCxHQUFjLElBQWQsR0FBcUJBLFVBQVUsQ0FBQ0ssYUFIdkM7QUFJViwwQkFBZ0IsQ0FBQ0wsVUFBRCxHQUFjLElBQWQsR0FBcUJBLFVBQVUsQ0FBQ00sT0FBWCxDQUFtQkgsSUFKOUM7QUFLVixrQkFBUSxDQUFDSCxVQUFELEdBQWMsSUFBZCxHQUFxQkEsVUFBVSxDQUFDTztBQUw5QixTQUFkO0FBT0gsT0FWRDtBQVlILEtBaEJELE1BZ0JPO0FBRUg7QUFFQSxTQUFHO0FBQ0MsWUFBSVAsVUFBVSxHQUFHTCxPQUFPLENBQUMsbUJBQUQsQ0FBUCxDQUE2QixDQUE3QixDQUFqQjtBQUVBRCxnQkFBUSxDQUFDTyxJQUFULENBQWM7QUFDViwwQkFBZ0JOLE9BQU8sQ0FBQ08sT0FBUixDQUFnQkMsSUFEdEI7QUFFVix1QkFBYSxDQUFDSCxVQUFELEdBQWMsSUFBZCxHQUFxQkEsVUFBVSxDQUFDSSxTQUZuQztBQUdWLDJCQUFpQixDQUFDSixVQUFELEdBQWMsSUFBZCxHQUFxQkEsVUFBVSxDQUFDSyxhQUh2QztBQUlWLDBCQUFnQixDQUFDTCxVQUFELEdBQWMsSUFBZCxHQUFxQkEsVUFBVSxDQUFDTSxPQUFYLENBQW1CSCxJQUo5QztBQUtWLGtCQUFRLENBQUNILFVBQUQsR0FBYyxJQUFkLEdBQXFCQSxVQUFVLENBQUNPO0FBTDlCLFNBQWQ7QUFRQVosZUFBTyxHQUFHQSxPQUFPLENBQUMsWUFBRCxDQUFQLENBQXNCLENBQXRCLENBQVY7QUFFSCxPQWJELFFBYVMsQ0FBQyxDQUFDQSxPQUFGLElBQWFBLE9BQU8sQ0FBQ2EsY0FBUixDQUF1QixZQUF2QixDQWJ0Qjs7QUFlQSxXQUFJLElBQUlDLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBR2YsUUFBUSxDQUFDSSxNQUE1QixFQUFvQ1csQ0FBQyxFQUFyQyxFQUF3QztBQUNwQyxZQUFJQyxTQUFTLEdBQUcsRUFBaEI7O0FBRUEsZ0JBQU9oQixRQUFRLENBQUNlLENBQUQsQ0FBUixDQUFZRSxZQUFuQjtBQUNJLGVBQUssVUFBTDtBQUNJRCxxQkFBUyxzQkFBZWhCLFFBQVEsQ0FBQ2UsQ0FBRCxDQUFSLENBQVlMLFNBQTNCLENBQVQ7QUFGUjs7QUFLQVAsbUJBQVcsY0FBT0gsUUFBUSxDQUFDZSxDQUFDLEdBQUcsQ0FBTCxDQUFSLENBQWdCRyxZQUF2Qix5QkFBa0RsQixRQUFRLENBQUNlLENBQUQsQ0FBUixDQUFZRyxZQUE5RCxjQUE4RUYsU0FBOUUsT0FBWDtBQUNIOztBQUVEbkIsYUFBTyxDQUFDQyxHQUFSLENBQVlLLFdBQVo7QUFDSDs7QUFFRCxXQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESjtBQUtILEdBNURELE1BNERPO0FBQ0gsV0FBTyxJQUFQO0FBQ0g7QUFDSixDQTFFRDs7R0FBTWxCLFM7O0tBQUFBLFM7QUE0RVNBLHdFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUG9rZW1vbi9Fdm9sdXRpb24udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuY29uc3QgRXZvbHV0aW9uID0gKHtldm9sdXRpb25fY2hhaW4sIHBva2Vtb25fbmFtZX0pID0+IHtcbiAgICBjb25zdCBbZXZvbHV0aW9uLCBzZXRFdm9sdXRpb25dID0gdXNlU3RhdGUobnVsbClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGF4aW9zLmdldChldm9sdXRpb25fY2hhaW4udXJsKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcbiAgICAgICAgICAgICAgICBzZXRFdm9sdXRpb24ocmVzLmRhdGEpXG4gICAgICAgICAgICB9KVxuICAgIH0sIFtdKVxuXG4gICAgaWYoZXZvbHV0aW9uKSB7XG5cbiAgICAgICAgbGV0IGV2b0NoYWluID0gW107XG4gICAgICAgIGxldCBldm9EYXRhID0gZXZvbHV0aW9uLmNoYWluO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSAnJ1xuXG4gICAgICAgIGlmKGV2b0RhdGFbJ2V2b2x2ZXNfdG8nXS5sZW5ndGggPiAxKSB7XG5cbiAgICAgICAgICAgIC8vIE11bHRpcGxlIEV2b2x1dGlvbnMsICBFWDogZWV2ZWVcblxuICAgICAgICAgICAgZXZvRGF0YVsnZXZvbHZlc190byddLmZvckVhY2goKGV2b0RhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZXZvRGV0YWlscyA9IGV2b0RhdGFbJ2V2b2x1dGlvbl9kZXRhaWxzJ11bMF1cblxuICAgICAgICAgICAgICAgIGV2b0NoYWluLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBcInNwZWNpZXNfbmFtZVwiOiBldm9EYXRhLnNwZWNpZXMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgXCJtaW5fbGV2ZWxcIjogIWV2b0RldGFpbHMgPyBudWxsIDogZXZvRGV0YWlscy5taW5fbGV2ZWwsXG4gICAgICAgICAgICAgICAgICAgIFwibWluX2hhcHBpbmVzc1wiOiAhZXZvRGV0YWlscyA/IG51bGwgOiBldm9EZXRhaWxzLm1pbl9oYXBwaW5lc3MsXG4gICAgICAgICAgICAgICAgICAgIFwidHJpZ2dlcl9uYW1lXCI6ICFldm9EZXRhaWxzID8gbnVsbCA6IGV2b0RldGFpbHMudHJpZ2dlci5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBcIml0ZW1cIjogIWV2b0RldGFpbHMgPyBudWxsIDogZXZvRGV0YWlscy5pdGVtXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlcyBFdm9sdXRpb24gQ2hhaW5cblxuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGxldCBldm9EZXRhaWxzID0gZXZvRGF0YVsnZXZvbHV0aW9uX2RldGFpbHMnXVswXVxuICAgIFxuICAgICAgICAgICAgICAgIGV2b0NoYWluLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBcInNwZWNpZXNfbmFtZVwiOiBldm9EYXRhLnNwZWNpZXMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgXCJtaW5fbGV2ZWxcIjogIWV2b0RldGFpbHMgPyBudWxsIDogZXZvRGV0YWlscy5taW5fbGV2ZWwsXG4gICAgICAgICAgICAgICAgICAgIFwibWluX2hhcHBpbmVzc1wiOiAhZXZvRGV0YWlscyA/IG51bGwgOiBldm9EZXRhaWxzLm1pbl9oYXBwaW5lc3MsXG4gICAgICAgICAgICAgICAgICAgIFwidHJpZ2dlcl9uYW1lXCI6ICFldm9EZXRhaWxzID8gbnVsbCA6IGV2b0RldGFpbHMudHJpZ2dlci5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBcIml0ZW1cIjogIWV2b0RldGFpbHMgPyBudWxsIDogZXZvRGV0YWlscy5pdGVtXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgXG4gICAgICAgICAgICAgICAgZXZvRGF0YSA9IGV2b0RhdGFbJ2V2b2x2ZXNfdG8nXVswXVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSB3aGlsZSAoISFldm9EYXRhICYmIGV2b0RhdGEuaGFzT3duUHJvcGVydHkoJ2V2b2x2ZXNfdG8nKSlcblxuICAgICAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8IGV2b0NoYWluLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBsZXQgY29uZGl0aW9uID0gJydcblxuICAgICAgICAgICAgICAgIHN3aXRjaChldm9DaGFpbltpXS50cmlnZ2VyX25hbWUpe1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdsZXZlbC11cCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb24gPSBgYXQgbGV2ZWwgJHtldm9DaGFpbltpXS5taW5fbGV2ZWx9YFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uICs9IGAke2V2b0NoYWluW2kgLSAxXS5zcGVjaWVzX25hbWV9IGV2b2x2ZXMgdG8gJHtldm9DaGFpbltpXS5zcGVjaWVzX25hbWV9ICR7Y29uZGl0aW9ufS4gYFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkZXNjcmlwdGlvbilcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdm9sdXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Pokemon/Evolution.tsx\n");

/***/ })

})