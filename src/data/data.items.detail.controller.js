(function () {
'use strict';

angular.module('Data')
.controller('ItemDeltailDescriptionController', ItemDeltailDescriptionController);

//Injectamos los parametros que vienen de routes.js menus, y $stateParams para obtener el parametro
ItemDeltailDescriptionController.$inject = ['menus','$stateParams'];
function ItemDeltailDescriptionController(menus,$stateParams) {
  var itemDetDescController = this;
  itemDetDescController.data=menus.menu_items[$stateParams.itemId];
  console.log('menus',menus);
  console.log('itemDetDescController.data',itemDetDescController.data);
}

})();
