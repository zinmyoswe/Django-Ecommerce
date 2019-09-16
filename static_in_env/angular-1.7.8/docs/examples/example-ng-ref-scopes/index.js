(function(angular) {
  'use strict';
angular.module('myApp', [])
.component('myRoot', {
  templateUrl: 'root.html',
  controller: function() {
    this.wrappers = []; // initialize the array so that the wrappers are assigned into the parent scope
  }
})
.component('myToggle', {
  template: '<strong>myToggle</strong><button ng-click="$ctrl.toggle()" ng-transclude></button>',
  transclude: true,
  controller: function ToggleController() {
    var opened = false;
    this.isOpen = function() { return opened; };
    this.toggle = function() { opened = !opened; };
  }
})
.component('myWrapper', {
  transclude: true,
  template: '<strong>myWrapper</strong>' +
    '<div>ngRepeatToggle.isOpen(): {{$ctrl.ngRepeatToggle.isOpen() | json}}</div>' +
    '<my-toggle ng-ref="$ctrl.ngRepeatToggle"><ng-transclude></ng-transclude></my-toggle>'
});
})(window.angular);