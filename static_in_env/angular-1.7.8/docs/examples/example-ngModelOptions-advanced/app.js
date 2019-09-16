(function(angular) {
  'use strict';
angular.module('optionsExample', [])
  .component('modelUpdateDemo', {
    templateUrl: 'template.html',
    controller: function() {
      this.name = 'Chinua';

      this.options = {
        updateOn: 'default blur click',
        debounce: {
          default: 2000,
          blur: 0,
          '*': 1000
        }
      };

      this.updateEvents = function() {
        var eventList = this.options.updateOn.split(' ');
        eventList.push('*');
        var events = {};

        for (var i = 0; i < eventList.length; i++) {
          events[eventList[i]] = this.options.debounce[eventList[i]];
        }

        this.events = events;
      };

      this.updateOptions = function() {
        var options = angular.extend(this.options, {
          updateOn: Object.keys(this.events).join(' ').replace('*', ''),
          debounce: this.events
        });

        this.form.input.$overrideModelOptions(options);
      };

      // Initialize the event form
      this.updateEvents();
    }
  });
})(window.angular);