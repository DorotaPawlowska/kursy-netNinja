// ------- booleans & comparisions
// console.log(true, false, "true", "false");

// ------- methods can return booleans
// let email = 'luigi@test.co.uk';
// let result = email.includes('#');

// let names = ['mario', 'luigi', 'toad'];
// let result = names.includes('bowser');

// console.log(result);

// ------- comparision operators
// let age = 25;

// console.log(age == 25);
// console.log(age != 25);
// console.log(age == 30);
// console.log(age != 30);
// console.log(age > 20);
// console.log(age < 20);
// console.log(age <= 25);
// console.log(age >= 25);

// let name = 'shaun';

// console.log(name == 'shaun');
// console.log(name == 'Shaun');
// console.log(name > 'crystal');
// console.log(name > 'Shaun');
// console.log(name > 'Crystal');

// =================== COMPARISON =========================

let age = 25;

// loose
// console.log(age == 25);
// console.log(age == '25');
// console.log(age != 25);
// console.log(age != '25');

// strict
console.log(age === 25);
console.log(age === '25');
console.log(age !== 25);
console.log(age !== '25');

// =================== TYPE CONVERSION =========================
let score = '100';

score = Number(score);

console.log(score + 1);
console.log(typeof score);

// let result = 'hello';
// result = Number(result);

// let result = String(50);
// let result = Boolean(100);
// let result = Boolean(0);
// let result = Boolean('0');
let result = Boolean('');

console.log(result, typeof result);