"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Landing.js":
/*!*******************************!*\
  !*** ./components/Landing.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Landing; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @onflow/fcl */ \"./node_modules/@onflow/fcl/dist/fcl.module.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/utils */ \"./lib/utils.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var _lib_atoms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/atoms */ \"./lib/atoms.js\");\n/* harmony import */ var _publicConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../publicConfig */ \"./publicConfig.js\");\n/* harmony import */ var _styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Landing.module.css */ \"./styles/Landing.module.css\");\n/* harmony import */ var _styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_8__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Landing(props) {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref = _slicedToArray((0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState)(_lib_atoms__WEBPACK_IMPORTED_MODULE_6__.transactionInProgressState), 1), transactionInProgress = ref[0];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-y-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-10 flex gap-y-5 sm:gap-x-5 flex-col-reverse sm:flex-row justify-between items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"px-2 flex flex-col gap-y-8 items-start\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col gap-y-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_8___default().landing),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_8___default().ltitle),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"underline text-black font-bold decoration-drizzle-green decoration-4\",\n                                                    children: \"Sorteio\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                                                    lineNumber: 23,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"underline text-black font-bold decoration-drizzle-green decoration-4\",\n                                                    children: \"Drops\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                                                    lineNumber: 24,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                                            lineNumber: 22,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                                        lineNumber: 21,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"-mt-1 font-flow text-black font-bold text-5xl sm:text-6xl\",\n                                        children: \"nunca foi\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                                        lineNumber: 28,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"font-flow text-black font-bold text-5xl sm:text-6xl\",\n                                        children: \"t\\xe3o simples!\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                                        lineNumber: 29,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                                lineNumber: 20,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"-mt-5 font-flow text-gray-400 font-medium text-md\",\n                                        children: \"Crie um Sorteio em um minuto!\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                                        lineNumber: 32,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"https://www.notion.so/lanford33/drizzle-d4713d571a944361a5fc80a915e01fc7\",\n                                        target: \"_blank\",\n                                        rel: \"noopener noreferrer\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            className: \"cursor-pointer font-flow text-drizzle-green font-medium text-md underline decoration-drizzle-green decoration-3\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                                            lineNumber: 39,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, this),\n                            props.user && props.user.loggedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"-mt-5 flex flex-col gap-y-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"font-flow text-gray-400 font-medium text-md\",\n                                        children: \"Crie um novo:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex gap-x-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                type: \"button\",\n                                                disabled: transactionInProgress,\n                                                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.classNames)(transactionInProgress ? \"bg-drizzle-green-light text-gray-400\" : \"bg-drizzle-green hover:bg-drizzle-green-dark text-black\", \"h-12 w-32 px-6 text-base rounded-2xl font-flow font-semibold shadow-sm text-black\"),\n                                                onClick: function() {\n                                                    router.push(\"/create/ft_drop\");\n                                                },\n                                                children: \"DROP\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                                                lineNumber: 48,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                type: \"button\",\n                                                disabled: transactionInProgress,\n                                                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.classNames)(transactionInProgress ? \"bg-drizzle-green-light text-gray-400\" : \"bg-drizzle-green hover:bg-drizzle-green-dark text-black\", \"h-12 w-32 px-6 text-base rounded-2xl font-flow font-semibold shadow-sm\"),\n                                                onClick: function() {\n                                                    router.push(\"/create/nft_raffle\");\n                                                },\n                                                children: \"NFT\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                                                lineNumber: 61,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                disabled: transactionInProgress,\n                                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.classNames)(transactionInProgress ? \"bg-drizzle-green-light text-gray-400\" : \"bg-drizzle-green hover:bg-drizzle-green-dark text-black\", \"h-12 px-6 text-base rounded-2xl font-flow font-semibold shadow-sm text-black\"),\n                                onClick: function() {\n                                    _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.authenticate();\n                                },\n                                children: \"Connect Wallet\"\n                            }, void 0, false, {\n                                fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[350px] h-[350px] sm:w-[420px] sm:h-[420px] relative\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/landing.png\",\n                            alt: \"\",\n                            layout: \"responsive\",\n                            width: 400,\n                            height: 400,\n                            objectFit: \"cover\",\n                            priority: true\n                        }, void 0, false, {\n                            fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: _publicConfig__WEBPACK_IMPORTED_MODULE_7__[\"default\"].floatURL,\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\"\n                }, void 0, false, {\n                    fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n};\n_s(Landing, \"wbZU/D9d5lpz2cH0X2YuekcHew8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState\n    ];\n});\n_c = Landing;\nvar _c;\n$RefreshReg$(_c, \"Landing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QW9CLENBQUM7aURBQ2xDOzBEQUVBLEtBQUs7Ozs7O29EQUNDOzs7Ozs7NENBQ0w7Ozs7OztvQ0FDRixpQkFDTiw4REFBQ0osUUFBTTtnQ0FDTEMsSUFBSSxFQUFDLFFBQVE7Z0NBQ2JDLFFBQVEsRUFBRWQscUJBQXFCO2dDQUMvQkUsU0FBUyxFQUFFVixzREFBVSxDQUNuQlEscUJBQXFCLEdBQUcsc0NBQXNDLEdBQUcseURBQXlELEVBQzFILDhFQUE4RSxDQUMvRTtnQ0FDRGUsT0FBTyxFQUFFLFdBQU07b0NBQUUxQixxREFBZ0IsRUFBRTtpQ0FBRTswQ0FFcEMsZ0JBQWdCOzs7OztvQ0FDVjs7Ozs7OzRCQUVQO2tDQUVOLDhEQUFDWSxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsd0RBQXdEO2tDQUNyRSw0RUFBQ1osbURBQUs7NEJBQUM0QixHQUFHLEVBQUMsY0FBYzs0QkFBQ0MsR0FBRyxFQUFDLEVBQUU7NEJBQUNDLE1BQU0sRUFBQyxZQUFZOzRCQUFDQyxLQUFLLEVBQUUsR0FBRzs0QkFBRUMsTUFBTSxFQUFFLEdBQUc7NEJBQUVDLFNBQVMsRUFBQyxPQUFPOzRCQUFDQyxRQUFRLEVBQUUsSUFBSTs7Ozs7Z0NBQUk7Ozs7OzRCQUM5Rzs7Ozs7O29CQUNGOzBCQUNOLDhEQUFDdkIsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLDRCQUE0QjswQkFDekMsNEVBQUNJLEdBQUM7b0JBQUNDLElBQUksRUFBRVosOERBQXFCO29CQUM1QmEsTUFBTSxFQUFDLFFBQVE7b0JBQ2ZDLEdBQUcsRUFBQyxxQkFBcUI7Ozs7O3dCQUN2Qjs7Ozs7b0JBQ0E7Ozs7OztZQUNGLENBQ1A7Q0FDRjtHQTFGdUJaLE9BQU87O1FBQ2ROLGtEQUFTO1FBQ1FFLGtEQUFjOzs7QUFGeEJJLEtBQUFBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYW5kaW5nLmpzPzViN2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZmNsIGZyb20gXCJAb25mbG93L2ZjbFwiXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSBcIi4uL2xpYi91dGlsc1wiXG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gXCJyZWNvaWxcIlxuaW1wb3J0IHtcbiAgdHJhbnNhY3Rpb25JblByb2dyZXNzU3RhdGVcbn0gZnJvbSBcIi4uL2xpYi9hdG9tc1wiXG5pbXBvcnQgcHVibGljQ29uZmlnIGZyb20gXCIuLi9wdWJsaWNDb25maWdcIlxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0xhbmRpbmcubW9kdWxlLmNzc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExhbmRpbmcocHJvcHMpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgW3RyYW5zYWN0aW9uSW5Qcm9ncmVzc10gPSB1c2VSZWNvaWxTdGF0ZSh0cmFuc2FjdGlvbkluUHJvZ3Jlc3NTdGF0ZSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAteS0yMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMCBmbGV4IGdhcC15LTUgc206Z2FwLXgtNSBmbGV4LWNvbC1yZXZlcnNlIHNtOmZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0yIGZsZXggZmxleC1jb2wgZ2FwLXktOCBpdGVtcy1zdGFydFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAteS0yXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxhbmRpbmd9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmx0aXRsZX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1bmRlcmxpbmUgdGV4dC1ibGFjayBmb250LWJvbGQgZGVjb3JhdGlvbi1kcml6emxlLWdyZWVuIGRlY29yYXRpb24tNFwiPlNvcnRlaW88L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVuZGVybGluZSB0ZXh0LWJsYWNrIGZvbnQtYm9sZCBkZWNvcmF0aW9uLWRyaXp6bGUtZ3JlZW4gZGVjb3JhdGlvbi00XCI+RHJvcHM8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17YC1tdC0xIGZvbnQtZmxvdyB0ZXh0LWJsYWNrIGZvbnQtYm9sZCB0ZXh0LTV4bCBzbTp0ZXh0LTZ4bGB9Pm51bmNhIGZvaTwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtgZm9udC1mbG93IHRleHQtYmxhY2sgZm9udC1ib2xkIHRleHQtNXhsIHNtOnRleHQtNnhsYH0+dMOjbyBzaW1wbGVzITwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtgLW10LTUgZm9udC1mbG93IHRleHQtZ3JheS00MDAgZm9udC1tZWRpdW0gdGV4dC1tZGB9PlxuICAgICAgICAgICAgICBDcmllIHVtIFNvcnRlaW8gZW0gdW0gbWludXRvIVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5ub3Rpb24uc28vbGFuZm9yZDMzL2RyaXp6bGUtZDQ3MTNkNTcxYTk0NDM2MWE1ZmM4MGE5MTVlMDFmYzdcIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17YGN1cnNvci1wb2ludGVyIGZvbnQtZmxvdyB0ZXh0LWRyaXp6bGUtZ3JlZW4gZm9udC1tZWRpdW0gdGV4dC1tZCB1bmRlcmxpbmUgZGVjb3JhdGlvbi1kcml6emxlLWdyZWVuIGRlY29yYXRpb24tM2B9PlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAge3Byb3BzLnVzZXIgJiYgcHJvcHMudXNlci5sb2dnZWRJbiA/XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi1tdC01IGZsZXggZmxleC1jb2wgZ2FwLXktMlwiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9udC1mbG93IHRleHQtZ3JheS00MDAgZm9udC1tZWRpdW0gdGV4dC1tZFwiPkNyaWUgdW0gbm92bzo8L2xhYmVsPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLXgtMlwiPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RyYW5zYWN0aW9uSW5Qcm9ncmVzc31cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25JblByb2dyZXNzID8gXCJiZy1kcml6emxlLWdyZWVuLWxpZ2h0IHRleHQtZ3JheS00MDBcIiA6IFwiYmctZHJpenpsZS1ncmVlbiBob3ZlcjpiZy1kcml6emxlLWdyZWVuLWRhcmsgdGV4dC1ibGFja1wiLFxuICAgICAgICAgICAgICAgICAgICBcImgtMTIgdy0zMiBweC02IHRleHQtYmFzZSByb3VuZGVkLTJ4bCBmb250LWZsb3cgZm9udC1zZW1pYm9sZCBzaGFkb3ctc20gdGV4dC1ibGFja1wiXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9jcmVhdGUvZnRfZHJvcFwiKVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7XCJEUk9QXCJ9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJhbnNhY3Rpb25JblByb2dyZXNzfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbkluUHJvZ3Jlc3MgPyBcImJnLWRyaXp6bGUtZ3JlZW4tbGlnaHQgdGV4dC1ncmF5LTQwMFwiIDogXCJiZy1kcml6emxlLWdyZWVuIGhvdmVyOmJnLWRyaXp6bGUtZ3JlZW4tZGFyayB0ZXh0LWJsYWNrXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaC0xMiB3LTMyIHB4LTYgdGV4dC1iYXNlIHJvdW5kZWQtMnhsIGZvbnQtZmxvdyBmb250LXNlbWlib2xkIHNoYWRvdy1zbVwiXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9jcmVhdGUvbmZ0X3JhZmZsZVwiKVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7XCJORlRcIn1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4gOlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RyYW5zYWN0aW9uSW5Qcm9ncmVzc31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uSW5Qcm9ncmVzcyA/IFwiYmctZHJpenpsZS1ncmVlbi1saWdodCB0ZXh0LWdyYXktNDAwXCIgOiBcImJnLWRyaXp6bGUtZ3JlZW4gaG92ZXI6YmctZHJpenpsZS1ncmVlbi1kYXJrIHRleHQtYmxhY2tcIixcbiAgICAgICAgICAgICAgICBcImgtMTIgcHgtNiB0ZXh0LWJhc2Ugcm91bmRlZC0yeGwgZm9udC1mbG93IGZvbnQtc2VtaWJvbGQgc2hhZG93LXNtIHRleHQtYmxhY2tcIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IGZjbC5hdXRoZW50aWNhdGUoKSB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7XCJDb25uZWN0IFdhbGxldFwifVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzM1MHB4XSBoLVszNTBweF0gc206dy1bNDIwcHhdIHNtOmgtWzQyMHB4XSByZWxhdGl2ZVwiPlxuICAgICAgICAgIDxJbWFnZSBzcmM9XCIvbGFuZGluZy5wbmdcIiBhbHQ9XCJcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgd2lkdGg9ezQwMH0gaGVpZ2h0PXs0MDB9IG9iamVjdEZpdD1cImNvdmVyXCIgcHJpb3JpdHk9e3RydWV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxhIGhyZWY9e3B1YmxpY0NvbmZpZy5mbG9hdFVSTH1cbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn0iXSwibmFtZXMiOlsiZmNsIiwiSW1hZ2UiLCJ1c2VSb3V0ZXIiLCJjbGFzc05hbWVzIiwidXNlUmVjb2lsU3RhdGUiLCJ0cmFuc2FjdGlvbkluUHJvZ3Jlc3NTdGF0ZSIsInB1YmxpY0NvbmZpZyIsInN0eWxlcyIsIkxhbmRpbmciLCJwcm9wcyIsInJvdXRlciIsInRyYW5zYWN0aW9uSW5Qcm9ncmVzcyIsImRpdiIsImNsYXNzTmFtZSIsImxhbmRpbmciLCJsdGl0bGUiLCJsYWJlbCIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwidXNlciIsImxvZ2dlZEluIiwiYnV0dG9uIiwidHlwZSIsImRpc2FibGVkIiwib25DbGljayIsInB1c2giLCJhdXRoZW50aWNhdGUiLCJzcmMiLCJhbHQiLCJsYXlvdXQiLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdEZpdCIsInByaW9yaXR5IiwiZmxvYXRVUkwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Landing.js\n");

/***/ })

});