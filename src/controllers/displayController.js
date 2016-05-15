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

        var coords = $scope.tableCoordToGrid(row,col);

        var css = '';

        var rover1 = $scope.marsRovers.rovers[0];

        if ( rover1.x == coords.x && rover1.y == coords.y) {
            css +=  'pink';
            css += $scope.appendCompassCss(rover1.heading);
        }

        var rover2 = $scope.marsRovers.rovers[1];
        if ( rover2.x == coords.x && rover2.y == coords.y) { css += 'red';
        css+=$scope.appendCompassCss(rover2.heading);
        }

        return css;

    };

    $scope.appendCompassCss=function(heading) {
        var css='';
        switch (heading) {
                case marsRovers.points.E:
                     css += ' glyphicon glyphicon-menu-right';
                    break;
                case marsRovers.points.N:
                    css += ' glyphicon glyphicon-menu-up';
                    break;
                case marsRovers.points.S:
                     css += ' glyphicon glyphicon-menu-down';
                    break;
                case marsRovers.points.W:
                     css += ' glyphicon glyphicon-menu-left';
                    break;
                default:
                    break;
                //if (marsRovers.rovers[0].heading==marsRovers.points.E) css += ' glyphicon glyphicon-chevron-left';
                //    glyphicon glyphicon-chevron-righ
            }
        return css;
    };

    $scope.displayCoord = function(row,col) {
        var coords = $scope.tableCoordToGrid(row,col);
        //if (col===0) {return col-row + 5;}
        //else {if (row===5) return col;
        //else return '(' + coords.x + ',' + coords.y +')';

        //}
        return '(' + coords.x + ',' + coords.y +')';
    };

    $scope.tableCoordToGrid = function(row,col) {

        return {

            'x' : col,
            'y' : $scope.createYCoordFromTableRow(row)

        };

    };

    $scope.createYCoordFromTableRow = function(row) {

        return ((row - 5) * -1);
    };




    $scope.replay = function() {
         var app = $scope.marsRovers;
         app.reset();
         var rover = app.rovers[0];
         var rover2 = app.rovers[1];

            var i=0;
            var ii = 0;

            var span=3000;

            $interval(function(){
                app.execute(rover,i);
                 i++;
                $scope.apply();
            }, span, rover.instructions.length);

            $interval(function(){
                app.execute(rover2,ii);
                 ii++;
            }, span, rover2.instructions.length);




 };


});