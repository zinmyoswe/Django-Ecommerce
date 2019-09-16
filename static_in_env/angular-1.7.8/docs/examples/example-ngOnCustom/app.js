(function(angular) {
  'use strict';
angular.module('exampleNgOn', [])
  .component('main', {
    templateUrl: 'main.html',
    controller: function() {
      this.eventLog = '';

      this.listener = function($event) {
        this.eventLog = 'Event with type "' + $event.type + '" fired at ' + $event.detail;
      };
    }
  })
  .component('childComponent', {
    templateUrl: 'child.html',
    controller: function($element) {
      this.fireEvent = function() {
        var event = new CustomEvent('customtype', { detail: new Date()});

        $element[0].dispatchEvent(event);
      };
    }
  });
})(window.angular);