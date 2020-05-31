"use strict";
// let greet: Function;
// ex 1
var greet;
greet = function (name, greeting) {
    console.log(name + " says " + greeting);
};
// ex 2
var calc;
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// ex 3
var logDetails;
logDetails = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " years old");
};
