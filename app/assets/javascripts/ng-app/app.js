angular
.module('app', [
    'ui.router',
    'templates',
    ])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'login.html',
        controller: 'LoginController as login',
      })
      .state('profile', {
        url: '/',
        templateUrl: 'profile.html',
        controller: 'ProfileController as profile'
      })
      .state('profile.lists', {
        url: 'lists',
        templateUrl: 'profile/lists.html',
        controller: 'ProfileListsController as lists'
      })
      // .state('lists', {
      //   url: '/lists', //index
      //   templateUrl: 'lists.html',
      //   controller: 'ListsController as lists'
      // })
      .state('list', { //show lists - list includes tasks
        url: '/list/:id',
        templateUrl: 'list.html',
        controller: 'ListController as list'
      })
      .state('tasks', {
        url: '/tasks',
        templateUrl: 'tasks.html',
        controller: 'TasksController as tasks'
      })
      .state('task', {
        url: '/task/:id',
        templateUrl: 'task.html',
        controller: 'TaskController as task'
      })
      .state('profile.notes', {
        url: 'notes',
        templateUrl: 'profile/notes.html',
        controller: 'ProfileNotesController as notes'
      })
      .state('notes', {
        url: '/notes',
        templateUrl: 'notes.html',
        controller: 'NotesController as notes'
      })
      .state('note', {
        url: '/note/:id',
        templateUrl: 'note.html',
        controller: 'NoteController as note'
      })
      .state('user', {
        url: '/user/:id',
        templateUrl: 'user.html',
        controller: 'UserController as user'
      })



      $urlRouterProvider.otherwise("/");
  })
