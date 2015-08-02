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

  $scope.applyFivePoundVoucher = function() {
  	Stock.fivePoundVoucher();
  };

  $scope.applyFifteenPoundVoucher = function() {
  	console.log($scope.total)
  	if($scope.total > 50) {
        Stock.fifteenPoundVoucher();
      } else {
        alert("You need to spend more than $50 pounds to use this voucher.")
      }
    };	
});
