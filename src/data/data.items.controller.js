(function () {
'use strict';

angular.module('Data')
.controller('DataItemDetailController', DataItemDetailController);

DataItemDetailController.$inject = ['data'];
function DataItemDetailController(data) {
  var mainList = this;
  mainList.data=data;
  console.log('DataItemDetailController',data);
}

})();
