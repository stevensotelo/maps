'use strict';

/**
 * @ngdoc service
 * @name mapsApp.climaFactory
 * @description
 * # climaFactory
 * Factory in the usaidMockupsApp.
 */
angular.module('mapsApp')
  .factory('contentFactory',['$http','config','CSV2Json', function ($http,config,CSV2Json) {    
    var dataFactory = {};

    dataFactory.listar = function () {
     
      var items = $http.get(config.data_clima).then(function(response){        
        return response.data;
      });      
      
      return items;
    }
    
    return dataFactory;
  }]);
