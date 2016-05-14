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

describe('formatCell', function() {
            it('should show x and y coordinates', function () {
                var $scope = {};
                var controller = $controller('displayController', { $scope: $scope });
                expect(row).toBeGreaterThan(-1);
                expect(row).toBeLessThan(6);

            });
});

});