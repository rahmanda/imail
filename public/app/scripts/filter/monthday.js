'use strict';

angular.module('imail')

	.filter('monthday', function ($filter) {

		return function(input)
		{
			var currentDate = new Date();

			if(input == null) { return ''; }

			var _date = $filter('date')(new Date(input), 'MMM d');

			return _date; 
		};

	})