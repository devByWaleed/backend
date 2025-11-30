/*
const { createReadStream } = require('fs')

const stream = createReadStream('./content/big.txt', {highWaterMark:100000,encoding:'utf-8'})

stream.on('data', (result) => {
    console.log(result);
});

stream.on('error', (err) => {
    console.log(err);
});

// default 64kb
// last buffer - remainder
// {highWaterMark} - control size
// {encoding} - utf-8
*/



// Sending large data to server
/*
var http = require('http')
var fs = require('fs')

http.createServer(function (req, res) {

    // Sending large files
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)

    // Sending data in chunks
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', () => {
        fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
        res.end(err)
    })
})
.listen(5000)
*/