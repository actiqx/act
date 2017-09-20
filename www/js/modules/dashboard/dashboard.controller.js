(function () {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('dashboardCtrl', dashboardCtrl)

  dashboardCtrl.$inject = ['$q', 'logger', 'dashboardService','commonService','sessionService','dataFactory'];
  function dashboardCtrl($q, logger, dashboardService,commonService,sessionService,dataFactory) {

    var vm = this;
    vm.tileInfoList = [];
    activate();
    function activate() {
      var promises = [getDashboard()];
      return $q.all(promises).then(function () {
        logger.info('Activated Dashboard View');
      });
    }

    /*function navViewCtrl() {
      commonService.pageGo('/dashboard');
    }*/
    function getDashboard() {
      return dashboardService.getdashboarddata().then(function (data) {
        vm.tileInfoList = angular.fromJson(data);
        return vm.tileInfoList;
      })
    };

    vm.goToCategory=function(id) {

      var selectedCategory = _.filter(vm.tileInfoList, function (c) {
        return c._id == id;
      })[0];
      if (selectedCategory.childrens.length > 0) {
        vm.subCategoryList = selectedCategory.childrens;
        dataFactory.setsomething(vm.subCategoryList);
        commonService.pageGo("category");
        sessionService.showBack = true;
      }

    }
vm.popAlert=function(id) {
  alert("HI");

}
  }

}());


