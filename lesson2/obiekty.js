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
