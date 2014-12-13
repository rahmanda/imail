'use strict';

angular.module('imail')

.controller('InboxController', ['$scope', '$state', 'Inbox', 'PageTitle', 'Auth',

	function($scope, $state, Inbox, PageTitle, Auth) {

		Inbox.getByUser()
		.success(function(data) {
			$scope.emails = data;
		})
		.error(function(error) {
			console.log(error);
		});

		PageTitle.set('Inbox - '+Auth.getAccount());

	}]);