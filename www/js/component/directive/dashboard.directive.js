
(function () {
  'use strict';

  angular
    .module('app.directive')
    .directive('dashboardDir', dashboardDir);


  /** @ngInject */
  function dashboardDir() {


    var directive = {
      restrict: 'EA',
      scope: {
        item: '=',
        id: '=',
        ctrlfn: '&'
      },
      repalce: true,
      link: function (scope, elm, attrs) {
        scope.itemclick = function (id) {

          scope.ctrlfn({ id: id });

        }

      },
      templateUrl: 'js/component/directive/dashboardtemplate.html'



    };
    return directive;
  }



}());
