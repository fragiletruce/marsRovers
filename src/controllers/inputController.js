/**
 * Created by kenmiller on 12/05/2016.
 */
/**
 * Created by kenmiller on 12/05/2016.
 */
angular.module('marsApp').controller('inputController', function($scope,marsEngine) {



    $scope.inputarray = [];


    $scope.marsRovers = marsEngine;
    $scope.rover1 = null;
    $scope.rover2 = null;
    $scope.parseInput = function() {





        $scope.marsRovers.init($scope.inputarray);
        if ($scope.marsRovers.rovers.length==2) {


            //run instructions

            for (r = 0; r < $scope.marsRovers.rovers.length; r++) {

                $scope.marsRovers.runInstructionSet($scope.marsRovers.rovers[r]);
            }

            //$scope.r1 = $scope.marsRovers.rovers[0];
            //$scope.r2 = $scope.marsRovers.rovers[1];
           // $scope.rover1 = $scope.r1.x + ' ' + $scope.r1.y + ' ' + marsRovers.pointsmap[$scope.r1.heading];
            //$scope.rover2 = $scope.r2.x + ' ' + $scope.r2.y + ' ' + marsRovers.pointsmap[$scope.r2.heading];

        }

    };



    //$scope.displayinput = function() {
    //
    //    for (i=0;i<$scope.inputarray.length;i++) {
    //        console.log(i + ':' + $scope.inputarray[i]);
    //
    //
    //    }
    //
    //};

    $scope.$watch('inputstring', function(newvl,oldval){

    $scope.inputarray = [];
       var textarea = document.getElementById("inputarea");
        actOnEachLine(textarea, function(line) {
            $scope.inputarray.push(line);
            return  line ;
});






        $scope.parseInput();

    });

});