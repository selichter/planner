function TaskController($stateParams, BackendService ) {
  var ctrl = this;
  var id = $stateParams.id;

  var init = function() {
    BackendService
      .getTask(id)
      .then(function(response) {
        ctrl.item = response.data.item
        ctrl.status = response.data.status
        ctrl.due_date = response.data.due_date

      });
  };

  init();

};

TaskController.$inject = ['$stateParams', 'BackendService']

angular
  .module("app")
  .controller('TaskController', TaskController)
