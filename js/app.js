(function() {

	var app = angular.module('weevApp', ['ngRoute']);

	app.config(function($routeProvider) {
		$routeProvider.when('/', {
			controller: 'shopController',
			templateUrl: 'js/partials/shop.html'
		})
	});

})();