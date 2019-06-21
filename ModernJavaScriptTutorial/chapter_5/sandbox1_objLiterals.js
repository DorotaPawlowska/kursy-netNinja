// === object literals

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    loaction: 'Berlin',
    blogs: ['why mac & chees rules', '10 things to make with marmite'],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out');
    },
    logBlogs: function(){
        
    }
};

// === object methods

user.login();
user.logout();


// const name = 'mario';
// name.toUpperCase();









// === object properties

console.log(user);
console.log(user.name);

// user.age = 35;
console.log(user.age);

// const key = 'location';

// console.log(user[key]); // user['location'];
console.log(user['name']);
console.log(user['email']);
user['name'] = 'chun-li';
console.log(user['name']);

console.log(typeof user);