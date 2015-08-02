describe('Controllers', function(){
	var scope;
	var control;
	var StockMock;


	beforeEach(module('shop.controllers'));

	beforeEach(function(){
		StockMock = jasmine.createSpyObj('Stock', ['all', 'get'])

    inject(function($rootScope, $controller){
	  scope = $rootScope.$new();
	  control = $controller('StockCtrl', {$scope: scope, Stock: StockMock});
    });
	 });


  it("should have a scope variable defined", function() {
    expect(scope).toBeDefined();
	});

});