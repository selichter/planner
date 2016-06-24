angular
.module('app', [
    'ui.router',
    'ngAnimate',
    'templates',
    'ngSanitize'
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
