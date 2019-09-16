(function(angular) {
  'use strict';
angular.module('exampleNgOn', [])
  .component('main', {
    templateUrl: 'main.html',
    controller: function() {
      this.clickCount = 0;
      this.mouseoverCount = 0;

      this.loadingState = 0;
    }
  });
})(window.angular);