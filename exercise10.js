var net = require('net');
var leftPad = require('left-pad');

var server = net.createServer(function listener(socket) {
    var data = new Date();
    var year = leftPad(data.getFullYear(), 4, 0);
    var month = leftPad(data.getMonth() + 1, 2, 0);
    var day = leftPad(data.getDate(), 2, 0);
    var hours = leftPad(data.getHours(), 2, 0);
    var mins = leftPad(data.getMinutes(), 2, 0);
    data = year + "-" + month + "-" + day + " " + hours + ":" + mins + "\n";
    socket.end(data);
});

server.listen(process.argv[2]);