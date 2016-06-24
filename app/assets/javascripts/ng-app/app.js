angular
.module('app', [
    'ui.router',
    'templates',
    ])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('profile', {
        url: '/',
        templateUrl: 'profile.html',
        controller: 'ProfileController as profile'
      })
      .state('lists', {
        url: '/lists', //lists#index
        templateUrl: 'lists.html',
        controller: 'ListsController as lists'
      })

      $urlRouterProvider.otherwise("/");
  })


// routes are funny -- fix them
// http://localhost:3000/#/lists
