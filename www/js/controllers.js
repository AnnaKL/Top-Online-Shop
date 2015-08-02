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
  	if($scope.total > 50) {
        Stock.tenPoundVoucher();
        $scope.hideTenVoucherAlert();
      } else {
      	$scope.showTenVoucherAlert();
      }
    };

  $scope.showTenVoucherAlert = function() {
  	$scope.tenAlert = "You need to spend more than $50 pounds to use this voucher.";
  }	

  $scope.hideTenVoucherAlert = function() {
  	$scope.tenAlert = ""; 
  }	

  $scope.applyFifteenPoundVoucher = function() {
  	var items = $scope.order;
  

  	for(var i=0; i < items.length; i++) {
  			console.log($scope.order[i].category)
			if( items[i].category === "Women's Footwear" || items[i].category === "Male Footwear" ) {
		  	if($scope.total > 75) {
		        Stock.fifteenPoundVoucher();
		        $scope.hideFifteenVoucherAlert();
		    }
		  } else {
		     $scope.showFifteenVoucherAlert();
	   }
    }
  };

  $scope.showFifteenVoucherAlert = function() {
  	$scope.fifteenAlert = "You need to spend more than $75 pounds  and buy a footwear to use this voucher.";
  }	

  $scope.hideFifteenVoucherAlert = function() {
  	$scope.fifteenAlert = ""; 
  }
});
