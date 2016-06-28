function ListController($stateParams, BackendService, $scope ) {
  var ctrl = this;
  var id = $stateParams.id;
  ctrl.id = $stateParams.id;

  var Task = function(item, due_date) {
    this.item = item;
    this.due_date = due_date;
    this.finished = false;
    // this.list_id = data.list_id;
    debugger;
  }

  var init = function() {
    BackendService
      .getList(id)
      .then(function(response) {
        var list = response.data;
        ctrl.name = list.name;
        ctrl.tasks = list.tasks;
      });
  };

  $scope.addTask = function() {
    var data = JSON.stringify({item: $scope.taskItem, due_date: $scope.taskDate, finished: false, list_id: ctrl.id });
    var task = new Task($scope.taskItem, $scope.taskDate);
    BackendService
      .postTask(data)
      .success(function(response){
        // debugger;
        // $('ul#lists').append('<li>' +  response.item  + '</li>')
        // $('form#new_item').trigger("reset");
        ctrl.lists.push(task)

      })
      .error(function(response) {
        console.log("error - " + response)
      });
  }


  init();

};

ListController.$inject = ['$stateParams', 'BackendService', '$scope']

angular
  .module("app")
  .controller('ListController', ListController)
