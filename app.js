var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end('Hey Law');
});

server.listen(3000, '127.0.0.1');
console.log('yo dawgs, now listening to hip hop');