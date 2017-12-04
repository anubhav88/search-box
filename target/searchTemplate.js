'use strict';

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
            return searchResultArr.list.reduce(function (o, result) {
                return o + ('<li\n        \t\t\t class="todo-li"> \n        \t\t\t' + result.text + ' \n        \t\t\t</li>');
            }, '');
        }
    }]);

    return SearchTemplate;
}();

exports.default = SearchTemplate;