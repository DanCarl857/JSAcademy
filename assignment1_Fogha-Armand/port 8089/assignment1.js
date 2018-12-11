var http = require('http');
var server = http.createServer();

var fs = require('fs');

server.on('request', function(req, res){
    fs.readFile('Lesson1.txt', 'utf8', function (err,fileContent){
        res.writeHead(200, {'content-type':'text/plain'});
        res.write(fileContent);
        res.end();
    });
});

var port = 8089;
server.listen(port);
server.once('listening', function(){
    console.log('listening on port %d', port);
});