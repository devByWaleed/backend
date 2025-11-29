// File Module -> Read & Write

// Synchronous Approach
const {readFileSync, writeFileSync} = require("fs");
console.log("start");
const first = readFileSync("./content/fs.txt", "utf-8");
const second = readFileSync("./content/subFolder/fs2.txt", "utf-8");

// console.log(first, second);

writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: ${first}, ${second}`,
    { flag: 'a'}
);

console.log("Done with this task");
console.log("Starting next task");