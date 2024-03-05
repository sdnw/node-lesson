const fs = require('fs');

let md = `
    THIS IS A NEW FILE
    ==================

    yuuppppppppppppppppp
`

fs.writeFile("javascript.md", md.trim(), function(err) {
    if (err) {
        throw err;
    }
    fs.appendFileSync("javascript.md", "\n\n ### nodeeeeeee")
    console.log('md created')
})