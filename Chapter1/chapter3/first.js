const path = require('path');
const util = require('util');
const v8 = require("v8");


console.log(path.basename(__filename));
console.log(path.basename(__dirname));
console.log(path.extname(__filename));

const diruploads = path.join(
    __dirname,
    "www",
    "files",
    "uploads"
);

console.log(diruploads);
console.log(v8.getHeapStatistics());
