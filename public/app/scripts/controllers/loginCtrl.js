'use strict';

angular.module('imail')

.controller('LoginController', ['$rootScope', '$scope', '$state', 'Auth', 'notify', 'PageTitle', 
	function($rootScope, $scope, $state, Auth, notify, PageTitle) {
		
		PageTitle.set('Login');

		$scope.login = function (credentials) {
			
			Auth.login(credentials)
			.success(function (data) {
				$state.go('imail.inbox');
			})
			.error(function (data, status, headers, config) {
				notify({message: data, templateUrl: 'libs/angular-notify/gmail-template.html'});
			});

		};

	}]);