// File Module -> Read & Write

const { readFile, writeFile } = require("fs");


// Asynchronous Approach
console.log("Start");

readFile('./content/fs.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;


    readFile('./content/subFolder/fs2.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile(
            './content/result-async.txt',
            `Here is the result: ${first}, ${second}`
            , (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log("Done with this task");
            })
        });
    });
console.log("Starting next task");
    /* 
If not provide the encoding type

<Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 21 20 31 73 74 20 66 69 6c 65 2e 2e>
*/