/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n@keyframes fadeIn {\r\n    from { opacity: 0; }\r\n    to { opacity: 1; }\r\n}\r\n\r\n@keyframes slideUp {\r\n    from { transform: translateY(50px); opacity: 0; }\r\n    to { transform: translateY(0); opacity: 1; }\r\n}\r\n\r\nhtml, body {\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n    overflow-x: hidden;\r\n    font-family: 'Open Sans', sans-serif;\r\n    background-color: #e6f3ff;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    min-height: 100vh;\r\n    overflow-y: auto;\r\n}\r\n\r\nheader {\r\n    background-color: rgba(44, 62, 80, 0.9);\r\n    color: #ffffff;\r\n    padding: 10px;\r\n    text-align: center;\r\n    width: 100%;\r\n    position: fixed;\r\n    top: 0;\r\n    z-index: 1000;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\nnav {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nbutton {\r\n    background-color: #4da8da;\r\n    color: #ffffff;\r\n    border: none;\r\n    padding: 10px 20px;\r\n    margin: 0 10px;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    cursor: pointer;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\nbutton:hover {\r\n    background-color: #3498db;\r\n    transform: translateY(-2px);\r\n    box-shadow: 0 2px 5px rgba(52, 152, 219, 0.3);\r\n}\r\n\r\n#content {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 160px 20px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.white-background {\r\n    width: 70%;\r\n    max-width: 1500px;\r\n    background-color: rgba(255, 255, 255, 0.7);\r\n    backdrop-filter: blur(10px);\r\n    padding: 60px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    border-radius: 10px;\r\n    box-shadow: 0 0 30px rgba(173, 216, 230, 0.5);\r\n    transition: all 0.3s ease;\r\n    border: 1px solid rgba(173, 216, 230, 0.5);\r\n    opacity: 0; /* Start invisible */\r\n    animation: fadeIn 1s ease-out forwards;\r\n}\r\n\r\n.white-background:hover {\r\n    transform: translateY(-5px);\r\n    box-shadow: 0 5px 30px rgba(173, 216, 230, 0.7);\r\n}\r\n\r\n.title {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 48px;\r\n    font-weight: 700;\r\n    letter-spacing: 2px;\r\n    line-height: 1.2;\r\n    text-transform: uppercase;\r\n    color: #1c4966;\r\n    text-align: center;\r\n    padding: 30px 20px;\r\n    background-color: rgba(173, 216, 230, 0.2);\r\n    border-bottom: 3px solid #87cefa;\r\n    margin-bottom: 30px;\r\n    width: 100%;\r\n    transition: all 0.3s ease;\r\n    opacity: 0; /* Start invisible */\r\n    animation: fadeIn 1s ease-out forwards;\r\n    animation-delay: 0.5s; /* Start after white background fades in */\r\n}\r\n\r\n.title:hover {\r\n    color: #3498db;\r\n    text-shadow: 1px 1px 2px rgba(173, 216, 230, 0.5);\r\n}\r\n\r\n.description {\r\n    margin-top: 20px;\r\n    width: 70%;\r\n    background-color: rgba(240, 248, 255, 0.8);\r\n    padding: 20px;\r\n    box-shadow: 0 0 10px rgba(173, 216, 230, 0.3);\r\n    border-radius: 8px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    transition: all 0.3s ease;\r\n    opacity: 0; /* Start invisible */\r\n    animation: slideUp 1s ease-out forwards;\r\n    animation-delay: 1s; /* Start after title slides up */  \r\n}\r\n\r\n.description:hover {\r\n    transform: translateY(-3px);\r\n    box-shadow: 0 3px 15px rgba(173, 216, 230, 0.5);\r\n}\r\n\r\n.description-text {\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 18px;\r\n    color: #2c5d7c;\r\n    text-align: center;\r\n    line-height: 1.6;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.description-author {\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 18px;\r\n    color: #4682b4;\r\n    align-self: flex-end;\r\n    font-style: italic;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.description-author:hover {\r\n    color: #1e90ff;\r\n}\r\n\r\n.animate-in {\r\n    animation-play-state: running !important;\r\n}\r\n\r\n.white-background, .title, .description {\r\n    animation-play-state: paused;\r\n}\r\n\r\n#menuContainer {\r\n    list-style-type: none;\r\n    padding: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    width: 100%;\r\n}\r\n\r\n#menuContainer > li {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n    padding: 15px;\r\n    background-color: rgba(255, 255, 255, 0.7);\r\n    border-radius: 8px;\r\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n#menuContainer > li:hover {\r\n    transform: translateY(-2px);\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.name-price {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    color: #1c4966;\r\n}\r\n\r\n.price {\r\n    font-size: 18px;\r\n    color: #4da8da;\r\n}\r\n\r\n.item-description {\r\n    font-size: 14px;\r\n    color: #2c5d7c;\r\n    line-height: 1.4;\r\n}\r\n\r\n.info-container {\r\n    background-color: rgba(255, 255, 255, 0.8);\r\n    border-radius: 10px;\r\n    padding: 30px;\r\n    margin-top: 30px;\r\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.info-container:hover {\r\n    transform: translateY(-5px);\r\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n#hoursTitle {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 28px;\r\n    color: #1c4966;\r\n    margin-bottom: 25px;\r\n    text-align: center;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n#hoursContainer {\r\n    list-style-type: none;\r\n    padding: 0;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n#hoursContainer li {\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 16px;\r\n    color: #2c5d7c;\r\n    text-align: center;\r\n    margin-bottom: 15px;\r\n    padding: 10px;\r\n    background-color: rgba(77, 168, 218, 0.1);\r\n    border-radius: 5px;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n#hoursContainer li:hover {\r\n    background-color: rgba(77, 168, 218, 0.2);\r\n}\r\n\r\n#emailContainer {\r\n    text-align: center;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 16px;\r\n    color: #4da8da;\r\n    margin-top: 20px;\r\n    padding: 15px;\r\n    background-color: rgba(28, 73, 102, 0.1);\r\n    border-radius: 5px;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n#emailContainer:hover {\r\n    background-color: rgba(28, 73, 102, 0.2);\r\n}\r\n\r\n\r\n#hoursTitle, #hoursContainer, #emailContainer {\r\n    opacity: 0;\r\n    animation: fadeIn 1s ease-out forwards;\r\n    animation-delay: 0.5s;\r\n}\r\n\r\n#hoursContainer li {\r\n    opacity: 0;\r\n    animation: slideUp 1s ease-out forwards;\r\n}\r\n\r\n#hoursContainer li:nth-child(1) { animation-delay: 1s; }\r\n#hoursContainer li:nth-child(2) { animation-delay: 1.2s; }\r\n#hoursContainer li:nth-child(3) { animation-delay: 1.4s; }\r\n\r\n#emailContainer {\r\n    animation-delay: 1.6s;\r\n}\r\n\r\nfooter {\r\n    position: fixed; /* Fix the footer to the bottom of the viewport */\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    text-align: center;\r\n    padding: 1rem 0;\r\n    background-color: rgba(44, 62, 80, 0.9);\r\n    color: #ffffff;\r\n}\r\n\r\nfooter p {\r\n    margin: 0;\r\n    font-size: 0.875rem;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://package.json/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://package.json/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://package.json/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://package.json/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://package.json/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://package.json/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://package.json/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://package.json/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://package.json/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://package.json/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/aboutLoader.js":
/*!****************************!*\
  !*** ./src/aboutLoader.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadAboutInfo: () => (/* binding */ loadAboutInfo)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n // Import your CSS file if needed\r\n\r\nfunction loadAboutPageElements() {\r\n    const email = \"johndoe@gmail.com\";\r\n    const openHours = [\"Monday - Friday: 10:00 AM - 9:00 PM\", \"Saturday: 11:00 AM - 10:00 PM\", \"Sunday: 12:00 PM - 8:00 PM\"];\r\n    let whiteBackground = document.getElementById('whiteBackground');\r\n\r\n    const infoContainer = document.createElement('div');\r\n    infoContainer.className = 'info-container';\r\n    whiteBackground.appendChild(infoContainer);\r\n\r\n    const hoursTitle = document.createElement('h3');\r\n    infoContainer.appendChild(hoursTitle);\r\n    hoursTitle.textContent = 'Hours of Service';\r\n    hoursTitle.id = 'hoursTitle';\r\n\r\n    const hoursContainer = document.createElement('ul');\r\n    hoursContainer.id = 'hoursContainer';\r\n    infoContainer.appendChild(hoursContainer);\r\n    for (let i = 0; i < 3; i++) {\r\n        let hours = document.createElement('li');\r\n        hoursContainer.appendChild(hours);\r\n        hours.textContent = openHours[i];\r\n    }\r\n\r\n    const emailContainer = document.createElement('div');\r\n    emailContainer.id = 'emailContainer';\r\n    infoContainer.appendChild(emailContainer);\r\n    emailContainer.textContent = \"Contact us at: \" + email;\r\n}\r\n\r\n\r\nfunction loadAboutInfo() {\r\n    loadAboutPageElements();\r\n}\n\n//# sourceURL=webpack://package.json/./src/aboutLoader.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _pageLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageLoader */ \"./src/pageLoader.js\");\n/* harmony import */ var _menuLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuLoader */ \"./src/menuLoader.js\");\n/* harmony import */ var _aboutLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutLoader */ \"./src/aboutLoader.js\");\n // Import your CSS file if needed\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n\r\n    const content = document.getElementById('content');\r\n    const whiteBackground = document.createElement('div');\r\n    whiteBackground.setAttribute('id','whiteBackground');\r\n\r\n    whiteBackground.classList.add('white-background');\r\n    content.appendChild(whiteBackground);\r\n\r\n    const addName = () => {\r\n        whiteBackground.innerHTML = '';\r\n        const NAME = document.createElement('div');\r\n        whiteBackground.appendChild(NAME);\r\n        NAME.textContent = 'The Icy Igloo';\r\n        NAME.classList.add('title');\r\n        \r\n        // Trigger animation\r\n        setTimeout(() => {\r\n            NAME.classList.add('animate-in');\r\n        }, 100);\r\n    }\r\n\r\n    addName();\r\n    (0,_pageLoader__WEBPACK_IMPORTED_MODULE_1__.loadStartInfo)();\r\n\r\n    const buttons = document.querySelectorAll('nav button');\r\n    buttons.forEach((button, index) => {\r\n        button.id = `button${index + 1}`;\r\n\r\n        button.addEventListener('click', function() {\r\n            switch (button.textContent.trim()) {\r\n                case 'Home':\r\n                    addName();\r\n                    (0,_pageLoader__WEBPACK_IMPORTED_MODULE_1__.loadStartInfo)();\r\n                    break;\r\n                case 'Menu':\r\n                    addName();\r\n                    (0,_menuLoader__WEBPACK_IMPORTED_MODULE_2__.loadMenu)();\r\n                    break;\r\n                case 'About':\r\n                    addName();\r\n                    (0,_aboutLoader__WEBPACK_IMPORTED_MODULE_3__.loadAboutInfo)();\r\n                    break;\r\n            }\r\n        });\r\n    });\r\n\r\n    const footerCont = document.createElement('footer');\r\n    const footerInf = document.createElement('p');\r\n    footerInf.textContent = '© Created by Dean Liang';\r\n\r\n    footerCont.appendChild(footerInf);\r\n    document.body.appendChild(footerCont);\r\n});\r\n\r\n\n\n//# sourceURL=webpack://package.json/./src/index.js?");

