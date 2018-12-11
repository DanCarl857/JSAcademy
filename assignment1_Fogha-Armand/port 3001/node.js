var http = require('http');
var server = http.createServer();

server.on('request', function(req, res) {
    res.writeHead(200, {'content-type':'text/plain'});
    res.write('his server is listening on port 3001');
    res.end();
});

var port = 3001;
server.listen(port);
server.once('listening', function(){
    console.log('the server is listening on port %d', port);
})