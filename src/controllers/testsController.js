/**
 * Created by kenmiller on 22/04/2016.
 */






angular.module('marsApp').controller('testsController', function($scope) {

	//$scope.rovers = ['Rover 1','Rover 2', 'Spanner'];
	var $r = marsRovers;

	var $d = marsRovers.directions;
	var $p = marsRovers.points;

	$scope.S = $p.S;

	$scope.moveRFromN = changeHeading($p.N, $d.R);

	$scope.moveLFromN = changeHeading($p.N, $d.L);

	$scope.moveLFromW = changeHeading($p.W, $d.L);

	$scope.moveLLFromN = changeHeading(changeHeading($p.N, $d.L), $d.L);

	$scope.moveRRFromN = changeHeading(changeHeading($p.N, $d.R), $d.R);

	$scope.moveLLFromW = changeHeading(changeHeading($p.W, $d.L), $d.L);

	$scope.moveRFromE = changeHeading($p.E, $d.R);

	$scope.moveRRFromW = changeHeading(changeHeading($p.W, $d.R), $d.R);

	$scope.moveLLFromS = changeHeading(changeHeading($p.S, $d.L), $d.L);

	$scope.moveRRFromS = changeHeading(changeHeading($p.S, $d.R), $d.R);

	$scope.moveLFromS = changeHeading($p.S, $d.L);



	$scope.rover2 = $r.rovers[1];

	$scope.r2exec1 = function() {
			$r.execute($scope.rover2,0);
	};
	//execute remaining steps
	$scope.r2execAll = function() {
		for (i=1;i<$scope.rover2.instructions.length;i++) {

			$r.execute($scope.rover2, i);
		}
	};
	//for (i = 0; i < $scope.rover2.instructions; i++) {

		//$r.execute($scope.rover2,$scope.rover2.instructions[0]);

	//}




	//$scope.rovers.rovers[0].


	//console.log($scope.rovers);

});