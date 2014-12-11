'use strict';

angular.module('imail')

	.controller('InboxController', ['$scope', 'Inbox', function($scope, Inbox) {

		Inbox.getByUser()
			.success(function(data) {
				$scope.emails = data;
			})
			.error(function(error) {
				console.log(error);
			});

	}]);