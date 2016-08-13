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
