function TasksController(BackendService) {
  var ctrl = this;
  var tasks = [];

  var init = function() {
    BackendService
      .getTasks()
      .then(function(response) {
        ctrl.all = response.data
      })
  };

  init();

};

TasksController.$inject = ['BackendService']

angular
  .module("app")
  .controller('TasksController', TasksController)
