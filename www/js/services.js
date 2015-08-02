angular.module('shop.services', [])

.factory('Stock', function() {
	
  var order = [];
  var prices = [];
	var items = [{
        id: 0,
		    name: "Almond Toe Court Shoes, Patent Black",
        category: "Women's Footwear",
        price: 99,
        quantity: 5
    },
    { 
    	id: 1,
        name: "Suede Shoes, Blue",
        category: "Women's Footwear",
        price: 42,
        quantity: 4
    },
    {
    	id: 2,
        name: "Leather Driver Saddle Loafers, Tan",
        category: "Male Footwear",
        price: 34,
        quantity: 12
    },
    {
    	id: 3,
        name: "Flip Flops, Red",
        category: "Male Footwear",
        price: 19,
        quantity: 6
    },
    {
    	id: 4,
        name: "Flip Flops, Blue",
        category: "Male Footwear",
        price: 19,
        quantity: 0
    },
    {
    	id: 5,
        name: "Gold Button Cardigan, Black",
        category: "Women's Casualwear",
        price: 167,
        quantity: 6
    },
    {
    	id: 6,
        name: "Cotton Shorts, Medium Red",
        category: "Women's Casualwear",
        price: 30,
        quantity: 5
    },
    {
    	id: 7,
        name: "Fine Stripe Short Sleeve Shirt, Grey",
        category: "Male Casualwear",
        price: 49.99,
        quantity: 9
    },
    {
    	id: 8,
        name: "Fine Stripe Short Sleeve Shirt, Green",
        category: "Male Casualwear",
        price: 39.99,
        quantity: 3
    },
    {
    	id: 9,
        name: "Sharkskin Waistcoat, Charcoal",
        category: "Male Formalwear",
        price: 75,
        quantity: 2
    },
    {
    	id: 10,
        name: "Lightweight Patch Pocket Blazer, Deer",
        category: "Male Formalwear",
        price: 175,
        quantity: 1
    },
    {
    	id: 11,
        name: "Bird Print Dress, Black",
        category: "Women's Formalwear",
        price: 270,
        quantity: 10
    },
    {
    	id: 12,
        name: "Mid Twist Cut-Out Dress, Pink",
        category: "Women's Formalwear",
        price: 540,
        quantity: 5

	}];

	return {
    all: function() {
      return items;
    },
    get: function(itemId) {
      for (var i = 0; i < items.length; i++) {
        if (items[i].id === parseInt(itemId)) {
          return items[i];
        }
      }
      return null;
    },
    update: function(itemId) {
      for (var i = 0; i < items.length; i++) {
        if (items[i].id === parseInt(itemId)) {
          return items[i].quantity -= 1;
        }
      }
      return null;
    },
    updateBasket: function(itemId) {
      for (var i = 0; i < items.length; i++) {
        if (items[i].id === parseInt(itemId)) {
          order.push({id: items[i].id, name: items[i].name, price: items[i].price});
          prices.push(items[i].price);  
        }
      }
     return null;
    },
    order: function() {
      return order;
    },
    total: function() {
      for (var i = 0, total = 0; i < prices.length; total += prices[i++]);
      return total;
    },
    removeOrder: function(item) {
      order.splice(order.indexOf(item), 1);
      prices.splice(item.quantity, 1);
      console.log(prices)
    }

  };
});

