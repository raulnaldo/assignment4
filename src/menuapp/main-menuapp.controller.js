(function () {
'use strict';

angular.module('MenuApp')
.controller('MainMenuAppController', MainMenuAppController);

MainMenuAppController.$inject = ['data'];
function MainMenuAppController(data) {
  console.log('MainMenuAppController',data);
  var mainList = this;
  mainList.items=data;
}

})();
