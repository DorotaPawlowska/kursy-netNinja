// explicit types
var charakter;
var age;
var isLoggedIn;
// age = 'luigi';
age = 20;
// isLoggedIn = 20;
isLoggedIn = false;
// arrays
var ninjas = [];
// ninjas = [ 10, 23];
// ninjas = ['yoshi', 'mario'];
ninjas.push('mario');
// union types
var mixed = [];
mixed.push('mario');
mixed.push(23);
mixed.push(true);
console.log(mixed);
var uid;
uid = '123';
uid = 123;
// uid = true;
// objects
var ninjaOne;
ninjaOne = {
    name: 'yoshi',
    age: 30
};
// ninjaOne = 'shoun';
var ninjaTwo;
ninjaTwo = {
    name: 'mario',
    age: 20,
    beltColor: 'black'
};
