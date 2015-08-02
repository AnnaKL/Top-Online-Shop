angular.module('shop.controllers', [])


.controller('StockCtrl', function($scope, Stock) {
	$scope.stock = Stock.all();

	$scope.addToBasket = function(chatId){
    Stock.update(chatId);
    Stock.updateBasket(chatId); 
  }
});