/***/ }),

/***/ "./src/menuLoader.js":
/*!***************************!*\
  !*** ./src/menuLoader.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n // Import your CSS file if needed\r\n\r\nfunction loadMenuElements() {\r\n    let iceCreamDescriptors = {\r\n        iceCreamNames: [\"Classic Vanilla\",\"Chocolate Delight\",\"Strawberry Bliss\",\"Mint Chocolate Chip\",\"Salted Caramel\"],\r\n        iceCreamPrices: [\"$3\",\"$3.5\",\"$3.25\",\"$3.5\",\"$3.75\"],\r\n        iceCreamDescriptions: [\"A timeless favorite made with rich, creamy vanilla beans.\",\"A decadent treat for chocolate lovers, made with premium cocoa.\",\"Fresh strawberries blended into a creamy, dreamy ice cream.\",\"Cool mint ice cream with delicious chocolate chips.\",\"A perfect blend of sweet caramel with a hint of sea salt.\"]\r\n    };\r\n\r\n    let whiteBackground = document.getElementById('whiteBackground');\r\n\r\n    let listContainer = document.createElement('ul');\r\n    listContainer.setAttribute('id','menuContainer');\r\n    whiteBackground.appendChild(listContainer);\r\n\r\n    for (let i = 0; i < iceCreamDescriptors.iceCreamNames.length; i++) {\r\n        let listItem = document.createElement('li');\r\n        \r\n        let namePrice = document.createElement('div');\r\n\r\n        let itemName = document.createElement('h3');\r\n        itemName.textContent = iceCreamDescriptors.iceCreamNames[i]; \r\n        namePrice.appendChild(itemName);\r\n        \r\n        let itemPrice = document.createElement('i');\r\n        itemPrice.classList.add('price');\r\n        itemPrice.textContent = iceCreamDescriptors.iceCreamPrices[i];\r\n        namePrice.appendChild(itemPrice);\r\n\r\n        namePrice.classList.add('name-price');\r\n        listItem.append(namePrice);\r\n\r\n        let itemDescription = document.createElement('p');\r\n        itemDescription.textContent = iceCreamDescriptors.iceCreamDescriptions[i];\r\n        itemDescription.classList.add('item-description');\r\n        listItem.appendChild(itemDescription);\r\n        \r\n        \r\n        listContainer.appendChild(listItem);\r\n    }\r\n}\r\n\r\n\r\nfunction loadMenu() {\r\n    loadMenuElements();\r\n}\n\n//# sourceURL=webpack://package.json/./src/menuLoader.js?");

/***/ }),

