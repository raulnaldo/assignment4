(function () {
'use strict';

angular.module('Data')
.controller('ItemDeltailDescriptionController', ItemDeltailDescriptionController);

//Injectamos los parametros que vienen de routes.js menus, y $stateParams para obtener el parametro
ItemDeltailDescriptionController.$inject = ['categoriesItems','$stateParams'];
function ItemDeltailDescriptionController(categoriesItems,$stateParams) {
  var itemDetDescController = this;
  itemDetDescController.data=categoriesItems.menu_items[$stateParams.itemId];
  console.log('categoriesItems',categoriesItems);
  console.log('itemDetDescController.data',itemDetDescController.data);
}

})();
