'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _searchResultList = require('./searchResultList');

var _searchResultList2 = _interopRequireDefault(_searchResultList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
		key: 'handleKeyup',
		value: function handleKeyup(textboxvalue) {
			this.searchService.getSearchResult(textboxvalue, this.searchView.updateView.bind(this.searchView));
		}
	}, {
		key: 'handleKeyDown',
		value: function handleKeyDown(textboxvalue) {
			this.searchService.reset();
			this.searchView.updateView(new _searchResultList2.default([]));
		}
	}]);

	return SearchController;
}();

exports.default = SearchController;