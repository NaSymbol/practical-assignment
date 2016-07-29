'use strict';

/**
 * @ngdoc overview
 * @name practicalAssignmentApp
 * @description
 * # practicalAssignmentApp
 *
 * Main module of the application.
 */
angular
  .module('practicalAssignmentApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

//setup application
  var app = angular.module('myApp', []);


  //controller to add players into table from JSON data
  app.controller('loadPlayersController', function($scope, $http) {
      $http.get("data.json")
      .then(function (response) {});
  });

//controller to add player to table
  app.controller('addPlayerController',function(){});
