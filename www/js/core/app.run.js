(function () {
  'use strict';

  angular
    .module('app')
    .run(runApp)

  runApp.$inject = ['$ionicPlatform', '$http', '$cordovaPushV5', '$rootScope','GCM'];

  function runApp($ionicPlatform, $http, $cordovaPushV5, $rootScope,GCM) {

    $ionicPlatform.ready(function () {
      var options = {
        android: {
          senderID: GCM.senderID
        },
        ios: {
          alert: "true",
          badge: "true",
          sound: "true"
        },
        windows: {}
      };
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
      // initialize Push notification
      // register push notification and get local push token
      localStorage.myPush = ''; // I use a localStorage variable to persist the token
      // initialize
      $cordovaPushV5.initialize(options).then(function (result) {
        // start listening for new notifications
        // start listening for new notifications
        $cordovaPushV5.onNotification();
        // start listening for errors
        $cordovaPushV5.onError();

        // register to get registrationId
        $cordovaPushV5.register().then(function (registrationId) {
          // save `registrationId` somewhere;
          alert(registrationId);
          localStorage.myPush = registrationId;
        },
          function (err) {
            // handle error
          });

      })

    });
    /*
 * Push notification events
 */
    $rootScope.$on('$cordovaPushV5:notificationReceived', function (event, data) {  // use two variables here, event and data !!!
      if (data.additionalData.foreground === false) {
        // do something if the app is in foreground while receiving to push - handle in app push handling
        // For the case in app
        $cordovaToast
          .show(data.message, 'long', 'top')
          .then(function (success) {
            // $location.path('/app/notification');
            // $rootScope.$apply();
          }, function (error) {
            alert(error);
          });
      } else {
        // For the case out app
        $cordovaToast
          .show(data.message, 'long', 'center')
          .then(function (success) {
            // $state.go('app.notification');
          }, function (error) {
            alert(error);
          });
      }
    
    
      if (Device.isOniOS()) {
        if (data.additionalData.badge) {
          $cordovaPushV5.setBadgeNumber(NewNumber).then(function (result) {
             alert(result);
          }, function (err) {
             alert(err);
          });
        }
      }

      $cordovaPushV5.finish().then(function (result) {
        // OK finished - works only with the dev-next version of pushV5.js in ngCordova as of February 8, 2016
      }, function (err) {
        // handle error
      });
    });

    $rootScope.$on('$cordovaPushV5:errorOccurred', function (event, error) {
      // handle error
      alert(error);
    });
  }

}());

