webpackHotUpdate(0,{

/***/ 13:
/***/ function(module, exports) {

	'use strict';
	
	var search = function search() {
		var lens = document.querySelector('.header__icon-item_lens');
	
		var searchInput = document.querySelector('.header__search');
		var searchModifer = 'header__search_enabled';
	
		lens.onclick = function () {
			searchInput.classList.add(searchModifer);
		};
	
		document.onclick = function (event) {
			for (var i = 0; i < event.path.length; i++) {
				if (event.path[i] === searchInput || event.path[i] === lens) {
					return;
				}
			}
			searchInput.classList.remove(searchModifer);
		};
	};
	
	module.exports = search;

/***/ }

})
//# sourceMappingURL=0.4d8cc72a16c7d408d8ce.hot-update.js.map