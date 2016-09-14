var http = require('http');
var url = require('url');

var port = Number(process.argv[2]);

var server = http.createServer(function(req, res) {
    
    var properties = url.parse(req.url, true);
    var endpoint = properties.pathname;
    var date = new Date(properties.query.iso);
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    
    if (endpoint === "/api/parsetime") {
        var data = formatDateHMS(date);
    } else if (endpoint === "/api/unixtime") {
        var data = formatDateUnix(date);
    }
    
    res.end(JSON.stringify(data));
    
})

function formatDateHMS(date) {
    return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    }
}

function formatDateUnix(date) {
    return {
        unixtime: date.getTime()
    }
}

server.listen(port);