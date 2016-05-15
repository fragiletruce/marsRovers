/**
 * Created by kenmiller on 14/05/2016.
 */

describe('displayController', function() {


    beforeEach(module('marsApp'));

    var $controller;

    beforeEach(inject(function (_$controller_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

describe('replay', function() {
            it('reset to start position', function () {
                var $scope = {};
                var controller = $controller('displayController', { $scope: $scope });


            });



});


   describe('tableCoordToGrid', function() {
            it('should map table row and col to x,y coords', function () {
                var $scope = {};
                var controller = $controller('displayController', { $scope: $scope });

                var row= 5,col=0;
                var coords = $scope.tableCoordToGrid(row,col);

                expect(coords.x).toBe(0);
                expect(coords.y).toBe(0);

                 row= 0;col=0;
                 coords = $scope.tableCoordToGrid(0,0);

                expect(coords.x).toBe(0);
                expect(coords.y).toBe(5);

                //coords = $scope.tableCoordToGrid(2,3);

                //expect(coords.x).toBe(3);
                //expect(coords.y).toBe(3);

                 //coords = $scope.tableCoordToGrid(5,1);

                //expect(coords.x).toBe(0);
                //expect(coords.y).toBe(1);

            });



});

});