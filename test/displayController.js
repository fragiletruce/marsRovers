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
                //expect(marsRovers.rovers[1].x).toBe(3);
                //$scope.replay();

               // expect(marsRovers.rovers[1].x).toBe(3);

            });
});

});