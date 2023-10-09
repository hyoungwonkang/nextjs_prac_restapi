"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/cart";
exports.ids = ["pages/cart"];
exports.modules = {

/***/ "./components/context/cartContext.js":
/*!*******************************************!*\
  !*** ./components/context/cartContext.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ShoppingCartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({\n    items: {},\n    setItems: ()=>null\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShoppingCartContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbnRleHQvY2FydENvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBRXRDLE1BQU1DLG9DQUFzQkQsb0RBQWFBLENBQUM7SUFDdENFLE9BQU8sQ0FBQztJQUNSQyxVQUFVLElBQU0sSUFBSTtBQUN4QjtBQUVBLGlFQUFlRixtQkFBbUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL2NvbXBvbmVudHMvY29udGV4dC9jYXJ0Q29udGV4dC5qcz80NzVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFNob3BwaW5nQ2FydENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcbiAgICBpdGVtczoge30sXG4gICAgc2V0SXRlbXM6ICgpID0+IG51bGwsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgU2hvcHBpbmdDYXJ0Q29udGV4dDsiXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsIlNob3BwaW5nQ2FydENvbnRleHQiLCJpdGVtcyIsInNldEl0ZW1zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/context/cartContext.js\n");

/***/ }),

/***/ "./data/items.js":
/*!***********************!*\
  !*** ./data/items.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([\n    {\n        id: \"7109-a115\",\n        name: \"Broccoli\",\n        picture: \"https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c\",\n        price: 2\n    },\n    {\n        id: \"9126-b921\",\n        name: \"Onions\",\n        picture: \"https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31\",\n        price: 1.5\n    },\n    {\n        id: \"4192-p192\",\n        name: \"Cauliflower\",\n        picture: \"https://images.unsplash.com/photo-1613743983303-b3e89f8a2b80\",\n        price: 2.5\n    },\n    {\n        id: \"8321-k532\",\n        name: \"Carrots\",\n        picture: \"https://images.unsplash.com/photo-1582515073490-39981397c445\",\n        price: 3.5\n    }\n]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhL2l0ZW1zLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpRUFBZTtJQUNiO1FBQ0VBLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxTQUFTO1FBQ1RDLE9BQU87SUFDVDtJQUNBO1FBQ0VILElBQUk7UUFDSkMsTUFBTTtRQUNOQyxTQUFTO1FBQ1RDLE9BQU87SUFDVDtJQUNBO1FBQ0VILElBQUk7UUFDSkMsTUFBTTtRQUNOQyxTQUFTO1FBQ1RDLE9BQU87SUFDVDtJQUNBO1FBQ0VILElBQUk7UUFDSkMsTUFBTTtRQUNOQyxTQUFTO1FBQ1RDLE9BQU87SUFDVDtDQUNELEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL2RhdGEvaXRlbXMuanM/M2JiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBbXG4gIHtcbiAgICBpZDogXCI3MTA5LWExMTVcIixcbiAgICBuYW1lOiBcIkJyb2Njb2xpXCIsXG4gICAgcGljdHVyZTogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU4NDI3MDM1NDk0OS1jMjZiMGQ1YjRhMGNcIixcbiAgICBwcmljZTogMixcbiAgfSxcbiAge1xuICAgIGlkOiBcIjkxMjYtYjkyMVwiLFxuICAgIG5hbWU6IFwiT25pb25zXCIsXG4gICAgcGljdHVyZTogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxODk3Nzk1NjgxMi1jZDNkYmFkYWFmMzFcIixcbiAgICBwcmljZTogMS41LFxuICB9LFxuICB7XG4gICAgaWQ6IFwiNDE5Mi1wMTkyXCIsXG4gICAgbmFtZTogXCJDYXVsaWZsb3dlclwiLFxuICAgIHBpY3R1cmU6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MTM3NDM5ODMzMDMtYjNlODlmOGEyYjgwXCIsXG4gICAgcHJpY2U6IDIuNSxcbiAgfSxcbiAge1xuICAgIGlkOiBcIjgzMjEtazUzMlwiLFxuICAgIG5hbWU6IFwiQ2Fycm90c1wiLFxuICAgIHBpY3R1cmU6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1ODI1MTUwNzM0OTAtMzk5ODEzOTdjNDQ1XCIsXG4gICAgcHJpY2U6IDMuNSxcbiAgfSxcbl07XG4iXSwibmFtZXMiOlsiaWQiLCJuYW1lIiwicGljdHVyZSIsInByaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./data/items.js\n");

/***/ }),

