const fs = require("fs");

fs.readFile('./readme.md', 'utf-8', (err, ipsum) => {
  console.log(ipsum)
});

console.log("reading the file...")