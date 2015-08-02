// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('shop', ['ionic', 'shop.controllers', 'shop.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('shopStock', {
    url: "/stock",
    templateUrl: "/templates/stock.html",
    controller: 'StockCtrl'
  })

    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  .state('tab.men', {
      url: '/men',
      views: {
      'tab-men': {
      templateUrl: 'templates/tab-men.html',
      controller: 'StockCtrl'
      }
    }
  })

  .state('tab.women', {
      url: '/women',
      views: {
      'tab-women': {
      templateUrl: 'templates/tab-women.html',
      controller: 'StockCtrl'
     }
    }
  })
  .state('tab.basket', {
      url: '/basket',
      views: {
      'tab-basket': {
      templateUrl: 'templates/tab-basket.html',
      controller: 'StockCtrl'
     }
    }
  })



     $urlRouterProvider.otherwise('/stock');
})