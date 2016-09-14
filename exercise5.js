var fs = require('fs');
var path = require('path');
var directoryName = process.argv[2];
var extension = process.argv[3];

fs.readdir(directoryName, function readfile(err, list) {
    if (err) return console.error("error");
    list.forEach(function(filename) {
        if (path.extname(filename) == "." + extension)
        console.log(filename)
    });
});