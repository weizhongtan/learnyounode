var mymodule = require('./mymodule.js');
mymodule(process.argv[2], process.argv[3], function(err, list) {
    if (err)
        return console.error("Error");
    list.forEach(function(filename) {
        console.log(filename);
    });
});
    