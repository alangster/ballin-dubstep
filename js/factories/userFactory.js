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
			var favArray = [];

			for (var i = 0; i < 3; i++) {
				favArray.push('imgs/genericLogo.jpg');
			}
			return favArray;
		}

		return service;
	})

})();