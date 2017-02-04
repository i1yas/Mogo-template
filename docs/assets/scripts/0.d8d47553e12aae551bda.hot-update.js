webpackHotUpdate(0,{

/***/ 13:
/***/ function(module, exports) {

	'use strict';
	
	var search = function search() {
		var lens = document.querySelector('.header__icon-item_lens');
	
		var searchInput = document.querySelector('.header__search');
		var searchModifer = 'header__search_enabled';
	
		lens.onclick = function () {
			console.log('click');
			document.onclick = null;
			searchInput.classList.add(searchModifer);
	
			setTimeout(function () {
				document.onclick = function () {
					console.log('remove');
					searchInput.classList.remove(searchModifer);
				};
			}, 300);
		};
	};
	
	module.exports = search;

/***/ }

})
//# sourceMappingURL=0.d8d47553e12aae551bda.hot-update.js.map