(function() {

	var app = angular.module('weevApp');

	app.directive('header', function() {
		return {
			restrict: 'E',
			templateUrl: 'js/partials/header.html'
		}
	});

})();