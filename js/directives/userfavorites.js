(function() {

	var app = angular.module('weevApp');

	app.directive('userfavorites', function() {
		return {
			restrict: 'E',
			templateUrl: 'js/partials/userFavorites.html',
			controller: function($scope, $element, userFactory) {
				$scope.favorites = userFactory.userFavorites();
			}
		}
	});

})();