function BackendService($http) {

  // list index
  this.getLists = function() {
    return $http.get('/lists')
  };

}

BackendService.$inject = ['$http']

angular
  .module('app')
  .service('BackendService', BackendService)
