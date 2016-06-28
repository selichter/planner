function NotesController($scope, BackendService) {
  var ctrl = this;
  var notes = [];
  ctrl.message = "this is the notes controller"


  var init = function() {
    BackendService
      .getNotes()
      .then(function(response) {
        ctrl.all = response.data
      })
  };


  init();

};

NotesController.$inject = ['$scope', 'BackendService']

angular
  .module("app")
  .controller('NotesController', NotesController)
