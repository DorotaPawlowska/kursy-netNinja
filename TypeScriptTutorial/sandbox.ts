// explicit types
let charakter: string;
let age: number;
let isLoggedIn: boolean;

// age = 'luigi';
age = 20;
// isLoggedIn = 20;
isLoggedIn = false;

// arrays
let ninjas:string[] = [];
// ninjas = [ 10, 23];
// ninjas = ['yoshi', 'mario'];
ninjas.push('mario');

// union types
let mixed: (string|number|boolean)[] = [];
mixed.push('mario');
mixed.push(23);
mixed.push(true);
console.log(mixed);

let uid: string|number;
uid = '123';
uid = 123;
// uid = true;

// objects
let ninjaOne: object;
ninjaOne = {
  name: 'yoshi',
  age: 30
};
// ninjaOne = 'shoun';

let ninjaTwo: {
  name: string,
  age: number,
  beltColor: string
};

ninjaTwo = {
  name: 'mario',
  age: 20,
  beltColor: 'black'
}