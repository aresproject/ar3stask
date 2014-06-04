'use strict';

/* Controllers */

var tasking = angular.module('taskControllers', []);

tasking.controller('PhoneListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';
  }]);

tasking.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
  }]);

tasking.controller('tasksCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('phones/tasks.json').success(function(data) {
      $scope.tasks = data;
    });

    $scope.day = 'mon';
  }]);
