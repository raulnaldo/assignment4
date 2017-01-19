(function () {
'use strict';

angular.module('MenuApp')
.controller('MainMenuAppController', MainMenuAppController);

MainMenuAppController.$inject = ['data'];
function MainMenuAppController(data) {
  var mainList = this;
  mainList.data=data;
  console.log(4,data);
}

})();
