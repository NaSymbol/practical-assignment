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

  }).controller('loadPlayersController', function($scope, $http) {
  $scope.testValue = "this is a test";
    //test for data bind
    $scope.playerData = [{
       firstName: "andy",
       Surname: "crowe",
       Sex: "images/icon-male.png",
       Tier: "images/tier_gold.png",
       Email: "1@andrewcrowe.nz"

    }];

    $http.get("data.json")
    .then(function (response) {});
}).controller('addPlayerController',function($scope){


});


var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});
