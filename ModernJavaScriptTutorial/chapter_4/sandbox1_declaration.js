
// speak();
// speak();
// speak();

greet();
greet();
greet();

// function declaration hoisting

function greet(){
    console.log('hello there');
}

// function expression no hoisting

const speak = function(){
    console.log('good day');
};