var express = require('express');
var fs = require ('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var content = fs.readFileSync ('index.html');
    var buf = Buffer (content);
//response.send('Hello World 2!');
    response.send (buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
