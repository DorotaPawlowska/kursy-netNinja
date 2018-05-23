
//ep#9 Object Oriented JavaScript Tutorial - Constructors (under the hood)

function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;

    this.login = function () {
        console.log(this.name, 'has logged in');
    }
}


var userOne = new User('ryu@mail.com', 'Ryu');
var userTwo = new User('yoshi@mail.com', 'Yoshi');

console.log(userOne);
userTwo.login();


//ep#8 Object Oriented JavaScript Tutorial - Class Inheritance
/*
class User{
    constructor(email, name){
        this.name = name;
        this.email = email;
        this.score = 0;
    }
    login(){
        console.log(this.email, 'just logged in');
        return this;
    }
    logout(){
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}
//dziedziczenie
class Admin extends User {
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email // zwraca true or fals
        })
    }
}

var userOne = new User('ryu@mail.com', 'Ryu');
var userTwo = new User('yoshi@mail.com', 'Yoshi');

var admin = new Admin('shoun@kl.com', 'shoun');
var users = [ userOne, userTwo, admin];

userOne.login().updateScore().updateScore().logout();
// admin.deleteUser(userOne);
userTwo.deleteUser(userOne);

console.log(users);
*/

//ep#7 Object Oriented JavaScript Tutorial - Method Chaining
/*
class User{
    constructor(email, name){
        this.name = name;
        this.email = email;
        this.score = 0;
    }
    login(){
        console.log(this.email, 'just logged in');
        return this;
    }
    logout(){
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}

var userOne = new User('ryu@mail.com', 'Ryu');
var userTwo = new User('yoshi@mail.com', 'Yoshi');

userOne.login().updateScore().updateScore().logout();
*/

//ep#6 Object Oriented JavaScript Tutorial - Class Methods
/*
class User{
    constructor(email, name){
        this.name = name;
        this.email = email;
    }
    login(){
        console.log(this.email, 'just logged in');
    }
    logout(){
        console.log(this.email, 'just logged out');
    }
}

var userOne = new User('ryu@mail.com', 'Ryu');
var userTwo = new User('yoshi@mail.com', 'Yoshi');

userOne.login();
userTwo.logout();
*/

//ep#5 Object Oriented JavaScript Tutorial - Class Constructors
/*
class User{
    constructor(email, name){
        this.name = name;
        this.email = email;
    }
}

var userOne = new User('ryu@mail.com', 'Ryu');
var userTwo = new User('yoshi@mail.com', 'Yoshi');

console.log(userOne);
console.log(userTwo);
*/

//ep#4 Object Oriented JavaScript Tutorial - Classes
/*
class User{

}

var userOne = {
    email: 'ryu@ninjas.com',
    name: 'Ryu',
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email, 'has logged out')
    }
};
*/

//ep#3 Object Oriented JavaScript Tutorial - Updating Properties
/*
var userOne = {
    email: 'ryu@ninjas.com',
    name: 'Ryu',
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email, 'has logged out')
    }
};

userOne.name = 'Yoshi';
userOne['name'] = 'Yoshikawa';

var prop = 'name';
console.log(userOne[prop]);
prop = 'email';
console.log(userOne[prop]);

// no good !!!!!
// userOne.age = 23;
// userOne.login = function () {
//
// };
*/

//ep#2 Object Oriented JavaScript Tutorial - Object Literals
/*
var userOne = {
    email: 'ryu@ninjas.com',
    name: 'Ryu',
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email, 'has logged out')
    }
};

console.log(userOne.name);
*/

//bad coding !!!!
/*
var userOneEmail = 'ryu@ninjas.com';
var userOneName = 'Ryu';
var userOneFriend = ['Yoshi'];

var userTwoEmail = 'yoshi@ninjas.com';
var userTwoTwoName = 'Yoshi';
var userTwoFriend = ['Ryu', 'Mario'];

var userThreeEmail = 'mario@ninjas.com';
var userThreeTwoName = 'Mario';
var userThreeFriend = ['Yoshi'];

function login(email) {
    console.log(email, 'is now online');
}

function logout(email) {
    console.log(email, 'has logged out');
}

function logFriends(friends) {
    friends.forEach(friend => {
        console.log(friend);
    });
}

login(userOneEmail);
*/
