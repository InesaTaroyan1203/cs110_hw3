const http = require('http');

const httpServer = http.createServer(function(req, res) {

    if(req.url === '/hello') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Hello World\n');
    } else if(req.url === '/AUA') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('AmericanUniversityofArmenia\n');
    } else if(req.url === '/inesa') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Student\n'); 
    } else if(req.url === '/boo') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('foo\n');

   	} else if(req.url === '/alo') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('MLO\n');
    } else if(req.url === '/library') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('books\n');
	} else  {
    res.writeHead(404, {'Content-Type' : 'text/plain'});
    res.end("Nope!");

    }

});

httpServer.listen(3001);
