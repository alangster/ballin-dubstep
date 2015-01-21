(function() {

	var app = angular.module('weevApp');

	app.controller('shopController', function ($scope, businessFactory) {
		$scope.sponsors = businessFactory.sponsors();
	});

})();