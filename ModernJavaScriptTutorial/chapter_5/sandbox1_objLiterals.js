// === object literals + methods + this

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    loaction: 'Berlin',
    blogs: ['why mac & chees rules', '10 things to make with marmite'],
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    },
    logBlogs(){
        // console.log(this);
        // console.log(this.blogs);
        console.log('this user has written the following blogs: ');
        this.blogs.forEach( blog => console.log(blog));
    }
};

// === object methods

user.login();
user.logout();
user.logBlogs();

// console.log(this);


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