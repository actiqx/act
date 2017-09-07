(function () {
  'use strict';

  angular
    .module('app.service')
    .service('dashboardService', dashboardService)

  dashboardService.$inject = ['$http', 'server', 'exception', 'logger'];
  function dashboardService($http, server, exception, logger) {
    var servicecalls = {
      getdashboarddata: getdashboarddata
    };
    return servicecalls;

    function getdashboarddata() {

     return $http.get(`${server.host}${server.dashboard}`)
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
