(function() {

	var app = angular.module('weevApp');

	app.directive('userinfo', function() {
		return {
			restrict: 'E',
			templateUrl: 'js/partials/userinfo.html',
			controller: function($scope, $element, userFactory) {
				$scope.user = userFactory.getUser();
			}
		}
	});

})();