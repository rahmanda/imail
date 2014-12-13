'use strict';

angular.module('imail')

	.factory('Auth', ['WebService', 'Session', function (WebService, Session) {

		var cacheSession = function(userData) {
			Session.set('authenticated', true);
			Session.set('account', userData);
		};

		var uncacheSession = function() {
			Session.unset('authenticated');
		};

		return {

			login : function (credentials) {
				var login = WebService.post('login', credentials);
				login.success(function (data) {
					cacheSession(data.account);
				});
				return login;
			},

			logout : function () {
				var logout = WebService.get('logout');
				logout.success(uncacheSession);
				return logout;
			},

			isAuthenticated: function() {
				return Session.get('authenticated');
			},

			getAccount: function() {
				return Session.get('account');
			}
		};

	}]);
