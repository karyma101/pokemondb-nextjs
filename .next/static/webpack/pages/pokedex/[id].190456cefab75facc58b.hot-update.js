webpackHotUpdate_N_E("pages/pokedex/[id]",{

/***/ "./src/components/Pokemon/Evolution.tsx":
/*!**********************************************!*\
  !*** ./src/components/Pokemon/Evolution.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/karyma/Desktop/Github/Pokemondb/src/components/Pokemon/Evolution.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Evolution = function Evolution(_ref) {\n  _s();\n\n  var evolution_chain = _ref.evolution_chain,\n      pokemon_name = _ref.pokemon_name;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      evolution = _useState[0],\n      setEvolution = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(evolution_chain.url).then(function (res) {\n      console.log(res.data);\n      setEvolution(res.data);\n    });\n  }, []);\n\n  if (evolution) {\n    var evoChain = [];\n    var evoData = evolution.chain;\n\n    if (evoData['evolves_to'].length > 1) {\n      // Multiple Evolutions,  EX: eevee\n      evoData['evolves_to'].forEach(function (evoData) {\n        var evoDetails = evoData['evolution_details'][0];\n        evoChain.push({\n          \"species_name\": evoData.species.name,\n          \"min_level\": !evoDetails ? null : evoDetails.min_level,\n          \"min_happiness\": !evoDetails ? null : evoDetails.min_happiness,\n          \"trigger_name\": !evoDetails ? null : evoDetails.trigger.name,\n          \"item\": !evoDetails ? null : evoDetails.item\n        });\n      });\n    } else {\n      // Creates Evolution Chain\n      do {\n        var evoDetails = evoData['evolution_details'][0];\n        evoChain.push({\n          \"species_name\": evoData.species.name,\n          \"min_level\": !evoDetails ? null : evoDetails.min_level,\n          \"min_happiness\": !evoDetails ? null : evoDetails.min_happiness,\n          \"trigger_name\": !evoDetails ? null : evoDetails.trigger.name,\n          \"item\": !evoDetails ? null : evoDetails.item\n        });\n        evoData = evoData['evolves_to'][0];\n      } while (!!evoData && evoData.hasOwnProperty('evolves_to'));\n\n      for (var i = 0; i < evoChain.length; i++) {\n        console.log(i);\n      }\n    }\n\n    return __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 13\n      }\n    });\n  } else {\n    return null;\n  }\n};\n\n_s(Evolution, \"02G2/aEGdK8RGngcwPn1qxD0i9o=\");\n\n_c = Evolution;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Evolution);\n\nvar _c;\n\n$RefreshReg$(_c, \"Evolution\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9rZW1vbi9Fdm9sdXRpb24udHN4PzY3ZjQiXSwibmFtZXMiOlsiRXZvbHV0aW9uIiwiZXZvbHV0aW9uX2NoYWluIiwicG9rZW1vbl9uYW1lIiwidXNlU3RhdGUiLCJldm9sdXRpb24iLCJzZXRFdm9sdXRpb24iLCJ1c2VFZmZlY3QiLCJheGlvcyIsImdldCIsInVybCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImV2b0NoYWluIiwiZXZvRGF0YSIsImNoYWluIiwibGVuZ3RoIiwiZm9yRWFjaCIsImV2b0RldGFpbHMiLCJwdXNoIiwic3BlY2llcyIsIm5hbWUiLCJtaW5fbGV2ZWwiLCJtaW5faGFwcGluZXNzIiwidHJpZ2dlciIsIml0ZW0iLCJoYXNPd25Qcm9wZXJ0eSIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQXFDO0FBQUE7O0FBQUEsTUFBbkNDLGVBQW1DLFFBQW5DQSxlQUFtQztBQUFBLE1BQWxCQyxZQUFrQixRQUFsQkEsWUFBa0I7O0FBQUEsa0JBQ2pCQyxzREFBUSxDQUFDLElBQUQsQ0FEUztBQUFBLE1BQzVDQyxTQUQ0QztBQUFBLE1BQ2pDQyxZQURpQzs7QUFHbkRDLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxnREFBSyxDQUFDQyxHQUFOLENBQVVQLGVBQWUsQ0FBQ1EsR0FBMUIsRUFDS0MsSUFETCxDQUNVLFVBQUFDLEdBQUcsRUFBSTtBQUNUQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBRyxDQUFDRyxJQUFoQjtBQUNBVCxrQkFBWSxDQUFDTSxHQUFHLENBQUNHLElBQUwsQ0FBWjtBQUNILEtBSkw7QUFLSCxHQU5RLEVBTU4sRUFOTSxDQUFUOztBQVFBLE1BQUdWLFNBQUgsRUFBYztBQUVWLFFBQUlXLFFBQVEsR0FBRyxFQUFmO0FBQ0EsUUFBSUMsT0FBTyxHQUFHWixTQUFTLENBQUNhLEtBQXhCOztBQUVBLFFBQUdELE9BQU8sQ0FBQyxZQUFELENBQVAsQ0FBc0JFLE1BQXRCLEdBQStCLENBQWxDLEVBQXFDO0FBRWpDO0FBRUFGLGFBQU8sQ0FBQyxZQUFELENBQVAsQ0FBc0JHLE9BQXRCLENBQThCLFVBQUNILE9BQUQsRUFBYTtBQUN2QyxZQUFJSSxVQUFVLEdBQUdKLE9BQU8sQ0FBQyxtQkFBRCxDQUFQLENBQTZCLENBQTdCLENBQWpCO0FBRUFELGdCQUFRLENBQUNNLElBQVQsQ0FBYztBQUNWLDBCQUFnQkwsT0FBTyxDQUFDTSxPQUFSLENBQWdCQyxJQUR0QjtBQUVWLHVCQUFhLENBQUNILFVBQUQsR0FBYyxJQUFkLEdBQXFCQSxVQUFVLENBQUNJLFNBRm5DO0FBR1YsMkJBQWlCLENBQUNKLFVBQUQsR0FBYyxJQUFkLEdBQXFCQSxVQUFVLENBQUNLLGFBSHZDO0FBSVYsMEJBQWdCLENBQUNMLFVBQUQsR0FBYyxJQUFkLEdBQXFCQSxVQUFVLENBQUNNLE9BQVgsQ0FBbUJILElBSjlDO0FBS1Ysa0JBQVEsQ0FBQ0gsVUFBRCxHQUFjLElBQWQsR0FBcUJBLFVBQVUsQ0FBQ087QUFMOUIsU0FBZDtBQU9ILE9BVkQ7QUFZSCxLQWhCRCxNQWdCTztBQUVIO0FBRUEsU0FBRztBQUNDLFlBQUlQLFVBQVUsR0FBR0osT0FBTyxDQUFDLG1CQUFELENBQVAsQ0FBNkIsQ0FBN0IsQ0FBakI7QUFFQUQsZ0JBQVEsQ0FBQ00sSUFBVCxDQUFjO0FBQ1YsMEJBQWdCTCxPQUFPLENBQUNNLE9BQVIsQ0FBZ0JDLElBRHRCO0FBRVYsdUJBQWEsQ0FBQ0gsVUFBRCxHQUFjLElBQWQsR0FBcUJBLFVBQVUsQ0FBQ0ksU0FGbkM7QUFHViwyQkFBaUIsQ0FBQ0osVUFBRCxHQUFjLElBQWQsR0FBcUJBLFVBQVUsQ0FBQ0ssYUFIdkM7QUFJViwwQkFBZ0IsQ0FBQ0wsVUFBRCxHQUFjLElBQWQsR0FBcUJBLFVBQVUsQ0FBQ00sT0FBWCxDQUFtQkgsSUFKOUM7QUFLVixrQkFBUSxDQUFDSCxVQUFELEdBQWMsSUFBZCxHQUFxQkEsVUFBVSxDQUFDTztBQUw5QixTQUFkO0FBUUFYLGVBQU8sR0FBR0EsT0FBTyxDQUFDLFlBQUQsQ0FBUCxDQUFzQixDQUF0QixDQUFWO0FBRUgsT0FiRCxRQWFTLENBQUMsQ0FBQ0EsT0FBRixJQUFhQSxPQUFPLENBQUNZLGNBQVIsQ0FBdUIsWUFBdkIsQ0FidEI7O0FBZUEsV0FBSSxJQUFJQyxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUdkLFFBQVEsQ0FBQ0csTUFBNUIsRUFBb0NXLENBQUMsRUFBckMsRUFBd0M7QUFDcENqQixlQUFPLENBQUNDLEdBQVIsQ0FBWWdCLENBQVo7QUFDSDtBQUVKOztBQUVELFdBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKO0FBS0gsR0FuREQsTUFtRE87QUFDSCxXQUFPLElBQVA7QUFDSDtBQUNKLENBakVEOztHQUFNN0IsUzs7S0FBQUEsUztBQW1FU0Esd0VBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qb2tlbW9uL0V2b2x1dGlvbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5jb25zdCBFdm9sdXRpb24gPSAoe2V2b2x1dGlvbl9jaGFpbiwgcG9rZW1vbl9uYW1lfSkgPT4ge1xuICAgIGNvbnN0IFtldm9sdXRpb24sIHNldEV2b2x1dGlvbl0gPSB1c2VTdGF0ZShudWxsKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXhpb3MuZ2V0KGV2b2x1dGlvbl9jaGFpbi51cmwpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxuICAgICAgICAgICAgICAgIHNldEV2b2x1dGlvbihyZXMuZGF0YSlcbiAgICAgICAgICAgIH0pXG4gICAgfSwgW10pXG5cbiAgICBpZihldm9sdXRpb24pIHtcblxuICAgICAgICBsZXQgZXZvQ2hhaW4gPSBbXTtcbiAgICAgICAgbGV0IGV2b0RhdGEgPSBldm9sdXRpb24uY2hhaW47XG5cbiAgICAgICAgaWYoZXZvRGF0YVsnZXZvbHZlc190byddLmxlbmd0aCA+IDEpIHtcblxuICAgICAgICAgICAgLy8gTXVsdGlwbGUgRXZvbHV0aW9ucywgIEVYOiBlZXZlZVxuXG4gICAgICAgICAgICBldm9EYXRhWydldm9sdmVzX3RvJ10uZm9yRWFjaCgoZXZvRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBldm9EZXRhaWxzID0gZXZvRGF0YVsnZXZvbHV0aW9uX2RldGFpbHMnXVswXVxuXG4gICAgICAgICAgICAgICAgZXZvQ2hhaW4ucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIFwic3BlY2llc19uYW1lXCI6IGV2b0RhdGEuc3BlY2llcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBcIm1pbl9sZXZlbFwiOiAhZXZvRGV0YWlscyA/IG51bGwgOiBldm9EZXRhaWxzLm1pbl9sZXZlbCxcbiAgICAgICAgICAgICAgICAgICAgXCJtaW5faGFwcGluZXNzXCI6ICFldm9EZXRhaWxzID8gbnVsbCA6IGV2b0RldGFpbHMubWluX2hhcHBpbmVzcyxcbiAgICAgICAgICAgICAgICAgICAgXCJ0cmlnZ2VyX25hbWVcIjogIWV2b0RldGFpbHMgPyBudWxsIDogZXZvRGV0YWlscy50cmlnZ2VyLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIFwiaXRlbVwiOiAhZXZvRGV0YWlscyA/IG51bGwgOiBldm9EZXRhaWxzLml0ZW1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAvLyBDcmVhdGVzIEV2b2x1dGlvbiBDaGFpblxuXG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgbGV0IGV2b0RldGFpbHMgPSBldm9EYXRhWydldm9sdXRpb25fZGV0YWlscyddWzBdXG4gICAgXG4gICAgICAgICAgICAgICAgZXZvQ2hhaW4ucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIFwic3BlY2llc19uYW1lXCI6IGV2b0RhdGEuc3BlY2llcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBcIm1pbl9sZXZlbFwiOiAhZXZvRGV0YWlscyA/IG51bGwgOiBldm9EZXRhaWxzLm1pbl9sZXZlbCxcbiAgICAgICAgICAgICAgICAgICAgXCJtaW5faGFwcGluZXNzXCI6ICFldm9EZXRhaWxzID8gbnVsbCA6IGV2b0RldGFpbHMubWluX2hhcHBpbmVzcyxcbiAgICAgICAgICAgICAgICAgICAgXCJ0cmlnZ2VyX25hbWVcIjogIWV2b0RldGFpbHMgPyBudWxsIDogZXZvRGV0YWlscy50cmlnZ2VyLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIFwiaXRlbVwiOiAhZXZvRGV0YWlscyA/IG51bGwgOiBldm9EZXRhaWxzLml0ZW1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICBcbiAgICAgICAgICAgICAgICBldm9EYXRhID0gZXZvRGF0YVsnZXZvbHZlc190byddWzBdXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IHdoaWxlICghIWV2b0RhdGEgJiYgZXZvRGF0YS5oYXNPd25Qcm9wZXJ0eSgnZXZvbHZlc190bycpKVxuXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZXZvQ2hhaW4ubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGkpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdm9sdXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Pokemon/Evolution.tsx\n");

/***/ })

})