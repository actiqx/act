(function () {
  'use strict';

  angular
    .module('app')
    .config(configApp)

  configApp.$inject = ['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider'];

  function configApp($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'js/modules/layout/layout-temp.html',
        controller: 'layoutCtrl as vm'

      })
        .state('app.login', {
        url: '/login',
        views: {
          'tab-home': {
            templateUrl: 'js/modules/login/login.html',
            controller: 'loginCtrl as vm'

          }
        }
      })
       .state('app.signup', {
        url: '/signup',
        views: {
          'tab-home': {
            templateUrl: 'js/modules/signup/signup.html',
            controller: 'signupCtrl as vm'

          }
        }
      })
       .state('app.changepassword', {
        url: '/changepassword',
        views: {
          'tab-home': {
            templateUrl: 'js/modules/changepassword/changepassword.html',
            controller: 'changepasswordCtrl as vm'
          }
        }
      })
      .state('app.dashboard', {
        url: '/dashboard',
        views: {
          'tab-home': {
            templateUrl: 'js/modules/dashboard/dashboard.html',
            controller: 'dashboardCtrl as vm'
          }
        }
      })
      .state('app.category', {
        url: '/category',
        views: {
          'tab-home': {
            templateUrl: 'js/modules/dashboard/categorydetails.html',
            controller: 'CategoryCtrl as vm'
          }
        }
      })
      .state('app.search', {
        url: '/search',
        views: {
          'tab-search': {
            templateUrl: 'js/modules/search/search.html'

          }
        }
      })
      .state('app.posttask', {
        url: '/posttask',
        views: {
          'tab-posttask': {
            templateUrl: 'js/modules/posttask/posttask.html',
            controller: 'posttaskCtrl as vm'

          }
        }
      })
      .state('app.chat', {
        url: '/chat',
        views: {
          'tab-chat': {
            templateUrl: 'js/modules/chat/chat.html',
            controller: 'chatCtrl as vm'

          }
        }
      })
      .state('app.help', {
        url: '/help',
        views: {
          'tab-home': {
            templateUrl: 'js/modules/help/help.html'

          }
        }
      })
      .state('app.payment', {
        url: '/payment',
        views: {
          'tab-home': {
            templateUrl: 'js/modules/payment/payment.html'

          }
        }
      })
       .state('app.profile', {
        url: '/profile',
        views: {
          'tab-home': {
            templateUrl: 'js/modules/profile/profile.html',
            controller: 'profileCtrl as vm'

          }
        }
      })
      .state('app.password', {
        url: '/login',
        views: {
          'tab-home': {
            templateUrl: 'js/modules/login/login.html',
            controller: 'loginCtrl as vm'

          }
        }
      });




    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/dashboard');
    $ionicConfigProvider.tabs.position("bottom");
  }

}());
