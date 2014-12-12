'use strict';

angular.module('imail')

	.filter('monthday', function ($filter) {

		return function(input)
		{
			var currentDate = new Date();

			if(input == null) { 
				return ''; 
			} else {
				var inputDate = new Date(input);
			}

			var elapsed = currentDate - inputDate;

			if ( elapsed / (1000*60*60*24) > 1) {
				var _date = $filter('date')(inputDate, 'MMM d');
			} else {
				var _date = $filter('date')(inputDate, 'h:mm a');
			}

			return _date; 
		};

	})