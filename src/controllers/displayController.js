/**
 * Created by kenmiller on 12/05/2016.
 */
angular.module('marsApp').controller('displayController', function($scope) {

    //add a service to share the input and the marsRover app

    //build a table of n rows and n columns with the 1st row and 1st columns showing 0 to n

    //set each cell with classes using ng-class so that a cell where rover1 is stationed with a southerly orientation
    //bears the classes rover1 south
    console.log('sme');
    $scope.range = function(n) { return new Array(n); };

    $scope.formatCell = function(row,col) {

      if (row===5) return 'red';
        if (col===0) return 'red';

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


});