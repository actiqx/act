(function() {
    'use strict';

    angular
        .module('app.changepassword')
        .controller('changepasswordCtrl', changepasswordCtrl);

   changepasswordCtrl.$inject = ['$q', 'logger','$window', '$http', '$state', 'ActiqxApiFactory', 'ACTIQX_SERVICE_URI'];
 function changepasswordCtrl($q, logger, $window, $http, $state, ActiqxApiFactory, ACTIQX_SERVICE_URI) {
        var vm = this;
        vm.newPassword='';
        vm.rePassword='';
        vm.ChangePwdCall=function(){
          var requestData= $.param({
                firstName: $scope.firstName,
                lastName: $scope.lastName,
                age: $scope.age
            });

            $http.put('/api/Default?'+ data)
            .success(function (data, status, headers) {
                $scope.ServerResponse = data;
            })
            .error(function (data, status, header, config) {

            });
        }
    }
})();
