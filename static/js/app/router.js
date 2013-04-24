(function (window, document) {
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
})(window, document);