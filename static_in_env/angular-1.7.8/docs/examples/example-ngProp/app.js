(function(angular) {
  'use strict';
angular.module('exampleNgProp', [])
  .component('main', {
    templateUrl: 'main.html',
    controller: function($sce) {
      this.safeContent = '<strong>Safe content</strong>';
      this.unsafeContent = '<button onclick="alert(\'Hello XSS!\')">Click for XSS</button>';
      this.trustedUnsafeContent = $sce.trustAsHtml(this.unsafeContent);
    }
  });
})(window.angular);