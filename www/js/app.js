angular.module('ionicApp', ['ionic'])



.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "tabs.html"
    })
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "home.html",
          controller: 'HomeTabCtrl'
        }
      }
    })
    .state('tabs.events', {
      url: "/events",
      views: {
        'home-tab': {
          templateUrl: "events.html"
        }
      }
    })
    .state('tabs.challenges', {
      url: "/challenges",
      views: {
        'home-tab': {
          templateUrl: "challenges.html"
        }
      }
    })
    .state('tabs.leaderboard', {
      url: "/leaderboard",
      views: {
        'home-tab': {
          templateUrl: "leaderboard.html"
        }
      }
    })
    .state('tabs.profile', {
      url: "/profile",
      views: {
        'home-tab': {
          templateUrl: "profile.html"
        }
      }
    })

    .state('tabs.event_info', {
      url: "/event_info",
      views: {
        'home-tab': {
          templateUrl: "event_info.html"
        }
      }
    })

    .state('tabs.coupons', {
      url: "/coupons",
      views: {
        'home-tab': {
          templateUrl: "coupons.html"
        }
      }
    });


   $urlRouterProvider.otherwise("/tab/home");

})

.controller('HomeTabCtrl', function($scope) {
  console.log('HomeTabCtrl');
});