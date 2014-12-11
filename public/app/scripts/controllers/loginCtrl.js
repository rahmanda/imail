'use strict';

angular.module('imail')

	.controller('LoginController', ['$scope', '$state', 'Auth', function($scope, $state, Auth) {
		
		$scope.login = function (credentials) {
			Auth.login(credentials)
				.success(function (data) {
					$state.go('imail.inbox');
					console.log(data);
				})
				.error(function (data) {
					console.log(data);
				});
		};

	}]);