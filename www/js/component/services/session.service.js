(function () {
  'use strict';

  angular
    .module('app.service')
    .service('sessionService', sessionService)

  sessionService.$inject = ['$q', '$state'];
  function sessionService($q, $state) {

    var sessionData = {};
    sessionData.UserID="";
    sessionData.UserData = null;
    sessionData.UnReadNotificationCount = 4;
    sessionData.showBack = false;
    sessionData.showLoader = false;
    return sessionData;
  }

}());
