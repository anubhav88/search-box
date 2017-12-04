'use strict';

var _searchController = require('./searchController');

var _searchController2 = _interopRequireDefault(_searchController);

var _searchTemplate = require('./searchTemplate');

var _searchTemplate2 = _interopRequireDefault(_searchTemplate);

var _SearchView = require('./SearchView');

var _SearchView2 = _interopRequireDefault(_SearchView);

var _SearchService = require('./SearchService');

var _SearchService2 = _interopRequireDefault(_SearchService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Page initialization
 */
function init() {
    var searchTemplate = new _searchTemplate2.default();
    var searchService = new _SearchService2.default();
    var searchView = new _SearchView2.default(searchTemplate);
    var searchController = new _searchController2.default(searchService, searchView);
}

window.onload = function () {
    init();
};