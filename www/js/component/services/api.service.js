(function() {
  'use strict';

  angular
    .module('app.service')
    .service('apiService', apiService);

  /* @ngInject */
  function apiService() {
    var that = this;
    this.taskInfo = {value: "Home Repair"};
  

  var getSomething = function() {
    return that.taskInfo;
  };

  return {
    getSomething: getSomething
  };
}
})();
