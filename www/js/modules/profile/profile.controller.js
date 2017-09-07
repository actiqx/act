(function() {
    'use strict';

    angular
        .module('app.profile')
        .controller('profileCtrl', profileCtrl);

    profileCtrl.$inject = [];

    /* @ngInject */
    function profileCtrl() {
        var vm = this;
        vm.verificationList=[];
        vm.verificationList=[
          {
            Name:"Facebook",
            Icon:"facebook-app-symbol.svg"
          },
          {
            Name:"Google Plus",
            Icon:"google-plus.svg"
          },
          {
            Name:"Twitter",
            Icon:"twitter-logo-silhouette.svg"
          }
        ];
        vm.ratings ={ name: 'Service', number: '3.5' };
        vm.getStars = function(rating) {
          // Get the value
          var val = parseFloat(rating);
          // Turn value into number/100
          var size = val/5*100;
          return size + '%';
        }
        vm.ratingInfo=[
          {
            StatusName:"Posted",
            StatusCount:2
          },
          {
            StatusName:"Completed",
            StatusCount:6
          },
          {
            StatusName:"Review",
            StatusCount:4
          }
        ];
        vm.skillInfo=["Pujari","Carpenter","HomeRepairService"];
}
})();
