webpackHotUpdate(0,{

/***/ 14:
/***/ function(module, exports) {

	'use strict';
	
	var scroll = function scroll() {
		$(function () {
			var _this = this;
	
			$('a[href*="#"]:not([href="#"])').click(function () {
				debugger;
				if (location.pathname.replace(/^\//, '') === _this.pathname.replace(/^\//, '') && location.hostname === _this.hostname) {
					var target = $(_this.hash);
					target = target.length ? target : $('[name=' + _this.hash.slice(1) + ']');
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
//# sourceMappingURL=0.5512c796994559203b2b.hot-update.js.map