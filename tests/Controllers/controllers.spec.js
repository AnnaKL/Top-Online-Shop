describe('Controllers', function(){
	var scope;
	var control;
	var ShopMock;


	beforeEach(module('shop.controllers'));

	beforeEach(function(){
		ShopMock = jasmine.createSpyObj('Shop', ['all', 'get', 'update', 'updateBasket', 'order'])

    inject(function($rootScope, $controller){
		  scope = $rootScope.$new();
		  control = $controller('ShopCtrl', {$scope: scope, Shop: ShopMock});
     });
	 });


  it("should have a scope variable defined", function() {
    expect(scope).toBeDefined();
	});

});