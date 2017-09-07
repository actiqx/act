(function(){
    'use strict';

    angular
        .module('app.service')
        .service('taskService', taskService)

    taskService.$inject = ['$http', 'server', 'exception', 'logger'];
    function taskService($http, server, exception, logger){

var servicecalls = {
      posttaskdata:  posttaskdata
    };
    return servicecalls;
function posttaskdata(requestData,requestHeader){

   return $http.post(`${server.host}${server.posttask}`,requestData,requestHeader)
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
