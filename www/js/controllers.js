angular.module('shop.controllers', [])


.controller('StockCtrl', function($scope, Stock) {
	$scope.stock = Stock.all();
	$scope.order = Stock.order();

	$scope.addToBasket = function(chatId){
    Stock.update(chatId);
    Stock.updateBasket(chatId); 
  }
});
