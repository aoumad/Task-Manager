"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"a7a4a7ecf1a3\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/YmFmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImE3YTRhN2VjZjFhM1wiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/context/GlobalProvider.js":
/*!*******************************************!*\
  !*** ./src/app/context/GlobalProvider.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GlobalContext: function() { return /* binding */ GlobalContext; },\n/* harmony export */   GlobalProvider: function() { return /* binding */ GlobalProvider; },\n/* harmony export */   GlobalUpdateContext: function() { return /* binding */ GlobalUpdateContext; },\n/* harmony export */   useGlobalState: function() { return /* binding */ useGlobalState; },\n/* harmony export */   useGlobalUpdate: function() { return /* binding */ useGlobalUpdate; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./themes */ \"(app-pages-browser)/./src/app/context/themes.js\");\n/* __next_internal_client_entry_do_not_use__ GlobalContext,GlobalUpdateContext,GlobalProvider,useGlobalState,useGlobalUpdate auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n\n\nconst GlobalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst GlobalUpdateContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst GlobalProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [selectedTheme, setSelectedTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const theme = _themes__WEBPACK_IMPORTED_MODULE_2__[\"default\"][selectedTheme];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalContext.Provider, {\n        value: {\n            theme\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalUpdateContext.Provider, {\n            value: {},\n            children: children\n        }, void 0, false, {\n            fileName: \"/home/abderazzak/Desktop/Task-manager/src/app/context/GlobalProvider.js\",\n            lineNumber: 14,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/abderazzak/Desktop/Task-manager/src/app/context/GlobalProvider.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, undefined);\n};\n_s(GlobalProvider, \"RH/eVJCzrA3/Kxq/ZR8Vk9QXEvY=\");\n_c = GlobalProvider;\nconst useGlobalState = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(GlobalContext);\n};\n_s1(useGlobalState, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nconst useGlobalUpdate = ()=>{\n    _s2();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(GlobalUpdateContext);\n};\n_s2(useGlobalUpdate, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"GlobalProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29udGV4dC9HbG9iYWxQcm92aWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVrRTtBQUNwQztBQUV2QixNQUFNSyw4QkFBZ0JKLG9EQUFhQSxHQUFHO0FBQ3RDLE1BQU1LLG9DQUFzQkwsb0RBQWFBLEdBQUc7QUFFNUMsTUFBTU0saUJBQWlCO1FBQUMsRUFBQ0MsUUFBUSxFQUFDOztJQUNyQyxNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHUiwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNUyxRQUFRUCwrQ0FBTSxDQUFDSyxjQUFjO0lBQ25DLHFCQUNJLDhEQUFDSixjQUFjTyxRQUFRO1FBQUNDLE9BQU87WUFBQ0Y7UUFBTTtrQkFDbEMsNEVBQUNMLG9CQUFvQk0sUUFBUTtZQUFDQyxPQUFPLENBQUU7c0JBQ2xDTDs7Ozs7Ozs7Ozs7QUFJakIsRUFBQztHQVZZRDtLQUFBQTtBQVlOLE1BQU1PLGlCQUFpQjs7SUFBTVgsT0FBQUEsaURBQVVBLENBQUNFO0FBQWEsRUFBRTtJQUFqRFM7QUFDTixNQUFNQyxrQkFBa0I7O0lBQU1aLE9BQUFBLGlEQUFVQSxDQUFDRztBQUFtQixFQUFFO0lBQXhEUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbnRleHQvR2xvYmFsUHJvdmlkZXIuanM/YWU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHRoZW1lcyBmcm9tICcuL3RoZW1lcyc7XG5cbmV4cG9ydCBjb25zdCBHbG9iYWxDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuZXhwb3J0IGNvbnN0IEdsb2JhbFVwZGF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBjb25zdCBHbG9iYWxQcm92aWRlciA9ICh7Y2hpbGRyZW59KSA9PiB7XG4gICAgY29uc3QgW3NlbGVjdGVkVGhlbWUsIHNldFNlbGVjdGVkVGhlbWVdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgdGhlbWUgPSB0aGVtZXNbc2VsZWN0ZWRUaGVtZV07XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEdsb2JhbENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3t0aGVtZSx9fT5cbiAgICAgICAgICAgIDxHbG9iYWxVcGRhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IH19PlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvR2xvYmFsVXBkYXRlQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgPC9HbG9iYWxDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGNvbnN0IHVzZUdsb2JhbFN0YXRlID0gKCkgPT4gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcbmV4cG9ydCBjb25zdCB1c2VHbG9iYWxVcGRhdGUgPSAoKSA9PiB1c2VDb250ZXh0KEdsb2JhbFVwZGF0ZUNvbnRleHQpOyJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJ0aGVtZXMiLCJHbG9iYWxDb250ZXh0IiwiR2xvYmFsVXBkYXRlQ29udGV4dCIsIkdsb2JhbFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzZWxlY3RlZFRoZW1lIiwic2V0U2VsZWN0ZWRUaGVtZSIsInRoZW1lIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUdsb2JhbFN0YXRlIiwidXNlR2xvYmFsVXBkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/context/GlobalProvider.js\n"));

/***/ })

});