'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _searchResultList = require('./searchResultList');

var _searchResultList2 = _interopRequireDefault(_searchResultList);

var _searchResult = require('./searchResult');

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
		value: function getSearchResult(value, callback) {
			console.log(value);
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
			result.push(new _searchResult2.default('Hi hello1'));
			result.push(new _searchResult2.default('Hi hello2'));
			result.push(new _searchResult2.default('Hi hello3'));
			result.push(new _searchResult2.default('Hi hello4'));
			result.push(new _searchResult2.default('Hi hello5'));
			return new _searchResultList2.default(result);
		}
	}]);

	return SearchService;
}();

exports.default = SearchService;