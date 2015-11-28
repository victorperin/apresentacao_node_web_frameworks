var http = require('http');

var callback = function(req, res) {
  res.end('Ola mundo!');
};

http.createServer(callback).listen(1337, '127.0.0.1');
