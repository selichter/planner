function ListsController(BackendService) {
  var ctrl = this;
  var lists = [];

  var init = function() {
    BackendService
      .getLists()
      .then(function(response) {
        ctrl.all = response.data
      })
  };

  init();

};

ListsController.$inject = ['BackendService']

angular
  .module("app")
  .controller('ListsController', ListsController)
