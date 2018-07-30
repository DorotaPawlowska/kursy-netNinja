var fs = require('fs');

// fs.rmdirSync('stuff2');
// fs.mkdir('stuff2', function () {
//     fs.readFile('readMe.txt', 'utf8', function (err, data) {
//        fs.writeFile('./stuff2/writeMe.txt', data);
//     });
// });


fs.unlink('./stuff2/writeMe.txt', function () {
    fs.rmdir('stuff2');
});
