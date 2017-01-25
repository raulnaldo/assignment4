(function () {
'use strict';

angular.module('Data')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['categoriesItems'];
function ItemsController(categoriesItems) {
  var itemCrl = this;
  console.log('--> ItemsController()');
  console.log('    param(categoriesItems)',categoriesItems);
  itemCrl.data=categoriesItems.menu_items;
  itemCrl.category=categoriesItems.category;
  console.log('    itemCrl.data',itemCrl.data);
  console.log('<-- ItemsController()');
}

})();
