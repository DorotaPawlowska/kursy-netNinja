var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream('../stuff/readMe.txt', 'utf8');
var ch = 0;
myReadStream.on('data', function (chunk) {
    ch+=1;
    console.log( ch + ' new chunk received: ');
    console.log(chunk);
});




