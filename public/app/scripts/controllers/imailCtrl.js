'use strict';

angular.module('imail')

	.controller('ImailController', ['$scope', '$state', 'Auth', function($scope, $state, Auth) {
		$scope.logout = function () {
			Auth.logout()
				.then(function() {
					$state.go('login');
				});
		}
	}]);