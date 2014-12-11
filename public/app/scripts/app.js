'use strict';

angular.module('imail', ['ui.router'])

	.config(function ($stateProvider, $urlRouterProvider) {

		$urlRouterProvider
		.rule(function ($injector, $location) {
			// handle redirect to login page if user hasn't logged in
		})
		.otherwise('/imail/inbox');

		$stateProvider
		.state('imail', {
			url: '/imail',
			templateUrl : 'partials/imail.html',
			controller : 'ImailController'
		})
		.state('imail.inbox', {
			url: '/inbox',
			templateUrl : 'partials/inbox.html',
			controller : 'InboxController'
		})
		.state('imail.email', {
			url: '/inbox/{emailId:[0-9]{1,6}}',
			templateUrl : 'partials/email.html',
			controller : 'EmailController'
		})
		.state('login', {
			url : '/login',
			templateUrl : 'partials/login.html',
			controller : 'LoginController'
		});

	});