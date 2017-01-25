(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http','$q'];
function MenuDataService($http,$q) {
  var service = this;
  service.getAllCategories = function () {
    var deferred = $q.defer();
    console.log('--> service.getAllCategories()');
    var response = $http({
        method: "GET",
        url: ('https://davids-restaurant.herokuapp.com/categories.json')
      })
      .then(function(response){
        console.log('response.data:',response);
        deferred.resolve(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
      console.log('<-- service.getAllCategories()');
      return deferred.promise;
  };
  service.getItemsForCategory = function (categoryShortName) {
    var deferred = $q.defer();
    console.log('--> service.getItemsForCategory(',categoryShortName,')');
    var response = $http({
        method: "GET",
        url: ('https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName)
      })
      .then(function(response){
        console.log('response.data:',response.data);
        deferred.resolve(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
      console.log('<-- service.getItemsForCategory()');
      return deferred.promise;
  };
}
})();
