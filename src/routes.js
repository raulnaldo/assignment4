(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/data/templates/categories.template.html',
    controller: 'MainMenuAppController as mainList',
    resolve: {
      data: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })
  .state('categories', {
    url: '/categories/{name}',
    templateUrl: 'src/data/templates/items.template.html',
    controller: "DataItemsController as itemDetail",
    resolve: {
      menus: ['MenuDataService','$stateParams', function (MenuDataService,$stateParams) {
        return MenuDataService.getItemsForCategory($stateParams.name);
      }]
    }
  })
  .state('categories.items', {
    url: '/item-detail/{itemId}',
    templateUrl: 'src/data/templates/items.detail.template.html',
    controller: "ItemDeltailDescriptionController as itemDetDescController"
  }) ;
}

})();
