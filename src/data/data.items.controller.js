(function () {
'use strict';

angular.module('Data')
.controller('DataItemsController', DataItemsController);

DataItemsController.$inject = ['menus'];
function DataItemsController(menus) {
  var itemDetail = this;
  itemDetail.data=menus.menu_items;
  console.log('itemDetail.data',itemDetail.data);
}

})();
