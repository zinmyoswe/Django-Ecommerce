(function(angular) {
  'use strict';
angular.module('animationExample', ['ngAnimate']).component('cancelExample', {
  templateUrl: 'template.html',
  controller: function($element, $animate) {
    this.runner = null;

    this.addClass = function() {
      this.runner = $animate.addClass($element.find('div'), 'red');
      var ctrl = this;
      this.runner.finally(function() {
        ctrl.runner = null;
      });
    };

    this.removeClass = function() {
      this.runner = $animate.removeClass($element.find('div'), 'red');
      var ctrl = this;
      this.runner.finally(function() {
        ctrl.runner = null;
      });
    };

    this.cancel = function() {
      $animate.cancel(this.runner);
    };
  }
});
})(window.angular);