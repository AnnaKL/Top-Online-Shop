describe('Top online shop', function() {

	var womenClothesLink = element(by.className('women-link'));
	var menClothesLink = element(by.className('men-link'));
  var basketLink = element(by.className('basket-link'));
  var addToBasket = element(by.repeater('item in stock').row(0)).element(by.css('#btn'));
  var removeFromBasket = element(by.id('delete'));
  var applyFiveVoucher = element(by.id('five-pounds'));
  var applyTenVoucher = element(by.id('ten-pounds'));
  var tenVoucherAlert = element(by.id('ten-alert'));
  var applyFifteenVoucher = element(by.id('fifteen-pounds'));
  var basketItems = element.all(by.repeater('item in order').column('item.name')).first();
  var item = element.all(by.repeater('item in stock').column('item.name')).first();
  var itemQuantity = element.all(by.repeater('item in stock').column('item.quantity')).first();
 



  beforeEach(function(){
    browser.get('http://localhost:8100');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Shop');
  });

  it('can display Women\'s Clothes', function(){
  	womenClothesLink.click();
  	expect(item.getText()).toEqual('Almond Toe Court Shoes, Patent Black');
  });

  it('can display Men\'s Clothes', function(){
  	menClothesLink.click();
  	expect(item.getText()).toEqual('Leather Driver Saddle Loafers, Tan');
  });

  it('can add item to the basket', function(){
    womenClothesLink.click();
    addToBasket.click();
    basketLink.click();
    expect(basketItems.getText()).toEqual('Almond Toe Court Shoes, Patent Black');
  });
  
  it('display out-of-stock button when item quantity is 0', function(){
    womenClothesLink.click();
    addToBasket.click();
    addToBasket.click();
    addToBasket.click();
    addToBasket.click();
    addToBasket.click();
    expect(element(by.id('out-of-stock')).isPresent()).toBe(true);
  });

  it('updates displayed quantity when item added to the basket', function(){
    womenClothesLink.click();
    expect(itemQuantity.getText()).toEqual('Quantity: 5');
    addToBasket.click();
    expect(itemQuantity.getText()).toEqual('Quantity: 4');
  });

  it('can calculate and display total price', function(){
    womenClothesLink.click();
    addToBasket.click();
    addToBasket.click();
    addToBasket.click();
    basketLink.click();
    expect(element(by.className('total-price')).getText()).toEqual('Total: £297');
  });

  it('can remove item from the basket', function(){
    womenClothesLink.click();
    addToBasket.click();
    basketLink.click();
    expect(basketItems.getText()).toEqual('Almond Toe Court Shoes, Patent Black');
    removeFromBasket.click();
    expect(item.getText()).toEqual('');
  });

  it('updates total price when item removed from the basket', function(){
    womenClothesLink.click();
    addToBasket.click();
    basketLink.click();
    expect(element(by.className('total-price')).getText()).toEqual('Total: £99');
    removeFromBasket.click();
    expect(element(by.className('total-price')).getText()).toEqual('Total: £0');
  });

  it('updates total price when 5£ voucher applied', function(){
    womenClothesLink.click();
    addToBasket.click();
    basketLink.click();
    expect(element(by.className('total-price')).getText()).toEqual('Total: £99');
    applyFiveVoucher.click();
    expect(element(by.className('total-price')).getText()).toEqual('Total: £94');
  });

  it('5£ voucher can\'t be applied when total price is equal to 0', function(){
    womenClothesLink.click();
    basketLink.click();
    expect(element(by.className('total-price')).getText()).toEqual('Total: £0');
    applyFiveVoucher.click();
    expect(element(by.className('total-price')).getText()).toEqual('Total: £0');
  });

  it('updates total price when 10£ voucher applied', function(){
    womenClothesLink.click();
    addToBasket.click();
    basketLink.click();
    expect(element(by.className('total-price')).getText()).toEqual('Total: £99');
    applyTenVoucher.click();
    expect(element(by.className('total-price')).getText()).toEqual('Total: £89');
  });

  it('10£ voucher can\'t be applied when total price is equal to 0', function(){
    womenClothesLink.click();
    basketLink.click();
    expect(element(by.className('total-price')).getText()).toEqual('Total: £0');
    applyTenVoucher.click();
    expect(element(by.className('total-price')).getText()).toEqual('Total: £0');
  });

  it('10£ voucher can\'t be applied when total price is less than 50', function(){
    menClothesLink.click();
    addToBasket.click();
    basketLink.click();
    expect(element(by.className('total-price')).getText()).toEqual('Total: £34');
    applyTenVoucher.click();
    expect(element(by.binding('tenAlert')).getText()).toEqual('You need to spend more than $50 pounds to use £10 voucher.');
  });

  it('updates total price when 15£ voucher applied', function(){
    womenClothesLink.click();
    addToBasket.click();
    basketLink.click();
    expect(element(by.className('total-price')).getText()).toEqual('Total: £99');
    applyFifteenVoucher.click();
    expect(element(by.className('total-price')).getText()).toEqual('Total: £84');
  });

  it('15£ voucher can\'t be applied when total price is equal to 0', function(){
    womenClothesLink.click();
    basketLink.click();
    expect(element(by.className('total-price')).getText()).toEqual('Total: £0');
    applyFifteenVoucher.click();
    expect(element(by.className('total-price')).getText()).toEqual('Total: £0');
  });

  it('15£ voucher can\'t be applied when total price is less than 75 and order doesn\'t include footwear', function(){
    menClothesLink.click();
    addToBasket.click();
    basketLink.click();
    expect(element(by.className('total-price')).getText()).toEqual('Total: £34');
    applyFifteenVoucher.click();
    expect(element(by.binding('fifteenAlert')).getText()).toEqual('You need to spend more than $75 pounds and buy a footwear to use £15 voucher.');
  });


});