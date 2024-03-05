const fs = require("fs");

if(fs.existsSync('file-here')) {
    console.log('already there!')
} else {
    fs.mkdir('file-here', function(err) {
        if (err) {
            console.log(`ERROR: ${err}`)
        } else {
            console.log("dir created");
        }
    }); 
}

