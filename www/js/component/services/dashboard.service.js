(function () {
  'use strict';

  angular
    .module('app.service')
    .service('dashboardService', dashboardService)

  dashboardService.$inject = ['$http','sharedService','server', 'exception', 'logger'];
  function dashboardService($http,sharedService,server, exception, logger) {
    var servicecalls = {
      getdashboarddata: getdashboarddata
    };
    return servicecalls;

    function getdashboarddata() {

     return sharedService.GetListData(`${server.dashboard}`)
        .then(success)
        .catch(fail);

    }

    function success(response) {
  logger.success(response.data);
      return response.data;
    }

    function fail(e) {
      return exception.catcher('XHR Failed for getPeople')(e);
    }

  }

}());
