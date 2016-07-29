'use strict';

/**
 * @ngdoc function
 * @name practicalAssignmentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the practicalAssignmentApp
 */
angular.module('practicalAssignmentApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });


  var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
    $http.get("http://www.w3schools.com/angular/customers.php")
    .then(function (response) {$scope.names = response.data.records;});
});
