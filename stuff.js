// module.exports.counter = function (arr) {
var counter = function (arr) {
    return 'There are ' + arr.length + ' element in this array';
};

// module.exports.adder = function (a,b) {
var adder = function (a,b) {
    return `the sum of 2 numbers is ${a+b}`;
};

// module.exports.pi = 3.142;
var pi = 3.142;

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
};