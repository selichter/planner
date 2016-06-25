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
        url: '/lists', //index
        templateUrl: 'lists.html',
        controller: 'ListsController as lists'
      })
      .state('list', { //show
        url: '/list/:id',
        templateUrl: 'list.html',
        controller: 'ListController as list'
      })


      $urlRouterProvider.otherwise("/");
  })
