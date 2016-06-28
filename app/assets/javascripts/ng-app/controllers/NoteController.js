function NoteController($stateParams, BackendService, $scope ) {
  var ctrl = this;
  var id = $stateParams.id;

  var init = function() {
    BackendService
      .getNote(id)
      .then(function(response) {
        ctrl.title = response.data.title;
        ctrl.content = response.data.content;
      });
  };

  init();

};

ListController.$inject = ['$stateParams', 'BackendService', '$scope']

angular
  .module("app")
  .controller('NoteController', NoteController)
