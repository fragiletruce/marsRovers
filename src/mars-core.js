/**
 * Created by kenmiller on 12/05/2016.
 */



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



var marsRovers = {};
marsRovers.points = {'N': 360,'E': 90,'S':180,'W': 270};
marsRovers.pointsmap = { 360:'N', 90:'E',180:'S',270:'W'};
marsRovers.directions = {'L':-1,'R':1};
marsRovers.rovers = [];
marsRovers.rover = function(name,x,y,heading) {
	this.name = name;
	this.x = x;
	this.y = y;
	this.heading = heading;


};
marsRovers.XMax = 0;
marsRovers.YMax = 0;
marsRovers.startPosition = {};
marsRovers.parseMoves = function() {

	for (i=0;i<this.rovers.length;i++) {

        var rover;
        rover = this.rovers[i];
        if (rover.moves) {
            rover.instructions = rover.moves.split('');
        }
    }

};
marsRovers.execute = function(rover,step) {
    var instruction = rover.instructions[step];

   switch (instruction) {
       case 'L':
           this.changeHeading(rover,this.directions.L);
           break;
       case 'R':
           this.changeHeading(rover,this.directions.R);
           break;
       case 'M': this.move(rover);
           break;
       default:
           break;
   }
};

marsRovers.changeHeading = function(rover,sign,degrees) {


	if (typeof degrees == 'undefined') {degrees=standardunits ;}
	var newheading =  rover.heading + (sign * degrees);
	//console.log(newheading);
	if (newheading > 360) newheading -= 360;
	if (newheading < -360) newheading  += 360;
	if (newheading===0) newheading=360;
	rover.heading = newheading;
	return newheading;
};
marsRovers.move = function(rover) {

    switch (rover.heading) {

        case this.points.N:
            if (rover.y + 1  < this.YMax + 1)  rover.y += 1;
            break;
        case this.points.E:
             if (rover.x + 1 < this.YMax + 1)  rover.x += 1;
             break;
        case this.points.S:
            if (rover.y-1 > -1) rover.y -= 1;
            break;
        case this.points.W:
            if (rover.x - 1 > -1) rover.x -= 1;
            break;
    }


};

marsRovers.runInstructionSet = function(rover) {

	//log original position for replay

	// (typeof timespan == 'undefined') timespan=0;
    for (i=0;i<rover.instructions.length;i++) {
			//setTimeout(function() { marsRovers.execute(rover, i);},timespan);
		marsRovers.execute(rover, i);
		}

};
marsRovers.reset = function() {
	//call this only after
	var r1 = this.rovers[0].startPosition;
	var r2 = this.rovers[1].startPosition;
	this.rovers[0].x = r1.x;
	this.rovers[0].y = r1.y;
	this.rovers[0].heading = r1.heading;

	this.rovers[1].x = r2.x;
	this.rovers[1].y = r2.y;
	this.rovers[1].heading = r2.heading;
};
marsRovers.rover1 = function() { if (this.rovers[0]) return this.rovers[0].x + ' ' + this.rovers[0].y + ' ' + this.pointsmap[this.rovers[0].heading]; else return 'No data.';};
marsRovers.rover2 = function() { if (this.rovers[1]) return this.rovers[1].x + ' ' + this.rovers[1].y + ' ' + this.pointsmap[this.rovers[1].heading]; else return 'No data.'; };


marsRovers.init = function(initArray) {

	var $a = initArray;

	//must be of length 5 (handles two rovers
	if (initArray.length==5) {
        this.rovers=[];
		//first line of input indicates max x,y as 'n n'
		var x = $a[0].split(' ');
		this.XMax = parseInt(x[0]);
		this.YMax = parseInt(x[1]);

		//2nd line shows first rover's orientation as x y point [1 2 N]
		//parse the string to convert x and y to integer values, and the NSEorW to compass points in degrees
		var rover1 = $a[1].split(' ');

		var heading = marsRovers.points[rover1[2]];

		this.rovers.push(new this.rover('Rover 1', parseInt(rover1[0]), parseInt(rover1[1]), heading));
		this.rovers[0].startPosition = new this.rover('Rover 1', parseInt(rover1[0]), parseInt(rover1[1]), heading);
		//3rd line shows first rover's instructions as string e.g. LMLMLMLMM
		this.rovers[0].moves = $a[2];
		//4th line shows 2nd rovers orientation
		var rover2 = $a[3].split(' ');
        //heading = marsRovers.points[rover2[2]];
		this.rovers.push(new this.rover('Rover 2', parseInt(rover2[0]), parseInt(rover2[1]), marsRovers.points[rover2[2]]));
		this.rovers[1].startPosition = new this.rover('Rover 2', parseInt(rover2[0]), parseInt(rover2[1]), marsRovers.points[rover2[2]]);
		//5th line shows 2nd rover's instructions
		this.rovers[1].moves = $a[4];

		this.parseMoves();

	}
	else
		console.log('Unexpected input format');

};

//
////debugger;
//this lines required for jasmine tests (move elsewhere?)
var arr  = [];
	arr.push('5 5');
	arr.push('1 2 N');
	arr.push('LMLMLMLMM');
	arr.push('3 3 E');
	arr.push('MMRMMRMRRM');

//marsRovers.init(arr);
//debugger;
//var r1 = marsRovers.rover1();


//var x = marsRovers.changeHeading(null,marsRovers.directions.L,90);
//marsRovers.runInstructionSet(marsRovers.rovers[0]);
//debugger;
//for (i=1;i<marsRovers.rovers[1].instructions.length;i++) {

			//marsRovers.execute(marsRovers.rovers[1], i);
//		}
//console.log('last pos: ' + marsRovers.rovers[1].x + marsRovers.rovers[1].y + + marsRovers.rovers[1].heading);
//marsRovers.execute(marsRovers.rovers[1],0);
//console.log(marsRovers.rovers[0].instructions);
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