"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = function () {
	function View(templateHtml) {
		_classCallCheck(this, View);

		this.template = templateHtml;
		this.ul = document.getElementsByClassName("search-result")[0];
		this.textbox = document.getElementsByClassName("new-search")[0];
	}

	_createClass(View, [{
		key: "updateView",
		value: function updateView(searchResultArr) {
			this.ul.innerHTML = this.template.getTemplate(searchResultArr);
		}
	}, {
		key: "addEventListenerForKeyDown",
		value: function addEventListenerForKeyDown(callback) {
			var textbox = this.textbox;
			textbox.addEventListener("keydown", function () {
				callback(textbox.value);
			});
		}
	}, {
		key: "addEventListenerForKeyUp",
		value: function addEventListenerForKeyUp(callback) {
			var textbox = this.textbox;
			textbox.addEventListener("keyup", function () {
				callback(textbox.value);
			});
		}
	}]);

	return View;
}();

exports.default = View;