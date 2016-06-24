function ProfileController($scope) {
  var ctrl = this;
  var message = "Here is a message";
  ctrl.message = message;
}

angular
  .module(app)
  .controller('ProfileController', ProfileController)
