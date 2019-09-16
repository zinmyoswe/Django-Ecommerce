(function(angular) {
  'use strict';
// Module: copyExample
angular.
  module('copyExample', []).
  controller('ExampleController', ['$scope', function($scope) {
    $scope.leader = {};

    $scope.reset = function() {
      // Example with 1 argument
      $scope.user = angular.copy($scope.leader);
    };

    $scope.update = function(user) {
      // Example with 2 arguments
      angular.copy(user, $scope.leader);
    };

    $scope.reset();
  }]);
})(window.angular);