'use strict';

angular.module('imail')

	.factory('WebService', ['$http', function($http) {
		
		var request = function(method, path, data) {
			return $http({
				method: method,
				url: '/api/' + path,
				data: data
			});
		}

		return {
			get: function(path, data) {
				return request('GET', path, data);
			},
			post: function(path, data) {
				return request('POST', path, data);
			},
			put: function(path, data) {
				return request('PUT', path, data);
			},
			delete: function(path, data) {
				return request('DELETE', path, data);
			}
		}
		
	}]);