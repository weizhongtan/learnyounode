var fs = require('fs');
var path = require('path');

module.exports = function(directoryName, extension, callback) {fs.readdir(directoryName, function readfile(err, list) {
        if (err)
            return callback(err);
        list = list.filter(function(filename) {
            return path.extname(filename) == "." + extension;
        });
        callback(null, list);
    });
}