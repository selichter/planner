function BackendService($http) {

  // list index
  this.getLists = function() {
    return $http.get('/lists')
  };

  //list show
  this.getList = function(id) {
    return $http.get('/lists/' + id)
  };

}

BackendService.$inject = ['$http']

angular
  .module('app')
  .service('BackendService', BackendService)
