(function () {
'use strict';

angular.module('Data')
.component('items', {
  templateUrl: 'src/data/templates/items.component.html',
  bindings: {
    data: '<',
    category: '<'
  }
});
})();
