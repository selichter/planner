function NoteController($stateParams, BackendService, $scope ) {
  var ctrl = this;
  var id = $stateParams.id;
  ctrl.id = $stateParams.id;

  var init = function() {
    BackendService
      .getNote(id)
      .then(function(response) {
        var note = response.data;
        ctrl.title = note.title;
        ctrl.content = note.content;
      });
  };

  init();

};

ListController.$inject = ['$stateParams', 'BackendService', '$scope']

angular
  .module("app")
  .controller('NoteController', NoteController)
