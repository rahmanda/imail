'use strict';

angular.module('imail')

.controller('EmailController', ['$scope', 'Inbox', '$stateParams', 'PageTitle', 'Auth', 
	function($scope, Inbox, $stateParams, PageTitle, Auth) {
		
		Inbox.getById($stateParams.emailId)
		.success(function(data) {
			$scope.email = data;

			PageTitle.set(data.subject + ' - ' + Auth.getAccount());
		})
		.error(function(error) {
			console.log(error);
		});

	}]);