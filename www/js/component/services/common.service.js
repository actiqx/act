
(function() {
    'use strict';

    angular
        .module('app.service')
        .service('commonService', commonService);

        commonService.$inject = ['$q', '$state', '$http', '$window','server'];

        function commonService($q, $state, $http, $window, server) {
          var serviceCalls = {
                  pageGo: pageGo,

                  getTimeFromDateTime:getTimeFromDateTime
              };
          return serviceCalls;

          ////////////Methods////////////////

          function pageGo(pageName) {
          $state.go('app.'+pageName);
          };


          function getTimeFromDateTime(_datetime){
            var hours="";
            var mins="";
            var secs="";
            var dateTimeStr=new Date(_datetime);
            hours= dateTimeStr.getHours();
            var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12;
            if (parseInt(hours) < 10) {hours = "0" + hours;} else hours = hours;
            if (parseInt(dateTimeStr.getMinutes()) < 10) {mins = "0" + dateTimeStr.getMinutes();} else mins = dateTimeStr.getMinutes();
            if (parseInt(dateTimeStr.getSeconds()) < 10) {secs = "0" + dateTimeStr.getSeconds();} else secs = dateTimeStr.getSeconds();
            var ampm = parseInt(dateTimeStr.getHours()) >= 12 ? 'pm' : 'am';
            return hours+":"+mins+":"+secs+" "+ampm;
          };
        }
})();
