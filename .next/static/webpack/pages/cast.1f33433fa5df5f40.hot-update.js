"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/cast",{

/***/ "./src/components/CharContainer.tsx":
/*!******************************************!*\
  !*** ./src/components/CharContainer.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CharContainer\": function() { return /* binding */ CharContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ \"./src/components/index.tsx\");\n/* harmony import */ var _hooks_FuturamaData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/FuturamaData */ \"./src/hooks/FuturamaData.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar CharContainer = function() {\n    var _this1 = _this;\n    _s();\n    var name1 = 'characters';\n    var ref = (0,_hooks_FuturamaData__WEBPACK_IMPORTED_MODULE_2__.useData)(name1), data = ref.data, error = ref.error;\n    if (error) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Error, {\n        __source: {\n            fileName: \"/Users/hanheejeong/Futurama.com/src/components/CharContainer.tsx\",\n            lineNumber: 11,\n            columnNumber: 21\n        },\n        __self: _this\n    }));\n    if (!data) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Loading, {\n        __source: {\n            fileName: \"/Users/hanheejeong/Futurama.com/src/components/CharContainer.tsx\",\n            lineNumber: 12,\n            columnNumber: 21\n        },\n        __self: _this\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"main\", {\n        __source: {\n            fileName: \"/Users/hanheejeong/Futurama.com/src/components/CharContainer.tsx\",\n            lineNumber: 15,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                __source: {\n                    fileName: \"/Users/hanheejeong/Futurama.com/src/components/CharContainer.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: name1\n            }),\n            data.map(function(charData) {\n                var images = charData.images, name = charData.name, sayings = charData.sayings, gender = charData.gender, species = charData.species, age = charData.age, id = charData.id;\n                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"li\", {\n                    __source: {\n                        fileName: \"/Users/hanheejeong/Futurama.com/src/components/CharContainer.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 13\n                    },\n                    __self: _this1,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h3\", {\n                            __source: {\n                                fileName: \"/Users/hanheejeong/Futurama.com/src/components/CharContainer.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 15\n                            },\n                            __self: _this1,\n                            children: [\n                                name.first,\n                                \" \",\n                                name.middle,\n                                \" \",\n                                name.last\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                            src: images.main,\n                            alt: name.first,\n                            __source: {\n                                fileName: \"/Users/hanheejeong/Futurama.com/src/components/CharContainer.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 17\n                            },\n                            __self: _this1\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"strong\", {\n                            __source: {\n                                fileName: \"/Users/hanheejeong/Futurama.com/src/components/CharContainer.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 17\n                            },\n                            __self: _this1,\n                            children: sayings[0]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"dl\", {\n                            __source: {\n                                fileName: \"/Users/hanheejeong/Futurama.com/src/components/CharContainer.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 15\n                            },\n                            __self: _this1,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                    __source: {\n                                        fileName: \"/Users/hanheejeong/Futurama.com/src/components/CharContainer.tsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 17\n                                    },\n                                    __self: _this1,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"dt\", {\n                                            __source: {\n                                                fileName: \"/Users/hanheejeong/Futurama.com/src/components/CharContainer.tsx\",\n                                                lineNumber: 29,\n                                                columnNumber: 19\n                                            },\n                                            __self: _this1,\n                                            children: \"gender\"\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"dd\", {\n                                            __source: {\n                                                fileName: \"/Users/hanheejeong/Futurama.com/src/components/CharContainer.tsx\",\n                                                lineNumber: 30,\n                                                columnNumber: 19\n                                            },\n                                            __self: _this1,\n                                            children: gender\n                                        })\n                                    ]\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                    __source: {\n                                        fileName: \"/Users/hanheejeong/Futurama.com/src/components/CharContainer.tsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 17\n                                    },\n                                    __self: _this1,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"dt\", {\n                                            __source: {\n                                                fileName: \"/Users/hanheejeong/Futurama.com/src/components/CharContainer.tsx\",\n                                                lineNumber: 33,\n                                                columnNumber: 19\n                                            },\n                                            __self: _this1,\n                                            children: \"species\"\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"dd\", {\n                                            __source: {\n                                                fileName: \"/Users/hanheejeong/Futurama.com/src/components/CharContainer.tsx\",\n                                                lineNumber: 34,\n                                                columnNumber: 19\n                                            },\n                                            __self: _this1,\n                                            children: species\n                                        })\n                                    ]\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                    __source: {\n                                        fileName: \"/Users/hanheejeong/Futurama.com/src/components/CharContainer.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 17\n                                    },\n                                    __self: _this1,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"dt\", {\n                                            __source: {\n                                                fileName: \"/Users/hanheejeong/Futurama.com/src/components/CharContainer.tsx\",\n                                                lineNumber: 37,\n                                                columnNumber: 19\n                                            },\n                                            __self: _this1,\n                                            children: \"age\"\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"dd\", {\n                                            __source: {\n                                                fileName: \"/Users/hanheejeong/Futurama.com/src/components/CharContainer.tsx\",\n                                                lineNumber: 38,\n                                                columnNumber: 19\n                                            },\n                                            __self: _this1,\n                                            children: age\n                                        })\n                                    ]\n                                })\n                            ]\n                        })\n                    ]\n                }, \"futurama-character-\".concat(id)));\n            })\n        ]\n    }));\n};\n_s(CharContainer, \"g0NOcHyinTgx7ciJxFf4jm7QwwU=\", false, function() {\n    return [\n        _hooks_FuturamaData__WEBPACK_IMPORTED_MODULE_2__.useData\n    ];\n});\n_c = CharContainer;\nvar _c;\n$RefreshReg$(_c, \"CharContainer\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGFyQ29udGFpbmVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWtDO0FBQ2E7OztBQUt4QyxHQUFLLENBQUNHLGFBQWEsR0FBRyxRQUM3QixHQURtQyxDQUFDOzs7SUFDbEMsR0FBSyxDQUFDQyxLQUFJLEdBQUcsQ0FBWTtJQUN6QixHQUFLLENBQW1CRixHQUFhLEdBQWJBLDREQUFPLENBQUNFLEtBQUksR0FBNUJDLElBQUksR0FBWUgsR0FBYSxDQUE3QkcsSUFBSSxFQUFFQyxLQUFLLEdBQUtKLEdBQWEsQ0FBdkJJLEtBQUs7SUFFbkIsRUFBRSxFQUFFQSxLQUFLLEVBQUUsTUFBTSxzRUFBRU4sb0NBQUs7Ozs7Ozs7O0lBQ3hCLEVBQUUsR0FBR0ssSUFBSSxFQUFFLE1BQU0sc0VBQUVKLHNDQUFPOzs7Ozs7OztJQUUxQixNQUFNLHVFQUNITSxDQUFJOzs7Ozs7OztpRkFDRkMsQ0FBRTs7Ozs7OzswQkFBRUosS0FBSTs7WUFFTkMsSUFBSSxDQUFDSSxHQUFHLENBQUMsUUFBUSxDQUFQQyxRQUFvQixFQUFLLENBQUM7Z0JBQ25DLEdBQUssQ0FBR0MsTUFBTSxHQUE4Q0QsUUFBUSxDQUE1REMsTUFBTSxFQUFFUCxJQUFJLEdBQXdDTSxRQUFRLENBQXBETixJQUFJLEVBQUVRLE9BQU8sR0FBK0JGLFFBQVEsQ0FBOUNFLE9BQU8sRUFBRUMsTUFBTSxHQUF1QkgsUUFBUSxDQUFyQ0csTUFBTSxFQUFFQyxPQUFPLEdBQWNKLFFBQVEsQ0FBN0JJLE9BQU8sRUFBRUMsR0FBRyxHQUFTTCxRQUFRLENBQXBCSyxHQUFHLEVBQUVDLEVBQUUsR0FBS04sUUFBUSxDQUFmTSxFQUFFO2dCQUN2RCxNQUFNLHVFQUNIQyxDQUFFOzs7Ozs7Ozs4RkFDQUMsQ0FBRTs7Ozs7Ozs7Z0NBQUVkLElBQUksQ0FBQ2UsS0FBSztnQ0FBQyxDQUFDO2dDQUFDZixJQUFJLENBQUNnQixNQUFNO2dDQUFDLENBQUM7Z0NBQUNoQixJQUFJLENBQUNpQixJQUFJOzs7NkZBRXRDQyxDQUFHOzRCQUFDQyxHQUFHLEVBQUVaLE1BQU0sQ0FBQ0osSUFBSTs0QkFBRWlCLEdBQUcsRUFBRXBCLElBQUksQ0FBQ2UsS0FBSzs7Ozs7Ozs7NkZBQ3JDTSxDQUFNOzs7Ozs7O3NDQUFFYixPQUFPLENBQUMsQ0FBQzs7OEZBRW5CYyxDQUFFOzs7Ozs7OztzR0FDQUMsQ0FBRzs7Ozs7Ozs7NkdBQ0RDLENBQUU7Ozs7Ozs7c0RBQUMsQ0FBTTs7NkdBQ1RDLENBQUU7Ozs7Ozs7c0RBQUVoQixNQUFNOzs7O3NHQUVaYyxDQUFHOzs7Ozs7Ozs2R0FDREMsQ0FBRTs7Ozs7OztzREFBQyxDQUFPOzs2R0FDVkMsQ0FBRTs7Ozs7OztzREFBRWYsT0FBTzs7OztzR0FFYmEsQ0FBRzs7Ozs7Ozs7NkdBQ0RDLENBQUU7Ozs7Ozs7c0RBQUMsQ0FBRzs7NkdBQ05DLENBQUU7Ozs7Ozs7c0RBQUVkLEdBQUc7Ozs7Ozs7bUJBakJKLENBQW1CLHFCQUFLLE9BQUhDLEVBQUU7WUFzQnJDLENBQUM7OztBQUlULENBQUM7R0F4Q1liLGFBQWE7O1FBRUFELHdEQUFPOzs7S0FGcEJDLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hhckNvbnRhaW5lci50c3g/ZmU2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFcnJvciwgTG9hZGluZyB9IGZyb20gJy4nO1xuaW1wb3J0IHsgdXNlRGF0YSB9IGZyb20gJy4uL2hvb2tzL0Z1dHVyYW1hRGF0YSc7XG5pbXBvcnQgeyBDaGFyYWN0ZXJzIH0gZnJvbSAnLi4vdHlwZXMvQ2hhcmFjdGVycyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBNRURJQV9RVUVSWV9FTkRfUE9JTlQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBDaGFyQ29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCBuYW1lID0gJ2NoYXJhY3RlcnMnXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZURhdGEobmFtZSk7XG5cbiAgaWYgKGVycm9yKSByZXR1cm4gPEVycm9yIC8+XG4gIGlmICghZGF0YSkgcmV0dXJuIDxMb2FkaW5nIC8+XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cbiAgICAgIDxoMj57bmFtZX08L2gyPlxuXG4gICAgICAgIHtkYXRhLm1hcCgoY2hhckRhdGE6IENoYXJhY3RlcnMpID0+IHtcbiAgICAgICAgICBjb25zdCB7IGltYWdlcywgbmFtZSwgc2F5aW5ncywgZ2VuZGVyLCBzcGVjaWVzLCBhZ2UsIGlkIH0gPSBjaGFyRGF0YTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGtleT17YGZ1dHVyYW1hLWNoYXJhY3Rlci0ke2lkfWB9PlxuICAgICAgICAgICAgICA8aDM+e25hbWUuZmlyc3R9IHtuYW1lLm1pZGRsZX0ge25hbWUubGFzdH08L2gzPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VzLm1haW59IGFsdD17bmFtZS5maXJzdH0gLz5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPntzYXlpbmdzWzBdfTwvc3Ryb25nPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRsPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8ZHQ+Z2VuZGVyPC9kdD5cbiAgICAgICAgICAgICAgICAgIDxkZD57Z2VuZGVyfTwvZGQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxkdD5zcGVjaWVzPC9kdD5cbiAgICAgICAgICAgICAgICAgIDxkZD57c3BlY2llc308L2RkPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8ZHQ+YWdlPC9kdD5cbiAgICAgICAgICAgICAgICAgIDxkZD57YWdlfTwvZGQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICBcbiAgICA8L21haW4+XG4gIClcbn0iXSwibmFtZXMiOlsiRXJyb3IiLCJMb2FkaW5nIiwidXNlRGF0YSIsIkNoYXJDb250YWluZXIiLCJuYW1lIiwiZGF0YSIsImVycm9yIiwibWFpbiIsImgyIiwibWFwIiwiY2hhckRhdGEiLCJpbWFnZXMiLCJzYXlpbmdzIiwiZ2VuZGVyIiwic3BlY2llcyIsImFnZSIsImlkIiwibGkiLCJoMyIsImZpcnN0IiwibWlkZGxlIiwibGFzdCIsImltZyIsInNyYyIsImFsdCIsInN0cm9uZyIsImRsIiwiZGl2IiwiZHQiLCJkZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/CharContainer.tsx\n");

/***/ })

});