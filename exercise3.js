var fs = require('fs');
var filename = process.argv[2];
var buffer = fs.readFileSync(filename);
var fileString = buffer.toString();
var split = fileString.split('\n');
console.log(split.length-1);