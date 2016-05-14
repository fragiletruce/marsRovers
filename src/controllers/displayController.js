/**
 * Created by kenmiller on 12/05/2016.
 */
angular.module('marsApp').controller('displayController', function($scope,marsEngine,$interval) {

    //add a service to share the input and the marsRover app

    //build a table of n rows and n columns with the 1st row and 1st columns showing 0 to n

    //set each cell with classes using ng-class so that a cell where rover1 is stationed with a southerly orientation
    //bears the classes rover1 south
    $scope.marsRovers = marsEngine;


    $scope.rover1 = $scope.marsRovers.rovers[0];
    $scope.rover2 = $scope.marsRovers.rovers[1];


    $scope.range = function(n) { return new Array(n); };

    $scope.formatCell = function(row,col) {

      if (row===5) return 'red';
        if (col===0) return 'red';

      if ($scope.roverOnIt(row,col)) return 'pink';


    };

    $scope.roverOnIt = function(row,col) {


        var x = $scope.createXCoordFromTableRow(row);
        var y = col;
        var rover1 = $scope.marsRovers.rovers[0];
        if ( marsRovers.rovers[0].x == x && marsRovers.rovers[0].y == y) return 'blue';
        var rover2 = $scope.marsRovers.rovers[1];
        if ( marsRovers.rovers[1].x == x && marsRovers.rovers[1].y == y) return 'red';
        else return '';

    };


    $scope.displayCoord = function(row,col) {
        if (col===0) {return col-row + 5;}
        else {if (row===5) return col;
        else return '(' + $scope.createXCoordFromTableRow(row) + ',' + col +')';

        }
            //return ''; //col;

    };

    $scope.createXCoordFromTableRow = function(row) {

        return ((row - 5) * -1);
    };




    $scope.replay = function() {
         var app = $scope.marsRovers;
         app.reset();
         var rover = app.rovers[0];
         var rover2 = app.rovers[1];

            var i=0;
            var ii = 0

            

            $interval(function(){
                app.execute(rover,i);
                 i++;
            }, 1000, rover.instructions.length)

            $interval(function(){
                app.execute(rover2,ii);
                 ii++;
            }, 1000, rover2.instructions.length)




 };


});