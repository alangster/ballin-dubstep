(function() {

	var app = angular.module('weevApp');

	app.factory('userFactory', function() {

		var service = {};
		
		service.getUser = function() {
			return {
				title: "Community Do-Gooder",
				points: 2560,
				image_url: '/imgs/alexPic.jpg',
			};
		}

		service.userFavorites = function() {
			return {
					one: 'imgs/genericLogo.jpg',
					two: 'imgs/genericLogo.jpg',
					three: 'imgs/genericLogo.jpg'
			}
		}

		return service;
	})

})();