'use strict';

angular.module('imail')

	.controller('LoginController', ['$rootScope', '$scope', '$state', 'Auth', function($rootScope, $scope, $state, Auth) {
		
		$scope.login = function (credentials) {
			
			Auth.login(credentials)
				.success(function (data) {
					$state.go('imail.inbox');
				})
				.error(function (data, status, headers, config) {
					console.log(status);
				});
		};

	}]);