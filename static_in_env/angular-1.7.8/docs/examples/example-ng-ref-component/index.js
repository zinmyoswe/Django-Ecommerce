(function(angular) {
  'use strict';
angular.module('myApp', [])
.component('myToggle', {
  controller: function ToggleController() {
    var opened = false;
    this.isOpen = function() { return opened; };
    this.toggle = function() { opened = !opened; };
  }
});
})(window.angular);