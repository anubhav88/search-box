/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _searchController = __webpack_require__(1);

var _searchController2 = _interopRequireDefault(_searchController);

var _searchTemplate = __webpack_require__(2);

var _searchTemplate2 = _interopRequireDefault(_searchTemplate);

var _Searchview = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./Searchview\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _Searchview2 = _interopRequireDefault(_Searchview);

var _SearchService = __webpack_require__(3);

var _SearchService2 = _interopRequireDefault(_SearchService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Page initialization
 */
function init() {
    var searchTemplate = new _searchTemplate2.default();
    var searchService = new _SearchService2.default();
    var searchView = new _Searchview2.default(searchTemplate);
    var searchController = new _searchController2.default(searchService, searchView);
}

window.onload = function () {
    init();
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SearchController = function () {
	function SearchController(searchService, searchView) {
		_classCallCheck(this, SearchController);

		this.searchService = searchService;
		this.searchView = searchView;
		this.searchView.addEventListenerForKeyUp(this.handleKeyup.bind(this));
		this.searchView.addEventListenerForKeyDown(this.handleKeyDown.bind(this));
	}

	_createClass(SearchController, [{
		key: "handleKeyup",
		value: function handleKeyup() {
			this.searchService.getSearchResult(this.searchView.updateView.bind(this.searchView));
		}
	}, {
		key: "handleKeyDown",
		value: function handleKeyDown() {
			this.searchService.reset();
			this.searchView.updateView([]);
		}
	}]);

	return SearchController;
}();

exports.default = SearchController;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SearchTemplate = function () {
    function SearchTemplate() {
        _classCallCheck(this, SearchTemplate);
    }

    _createClass(SearchTemplate, [{
        key: 'getTemplate',
        value: function getTemplate(searchResultArr) {
            searchResultArr.reduce(function (o, result) {
                return o + ('<li\n        \t\t\t class="todo-li"> \n        \t\t\t' + result.text + ' \n        \t\t\t</li>');
            }, '');
        }
    }]);

    return SearchTemplate;
}();

exports.default = SearchTemplate;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _searchResultList = __webpack_require__(4);

var _searchResultList2 = _interopRequireDefault(_searchResultList);

var _searchResult = __webpack_require__(5);

var _searchResult2 = _interopRequireDefault(_searchResult);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SearchService = function () {
	function SearchService(wait) {
		_classCallCheck(this, SearchService);

		this.timer = null;
	}

	_createClass(SearchService, [{
		key: 'getSearchResult',
		value: function getSearchResult(callback) {
			var service = this;
			var promise = new Promise(function (resolve, reject) {
				service.timer = setTimeout(resolve, 5000);
			});
			promise.then(function () {
				callback(service._getData());
			});
		}
	}, {
		key: 'reset',
		value: function reset() {
			clearInterval(this.timer);
		}
	}, {
		key: '_getData',
		value: function _getData() {
			var result = [];
			result.push(new _searchResult2.default['Hi hello1']());
			result.push(new _searchResult2.default['Hi hello2']());
			result.push(new _searchResult2.default['Hi hello3']());
			result.push(new _searchResult2.default['Hi hello4']());
			result.push(new _searchResult2.default['Hi hello5']());
			return new _searchResultList2.default(result());
		}
	}]);

	return SearchService;
}();

exports.default = SearchService;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SearchResultList = function SearchResultList(searchResultArr) {
	_classCallCheck(this, SearchResultList);

	this.list = searchResultArr;
};

exports.default = SearchResultList;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SearchResult = function SearchResult(text) {
	_classCallCheck(this, SearchResult);

	this.text = text;
};

exports.default = SearchResult;

/***/ })
/******/ ]);