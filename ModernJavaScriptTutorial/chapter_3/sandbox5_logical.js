// logical operators - OR || and AND &&

const password = 'password';

if(password.length >= 12 && password.includes('@')){
    console.log('that password is mighty strong')
} else if(password.length >= 8 || password.includes('@') && password.length >= 5){
    console.log('that password is strong enough!')
} else{
    console.log('password is not strong enough');
}

// logical NOT (!)

let user = false;

if(!user){
    console.log('you must be logged in to continue')
}

// console.log(!true);
// console.log(!false);