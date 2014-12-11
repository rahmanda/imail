'use strict';

angular.module('imail')

	.controller('EmailController', ['$scope', 'Inbox', '$stateParams', function($scope, Inbox, $stateParams) {
		
		Inbox.getById($stateParams.emailId)
			.success(function(data) {
				$scope.email = data;
			})
			.error(function(error) {
				console.log(error);
			});

	}]);