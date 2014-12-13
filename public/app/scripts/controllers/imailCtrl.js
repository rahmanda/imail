'use strict';

angular.module('imail')

.controller('ImailController', ['$scope', '$state', 'Auth', 'notify', 'ngDialog', 
	function($scope, $state, Auth, notify, ngDialog) {
		$scope.logout = function () {
			Auth.logout()
			.success(function(data) {
				$state.go('login');
				notify({message: data, templateUrl: 'libs/angular-notify/gmail-template.html'});
			});
		}

		$scope.compose = function () {
			ngDialog.open({template : 'partials/compose.html'});
		}
	}]);