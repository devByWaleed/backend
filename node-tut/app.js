// Every file is a module (by default) in CommonJS
// Modules -> Encapsulated code, only share minimum

// Using require to get data
const { log } = require("console");
const userNames = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternate_use");

// import sayHi from "./5-utils";
// import userNames from "./4-names"


// Calling the function
// console.log(userNames);
// sayHi("Waleed")
// sayHi(userNames.john)
// sayHi(userNames.peter)

// console.log(data.id);
// console.log(data.alterPerson);

// Function output will print, even if we don't assign it / invoke it
// require("./7-mind_grind")

/*
const os = require("os")

// Info about current user
const user = os.userInfo()
console.log(user);
*/





// setInterval(() => {
//     console.log("hello world");
// }, 1000);
// console.log("I will run first");















// const { readFileSync, writeFileSync } = require('fs')
// console.log('start');
// const first = readFileSync('./content/fs.txt', 'utf-8')
// const second = readFileSync('./content/subFolder/fs2.txt', 'utf-8')

// writeFileSync(
//     './content/result-async.txt',
//     `Here is the result: ${first}, ${second}`
// )




// Writng big data
/*    
const { writeFileSync } = require('fs')

for (let i = 0; i < 100000; i++) {
    writeFileSync('./content/big.txt', `${i}: Hello World\n`, { flag: 'a' });
}
*/


