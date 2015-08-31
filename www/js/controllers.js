angular.module('shop.controllers', [])


.controller('ShopCtrl', function($scope, Shop) {
  $scope.shop = Shop;
});
