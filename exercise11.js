var http = require("http");
var fs = require("fs");

var port = process.argv[2];
var fileUrl = process.argv[3];

var server = http.createServer(function(request, response) {
    
    var stream = fs.createReadStream(fileUrl);
    stream.pipe(response);
})

server.listen(Number(port));