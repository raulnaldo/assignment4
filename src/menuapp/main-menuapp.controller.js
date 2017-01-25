(function () {
'use strict';

angular.module('MenuApp')
.controller('MainMenuAppController', MainMenuAppController);

MainMenuAppController.$inject = ['categoriesList'];
function MainMenuAppController(categoriesList) {
  console.log('MainMenuAppController',categoriesList);
  var mainList = this;
  mainList.items=categoriesList;
}

})();