/***/ "./src/pageLoader.js":
/*!***************************!*\
  !*** ./src/pageLoader.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadStartInfo: () => (/* binding */ loadStartInfo)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n // Import your CSS file if needed\r\n\r\nfunction createStartInfo() {\r\n    const content = document.getElementById('content');\r\n    let whiteBackground = document.getElementById('whiteBackground');\r\n\r\n    const createWhiteBackground = () => {\r\n        // Remove any existing animation classes\r\n        whiteBackground.classList.remove('animate-in');\r\n        \r\n        // Force a reflow before adding the class again\r\n        void whiteBackground.offsetWidth;\r\n        \r\n        // Add the animation class\r\n        whiteBackground.classList.add('animate-in');\r\n        \r\n        addDescription(); \r\n    };\r\n\r\n    const addDescription = () => {\r\n        const descriptionContainer = document.createElement('div'); \r\n        whiteBackground.appendChild(descriptionContainer);\r\n        descriptionContainer.classList.add('description');\r\n        \r\n        const description = document.createElement('p');\r\n        description.textContent = \"Starting from a family-owned business in 1912, this is now the best ice cream shop in Boston. It does not have a location and still to this day has not received a rating under 5 stars on Yelp. We are highly acclaimed even with less than 5 items on the menu, ensuring you will get your money's worth.\";\r\n        description.classList.add('description-text');\r\n        descriptionContainer.appendChild(description);\r\n\r\n        const descriptionWriter = document.createElement('p');\r\n        descriptionWriter.textContent = \"- The Owner\";\r\n        descriptionWriter.classList.add('description-author');\r\n        descriptionContainer.appendChild(descriptionWriter);\r\n\r\n        // Trigger animations\r\n        setTimeout(() => {\r\n            descriptionContainer.classList.add('animate-in');\r\n        }, 100);\r\n    };\r\n\r\n    // Call function to create white background\r\n    createWhiteBackground();\r\n}\r\n\r\nfunction loadStartInfo() {\r\n    createStartInfo();\r\n}\r\n\n\n//# sourceURL=webpack://package.json/./src/pageLoader.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;