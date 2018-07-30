var fs = require('fs');

// var readMe = fs.readFileSync('readMe.txt', 'utf8');

//kod asynchroniczny
fs.readFile('readMe.txt', 'utf8', function (error, data) {
    // console.log(data);
    // fs.writeFile('writeMe2.txt', data);
});

// console.log(readMe);
console.log('test');

fs.unlink('writeMe2.txt');

// fs.writeFileSync('writeMe.txt', readMe);
