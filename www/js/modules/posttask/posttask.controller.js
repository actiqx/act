(function () {
  'use strict';

  angular
    .module('app.posttask')
    .controller('posttaskCtrl', posttaskCtrl)

  posttaskCtrl.$inject = ['taskService', 'dataFactory','dashboardService','$http'];
  function posttaskCtrl(taskService, dataFactory,dashboardService,$http) {
    var vm = this;
    vm.postTaskInfo = {};
    vm.postTaskInfo.title = "";
    vm.postTaskInfo.info = "";
    vm.postTaskInfo.place = "";
    vm.postTaskInfo.location = {};
    vm.postTaskInfo.location.lat = "";
    vm.postTaskInfo.location.lng = "";
    vm.postTaskInfo.selectedDate = new Date();
    // list of `state` value/display objects
    vm.categories = loadAllCategory();
    vm.selectedTaskCategory = null;
    vm.getLocation = getLocation
    vm.searchText = null;


    /*
   * Search for states... use $timeout to simulate
   * remote dataservice call.
   */
    init();

    function init() {
    }


vm.getCategories= function(){
 return dashboardService.getdashboarddata().then(function (data) {
        vm.tileInfoList = angular.fromJson(data);
        return vm.tileInfoList;
      })
}


    function getLocation(search) {

      return $http.get('https://maps.googleapis.com/maps/api/js', {
        params: {
          libraries: search,
          key:"AIzaSyAlR-o3BLBeZi2zuwsTATa3KzrOUSLQ2pg"
        }
      }).then(function (response) {
        console.log('response {}', response);
        return response.data.results
      })
    }

    function loadAllCategory() {
      var selectedCatego = dataFactory.getsomething();
      if (!selectedCatego) {
        var allCategories = ["Car Service", "Home Repair", "Furniture Services", "Pick and Delivery Service", "MCar Service", "YHome Repair", "NFurniture Services", "SPick and Delivery Service", "XCar Service", "THome Repair", "YFurniture Services", "UPick and Delivery Service"];
        return allCategories.map(function (catg) {
          return {
            value: catg.toLowerCase(),
            display: catg
          };
        });
      }
      else {
        vm.selectedCategory = selectedCatego.title;
        return vm.selectedCategory;
      }
    }



    vm.locAddress = {
      name: '',
      place: '',
      components: {
        location: {
          lat: '',
          long: ''
        }
      }
    };
    vm.doPostTask = function () {

      vm.postTaskInfo.place = vm.locAddress.name;
      vm.postTaskInfo.location.lat = vm.locAddress.components.location.lat;
      vm.postTaskInfo.location.lng = vm.locAddress.components.location.long;

      var requestData = vm.postTaskInfo;
      var requestHeader = {
        headers: { 'Content-Type': 'application/json' }
      };

      posttaskdata(requestData, requestHeader);
    };

    function posttaskdata(requestData, requestHeader) {
      return taskService.posttaskdata(requestData, requestHeader);
      };

  }

}());
