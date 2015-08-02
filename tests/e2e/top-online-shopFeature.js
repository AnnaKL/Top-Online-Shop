describe('Top online shop', function() {
	var womenClothesLink = element(by.className('women-link'));
	var menClothesLink = element(by.className('men-link'));
  var basketLink = element(by.className('basket-link'));
  var pressButton = element(by.className('btn'));
  var basketItems = element.all(by.repeater('item in order')).first()


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
    pressButton.click();
    basketLink.click();
    expect(basketItems.element(by.binding('item.name')).getText()).toEqual('Almond Toe Court Shoes, Patent Black');
  });
  
  it('display out-of-stock button when item\'s quantity equal to 0', function(){
    womenClothesLink.click();
    pressButton.click();
    pressButton.click();
    pressButton.click();
    pressButton.click();
    pressButton.click();
    expect(element(by.className('out-of-stock')).isPresent()).toBe(true);
  });

  it('updates displayed quantity when item added to the basket', function(){
    womenClothesLink.click();
    expect(element(by.binding('item.quantity')).getText()).toEqual('Quantity: 5');
    pressButton.click();
    expect(element(by.binding('item.quantity')).getText()).toEqual('Quantity: 4');
  });

});