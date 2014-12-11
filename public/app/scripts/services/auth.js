'use strict';

angular.module('imail')

	.factory('Auth', ['WebService', function (WebService) {

		return {

			login : function (credentials) {
				return WebService.post('login', credentials);
			},

			logout : function () {
				return WebService.get('logout');
			}
		};

	}]);