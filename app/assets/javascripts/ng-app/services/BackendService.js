function BackendService($http) {

  // list index
  this.getLists = function() {
    return $http.get('/lists')
  };

  //list show
  this.getList = function(id) {
    return $http.get('/lists/' + id)
  };

  // task index
  this.getTasks = function() {
    return $http.get('/tasks')
  };


}

BackendService.$inject = ['$http']

angular
  .module('app')
  .service('BackendService', BackendService)
