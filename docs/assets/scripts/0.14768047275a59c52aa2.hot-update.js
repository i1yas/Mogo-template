webpackHotUpdate(0,{

/***/ 13:
/***/ function(module, exports) {

	'use strict';
	
	var search = function search() {
		var lens = document.querySelector('.header__icon-item_lens');
	
		var searchInput = document.querySelector('.header__search');
		var searchModifer = 'header__search_enabled';
	
		lens.addEventListener('click', function () {
			console.log('click');
			searchInput.classList.add(searchModifer);
	
			setTimeout(function () {
				document.addEventListener('click', function () {
					console.log('remove');
					searchInput.classList.remove(searchModifer);
				});
			}, 300);
		});
	};
	
	module.exports = search;

/***/ }

})
//# sourceMappingURL=0.14768047275a59c52aa2.hot-update.js.map