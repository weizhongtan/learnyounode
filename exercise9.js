var http = require('http');
var bl = require('bl');

var results = [], count = 0;

function getData(index) {
    http.get(process.argv[2 + index], function(response) {
        response.pipe(bl(function(err, data) {
            if (err)
                return console.error(err)
            results[index] = data.toString();
            count++;
            if (count == 3)
                printResults(results)
        }));
    });
}

function printResults(array) {
    for (var i = 0; i < 3; i++) {
        console.log(array[i]);
    }
}

for (var i = 0; i < 3; i++) {
    getData(i);
}