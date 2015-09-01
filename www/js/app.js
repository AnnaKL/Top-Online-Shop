
angular.module('shop', ['ionic','shop.controllers', 'shop.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleLightContent();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('welcome', {
    url: "/welcome",
    templateUrl: "templates/welcome.html",
    controller: 'ShopCtrl'
  })

    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  .state('tab.shop', {
      url: '/shop',
      views: {
      'tab-shop': {
      templateUrl: 'templates/tab-shop.html',
      controller: 'ShopCtrl'
     }
    }
  })
  .state('tab.basket', {
      url: '/basket',
      views: {
      'tab-basket': {
      templateUrl: 'templates/tab-basket.html',
      controller: 'ShopCtrl'
     }
    }
  })



  $urlRouterProvider.otherwise('/welcome');
})