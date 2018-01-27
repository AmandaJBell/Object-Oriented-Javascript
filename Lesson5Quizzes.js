// Refactor the carlike function in a way
// that allows you to use the method calling 
// syntax with "dot access" as we do below.
var carlike = function(obj, loc) {
    obj.loc = loc;
    obj.move = move;
    return obj;
};

var move = function() {
    this.loc++;
};

/////
// Here we want to call move with "dot access"
var amy = carlike({}, 1);
amy.move();
var ben = carlike({}, 9);
ben.move();

// Refactor the carlike function so
// that the move function is no longer
// defined as a global variable but is
// contained within the constructor function!

var carlike = function(obj, loc) {
    obj.loc = loc;
    obj.move = function() { 
    	this.loc++; 
    };
    return obj;
};

var amy = carlike({}, 1);
amy.move();
var ben = carlike({}, 9);
ben.move();

// Refactor so the code behaves the same way, but does not refer to the parameter 'this'.

var carlike = function(obj, loc) {
    obj.loc = loc;
    obj.move = function() {
        obj.loc++;
    };
    return obj;
};

var amy = carlike({}, 1);
amy.move();
var ben = carlike({}, 9);
ben.move();