'use strict';

/**
 * @ngdoc overview
 * @name usaidMockupsApp
 * @description
 * # usaidMockupsApp
 *
 * Main module of the application.
 */
angular
  .module('mapsApp', [
    'ngAnimate',
    'ngCookies',
    'ngRoute'
  ])
  .value('config',{
  })
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
