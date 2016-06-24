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

      $urlRouterProvider.otherwise("/");
  })
