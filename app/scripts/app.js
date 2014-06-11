'use strict';

var taskapp = angular.module('ar3staskApp', [
  'ngRoute',
  'tasksCtrl',
  'highcharts-ng'
]);

taskapp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/main.html',
        controller: 'testing'
      }).
      when('/demo', {
        templateUrl: 'views/highcharts-demo.html',
        controller: 'myctrl'
      }).
      when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'dashboard'
      }).
      when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'dashboard'
      }).
      otherwise({
        redirectTo: '/'
      });

      // $locationProvider.html5Mode(true); //for removing the # prefix in the URL
  }]);



