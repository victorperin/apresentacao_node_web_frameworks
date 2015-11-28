var express = require('express');
var app = express();

app.use('/', express.static('./'));

var server = app.listen(1337, function() {
  console.log('Servidor ouvindo na porta 1337!');
});
