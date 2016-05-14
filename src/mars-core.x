/**
 * Created by kenmiller on 12/05/2016.
 */


//GLOBALS
var N = 360;
var S = 180;
var E = 90;
var W = 270;

//var headings = [{0:N},{90:E},{180:S},{270:W}];

var L = -1;
var R = 1;

var XMax;
var YMax;

//movement occurs in standard units of 90 degrees
var standardunits = 90;

//OPERATIONS
//360 IS A CEILING.  THAT MEANS THAT ADDING 2 TO VALUE 359 PRODUCES 1.


//Calculate compass heading by adding degrees where sign is 1 or -1
function changeHeading(heading,sign,degrees) {
	if (typeof degrees == 'undefined') {degrees=standardunits ;}
	var newheading =  heading + (sign * degrees);
	//console.log(newheading);
	if (newheading > 360) newheading -= 360;
	if (newheading < -360) newheading  += 360;
	if (newheading===0) newheading=360;
	return newheading;
}

function init() {

	XMax=5;
	YMax=5;

}

//function rover() {
//	this.name = 'unassigned';
//	this.x = 0;
//	this.y=0;
//	this.heading = N;
//}


var marsRovers = {};
marsRovers.points = {'N': 360,'E': 90,'S':180,'W': 270};
marsRovers.rovers = [];
marsRovers.rover = function(name,x,y,heading) {
	this.name = name;
	this.x = x;
	this.y = y;
	this.heading = heading;
};
marsRovers.XMax = 0;
marsRovers.YMax = 0;
marsRovers.init = function(initArray) {

	var $a = initArray;

	//must be of length 5 (handles two rovers
	if (initArray.length==5) {
		//first line of input indicates max x,y as 'n n'
		var x = $a[0].split(' ');
		this.XMax = parseInt(x[0]);
		this.YMax = parseInt(x[1]);

		//2nd line shows first rover's orientation as x y point [1 2 N]
		//parse the string to convert x and y to integer values, and the NSEorW to compass points in degrees
		var rover1 = $a[1].split(' ');

		var heading = marsRovers.points[rover1[2]];

		this.rovers.push(new this.rover('Rover 1', parseInt(rover1[0]), parseInt(rover1[1]), heading));

		//3rd line shows first rover's instructions as string e.g. LMLMLMLMM
		this.rovers[0].moves = $a[2];
		//4th line shows 2nd rovers orientation
		var rover2 = $a[3].split(' ');
		this.rovers.push(new this.rover('Rover 2', parseInt(rover2[0]), parseInt(rover2[1]), heading));
		//5th line shows 2nd rover's instructions
		this.rovers[1].moves = $a[4];
	}
	else
		console.log('Unexpected input format');

};


//debugger;

var arr  = [];
	arr.push('5 5');
	arr.push('1 2 N');
	arr.push('LMLMLMLMM');
	arr.push('3 3 E');
	arr.push('MMRMMRMRRM');

//marsRovers.init(arr);

//console.log('heading: ' + marsRovers.rovers[1].heading);

//marsRovers.prototype.changeHeading = function(heading,sign,degrees) {
//	if (typeof degrees == 'undefined') {degrees=standardunits ;}
//	var newheading =  heading + (sign * degrees);
//	//console.log(newheading);
//	if (newheading > 360) newheading -= 360;
//	if (newheading < -360) newheading  += 360;
//	if (newheading===0) newheading=360;
//	return newheading;
//}


//Calculate position


/*

PROBLEM ONE: MARS ROVERS


A squad of robotic rovers are to be landed by NASA on a plateau on Mars.
This plateau, which is curiously rectangular, must be navigated by the
rovers so that their on-board cameras can get a complete view of the
surrounding terrain to send back to Earth.

A rover's position and location is represented by a combination of x and y
co-ordinates and a letter representing one of the four cardinal compass
points. The plateau is divided up into a grid to simplify navigation. An
example position might be 0, 0, N, which means the rover is in the bottom
left corner and facing North.

In order to control a rover, NASA sends a simple string of letters. The
possible letters are 'L', 'R' and 'M'. 'L' and 'R' makes the rover spin 90
degrees left or right respectively, without moving from its current spot.
'M' means move forward one grid point, and maintain the same heading.

Assume that the square directly North from (x, y) is (x, y+1).

INPUT:
The first line of input is the upper-right coordinates of the plateau, the
lower-left coordinates are assumed to be 0,0.

The rest of the input is information pertaining to the rovers that have
been deployed. Each rover has two lines of input. The first line gives the
rover's position, and the second line is a series of instructions telling
the rover how to explore the plateau.

The position is made up of two integers and a letter separated by spaces,
corresponding to the x and y co-ordinates and the rover's orientation.

Each rover will be finished sequentially, which means that the second rover
won't start to move until the first one has finished moving.


OUTPUT
The output for each rover should be its final co-ordinates and heading.

INPUT AND OUTPUT

Test Input:
5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM

Expected Output:
1 3 N
5 1 E
==========

 */