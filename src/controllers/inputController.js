/**
 * Created by kenmiller on 12/05/2016.
 */
/**
 * Created by kenmiller on 12/05/2016.
 */
angular.module('marsApp').controller('inputController', function($scope,marsEngine,$location) {



    $scope.inputarray = [];


    $scope.marsRovers = marsEngine;
    $scope.rover1 = null;
    $scope.rover2 = null;

    $scope.parseInput = function() {





        $scope.marsRovers.init($scope.inputarray);
        if ($scope.marsRovers.rovers.length==2) {

            //$location.path('#/display')

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