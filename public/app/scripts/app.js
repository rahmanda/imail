'use strict';

angular.module('imail', ['ui.router'])

	.config(function ($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/imail/inbox');

		$stateProvider
		.state('imail', {
			abstract: true,
			name: 'imail',
			module: 'private',
			url: '^/imail',
			templateUrl : 'partials/imail.html',
			controller : 'ImailController'
		})
		.state('imail.inbox', {
			name: 'inbox',
			module: 'private',
			url: '/inbox',
			templateUrl : 'partials/inbox.html',
			controller : 'InboxController'
		})
		.state('imail.email', {
			name: 'email',
			module: 'private',
			url: '/inbox/{emailId:int}',
			templateUrl : 'partials/email.html',
			controller : 'EmailController'
		})
		.state('login', {
			name: 'login',
			module: 'public',
			url : '^/login',
			templateUrl : 'partials/login.html',
			controller : 'LoginController'
		});

	})

	.run(['$rootScope', '$state', 'Auth', function ($rootScope, $state, Auth) {

		$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
 
			if(toState.module === 'private' && !Auth.isAuthenticated()) {
				event.preventDefault();
				$state.go('login');
			} 

		});

	}]);