(function () {
'use strict';

angular.module('Data')
.controller('items', items);


items.$inject = ['$stateParams', 'items'];
function items($stateParams, items) {
  var itemDetail = this;
  var item = items[$stateParams.itemId];
  itemDetail.name = item.name;
  itemDetail.quantity = item.quantity;
  itemDetail.description = item.description;
}

})();
