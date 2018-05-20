
//ep#8

//ep#7

//ep#6

//ep#5

//ep#4

//ep#3 Object Oriented JavaScript Tutorial - Updating Properties

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

/* no good !!!!!
userOne.age = 23;
userOne.login = function () {

};
*/

// ep# 2 Object Oriented JavaScript Tutorial - Object Literals
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
