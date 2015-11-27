var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  if (request.url == "/") {
    response.writeHeader(200, {"Content-Type": "text/html"});
    fs.createReadStream("./index.html").pipe(response);
  } else {
    fs.stat("."+request.url, function (err,status){
      if(!err && status.isFile()){
        response.writeHeader(200);
        fs.createReadStream("."+request.url).pipe(response);
      }
      else{
        response.writeHeader(404);
        response.end("Arquivo nao encontrado.")
      }
    });
  }
}).listen(1337, '127.0.0.1');
