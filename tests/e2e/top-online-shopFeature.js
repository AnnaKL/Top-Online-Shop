describe('Top online shop', function() {
	var WomenClothesLink = element(by.className('women-link'));
	var MenClothesLink = element(by.className('men-link'));
	var MenTab = element(by.className('men-tab'));
	var WomenTab = element(by.className('women-tab'));

  beforeEach(function(){
    browser.get('http://localhost:8100');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Shop');
  });

  it('can display Women\'s Clothes', function(){
  	WomenClothesLink.click();
  	expect(element(by.binding('item.name')).getText()).toEqual('Almond Toe Court Shoes, Patent Black');
  });

  it('can display Men\'s Clothes', function(){
  	MenClothesLink.click();
  	expect(element(by.binding('item.name')).getText()).toEqual('Leather Driver Saddle Loafers, Tan');
  });
});