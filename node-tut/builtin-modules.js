const os = require("os")

// Info about current user

// console.log(os.userInfo());



// Methods return system uptime in seconds

// console.log(`The System Uptime: ${os.uptime()}`);


// More methods
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freeMem: os.freemem(),
}
// console.log(currentOS);


// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------


// Path method

/*
Windows => \
*/

const path = require("path")

console.log(`Path separator: ${path.sep}`);

const filePath = path.join("/content", "subFolder", "text.txt")
console.log(`Current file path: ${filePath}`);

const base = path.basename(filePath)
console.log(`Base File: ${base}`);


const absolutePath = path.resolve(__dirname, "content", "subFolder", "text.txt")
console.log(`Absolute Path: ${absolutePath}`);


// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------