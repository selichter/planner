function ListsController($scope, BackendService) {
  var ctrl = this;
  var lists = [];
  ctrl.lists = [];

  var List = function(name) {
    this.name = name
  };



  var init = function() {
    BackendService
      .getLists()
      .then(function(response) {
        ctrl.all = response.data
      })
  };

  // refactor
  $scope.addList = function() {
    var data = JSON.stringify({list: $scope.newList});
    var list = new List($scope.newList);
    BackendService
      .postList(data)
      .success(function(response){
        $('ul#lists').append('<li>' + '<a href="#/list/' + response.id + '"">' + response.name + '</a>' + '</li>')
        $('form#new_list').trigger("reset");
      })
      .error(function(response) {
        console.log("error - " + response)
      });
  }

  init();



};

ListsController.$inject = ['$scope', 'BackendService']

angular
  .module("app")
  .controller('ListsController', ListsController)
