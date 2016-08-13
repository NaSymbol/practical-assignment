'use strict';

/**
 * @ngdoc function
 * @name practicalAssignmentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the practicalAssignmentApp
 * */

angular.module('practicalAssignmentApp')
  .controller('MainCtrl', function() {

  });

/**
  angular.module('practicalAssignmentApp').controller('loadPlayersController', function($scope, $http) {
    $scope.testValue = "this is a test";

    //test for data bind
    //$scope.playerData = gems;

    $http.get('data.json')
      .success(function(res) {
        $scope.playerData = res;
      });

  });
  **/

angular.module('practicalAssignmentApp').controller('loadPlayersController', ['$scope', '$http', function($scope, $http) {
  //  $scope.testValue = "this is a test";
  //test for data bind
  //$scope.playerData = gems;



  $http.get('data/data.json').success(function(data) {
    $scope.playerData = data;
  });


  /*test for json file
  $http.get('http://mysafeinfo.com/api/data?list=englishmonarchs&format=json').success(function(data) {
    $scope.playerData = data;
  });
  */

}]);

/*
  .controller('addPlayerController', function($scope) {


  });
*/


/* test data
var gems = [{
  firstName: "andy",
  Surname: "crowe",
  Sex: "images/icon-male.png",
  Tier: "images/tier_gold.png",
  Email: "1@andrewcrowe.nz"

}, {
  firstName: "andy",
  Surname: "crowe",
  Sex: "images/icon-male.png",
  Tier: "images/tier_gold.png",
  Email: "1@andrewcrowe.nz"

}, {
  firstName: "andy",
  Surname: "crowe",
  Sex: "images/icon-male.png",
  Tier: "images/tier_gold.png",
  Email: "1@andrewcrowe.nz"

}];
*/


/* test angular code to load local file
var json = require('data.json');
*/
