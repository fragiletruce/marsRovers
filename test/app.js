/**
 * Created by kenmiller on 25/04/2016.
 */
/**
 * Created by kenmiller on 20/04/2016.
 */
describe('app', function() {
it('should work', function() {
expect(true).toEqual(true);
});
});


describe('testsController', function() {


 beforeEach(module('marsApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

   //describe('$scope.rovers', function() {
   //
   //
   //         it('should be that rover at index 1 is named Rover 2', function () {
   //             var $scope = {};
   //            var controller = $controller('testsController', { $scope: $scope });
   //            expect($scope.rovers[1]).toEqual('Rover 2');
   //
   //         });
   // });



});


