'use strict';

var taskapp = angular.module('ar3staskApp', [
  'ngRoute',
  'tasksCtrl'
]);

taskapp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/dashboard.html',
        controller: 'testing'
      }).
      when('/dashboard', {
        templateUrl: 'views/main.html',
        controller: 'testing'
      }).
      otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true); //for removing the # prefix in the URL
  }]);

