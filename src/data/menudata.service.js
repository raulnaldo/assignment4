(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http','$q'];
function MenuDataService($http,$q) {
  var service = this;
  var deferred = $q.defer();
  console.log('1');
  var categories=[];
  service.getAllCategories = function () {
    console.log('2');
    var response = $http({
        method: "GET",
        url: ('https://davids-restaurant.herokuapp.com/categories.json')
      })
      .then(function(response){
        deferred.resolve(response.data);
        console.log('3',response);
      })
      .catch(function (error) {
        console.log(error);
      });
      return deferred.promise;
  };
  service.getItemsForCategory = function (categoryShortName) {
    console.log('21');
    var response = $http({
        method: "GET",
        url: ('https://davids-restaurant.herokuapp.com/menu_items.json?category='+categoryShortName)
      })
      .then(function(response){
        deferred.resolve(response.data);
        console.log('22',response);
      })
      .catch(function (error) {
        console.log(error);
      });
      return deferred.promise;
  };
}
})();
