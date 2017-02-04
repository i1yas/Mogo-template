webpackHotUpdate(0,{

/***/ 14:
/***/ function(module, exports) {

	'use strict';
	
	var scroll = function scroll() {
		$(function () {
			$('a[href*="#"]:not([href="#"])').click(function () {
				if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
					if (target.length) {
						$('html, body').animate({
							scrollTop: target.offset().top
						}, 1000);
						return false;
					}
				}
			});
		});
	};
	
	module.exports = scroll;

/***/ }

})
//# sourceMappingURL=0.0fe94c95f519225b93d7.hot-update.js.map