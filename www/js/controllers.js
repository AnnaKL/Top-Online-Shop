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

  $scope.applyTenPoundVoucher = function() {
  	console.log($scope.total)
  	if($scope.total > 50) {
        Stock.tenPoundVoucher();
        $scope.hideTenVoucherAlert();
      } else {
      	$scope.showTenVoucherAlert();
        // alert("You need to spend more than $50 pounds to use this voucher.")
      }
    };

  $scope.showTenVoucherAlert = function() {
  	$scope.tenAlert = "You need to spend more than $50 pounds to use this voucher.";
  }	

   $scope.hideTenVoucherAlert = function() {
  	$scope.tenAlert = ""; 
  }	
});
