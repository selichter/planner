function ListController($stateParams, BackendService ) {
  var ctrl = this;
  var id = $stateParams.id;

  var init = function() {
    BackendService
      .getList(id)
      .then(function(response) {
        ctrl.name = response.data.name
      });
  };

  init();

};

ListController.$inject = ['$stateParams', 'BackendService']

angular
  .module("app")
  .controller('ListController', ListController)
