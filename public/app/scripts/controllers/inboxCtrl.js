'use strict';

angular.module('imail')

	.controller('InboxController', ['$scope', '$state', 'Inbox', function($scope, $state, Inbox) {

		Inbox.getByUser()
			.success(function(data) {
				$scope.emails = data;
			})
			.error(function(error) {
				console.log(error);
			});
			
	}]);