describe('Stock service', function(){
	var Stock
	var firstItem

	beforeEach(module('shop.services'));

	beforeEach(inject(function (_Stock_){
		Stock = _Stock_;
		firstItem = {
	        id: 0,
			name: "Almond Toe Court Shoes, Patent Black",
	        category: "Women's Footwear",
	        price: 99,
	        quantity: 5
	    };
	}))

	it('can get an instance of my factory', function(){
		expect(Stock).toBeDefined();
	});

	it('has 13 items in stock', function(){
		expect(Stock.all().length).toEqual(13);
	});

	it('can pull an item from the stock', function(){
	    expect(Stock.get(0).name).toEqual("Almond Toe Court Shoes, Patent Black")
	});

	it('can remove an item form stock and update quantity', function(){
		expect(Stock.get(0).quantity).toEqual(5);
		Stock.update(0);
		expect(Stock.get(0).quantity).toEqual(4);
	});

	it('can place an item in the order array', function(){
		Stock.updateBasket(0);
		expect(Stock.order()).toEqual([{id: 0, name: "Almond Toe Court Shoes, Patent Black", price: 99}]);
	});

	it('can calculate total price', function(){
		Stock.updateBasket(0);
		expect(Stock.total()).toEqual(99);
	});

	it('can calculate total price of more than one item', function(){
		Stock.updateBasket(0);
		Stock.updateBasket(0);
		Stock.updateBasket(0);
		expect(Stock.total()).toEqual(297);
	});

	it('can remove item from order', function(){
		Stock.updateBasket(0);
		expect(Stock.order()).toEqual([{id: 0, name: "Almond Toe Court Shoes, Patent Black", price: 99}]);
		Stock.removeOrder({id: 0, name: "Almond Toe Court Shoes, Patent Black", price: 99});
		expect(Stock.order()).toEqual([]);
	});

	it('updates total price when item returned to stock', function(){
		Stock.updateBasket(0);
		expect(Stock.total()).toEqual(99);
		Stock.removeOrder({id: 0, name: "Almond Toe Court Shoes, Patent Black", price: 99});
		expect(Stock.total()).toEqual(0);
	});

	it('updates quantity when item returned to stock', function(){
        expect(Stock.get(0).quantity).toEqual(5);
		Stock.update(0);
		expect(Stock.get(0).quantity).toEqual(4);
		Stock.returnItemToStock({id: 0, name: "Almond Toe Court Shoes, Patent Black", price: 99});
		expect(Stock.get(0).quantity).toEqual(5);
	});

	it('allows £5 to be applied', function(){
		Stock.updateBasket(0);
		expect(Stock.total()).toEqual(99);
		Stock.fivePoundVoucher();
		expect(Stock.total()).toEqual(94);

	});
});