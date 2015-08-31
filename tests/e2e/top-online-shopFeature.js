describe('Top online shop', function() {


  var firstItem = element.all(by.repeater('item in items').column('item.name')).first();
  var itemQuantity = element.all(by.repeater('item in items').column('item.quantity')).first();
	var shopLink = element(by.id('shop-link'));
  var basketLink = element(by.id('basket-link'));
  var addToBasket = element(by.repeater('item in items').row(0)).element(by.css('.button'));
  var basketItems = element.all(by.repeater('(index, item) in shop.order() track by $index').column('item.name')).first();
  var totalPrice = element(by.id('total-price'));
  var removeFromBasket = element(by.repeater('(index, item) in shop.order() track by $index').row(0)).element(by.id('delete'));
  var applyFiveVoucher = element(by.id('five-pounds'));
  var applyTenVoucher = element(by.id('ten-pounds'));
  var applyFifteenVoucher = element(by.id('fifteen-pounds'));
  var alertBox = element(by.className('popup-title'));





  beforeEach(function(){
    browser.get('http://localhost:8100');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Shop');
  });

  it('can display an item from the stock', function(){
  	shopLink.click();
  	expect(firstItem.getText()).toEqual('Suede Shoes, Blue');
  });

  it('can add item to the basket', function(){
    shopLink.click();
    addToBasket.click();
    basketLink.click();
    expect(basketItems.getText()).toEqual('Suede Shoes, Blue');
  });

  it('display out-of-stock button when item quantity is 0', function(){
    shopLink.click();
    addToBasket.click();
    addToBasket.click();
    addToBasket.click();
    addToBasket.click();
    expect(element(by.id('out-of-stock')).isPresent()).toBe(true);
  });

  it('updates displayed quantity when item added to the basket', function(){
    shopLink.click();
    expect(itemQuantity.getText()).toEqual('Quantity: 4');
    addToBasket.click();
    expect(itemQuantity.getText()).toEqual('Quantity: 3');
  });

  it('can calculate and display total price', function(){
    shopLink.click();
    addToBasket.click();
    addToBasket.click();
    basketLink.click();
    expect(element(by.id('total-price')).getText()).toEqual('Total: £84');
  });

  it('can remove item from the basket', function(){
    shopLink.click();
    addToBasket.click();
    basketLink.click();
    expect(basketItems.getText()).toEqual('Suede Shoes, Blue');
    removeFromBasket.click();
    expect(basketItems).toBeUndefined;
  });

  it('updates total price when item removed from the basket', function(){
    shopLink.click();
    addToBasket.click();
    basketLink.click();
    expect(totalPrice.getText()).toEqual('Total: £42');
    removeFromBasket.click();
    expect(totalPrice.getText()).toEqual('Total: £0');
  });

  it('updates total price when 5£ voucher applied', function(){
    shopLink.click();
    addToBasket.click();
    basketLink.click();
    expect(totalPrice.getText()).toEqual('Total: £42');
    applyFiveVoucher.click();
    expect(totalPrice.getText()).toEqual('Total: £37');
  });

  it('5£ voucher can\'t be applied when total price is equal to 0', function(){
    shopLink.click();
    basketLink.click();
    expect(totalPrice.getText()).toEqual('Total: £0');
    applyFiveVoucher.click();
    expect(totalPrice.getText()).toEqual('Total: £0');
  });

  it('updates total price when 10£ voucher applied', function(){
    shopLink.click();
    addToBasket.click();
    addToBasket.click();
    basketLink.click();
    expect(totalPrice.getText()).toEqual('Total: £84');
    applyTenVoucher.click();
    expect(totalPrice.getText()).toEqual('Total: £74');
  });

  it('10£ voucher can\'t be applied when total price is equal to 0', function(){
    shopLink.click();
    basketLink.click();
    expect(totalPrice.getText()).toEqual('Total: £0');
    applyTenVoucher.click();
    expect(totalPrice.getText()).toEqual('Total: £0');
  });

  it('10£ voucher can\'t be applied when total price is less than 50', function(){
    shopLink.click();
    addToBasket.click();
    basketLink.click();
    expect(totalPrice.getText()).toEqual('Total: £42');
    applyTenVoucher.click();
    expect(totalPrice.getText()).toEqual('Total: £42');
  });

  it('updates total price when 15£ voucher applied', function(){
    shopLink.click();
    addToBasket.click();
    addToBasket.click();
    basketLink.click();
    expect(totalPrice.getText()).toEqual('Total: £84');
    applyFifteenVoucher.click();
    expect(totalPrice.getText()).toEqual('Total: £69');
  });

  it('15£ voucher can\'t be applied when total price is equal to 0', function(){
    shopLink.click();
    basketLink.click();
    expect(totalPrice.getText()).toEqual('Total: £0');
    applyFifteenVoucher.click();
    expect(totalPrice.getText()).toEqual('Total: £0');
  });

  it('All three vouchers can be applied when requirements are met', function(){
    shopLink.click();
    addToBasket.click();
    addToBasket.click();
    basketLink.click();
    expect(totalPrice.getText()).toEqual('Total: £84');
    applyFifteenVoucher.click();
    applyTenVoucher.click();
    applyFiveVoucher.click();
    expect(totalPrice.getText()).toEqual('Total: £54');
  });

  it('15£ voucher can\'t be applied when total price is less than 50', function(){
    shopLink.click();
    addToBasket.click();
    basketLink.click();
    expect(totalPrice.getText()).toEqual('Total: £42');
    applyTenVoucher.click();
    expect(alertBox.getText()).toEqual('You need to spend more than $50 pounds to use £10 voucher.');
  });

  it('15£ voucher can\'t be applied when total price is less than 75 and order doesn\'t include footwear', function(){
    shopLink.click();
    addToBasket.click();
    basketLink.click();
    expect(totalPrice.getText()).toEqual('Total: £42');
    applyFifteenVoucher.click();
    expect(alertBox.getText()).toEqual('You need to spend more than $75 pounds and buy a footwear to use £15 voucher.');
  });
});