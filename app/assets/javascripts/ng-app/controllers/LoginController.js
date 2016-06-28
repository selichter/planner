function LoginController($scope) {
  $scope.message = "Log in Page";
}

LoginController.$inject = ['$scope'];

angular
  .module("app")
  .controller('LoginController', LoginController)
