// Just use .promises, same work
/*
const { readFile, writeFile } = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

            
const start = async() => {
    try {
        const first = await readFile('./content/fs.txt', 'utf-8', );
        const second = await readFile('./content/subFolder/fs2.txt', 'utf-8');

        // As we just written down in file, no need to save it on a variable
        await writeFile('./content/result-mind-grind.txt', `This is awesome: ${first} ||| ${second}`)

        console.log(first);
        console.log(second);
        
    }
    catch(error) {
        console.log(error);
    }
}
start()
*/



// Using "util" for managing promises (instead of scratch function)
/*
const { readFile, writeFile } = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)


const start = async() => {
    try {
        const first = await readFilePromise('./content/fs.txt', 'utf-8', );
        const second = await readFilePromise('./content/subFolder/fs2.txt', 'utf-8');
        
        // As we just written down in file, no need to save it on a variable
        await writeFilePromise('./content/result-mind-grind.txt', `This is awesome: ${first} ||| ${second}`)
        
        console.log(first);
        console.log(second);
        
    }
    catch(error) {
        console.log(error);
    }
}
start()
*/



// Async await approach
/*
const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data); 
        });
    });
}


const start = async() => {
    try {
        const first = await getText('./content/fs.txt')
        const second = await getText('./content/subFolder/fs2.txt')
        console.log(first);
        console.log(second);
        
    }
    catch(error) {
        console.log(error);
    }
}
start()


// getText('./content/fs.txt')
// .then((result) => console.log(result))
// .catch((err) => console.log(err))
*/