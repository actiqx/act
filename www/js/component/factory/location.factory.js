(function() {
    'use strict';

    angular
        .module('app.factory')
        .factory('GeoService', GeoService);

        GeoService.$inject = ['$ionicPlatform', '$cordovaGeolocation'];
    function GeoService($ionicPlatform,$cordovaGeolocation) {
        var positionOptions = {timeout: 10000, enableHighAccuracy: true};
        
          return {
            getPosition: function() {
              return $ionicPlatform.ready()
                .then(function() {
                  return $cordovaGeolocation.getCurrentPosition(positionOptions);
                })
            }
          };
    }
})();