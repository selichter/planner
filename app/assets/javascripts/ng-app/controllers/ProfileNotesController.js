function ProfileNotesController($scope, BackendService) {
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

ProfileNotesController.$inject = ['$scope', 'BackendService']

angular
  .module("app")
  .controller('ProfileNotesController', ProfileNotesController)
