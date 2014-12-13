'use strict';

/**
*  Module imail
*
* Description
*/
angular.module('imail')

.factory('PageTitle', ['$rootScope', function($rootScope){

	$rootScope.pageTitle = 'Imail';

	var suffix = 'Imail';

	return {

		get: function() {
			return $rootScope.pageTitle;
		},

		set: function(title) {
			$rootScope.pageTitle = title + ' - ' + suffix;
		},

		setSuffix: function(newsuffix) {
			suffix = newsuffix;
		}


	};
}]);