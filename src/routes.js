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
    templateUrl: 'src/menuapp/templates/home.template.html',
  })

  .state('categories', {
    url: '/categories',
    templateUrl: 'src/data/templates/categories.template.html',
    controller: 'MainMenuAppController as mainList',
    resolve: {
      categoriesList: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })
  .state('items', {
    url: '/items/{categoryShortName}',
    templateUrl: 'src/data/templates/items.template.html',
    controller: "ItemsController as itemCrl",
    resolve: {
      categoriesItems: ['MenuDataService','$stateParams', function (MenuDataService,$stateParams) {
        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
      }]
    }
  })
  .state('items.items', {
    url: '/item-detail/{itemId}',
    templateUrl: 'src/data/templates/items.detail.template.html',
    controller: "ItemDeltailDescriptionController as itemDetDescController"
  }) ;
}

})();
