var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    console.log('request was made: ' + request.url);
    response.writeHead(200, {'Content-Type': 'application/json'});

    var myObj = {
        name: 'Ryu',
        job: 'ninja',
        age: 19
    };

    response.end(JSON.stringify(myObj));

    // var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    // myReadStream.pipe(response);
});

server.listen(3000, '127.0.0.1');

console.log('yo dawgs, now listening to port 3000');