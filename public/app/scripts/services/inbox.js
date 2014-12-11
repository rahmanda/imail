'use strict';

angular.module('imail')

	.factory('Inbox', ['WebService', function (WebService) {

		return {

			getByUser : function () {
				return WebService.get('inbox');
			},
			sendMessage : function (message) {
				return WebService.post('inbox', message);
			},
			getById : function (emailId) {
				return WebService.get('inbox/'+emailId);
			},
			getUpdates : function (lastEmail) {
				var lastEmailId;

				if(!lastEmail) {
					lastEmailId = 0;
				} else {
					lastEmailId = lastEmail.id;
				}

				return WebService.get('inbox/updates/'+lastEmailId);
			} 

		};

	}]);