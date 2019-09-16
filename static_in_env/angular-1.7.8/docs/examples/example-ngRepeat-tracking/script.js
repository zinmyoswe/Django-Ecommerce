(function(angular) {
  'use strict';
angular.module('ngRepeat', ['ngAnimate']).controller('repeatController', function($scope) {
  var friends = [
    {name:'John', age:25},
    {name:'Mary', age:40},
    {name:'Peter', age:85}
  ];

  $scope.removeFirst = function() {
    $scope.friends.shift();
  };

  $scope.updateAge = function() {
    $scope.friends.forEach(function(el) {
      el.age = el.age + 5;
    });
  };

  $scope.copy = function() {
    $scope.friends = angular.copy($scope.friends);
  };

  $scope.reset = function() {
    $scope.friends = angular.copy(friends);
  };

  $scope.reset();
});
})(window.angular);