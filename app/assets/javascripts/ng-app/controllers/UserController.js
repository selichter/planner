function UserController($stateParams, BackendService ) {
  var ctrl = this;
  var id = $stateParams.id;

  var init = function() {
    BackendService
      .getUser(id)
      .then(function(response) {
        debugger;
        ctrl.email = response.data.email


      });
  };

  init();

};

UserController.$inject = ['$stateParams', 'BackendService']

angular
  .module("app")
  .controller('UserController', UserController)
