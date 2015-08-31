describe('Shop service', function(){
	var shop
	var firstItem
	var ionicPopup

	beforeEach(function(){
  module('shop.services', function($provide){
    $provide.service('$ionicPopup', function(){
      this.alert= jasmine.createSpy('alert');
    });
      });
  });

	beforeEach(inject(function (_Shop_, $ionicPopup){
		ionicPopup = $ionicPopup
    Shop = _Shop_
	  firstItem = {
		    name: "Almond Toe Court Shoes, Patent Black",
        price: 99,
        quantity: 5,
        category: "Womens Footwear",
      }
	}))

	it('can get an instance of my factory', function(){
		expect(Shop).toBeDefined();
	});

	it('can place an item in the basket', function(){
		Shop.addToBasket(firstItem);
		expect(Shop.order()).toEqual([{name: "Almond Toe Court Shoes, Patent Black", price: 99, quantity: 4, category: "Womens Footwear"}]);
	});

	it('can remove an item form stock and update quantity', function(){
		expect(firstItem.quantity).toEqual(5);
		Shop.addToBasket(firstItem);
		expect(Shop.order()[0].quantity).toEqual(4);
	});

	it('can calculate total price', function(){
		Shop.addToBasket(firstItem);
		expect(Shop.totalPrice()).toEqual(99);
	});

	it('can calculate total price of more than one item', function(){
		Shop.addToBasket(firstItem);
		Shop.addToBasket(firstItem);
		Shop.addToBasket(firstItem);
		expect(Shop.totalPrice()).toEqual(297);
	});

	it('can remove item from the basket', function(){
		Shop.addToBasket(firstItem);
		expect(Shop.order()).toEqual([{name: "Almond Toe Court Shoes, Patent Black", price: 99, quantity: 4, category: "Womens Footwear"}]);
		Shop.removeItemFromBasket(firstItem);
		expect(Shop.order()).toEqual([]);
	});

	it('updates total price when item returned to stock', function(){
		Shop.addToBasket(firstItem);
		expect(Shop.totalPrice()).toEqual(99);
		Shop.removeItemFromBasket(firstItem);
		expect(Shop.totalPrice()).toEqual(0);
	});

	it('updates quantity when item returned to stock', function(){
    expect(firstItem.quantity).toEqual(5);
		Shop.addToBasket(firstItem);
		expect(firstItem.quantity).toEqual(4);
		Shop.removeItemFromBasket(firstItem)
		expect(firstItem.quantity).toEqual(5);
	});

	it('allows £5 voucher to be applied', function(){
		Shop.addToBasket(firstItem);
		expect(Shop.totalPrice()).toEqual(99);
		Shop.applyVoucher(5);
		expect(Shop.totalPrice()).toEqual(94);
	});

	it('£5 voucher can\'t be applied twice', function(){
		Shop.addToBasket(firstItem);
		expect(Shop.totalPrice()).toEqual(99);
		Shop.applyVoucher(5);
		Shop.applyVoucher(5);
		expect(Shop.totalPrice()).toEqual(94);
	});

	it('£5 voucher can\'t be apploed when order is equal 0', function(){
		expect(Shop.totalPrice()).toEqual(0);
		Shop.applyVoucher(5);
		expect(Shop.totalPrice()).toEqual(0);
	});

	it('allows £10 voucher to be applied', function(){
    Shop.addToBasket(firstItem);
		expect(Shop.totalPrice()).toEqual(99);
		Shop.applyVoucher(10);
		expect(Shop.totalPrice()).toEqual(89);
	});

	it('£10 voucher can\'t be applied twice', function(){
		Shop.addToBasket(firstItem);
		expect(Shop.totalPrice()).toEqual(99);
		Shop.applyVoucher(10);
		Shop.applyVoucher(10);
		expect(Shop.totalPrice()).toEqual(89);
	});

	it('£10 voucher can\'t be apploed when order is equal 0', function(){
		expect(Shop.totalPrice()).toEqual(0);
		Shop.applyVoucher(10);
		expect(Shop.totalPrice()).toEqual(0);
	});

	it('allows £15 voucher to be applied', function(){
	  Shop.addToBasket(firstItem);
		expect(Shop.totalPrice()).toEqual(99);
		Shop.applyVoucher(15);
		expect(Shop.totalPrice()).toEqual(84);
	});

	it('£15 voucher can\'t be applied twice', function(){
		Shop.addToBasket(firstItem);
		expect(Shop.totalPrice()).toEqual(99);
		Shop.applyVoucher(15);
		Shop.applyVoucher(15);
		expect(Shop.totalPrice()).toEqual(84);
	});

	it('£15 voucher can\'t be applied when order is equal 0', function(){
	  expect(Shop.totalPrice()).toEqual(0);
		Shop.applyVoucher(15);
		expect(Shop.totalPrice()).toEqual(0);
	})
});