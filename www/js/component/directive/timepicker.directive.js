(function () {
  'use strict';

  angular
    .module('app.directive')
    .directive('datePicker', datePicker);

  datePicker.$inject = [];

function datePicker() {
  return {
    restrict: 'A',
    scope: {
      'model': '='
    },
    link: function(scope, elem, attrs) {
    $(elem).pickatime({
        default: 'now',
        twelvehour: false, // change to 12 hour AM/PM clock from 24 hour
        donetext: 'OK',
        autoclose: false,
        vibrate: true // vibrate the device when dragging clock hand
    });

    //   $(elem).slider({
    //     value: +scope.model,
    //     slide: function(event, ui) {
    //       $scope.apply(function() {
    //         scope.model = ui.value;
    //       });
    //     }
    //   });
    }
  };
};

}());