(function(angular) {
  'use strict';
angular.module('inputExample', [])
  .controller('inputController', function($scope) {
    $scope.items = [
      {name: 'Apricot', id: 443},
      {name: 'Clementine', id: 972},
      {name: 'Durian', id: 169},
      {name: 'Jackfruit', id: 982},
      {name: 'Strawberry', id: 863}
    ];
  })
  .component('basicAutocomplete', {
    bindings: {
      items: '<',
      onSelect: '&'
    },
    templateUrl: 'autocomplete.html',
    controller: function($element, $scope) {
      var that = this;
      var ngModel;

      that.$postLink = function() {
        ngModel = $element.find('input').controller('ngModel');

        ngModel.$formatters.push(function(value) {
          return (value && value.name) || value;
        });

        ngModel.$parsers.push(function(value) {
          var match = value;
          for (var i = 0; i < that.items.length; i++) {
            if (that.items[i].name === value) {
              match = that.items[i];
              break;
            }
          }

          return match;
        });
      };

      that.selectItem = function(item) {
        ngModel.$setViewValue(item);
        ngModel.$processModelValue();
        that.onSelect({item: item});
      };
    }
  });
})(window.angular);