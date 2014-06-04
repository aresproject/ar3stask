'use strict';

/* Controllers */

var testTask = angular.module('tasksCtrl', []);
testTask.controller('tested', function($scope) {
  $scope.taskeru = [
    {'name': 'Task 1',
     'snippet': 'This is Task 1'},
    {'name': 'Task 2',
     'snippet': 'This is Task 2'},
    {'name': 'Task 3',
     'snippet': 'This is Task 3'}
  ];
});

testTask.controller('testing', function($scope, $http) {
  $http.get('database/tasks.json').success(function(data) {
    $scope.tasko = data;
    $scope.numLimit = 2000;
    $scope.sortTask = 'Task';
  });
  $scope.orderProp = 'age';
});





// var Tasking = angular.module('TasksCtrl', []);

// Tasking.controller('TestTask', function($scope, $http) {
//   $http.get('database/tasks.json').success(function(data) {
//     $scope.taskeru = data;
//   });

//   $scope.orderProp = 'age';
// });

// Tasking.controller('Taskslists', ['$scope', '$http',
//   function($scope, $http) {
//     $http.get('/database/tasks.json').success(function(data) {
//       $scope.tasks = data;
//     });

//     $scope.day = 'mon';
//   }]);

// Tasking.controller('TasksDetails', ['$scope', '$routeParams',
//   function($scope, $routeParams) {
//     $scope.task = $routeParams.tasksid;
//   }]);

