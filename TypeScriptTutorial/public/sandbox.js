"use strict";
var greet;
// greet = 'hello';
greet = function () {
    console.log('hello');
};
// const add = ( a: number, b: number, c?: number | string ) => { // optional 3 parameter
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
add(5, 10, 20);
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 7);
// result = 'something';
