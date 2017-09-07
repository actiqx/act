(function(){
    'use strict';

    angular
        .module('app.dashboard')
        .controller('CategoryCtrl', CategoryCtrl)

     CategoryCtrl.$inject = ['commonService','sessionService','dataFactory','dashboardService'];
    function CategoryCtrl(commonService,sessionService,dataFactory,dashboardService){
        var vm = this;

       vm.subCategoryList=dataFactory.getsomething();


        vm.selectSubCategory=function(_id){
          console.log("SubCategory : "+_id);
          var selectedCategory = _.filter(vm.subCategoryList, function(c){ return c._id == _id; })[0];
          dataFactory.setsomething(selectedCategory);
          commonService.pageGo("posttask");
          sessionService.showBack = true;
        };

    }

}());
