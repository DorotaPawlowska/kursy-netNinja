var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    console.log('request was made: ' + request.url);
    if(request.url === '/home' || request.url === '/'){
        response.writeHead(200, {'Content-Typ': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(response);
    } else if(request.url === '/contact'){
        response.writeHead(200, {'Content-Typ': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(response);
    } else if(request.url === '/api/ninjas'){
        var ninjas = [{ name: 'Ryu', age: 19}, { name: 'Shoun', age: 29}];
        response.writeHead(200, {'Content-Typ': 'application/json'});
        response.end(JSON.stringify(ninjas));
    } else {
        response.writeHead(404, {'Content-Typ': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(response);
    }
});

server.listen(3000, '127.0.0.1');

console.log('yo dawgs, now listening to port 3000');
