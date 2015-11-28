var http = require('http');

var callback = function(req, res) {
  res.end('Ola mundo!');
};

http.createServer(callback).listen(3001, '127.0.0.1');
