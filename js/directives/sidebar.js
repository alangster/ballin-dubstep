(function() {

	var app = angular.module('weevApp');

	app.directive('sidebar', function() {
		return {
			restrict: 'E',
			templateUrl: 'js/partials/sidebar.html'
		}
	})

})();