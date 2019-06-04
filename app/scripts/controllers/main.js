'use strict';

/**
 * @ngdoc function
 * @name mapsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mapsApp
 */
angular.module('mapsApp')
  .controller('MainCtrl', function (contentFactory,$scope) {
    contentFactory.list($scope);
  });
