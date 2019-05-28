// strings
console.log('hello');

let email = 'email@email.com';
console.log(email);

// string concatenation
let firstName = 'Brandon';
let lastName = 'Sanderson';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// getting characters
console.log(fullName[2]);

// string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@');
console.log(index);

// common string methods
let mail = 'mario@test.co.uk';

// let res = mail.lastIndexOf('o');
// let res = mail.slice(0,5);
// let res = mail.substr(6, 4);
// let res = mail.replace('m', 'w');
let res = mail.replace('o', 'w');

console.log(res);