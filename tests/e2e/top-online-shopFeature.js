describe('Top online shop', function() {
	var womenClothesLink = element(by.className('women-link'));
	var menClothesLink = element(by.className('men-link'));
  var basketLink = element(by.className('basket-link'));
  var addToBasket = element(by.className('btn'));
  var basketItems = element.all(by.repeater('item in order')).first()
  var removeFromBasket = element(by.className('delete'));
  var applyFiveVoucher = element(by.className('five-pounds'));
  var applyTenVoucher = element(by.className('ten-pounds'));
  var tenVoucherAlert = element(by.className('ten-alert'));
  var applyFifteenVoucher = element(by.className('fifteen-pounds'));
 



  beforeEach(function(){
    browser.get('http://localhost:8100');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Shop');
  });

  it('can display Women\'s Clothes', function(){
  	womenClothesLink.click();
  	expect(element(by.binding('item.name')).getText()).toEqual('Almond Toe Court Shoes, Patent Black');
  });

  it('can display Men\'s Clothes', function(){
  	menClothesLink.click();
  	expect(element(by.binding('item.name')).getText()).toEqual('Leather Driver Saddle Loafers, Tan');
  });

  it('can add item to the basket', function(){
    womenClothesLink.click();
    addToBasket.click();
    basketLink.click();
    expect(basketItems.element(by.binding('item.name')).getText()).toEqual('Almond Toe Court Shoes, Patent Black');
  });
  
  it('display out-of-stock button when item\'s quantity equal to 0', function(){
    womenClothesLink.click();
    addToBasket.click();
    addToBasket.click();
    addToBasket.click();
    addToBasket.click();
    addToBasket.click();
    expect(element(by.className('out-of-stock')).isPresent()).toBe(true);
  });

  it('updates displayed quantity when item added to the basket', function(){
    womenClothesLink.click();
    expect(element(by.binding('item.quantity')).getText()).toEqual('Quantity: 5');
    addToBasket.click();
    expect(element(by.binding('item.quantity')).getText()).toEqual('Quantity: 4');
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
    expect(basketItems.element(by.binding('item.name')).getText()).toEqual('Almond Toe Court Shoes, Patent Black');
    removeFromBasket.click();
    expect(element(by.binding('item.name')).getText()).toEqual('');
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
    expect(element(by.binding('tenAlert')).getText()).toEqual('You need to spend more than $50 pounds to use this voucher.');
  });

  it('updates total price when 15£ voucher applied', function(){
    womenClothesLink.click();
    addToBasket.click();
    basketLink.click();
    expect(element(by.className('total-price')).getText()).toEqual('Total: £99');
    applyFifteenVoucher.click();
    expect(element(by.className('total-price')).getText()).toEqual('Total: £84');
  });


});