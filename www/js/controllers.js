angular.module('shop.controllers', [])


.controller('StockCtrl', function($scope, Stock) {
	$scope.stock = Stock.all();
	$scope.order = Stock.order();

	$scope.showTotalPrice = function() {
    $scope.total = Stock.total();
  }

	$scope.addToBasket = function(itemId){
    Stock.update(itemId);
    Stock.updateBasket(itemId); 
  }

  $scope.removeItemFromBasket = function(item) {
  	Stock.removeOrder(item);
  	Stock.returnItemToStock(item);
  };
});
