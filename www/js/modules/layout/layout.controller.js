(function () {
  'use strict';

  angular
    .module('app.layout')
    .controller('layoutCtrl', layoutCtrl)

  layoutCtrl.$inject = ['$scope','$state', '$ionicModal', '$timeout'];
  function layoutCtrl($scope,$state, $ionicModal, $timeout) {
    var vm = this;

    init();

    function init() {
    }
    // Form data for the login modal
    vm.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('js/modules/login/login.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    vm.closeLogin = function () {
      vm.modal.hide();
    };

    // Open the login modal
    vm.login = function () {
      vm.modal.show();
    };

    // Perform the login action when the user submits the login form
    vm.doLogin = function () {
      console.log('Doing login', vm.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function () {
        vm.closeLogin();
      }, 1000);
    };


  }

}());
