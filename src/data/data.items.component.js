(function () {
'use strict';

angular.module('Data')
.component('itemDetail', {
  templateUrl: 'src/data/templates/items.component.html',
  bindings: {
    data: '<'
  }
});
})();
