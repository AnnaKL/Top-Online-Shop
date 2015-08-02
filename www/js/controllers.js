angular.module('shop.controllers', [])


.controller('StockCtrl', function($scope, Stock) {
	$scope.stock = Stock.all();
});
