(function(angular) {
  'use strict';
angular.module('timeExample', [])
  .component('timeExample', {
    templateUrl: 'timeExample.html',
    controller: function() {
      this.time = new Date(1970, 0, 1, 14, 57, 0);

      this.options = {
        timeSecondsFormat: 'ss',
        timeStripZeroSeconds: true
      };

      this.optionChange = function() {
        this.timeForm.timeFormatted.$overrideModelOptions(this.options);
        this.time = new Date(this.time);
      };
    }
  });
})(window.angular);