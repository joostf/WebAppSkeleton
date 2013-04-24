(function (window, document) {
	WEBAPP.controller = {
		isAndroid : (/android/gi).test(navigator.appVersion),
		isIDevice : (/iphone|ipad/gi).test(navigator.appVersion),

		init: function () {
			var self = this;
		
			WEBAPP.states.init();

			WEBAPP.utils.hideAddressBar();
			
			Gator(window).on('orientationchange', function(e) {
			    WEBAPP.utils.hideAddressBar();
			});

			var el = document.querySelector("#content");
			Gator(el).on('click', function(e) {
			    console.log('Clicked element:', e.target);

			});
		},

		controlStuff: function () {
			console.log('I\'m a control freak');
		},

		doNothing: function () {
			console.log('I\'m so lazy');
		}
	};

	domready(function () {
		WEBAPP.controller.init();
	});
})(window, document);