(function() {

	var app = angular.module('weevApp');

	app.factory('businessFactory', function() {
		var service = {};

		service.sponsors = function() {
			var sponsorArr = [];
			for (var i = 0; i < 15; i++) {
				sponsorArr.push('imgs/genericLogo.jpg');
			}
			// return {
			// 	one: 'imgs/genericLogo.jpg',
			// 	two: 'imgs/genericLogo.jpg',
			// 	three: 'imgs/genericLogo.jpg',
			// 	four: 'imgs/genericLogo.jpg',
			// 	five: 'imgs/genericLogo.jpg',
			// 	six: 'imgs/genericLogo.jpg',
			// 	seven: 'imgs/genericLogo.jpg',
			// 	eight: 'imgs/genericLogo.jpg',
			// 	nine: 'imgs/genericLogo.jpg',
			// 	ten: 'imgs/genericLogo.jpg',
			// }
			return sponsorArr;
		}
		return service;
	});

})();