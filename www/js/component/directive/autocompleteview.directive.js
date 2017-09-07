(function () {
    'use strict';

    angular
        .module ('app.directive')
        .directive ('autoCompleteViewValue', autoCompleteViewValue);



    function autoCompleteViewValue() {
var directive = {
      restrict: 'A',
      scope: {
        ngModel: '=',
        autoCompleteViewValue: '@',
      },
      link: link
    }
    return directive

    function link(scope, element, attrs, ngForm) {

      scope.$watch('ngModel', function (value) {
        if (value && angular.isObject(value)) {
          setInputViewValue(value[getVisibleProperty()])
        }
      })

      function getVisibleProperty() {
        return scope.autoCompleteViewValue
      }

      function setInputViewValue(value) {
        return element.val(value)
      }
    }

    }

} ());
