'use strict';

angular.module('imail')

	.factory('Emails', function() {

		var emails = {};

		return {
			get : function() {
				return emails;
			},
			set : function(newEmails) {
				emails = newEmails;
			}
		}
	});