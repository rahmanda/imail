'use strict';

angular.module('imail')
	
	.factory('Session', function() {
		return {

			get: function (key) {
				return sessionStorage.getItem(key);
			},
			set: function (key, val) {
				return sessionStorage.setItem(key, val);
			},
			unset: function (key) {
				return sessionStorage.removeItem(key);
			}

		};
	});