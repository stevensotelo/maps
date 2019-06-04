'use strict';

/**
 * @ngdoc service
 * @name mapsApp.climaFactory
 * @description
 * # climaFactory
 * Factory in the usaidMockupsApp.
 */
angular.module('mapsApp')
  .factory('contentFactory',function ($http,config) {    
    var dataFactory = {};
    var url = 'data/content.json';
    
    dataFactory.list = function (scope) {
      $http.get(url).success(function (data) {
        scope.posts = data
      })
      .error(function (data) {
        console.log(data);
        console.log("there was an error");
      });
    }
    
    return dataFactory;
  });
