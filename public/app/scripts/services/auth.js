'use strict';

angular.module('imail')

	.factory('Auth', ['WebService', 'Session', function (WebService, Session) {

		var cacheSession = function() {
			Session.set('authenticated', true);
		};

		var uncacheSession = function() {
			Session.unset('authenticated');
		};

		return {

			login : function (credentials) {
				var login = WebService.post('login', credentials);
				login.success(cacheSession);
				return login;
			},

			logout : function () {
				var logout = WebService.get('logout');
				logout.success(uncacheSession);
				return logout;
			},

			isAuthenticated: function() {
				return Session.get('authenticated');
			}
		};

	}]);