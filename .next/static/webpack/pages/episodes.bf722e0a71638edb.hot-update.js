"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/episodes",{

/***/ "./src/components/QuestionsContainer.tsx":
/*!***********************************************!*\
  !*** ./src/components/QuestionsContainer.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"QuestionsContainer\": function() { return /* binding */ QuestionsContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ \"./src/components/index.tsx\");\n/* harmony import */ var _hooks_FuturamaData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/FuturamaData */ \"./src/hooks/FuturamaData.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this2 = undefined;\nvar _s = $RefreshSig$();\nvar QuestionsContainer = function() {\n    var _this1 = _this2;\n    _s();\n    var name = 'questions';\n    var ref = (0,_hooks_FuturamaData__WEBPACK_IMPORTED_MODULE_2__.useData)(name), data = ref.data, error = ref.error;\n    if (error) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Error, {\n        __source: {\n            fileName: \"/Users/hanheejeong/Futurama.com/src/components/QuestionsContainer.tsx\",\n            lineNumber: 13,\n            columnNumber: 21\n        },\n        __self: _this2\n    }));\n    if (!data) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Loading, {\n        __source: {\n            fileName: \"/Users/hanheejeong/Futurama.com/src/components/QuestionsContainer.tsx\",\n            lineNumber: 14,\n            columnNumber: 21\n        },\n        __self: _this2\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"main\", {\n        __source: {\n            fileName: \"/Users/hanheejeong/Futurama.com/src/components/QuestionsContainer.tsx\",\n            lineNumber: 17,\n            columnNumber: 5\n        },\n        __self: _this2,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h2\", {\n                __source: {\n                    fileName: \"/Users/hanheejeong/Futurama.com/src/components/QuestionsContainer.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 7\n                },\n                __self: _this2,\n                children: [\n                    name,\n                    \"Drag to see the answer!\"\n                ]\n            }),\n            data.map(function(questionsData) {\n                var _this = _this1;\n                var question = questionsData.question, possibleAnswers = questionsData.possibleAnswers, correctAnswer = questionsData.correctAnswer, id = questionsData.id;\n                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"li\", {\n                    __source: {\n                        fileName: \"/Users/hanheejeong/Futurama.com/src/components/QuestionsContainer.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 13\n                    },\n                    __self: _this1,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                            __source: {\n                                fileName: \"/Users/hanheejeong/Futurama.com/src/components/QuestionsContainer.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 15\n                            },\n                            __self: _this1,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                    __source: {\n                                        fileName: \"/Users/hanheejeong/Futurama.com/src/components/QuestionsContainer.tsx\",\n                                        lineNumber: 25,\n                                        columnNumber: 17\n                                    },\n                                    __self: _this1,\n                                    children: \"Q\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n                                    __source: {\n                                        fileName: \"/Users/hanheejeong/Futurama.com/src/components/QuestionsContainer.tsx\",\n                                        lineNumber: 26,\n                                        columnNumber: 17\n                                    },\n                                    __self: _this1,\n                                    children: [\n                                        id,\n                                        \". \",\n                                        question\n                                    ]\n                                })\n                            ]\n                        }),\n                        possibleAnswers.map(function(questionList, index) {\n                            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"li\", {\n                                    __source: {\n                                        fileName: \"/Users/hanheejeong/Futurama.com/src/components/QuestionsContainer.tsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 23\n                                    },\n                                    __self: _this,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                                            type: \"radio\",\n                                            name: question,\n                                            id: questionList,\n                                            __source: {\n                                                fileName: \"/Users/hanheejeong/Futurama.com/src/components/QuestionsContainer.tsx\",\n                                                lineNumber: 32,\n                                                columnNumber: 25\n                                            },\n                                            __self: _this\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"label\", {\n                                            htmlFor: questionList,\n                                            __source: {\n                                                fileName: \"/Users/hanheejeong/Futurama.com/src/components/QuestionsContainer.tsx\",\n                                                lineNumber: 33,\n                                                columnNumber: 25\n                                            },\n                                            __self: _this,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                                    __source: {\n                                                        fileName: \"/Users/hanheejeong/Futurama.com/src/components/QuestionsContainer.tsx\",\n                                                        lineNumber: 33,\n                                                        columnNumber: 55\n                                                    },\n                                                    __self: _this,\n                                                    children: index + 1\n                                                }),\n                                                \" \",\n                                                questionList\n                                            ]\n                                        })\n                                    ]\n                                })\n                            }));\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                            className: \"answer\",\n                            __source: {\n                                fileName: \"/Users/hanheejeong/Futurama.com/src/components/QuestionsContainer.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 15\n                            },\n                            __self: _this1,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                    __source: {\n                                        fileName: \"/Users/hanheejeong/Futurama.com/src/components/QuestionsContainer.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 17\n                                    },\n                                    __self: _this1,\n                                    children: \"A\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                    className: \"drag\",\n                                    __source: {\n                                        fileName: \"/Users/hanheejeong/Futurama.com/src/components/QuestionsContainer.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 17\n                                    },\n                                    __self: _this1,\n                                    children: correctAnswer\n                                })\n                            ]\n                        })\n                    ]\n                }, \"futurama-cast-\".concat(id)));\n            })\n        ]\n    }));\n};\n_s(QuestionsContainer, \"g0NOcHyinTgx7ciJxFf4jm7QwwU=\", false, function() {\n    return [\n        _hooks_FuturamaData__WEBPACK_IMPORTED_MODULE_2__.useData\n    ];\n});\n_c = QuestionsContainer;\nvar _c;\n$RefreshReg$(_c, \"QuestionsContainer\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9RdWVzdGlvbnNDb250YWluZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBa0M7QUFDYTs7O0FBTXhDLEdBQUssQ0FBQ0csa0JBQWtCLEdBQUcsUUFDbEMsR0FEd0MsQ0FBQzs7O0lBQ3ZDLEdBQUssQ0FBQ0MsSUFBSSxHQUFHLENBQVc7SUFDeEIsR0FBSyxDQUFtQkYsR0FBYSxHQUFiQSw0REFBTyxDQUFDRSxJQUFJLEdBQTVCQyxJQUFJLEdBQVlILEdBQWEsQ0FBN0JHLElBQUksRUFBRUMsS0FBSyxHQUFLSixHQUFhLENBQXZCSSxLQUFLO0lBR25CLEVBQUUsRUFBRUEsS0FBSyxFQUFFLE1BQU0sc0VBQUVOLG9DQUFLOzs7Ozs7OztJQUN4QixFQUFFLEdBQUdLLElBQUksRUFBRSxNQUFNLHNFQUFFSixzQ0FBTzs7Ozs7Ozs7SUFFMUIsTUFBTSx1RUFDSE0sQ0FBSTs7Ozs7Ozs7a0ZBQ0ZDLENBQUU7Ozs7Ozs7O29CQUFFSixJQUFJO29CQUFDLENBQXVCOzs7WUFFOUJDLElBQUksQ0FBQ0ksR0FBRyxDQUFDLFFBQVEsQ0FBUEMsYUFBd0IsRUFBSyxDQUFDOztnQkFDdkMsR0FBSyxDQUFHQyxRQUFRLEdBQXlDRCxhQUFhLENBQTlEQyxRQUFRLEVBQUVDLGVBQWUsR0FBd0JGLGFBQWEsQ0FBcERFLGVBQWUsRUFBRUMsYUFBYSxHQUFTSCxhQUFhLENBQW5DRyxhQUFhLEVBQUVDLEVBQUUsR0FBS0osYUFBYSxDQUFwQkksRUFBRTtnQkFDcEQsTUFBTSx1RUFDSEMsQ0FBRTs7Ozs7Ozs7OEZBQ0FDLENBQUM7Ozs7Ozs7O3FHQUNDQyxDQUFJOzs7Ozs7OzhDQUFDLENBQUM7O3NHQUNOQSxDQUFJOzs7Ozs7Ozt3Q0FBRUgsRUFBRTt3Q0FBQyxDQUFFO3dDQUFDSCxRQUFROzs7Ozt3QkFFcEJDLGVBQWUsQ0FBQ0gsR0FBRyxDQUFDLFFBQVEsQ0FBUFMsWUFBb0IsRUFBRUMsS0FBYSxFQUFLLENBQUM7NEJBQzdELE1BQU07Z0hBRURKLENBQUU7Ozs7Ozs7OzZHQUNBSyxDQUFLOzRDQUFDQyxJQUFJLEVBQUMsQ0FBTzs0Q0FBQ2pCLElBQUksRUFBRU8sUUFBUTs0Q0FBRUcsRUFBRSxFQUFFSSxZQUFZOzs7Ozs7Ozs4R0FDbkRJLENBQUs7NENBQUNDLE9BQU8sRUFBRUwsWUFBWTs7Ozs7Ozs7cUhBQUdELENBQUk7Ozs7Ozs7OERBQUVFLEtBQUssR0FBRyxDQUFDOztnREFBUSxDQUFDO2dEQUFDRCxZQUFZOzs7Ozs7d0JBSTVFLENBQUM7OEZBR0ZGLENBQUM7NEJBQUNRLFNBQVMsRUFBQyxDQUFROzs7Ozs7OztxR0FDbEJQLENBQUk7Ozs7Ozs7OENBQUMsQ0FBQzs7cUdBQ05BLENBQUk7b0NBQUNPLFNBQVMsRUFBQyxDQUFNOzs7Ozs7OzhDQUFFWCxhQUFhOzs7OzttQkFuQi9CLENBQWMsZ0JBQUssT0FBSEMsRUFBRTtZQXVCaEMsQ0FBQzs7O0FBR1QsQ0FBQztHQXpDWVgsa0JBQWtCOztRQUVMRCx3REFBTzs7O0tBRnBCQyxrQkFBa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUXVlc3Rpb25zQ29udGFpbmVyLnRzeD8zY2E0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVycm9yLCBMb2FkaW5nIH0gZnJvbSAnLic7XG5pbXBvcnQgeyB1c2VEYXRhIH0gZnJvbSAnLi4vaG9va3MvRnV0dXJhbWFEYXRhJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IE1FRElBX1FVRVJZX0VORF9QT0lOVCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUXVlc3Rpb25zIH0gZnJvbSAnLi4vdHlwZXMvUXVlc3Rpb25zJztcblxuZXhwb3J0IGNvbnN0IFF1ZXN0aW9uc0NvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgbmFtZSA9ICdxdWVzdGlvbnMnO1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VEYXRhKG5hbWUpO1xuXG5cbiAgaWYgKGVycm9yKSByZXR1cm4gPEVycm9yIC8+XG4gIGlmICghZGF0YSkgcmV0dXJuIDxMb2FkaW5nIC8+XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cbiAgICAgIDxoMj57bmFtZX1EcmFnIHRvIHNlZSB0aGUgYW5zd2VyITwvaDI+XG5cbiAgICAgICAge2RhdGEubWFwKChxdWVzdGlvbnNEYXRhOiBRdWVzdGlvbnMpID0+IHtcbiAgICAgICAgICBjb25zdCB7IHF1ZXN0aW9uLCBwb3NzaWJsZUFuc3dlcnMsIGNvcnJlY3RBbnN3ZXIsIGlkIH0gPSBxdWVzdGlvbnNEYXRhO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkga2V5PXtgZnV0dXJhbWEtY2FzdC0ke2lkfWB9PlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8c3Bhbj5RPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPntpZH0uIHtxdWVzdGlvbn08L3NwYW4+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICB7cG9zc2libGVBbnN3ZXJzLm1hcCgocXVlc3Rpb25MaXN0OiBzdHJpbmcsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9e3F1ZXN0aW9ufSBpZD17cXVlc3Rpb25MaXN0fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3F1ZXN0aW9uTGlzdH0+PHNwYW4+e2luZGV4ICsgMX08L3NwYW4+IHtxdWVzdGlvbkxpc3R9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYW5zd2VyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+QTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkcmFnXCI+e2NvcnJlY3RBbnN3ZXJ9PC9zcGFuPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgPC9tYWluID5cbiAgKVxufSJdLCJuYW1lcyI6WyJFcnJvciIsIkxvYWRpbmciLCJ1c2VEYXRhIiwiUXVlc3Rpb25zQ29udGFpbmVyIiwibmFtZSIsImRhdGEiLCJlcnJvciIsIm1haW4iLCJoMiIsIm1hcCIsInF1ZXN0aW9uc0RhdGEiLCJxdWVzdGlvbiIsInBvc3NpYmxlQW5zd2VycyIsImNvcnJlY3RBbnN3ZXIiLCJpZCIsImxpIiwicCIsInNwYW4iLCJxdWVzdGlvbkxpc3QiLCJpbmRleCIsImlucHV0IiwidHlwZSIsImxhYmVsIiwiaHRtbEZvciIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/QuestionsContainer.tsx\n");

/***/ })

});