/***/ "./pages/cart.js":
/*!***********************!*\
  !*** ./pages/cart.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_context_cartContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/context/cartContext */ \"./components/context/cartContext.js\");\n/* harmony import */ var _data_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/items */ \"./data/items.js\");\n\n\n\n\nfunction getFullItem(id) {\n    const idx = _data_items__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findIndex((item)=>item.id === id);\n    return _data_items__WEBPACK_IMPORTED_MODULE_3__[\"default\"][idx];\n}\nfunction Cart() {\n    const { items  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_context_cartContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    const total = Object.keys(items).map((id)=>getFullItem(id).price * items[id]).reduce((x, y)=>x + y, 0);\n    const amounts = Object.keys(items).map((id)=>{\n        const item = getFullItem(id);\n        return {\n            item,\n            amount: items[id]\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-xl font-bold\",\n                children: [\n                    \" Total: $\",\n                    total,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hyoungwon-kang/next-book/practical-next.js/05-managing-local-and-global-states-in-nextjs/boilerplate/pages/cart.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: amounts.map(({ item , amount  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            \"x\",\n                            amount,\n                            \" \",\n                            item.name,\n                            \" ($\",\n                            amount * item.price,\n                            \")\"\n                        ]\n                    }, item.id, true, {\n                        fileName: \"/Users/hyoungwon-kang/next-book/practical-next.js/05-managing-local-and-global-states-in-nextjs/boilerplate/pages/cart.js\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/hyoungwon-kang/next-book/practical-next.js/05-managing-local-and-global-states-in-nextjs/boilerplate/pages/cart.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hyoungwon-kang/next-book/practical-next.js/05-managing-local-and-global-states-in-nextjs/boilerplate/pages/cart.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXJ0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFtQztBQUNpQztBQUNuQztBQUVqQyxTQUFTRyxZQUFZQyxFQUFFLEVBQUU7SUFDdkIsTUFBTUMsTUFBTUgsNkRBQWMsQ0FBQyxDQUFDSyxPQUFTQSxLQUFLSCxFQUFFLEtBQUtBO0lBQ2pELE9BQU9GLG1EQUFJLENBQUNHLElBQUk7QUFDbEI7QUFDQSxTQUFTRyxPQUFPO0lBQ2QsTUFBTSxFQUFFQyxNQUFLLEVBQUUsR0FBR1QsaURBQVVBLENBQUNDLHVFQUFtQkE7SUFDaEQsTUFBTVMsUUFBUUMsT0FBT0MsSUFBSSxDQUFDSCxPQUN2QkksR0FBRyxDQUFDLENBQUNULEtBQU9ELFlBQVlDLElBQUlVLEtBQUssR0FBR0wsS0FBSyxDQUFDTCxHQUFHLEVBQzdDVyxNQUFNLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUQsSUFBSUMsR0FBRztJQUUzQixNQUFNQyxVQUFVUCxPQUFPQyxJQUFJLENBQUNILE9BQU9JLEdBQUcsQ0FBQyxDQUFDVCxLQUFPO1FBQzdDLE1BQU1HLE9BQU9KLFlBQVlDO1FBQ3pCLE9BQU87WUFBRUc7WUFBTVksUUFBUVYsS0FBSyxDQUFDTCxHQUFHO1FBQUM7SUFDbkM7SUFFQSxxQkFDRSw4REFBQ2dCOzswQkFDQyw4REFBQ0M7Z0JBQUdDLFdBQVU7O29CQUFvQjtvQkFBVVo7b0JBQU07Ozs7Ozs7MEJBQ2xELDhEQUFDVTswQkFDRUYsUUFBUUwsR0FBRyxDQUFDLENBQUMsRUFBRU4sS0FBSSxFQUFFWSxPQUFNLEVBQUUsaUJBQzVCLDhEQUFDQzs7NEJBQWtCOzRCQUNmRDs0QkFBTzs0QkFBRVosS0FBS2dCLElBQUk7NEJBQUM7NEJBQUlKLFNBQVNaLEtBQUtPLEtBQUs7NEJBQUM7O3VCQURyQ1AsS0FBS0gsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQU8zQjtBQUVBLGlFQUFlSSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9wYWdlcy9jYXJ0LmpzP2Y0NTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNob3BwaW5nQ2FydENvbnRleHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGV4dC9jYXJ0Q29udGV4dFwiO1xuaW1wb3J0IGRhdGEgZnJvbSBcIi4uL2RhdGEvaXRlbXNcIjtcblxuZnVuY3Rpb24gZ2V0RnVsbEl0ZW0oaWQpIHtcbiAgY29uc3QgaWR4ID0gZGF0YS5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGlkKTtcbiAgcmV0dXJuIGRhdGFbaWR4XTtcbn1cbmZ1bmN0aW9uIENhcnQoKSB7XG4gIGNvbnN0IHsgaXRlbXMgfSA9IHVzZUNvbnRleHQoU2hvcHBpbmdDYXJ0Q29udGV4dCk7XG4gIGNvbnN0IHRvdGFsID0gT2JqZWN0LmtleXMoaXRlbXMpXG4gICAgLm1hcCgoaWQpID0+IGdldEZ1bGxJdGVtKGlkKS5wcmljZSAqIGl0ZW1zW2lkXSlcbiAgICAucmVkdWNlKCh4LCB5KSA9PiB4ICsgeSwgMCk7XG5cbiAgY29uc3QgYW1vdW50cyA9IE9iamVjdC5rZXlzKGl0ZW1zKS5tYXAoKGlkKSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IGdldEZ1bGxJdGVtKGlkKTtcbiAgICByZXR1cm4geyBpdGVtLCBhbW91bnQ6IGl0ZW1zW2lkXSB9O1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGRcIj4gVG90YWw6ICR7dG90YWx9IDwvaDE+XG4gICAgICA8ZGl2PlxuICAgICAgICB7YW1vdW50cy5tYXAoKHsgaXRlbSwgYW1vdW50IH0pID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICB4e2Ftb3VudH0ge2l0ZW0ubmFtZX0gKCR7YW1vdW50ICogaXRlbS5wcmljZX0pXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcnQ7XG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsIlNob3BwaW5nQ2FydENvbnRleHQiLCJkYXRhIiwiZ2V0RnVsbEl0ZW0iLCJpZCIsImlkeCIsImZpbmRJbmRleCIsIml0ZW0iLCJDYXJ0IiwiaXRlbXMiLCJ0b3RhbCIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJwcmljZSIsInJlZHVjZSIsIngiLCJ5IiwiYW1vdW50cyIsImFtb3VudCIsImRpdiIsImgxIiwiY2xhc3NOYW1lIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/cart.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/cart.js"));
module.exports = __webpack_exports__;

})();