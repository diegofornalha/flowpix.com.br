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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Landing; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @onflow/fcl */ \"./node_modules/@onflow/fcl/dist/fcl.module.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/utils */ \"./lib/utils.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var _lib_atoms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/atoms */ \"./lib/atoms.js\");\n/* harmony import */ var _publicConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../publicConfig */ \"./publicConfig.js\");\n/* harmony import */ var _styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Landing.module.css */ \"./styles/Landing.module.css\");\n/* harmony import */ var _styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_8__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Landing(props) {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref = _slicedToArray((0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState)(_lib_atoms__WEBPACK_IMPORTED_MODULE_6__.transactionInProgressState), 1), transactionInProgress = ref[0];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-y-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-10 flex gap-y-5 sm:gap-x-5 flex-col-reverse sm:flex-row justify-between items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"px-2 flex flex-col gap-y-8 items-start\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col gap-y-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_8___default().landing),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_8___default().ltitle),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"underline text-black font-bold decoration-drizzle-green decoration-4\",\n                                                    children: \"Sorteio\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                                                    lineNumber: 23,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"underline text-black font-bold decoration-drizzle-green decoration-4\",\n                                                    children: \"Drops\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                                                    lineNumber: 24,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                                            lineNumber: 22,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                                        lineNumber: 21,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"-mt-1 font-flow text-black font-bold text-5xl sm:text-6xl\",\n                                        children: \"nunca foi\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                                        lineNumber: 28,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"font-flow text-black font-bold text-5xl sm:text-6xl\",\n                                        children: \"t\\xe3o simples!\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                                        lineNumber: 29,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                                lineNumber: 20,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"-mt-5 font-flow text-gray-400 font-medium text-md\",\n                                        children: \"Crie um Sorteio em um minuto!\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                                        lineNumber: 32,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"https://www.notion.so/lanford33/drizzle-d4713d571a944361a5fc80a915e01fc7\",\n                                        target: \"_blank\",\n                                        rel: \"noopener noreferrer\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            className: \"cursor-pointer font-flow text-drizzle-green font-medium text-md underline decoration-drizzle-green decoration-3\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                                            lineNumber: 39,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, this),\n                            props.user && props.user.loggedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"-mt-5 flex flex-col gap-y-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"font-flow text-gray-400 font-medium text-md\",\n                                        children: \"Crie um novo sorteio de:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex gap-x-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                type: \"button\",\n                                                disabled: transactionInProgress,\n                                                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.classNames)(transactionInProgress ? \"bg-drizzle-green-light text-gray-400\" : \"bg-drizzle-green hover:bg-drizzle-green-dark text-black\", \"h-12 w-32 px-6 text-base rounded-2xl font-flow font-semibold shadow-sm text-black\"),\n                                                onClick: function() {\n                                                    router.push(\"/create/ft_drop\");\n                                                },\n                                                children: \"COIN\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                                                lineNumber: 48,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                type: \"button\",\n                                                disabled: transactionInProgress,\n                                                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.classNames)(transactionInProgress ? \"bg-drizzle-green-light text-gray-400\" : \"bg-drizzle-green hover:bg-drizzle-green-dark text-black\", \"h-12 w-32 px-6 text-base rounded-2xl font-flow font-semibold shadow-sm\"),\n                                                onClick: function() {\n                                                    router.push(\"/create/nft_raffle\");\n                                                },\n                                                children: \"NFT\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                                                lineNumber: 61,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                disabled: transactionInProgress,\n                                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.classNames)(transactionInProgress ? \"bg-drizzle-green-light text-gray-400\" : \"bg-drizzle-green hover:bg-drizzle-green-dark text-black\", \"h-12 px-6 text-base rounded-2xl font-flow font-semibold shadow-sm text-black\"),\n                                onClick: function() {\n                                    _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.authenticate();\n                                },\n                                children: \"Connect Wallet\"\n                            }, void 0, false, {\n                                fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[350px] h-[350px] sm:w-[420px] sm:h-[420px] relative\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/landing.png\",\n                            alt: \"\",\n                            layout: \"responsive\",\n                            width: 400,\n                            height: 400,\n                            objectFit: \"cover\",\n                            priority: true\n                        }, void 0, false, {\n                            fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: _publicConfig__WEBPACK_IMPORTED_MODULE_7__[\"default\"].floatURL,\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\"\n                }, void 0, false, {\n                    fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/coflow/Desktop/pega_ai/src/ui/components/Landing.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n};\n_s(Landing, \"wbZU/D9d5lpz2cH0X2YuekcHew8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState\n    ];\n});\n_c = Landing;\nvar _c;\n$RefreshReg$(_c, \"Landing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBb0IsQ0FBQztpREFDbEM7MERBRUEsS0FBSzs7Ozs7b0RBQ0M7Ozs7Ozs0Q0FDTDs7Ozs7O29DQUNGLGlCQUNOLDhEQUFDSixRQUFNO2dDQUNMQyxJQUFJLEVBQUMsUUFBUTtnQ0FDYkMsUUFBUSxFQUFFZCxxQkFBcUI7Z0NBQy9CRSxTQUFTLEVBQUVWLHNEQUFVLENBQ25CUSxxQkFBcUIsR0FBRyxzQ0FBc0MsR0FBRyx5REFBeUQsRUFDMUgsOEVBQThFLENBQy9FO2dDQUNEZSxPQUFPLEVBQUUsV0FBTTtvQ0FBRTFCLHFEQUFnQixFQUFFO2lDQUFFOzBDQUVwQyxnQkFBZ0I7Ozs7O29DQUNWOzs7Ozs7NEJBRVA7a0NBRU4sOERBQUNZLEtBQUc7d0JBQUNDLFNBQVMsRUFBQyx3REFBd0Q7a0NBQ3JFLDRFQUFDWixtREFBSzs0QkFBQzRCLEdBQUcsRUFBQyxjQUFjOzRCQUFDQyxHQUFHLEVBQUMsRUFBRTs0QkFBQ0MsTUFBTSxFQUFDLFlBQVk7NEJBQUNDLEtBQUssRUFBRSxHQUFHOzRCQUFFQyxNQUFNLEVBQUUsR0FBRzs0QkFBRUMsU0FBUyxFQUFDLE9BQU87NEJBQUNDLFFBQVEsRUFBRSxJQUFJOzs7OztnQ0FBSTs7Ozs7NEJBQzlHOzs7Ozs7b0JBQ0Y7MEJBQ04sOERBQUN2QixLQUFHO2dCQUFDQyxTQUFTLEVBQUMsNEJBQTRCOzBCQUN6Qyw0RUFBQ0ksR0FBQztvQkFBQ0MsSUFBSSxFQUFFWiw4REFBcUI7b0JBQzVCYSxNQUFNLEVBQUMsUUFBUTtvQkFDZkMsR0FBRyxFQUFDLHFCQUFxQjs7Ozs7d0JBQ3ZCOzs7OztvQkFDQTs7Ozs7O1lBQ0YsQ0FDUDtDQUNGO0dBMUZ1QlosT0FBTzs7UUFDZE4sa0RBQVM7UUFDUUUsa0RBQWM7OztBQUZ4QkksS0FBQUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xhbmRpbmcuanM/NWI3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmY2wgZnJvbSBcIkBvbmZsb3cvZmNsXCJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tIFwiLi4vbGliL3V0aWxzXCJcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSBcInJlY29pbFwiXG5pbXBvcnQge1xuICB0cmFuc2FjdGlvbkluUHJvZ3Jlc3NTdGF0ZVxufSBmcm9tIFwiLi4vbGliL2F0b21zXCJcbmltcG9ydCBwdWJsaWNDb25maWcgZnJvbSBcIi4uL3B1YmxpY0NvbmZpZ1wiXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvTGFuZGluZy5tb2R1bGUuY3NzXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGFuZGluZyhwcm9wcykge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBbdHJhbnNhY3Rpb25JblByb2dyZXNzXSA9IHVzZVJlY29pbFN0YXRlKHRyYW5zYWN0aW9uSW5Qcm9ncmVzc1N0YXRlKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC15LTIwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwIGZsZXggZ2FwLXktNSBzbTpnYXAteC01IGZsZXgtY29sLXJldmVyc2Ugc206ZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTIgZmxleCBmbGV4LWNvbCBnYXAteS04IGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC15LTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGFuZGluZ30+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubHRpdGxlfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVuZGVybGluZSB0ZXh0LWJsYWNrIGZvbnQtYm9sZCBkZWNvcmF0aW9uLWRyaXp6bGUtZ3JlZW4gZGVjb3JhdGlvbi00XCI+U29ydGVpbzwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidW5kZXJsaW5lIHRleHQtYmxhY2sgZm9udC1ib2xkIGRlY29yYXRpb24tZHJpenpsZS1ncmVlbiBkZWNvcmF0aW9uLTRcIj5Ecm9wczwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtgLW10LTEgZm9udC1mbG93IHRleHQtYmxhY2sgZm9udC1ib2xkIHRleHQtNXhsIHNtOnRleHQtNnhsYH0+bnVuY2EgZm9pPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2Bmb250LWZsb3cgdGV4dC1ibGFjayBmb250LWJvbGQgdGV4dC01eGwgc206dGV4dC02eGxgfT50w6NvIHNpbXBsZXMhPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2AtbXQtNSBmb250LWZsb3cgdGV4dC1ncmF5LTQwMCBmb250LW1lZGl1bSB0ZXh0LW1kYH0+XG4gICAgICAgICAgICAgIENyaWUgdW0gU29ydGVpbyBlbSB1bSBtaW51dG8hXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm5vdGlvbi5zby9sYW5mb3JkMzMvZHJpenpsZS1kNDcxM2Q1NzFhOTQ0MzYxYTVmYzgwYTkxNWUwMWZjN1wiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtgY3Vyc29yLXBvaW50ZXIgZm9udC1mbG93IHRleHQtZHJpenpsZS1ncmVlbiBmb250LW1lZGl1bSB0ZXh0LW1kIHVuZGVybGluZSBkZWNvcmF0aW9uLWRyaXp6bGUtZ3JlZW4gZGVjb3JhdGlvbi0zYH0+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7cHJvcHMudXNlciAmJiBwcm9wcy51c2VyLmxvZ2dlZEluID9cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLW10LTUgZmxleCBmbGV4LWNvbCBnYXAteS0yXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb250LWZsb3cgdGV4dC1ncmF5LTQwMCBmb250LW1lZGl1bSB0ZXh0LW1kXCI+Q3JpZSB1bSBub3ZvIHNvcnRlaW8gZGU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC14LTJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cmFuc2FjdGlvbkluUHJvZ3Jlc3N9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uSW5Qcm9ncmVzcyA/IFwiYmctZHJpenpsZS1ncmVlbi1saWdodCB0ZXh0LWdyYXktNDAwXCIgOiBcImJnLWRyaXp6bGUtZ3JlZW4gaG92ZXI6YmctZHJpenpsZS1ncmVlbi1kYXJrIHRleHQtYmxhY2tcIixcbiAgICAgICAgICAgICAgICAgICAgXCJoLTEyIHctMzIgcHgtNiB0ZXh0LWJhc2Ugcm91bmRlZC0yeGwgZm9udC1mbG93IGZvbnQtc2VtaWJvbGQgc2hhZG93LXNtIHRleHQtYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvY3JlYXRlL2Z0X2Ryb3BcIilcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge1wiQ09JTlwifVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RyYW5zYWN0aW9uSW5Qcm9ncmVzc31cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25JblByb2dyZXNzID8gXCJiZy1kcml6emxlLWdyZWVuLWxpZ2h0IHRleHQtZ3JheS00MDBcIiA6IFwiYmctZHJpenpsZS1ncmVlbiBob3ZlcjpiZy1kcml6emxlLWdyZWVuLWRhcmsgdGV4dC1ibGFja1wiLFxuICAgICAgICAgICAgICAgICAgICBcImgtMTIgdy0zMiBweC02IHRleHQtYmFzZSByb3VuZGVkLTJ4bCBmb250LWZsb3cgZm9udC1zZW1pYm9sZCBzaGFkb3ctc21cIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvY3JlYXRlL25mdF9yYWZmbGVcIilcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge1wiTkZUXCJ9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+IDpcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPXt0cmFuc2FjdGlvbkluUHJvZ3Jlc3N9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbkluUHJvZ3Jlc3MgPyBcImJnLWRyaXp6bGUtZ3JlZW4tbGlnaHQgdGV4dC1ncmF5LTQwMFwiIDogXCJiZy1kcml6emxlLWdyZWVuIGhvdmVyOmJnLWRyaXp6bGUtZ3JlZW4tZGFyayB0ZXh0LWJsYWNrXCIsXG4gICAgICAgICAgICAgICAgXCJoLTEyIHB4LTYgdGV4dC1iYXNlIHJvdW5kZWQtMnhsIGZvbnQtZmxvdyBmb250LXNlbWlib2xkIHNoYWRvdy1zbSB0ZXh0LWJsYWNrXCJcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBmY2wuYXV0aGVudGljYXRlKCkgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge1wiQ29ubmVjdCBXYWxsZXRcIn1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVszNTBweF0gaC1bMzUwcHhdIHNtOnctWzQyMHB4XSBzbTpoLVs0MjBweF0gcmVsYXRpdmVcIj5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2xhbmRpbmcucG5nXCIgYWx0PVwiXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIHdpZHRoPXs0MDB9IGhlaWdodD17NDAwfSBvYmplY3RGaXQ9XCJjb3ZlclwiIHByaW9yaXR5PXt0cnVlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8YSBocmVmPXtwdWJsaWNDb25maWcuZmxvYXRVUkx9XG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59Il0sIm5hbWVzIjpbImZjbCIsIkltYWdlIiwidXNlUm91dGVyIiwiY2xhc3NOYW1lcyIsInVzZVJlY29pbFN0YXRlIiwidHJhbnNhY3Rpb25JblByb2dyZXNzU3RhdGUiLCJwdWJsaWNDb25maWciLCJzdHlsZXMiLCJMYW5kaW5nIiwicHJvcHMiLCJyb3V0ZXIiLCJ0cmFuc2FjdGlvbkluUHJvZ3Jlc3MiLCJkaXYiLCJjbGFzc05hbWUiLCJsYW5kaW5nIiwibHRpdGxlIiwibGFiZWwiLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCIsInVzZXIiLCJsb2dnZWRJbiIsImJ1dHRvbiIsInR5cGUiLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJwdXNoIiwiYXV0aGVudGljYXRlIiwic3JjIiwiYWx0IiwibGF5b3V0Iiwid2lkdGgiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJwcmlvcml0eSIsImZsb2F0VVJMIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Landing.js\n");

/***/ })

});