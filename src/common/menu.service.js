(function () {
  'use strict';

  angular.module('common')
  .service('MenuService', MenuService);


  MenuService.$inject=['$http','ApiPath'];
  function MenuService($http, ApiPath) {
    var service = this;

    service.getCategories = function(){
      return $http({
        method :  'GET',
        url : (ApiPath +'/categories.json')
      }).then(function (response) {
        return response.data;
      });

    };
    service.getMenuItems = function(category){
/*
        return $http({
          method :  'GET',
          url : (ApiPath +'/menu_items.json'),
          params : {
            category : category
          }
        }).then(function (response) {
          return response.data;
        });
*/
        var config = {};
        if(category){
          config.params = {
            category : category
          }
        }
        return $http.get(ApiPath +'/menu_items.json', config).then(function (response) {
          return response.data;
        });
      };

      service.getMenuItem = function(menuItem){
        return $http.get(ApiPath +'/menu_items/'+menuItem+".json").then(function (response) {
          return response.data;
        });

      }
    };
})();
