function ListController($stateParams, BackendService ) {
  var ctrl = this;
  var id = $stateParams.id;

  var init = function() {
    BackendService
      .getList(id)
      .then(function(response) {
        var list = response.data
        ctrl.name = list.name
        ctrl.tasks = list.tasks
      });
  };

  init();

};

ListController.$inject = ['$stateParams', 'BackendService']

angular
  .module("app")
  .controller('ListController', ListController)
