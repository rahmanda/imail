'use strict';

angular.module('imail')

	.directive('resizable', function($window) {
		return function ($scope){
			$scope.initializeWindowSize = function () {
				$scope.windowHeight = ($window.innerHeight - 100) + 'px';
			};

			$scope.initializeWindowSize();

			angular.element($window).bind('resize', function() {
				$scope.initializeWindowSize();
				$scope.$apply();
			});
		}
	});