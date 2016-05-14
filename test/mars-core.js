/**
 * Created by kenmiller on 25/04/2016.
 */
/**
 * Created by kenmiller on 20/04/2016.
 */



//Initialize with test instructions
var arr  = [];
	arr.push('5 5');
	arr.push('1 2 N');
	arr.push('LMLMLMLMM');
	arr.push('3 3 E');
	arr.push('MMRMMRMRRM');

marsRovers.init(arr);


describe('testsController', function() {


    beforeEach(module('marsApp'));

    var $controller;

        beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
         $controller = _$controller_;
  }));

     describe('$scope.moveRFromN', function() {
            it('should return 90', function () {
                var $scope = {};
                var controller = $controller('testsController', { $scope: $scope });
                expect($scope.moveRFromN).toBe(90);
           });

    });

    describe('variable E' ,function() {
        it('should be 90', function() {
           expect(marsRovers.points.E).toBe(90);

        });
        });

       describe('$scope.moveLFromN', function() {
            it('should return west', function () {
                var $scope = {};
                var controller = $controller('testsController', { $scope: $scope });
                expect($scope.moveLFromN).toBe(marsRovers.points.W);
           });
    });

 describe('$scope.moveLFromW', function() {
            it('should return south', function () {
                var $scope = {};
                var controller = $controller('testsController', { $scope: $scope });
                expect($scope.moveLFromW).toBe(marsRovers.points.S);
           });
    });

    describe('$scope.moveLLFromN', function() {
            it('should return south', function () {
                var $scope = {};
                var controller = $controller('testsController', { $scope: $scope });
                expect($scope.moveLLFromN).toBe(marsRovers.points.S);
           });
    });

    describe('$scope.moveRRFromN', function() {
            it('should return south', function () {
                var $scope = {};
                var controller = $controller('testsController', { $scope: $scope });
                expect($scope.moveRRFromN).toBe(marsRovers.points.S);
           });
    });



    describe('$scope.moveLLFromW', function() {
            it('should return east', function () {
                var $scope = {};
                var controller = $controller('testsController', { $scope: $scope });
                expect($scope.moveLLFromW).toBe(marsRovers.points.E);
           });
    });

    describe('$scope.moveRRFromW', function() {
            it('should return east', function () {
                var $scope = {};
                var controller = $controller('testsController', { $scope: $scope });
                expect($scope.moveRRFromW).toBe(marsRovers.points.E);
           });
    });

    describe('$scope.moveLLFromS', function() {
            it('should return north', function () {
                var $scope = {};
                var controller = $controller('testsController', { $scope: $scope });
                expect($scope.moveLLFromS).toBe(marsRovers.points.N);
           });
    });


    describe('$scope.moveRRFromS', function() {
            it('should return north', function () {
                var $scope = {};
                var controller = $controller('testsController', { $scope: $scope });
                expect($scope.moveRRFromS).toBe(marsRovers.points.N);
           });
    });



describe('$scope.moveLFromS', function() {
            it('should return east', function () {
                var $scope = {};
                var controller = $controller('testsController', { $scope: $scope });
                expect($scope.moveLFromS).toBe(marsRovers.points.E);
           });
    });

describe('$scope.rovers[1].heading', function() {
            it('should be east', function () {
                var $scope = {};
                var controller = $controller('testsController', { $scope: $scope });
                var x = marsRovers;
     //           var arr  = [];
	//arr.push('5 5');
	//arr.push('1 2 N');
	//arr.push('LMLMLMLMM');
	//arr.push('3 3 E');
	//arr.push('MMRMMRMRRM');
     //           x.init(arr);
                //console.log($scope.rovers);
                expect(x.rovers[1].name).toBe('Rover 2');
                expect(x.rovers[1].heading).toBe(marsRovers.points.E);
           });
    });

    describe('Instructions', function() {
            it('rover 2 instruction 3 should be R', function () {
                var $scope = {};
                var controller = $controller('testsController', { $scope: $scope });
                //expect(marsRovers.rovers[0].instructions.length).toBe(9);
                expect(marsRovers.rovers[1].instructions[2]).toBe('R');
           });
    });



     describe('Execution FIRST STEP', function() {
            it('rover 2 instruction result set should be 4 3 E', function () {
                var $scope = {};
                var controller = $controller('testsController', { $scope: $scope });

                $scope.r2exec1();

                //expect(marsRovers.rovers[0].instructions.length).toBe(9);
                expect($scope.rover2.x).toBe(4);
                expect($scope.rover2.y).toBe(3);
                expect($scope.rover2.heading).toBe(marsRovers.points.E);

           });
    });

    describe('Execute remaining steps', function() {
            it('rover 2 instruction result set should be 5 1 E', function () {
                var $scope = {};
                var controller = $controller('testsController', { $scope: $scope });

                $scope.r2execAll();

                expect($scope.rover2.x).toBe(5);
                expect($scope.rover2.y).toBe(1);
                expect($scope.rover2.heading).toBe(marsRovers.points.E);
    //arr.push('3 3 E');
	//arr.push('MMRMMRMRRM');
           });
    });

});






