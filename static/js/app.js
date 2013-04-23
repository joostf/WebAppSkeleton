// Namespace, to minimize conflicts
var WEBAPP = WEBAPP || {};

// Application (self invoked, anonymous function creates 'local' scope, http://markdalgleish.com/2011/03/self-executing-anonymous-functions/)
(function (window, document) {
	WEBAPP.data = [
		['lorem', 'ipsum'],
		['dolor', 'sit', 'amet'],
	];
	
	// General application object for initialising objects
	WEBAPP.controller = {
		// Use regular expression for string matching (gi == global search, ignore case)
		isAndroid : (/android/gi).test(navigator.appVersion),
		isIDevice : (/iphone|ipad/gi).test(navigator.appVersion),

		init: function () {
			// Init page states			
			WEBAPP.states.init();

			// Hide addressbar on mobile/tablet
			WEBAPP.utils.hideAddressBar();
			
			Gator(window).on('orientationchange', function(e) {
			    WEBAPP.utils.hideAddressBar();
			});

			// Event delegation, for efficient event handling
			var el = document.querySelector("#content");
			Gator(el).on('click', function(e) {
				// e.preventDefault() prevents default action
			    // e.target retrieves clicked element 
			});
		}
	};

	WEBAPP.states = {
		init: function () {
			var routes = {
		        '/about': WEBAPP.pages.about,
		        '/breakdown': WEBAPP.pages.breakdown,
		        '/resources': WEBAPP.pages.resources
		      };

			var router = Router(routes);
      		router.init();
		},

		handleState: function () {
            var route = window.location.hash.slice(2),
                sections = document.querySelectorAll('section'),
                section = document.querySelectorAll('[data-route=' + route + ']')[0];
            if (section) {
            	for (var i=0; i < sections.length; i++){
            		sections[i].classList.remove('show');
            	}
            	section.classList.add('show');
            }

		}
 	}

	WEBAPP.pages = {
		about: function () {
			WEBAPP.states.handleState();
		},

		breakdown: function () {
			WEBAPP.states.handleState();
		},

		resources: function () {
			WEBAPP.states.handleState();
		}
	};
	
	// Utilities
	WEBAPP.utils = {
		// Source: https://gist.github.com/mhammonds/1190492#file-hidemobileaddressbar-js
		hideAddressBar: function () {
			if(!window.location.hash) {
			    if(document.height < window.outerHeight) {
			          document.body.style.height = (window.outerHeight + 50) + 'px';
			    }
			 
			    setTimeout( function(){ window.scrollTo(0, 1); }, 50 );
			}
		}
	};

	// DOM is loaded!
	domready(function () {
		// Kickstart application
		WEBAPP.controller.init();
	});
	
})(window, document);