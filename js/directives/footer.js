(function() {

	var app = angular.module('weevApp');

	app.directive('footer', function() {
		return {
			restrict: 'E',
			templateUrl: 'js/partials/footer.html',
		}
	})

})();