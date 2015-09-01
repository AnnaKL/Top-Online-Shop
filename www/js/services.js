angular.module('shop.services', [])

.factory('Shop', function($ionicPopup) {
  var order = [];
  var prices = [];
  var voucherValue = 0;
  var isFiveVoucherApplied = false;
  var isTenVoucherApplied = false;
  var isFifteenVoucherApplied = false;
  var items = [
    {"Female Footwear": [{
        name: "Suede Shoes, Blue",
        price: 42,
        quantity: 4,
        category: "Womens Footwear",
        image: "img/blue-shoes.png"
    },
    {
        name: "Almond Toe Court Shoes, Patent Black",
        price: 99,
        quantity: 5,
        category: "Womens Footwear",
        image: "img/black-shoes.png"
    }]},
    {"Female Formalwear": [{
        name: "Bird Print Dress, Black",
        price: 270,
        quantity: 10,
        category: "Women's Formalwear",
        image: "img/bird-dress.png"
    },
    {
        name: "Mid Twist Cut-Out Dress, Pink",
        price: 540,
        quantity: 5,
        category: "Women's Formalwear",
        image: "img/pink-dress.png"
    }]},
    {"Female Casualwear": [{
        name: "Gold Button Cardigan, Black",
        price: 167,
        quantity: 6,
        category: "Women's Casualwear",
        image: "img/black-sweater.png"
    },
    {
        name: "Cotton Shorts, Medium Red",
        price: 30,
        quantity: 5,
        category: "Women's Casualwear",
        image: "img/cotton-shorts.png"
    }]},
    {"Male Footwear": [{
        name: "Leather Driver Saddle Loafers, Tan",
        price: 34,
        quantity: 12,
        category: "Male Footwear",
        image: "img/leather-brown.png"
    },
    {
        name: "Flip Flops, Red",
        price: 19,
        quantity: 6,
        category: "Male Footwear",
        image: "img/red-flip.png"
    },
    {
        name: "Flip Flops, Blue",
        category: "Male Footwear",
        price: 19,
        quantity: 0,
        category: "Male Footwear",
        image: "img/blue-flip.png"
    }]},
    {"Male Formalwear": [{
        name: "Sharkskin Waistcoat, Charcoal",
        price: 75,
        quantity: 2,
        category: "Male Formalwear",
        image: "img/waistcoat.png"
    },
    {
        name: "Lightweight Patch Pocket Blazer, Deer",
        price: 175,
        quantity: 1,
        category: "Male Formalwear",
        image: "img/blazer.png"
    }]},
    {"Male Casualwear": [{
        name: "Fine Stripe Short Sleeve Shirt, Grey",
        price: 49.99,
        quantity: 9,
        category: "Male Casualwear",
        image: "img/shirt.png"
    },
    {
        name: "Fine Stripe Short Sleeve Shirt, Green",
        price: 39.99,
        quantity: 3,
        category: "Male Casualwear",
        image: "img/strip-shirt.png"
    }]
  }];

  return {
    all: function() {
      return items;
    },
    addToBasket: function(item) {
      order.push(item);
      prices.push(item.price)
      item.quantity-=1;
    },
    order: function() {
      return order;
    },
    totalPrice: function() {
     var total = 0
     for (var i = 0; i < prices.length; total += prices[i++]);
       if(total != 0) {
         total = parseFloat(total).toFixed(2) - voucherValue;
      }
      return total;
    },
    removeItemFromBasket: function(item) {
      order.splice(order.indexOf(item), 1);
      prices.splice(prices.indexOf(item.price), 1);
      item.quantity ++;
      voucherValue = 0;
      this.availableVouchers();
    },
    areShoesOrdered: function() {
      for(var i=0; i < order.length; i++) {
        if(order[i].category.indexOf("Footwear") !=-1) {
          return true
        }
      }
    },
    applyVoucher: function(voucher) {
      if(voucher === 5 && isFiveVoucherApplied === false) {this.applyFivePoundsVoucher()};
      if(voucher === 10 && isTenVoucherApplied === false) {this.applyTenPoundsVoucher()};
      if(voucher === 15 && isFifteenVoucherApplied === false) {this.applyFifteenPoundsVoucher()};
    },
    availableVouchers: function() {
      isFiveVoucherApplied = false;
      isTenVoucherApplied = false;
      isFifteenVoucherApplied = false;
    },
    applyFivePoundsVoucher: function() {
      isFiveVoucherApplied = true;
      voucherValue += 5;
    },
    applyTenPoundsVoucher: function() {
      if(this.totalPrice() > 50 ) {
        isTenVoucherApplied = true;
        voucherValue += 10;
      } else {$ionicPopup.alert({ title: "You need to spend more than $50 pounds to use £10 voucher."})}
    },
    applyFifteenPoundsVoucher: function() {
      if(this.totalPrice() > 75 && this.areShoesOrdered()) {
        isFifteenVoucherApplied = true;
        voucherValue += 15;
      } else {$ionicPopup.alert({title: "You need to spend more than $75 pounds and buy a footwear to use £15 voucher."})}
    }
  };
});

