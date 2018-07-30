var http = require('http');

var server = http.createServer(function (request, response) {
    console.log('request was made: ' + request.url);
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('hey ninjas');
});

server.listen(3000, '127.0.0.1');

console.log('yo dawgs, now listening to port 3000');
