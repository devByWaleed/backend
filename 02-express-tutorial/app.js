const http = require('http');
const { readFileSync } = require('fs');

const homepage = readFileSync('./index.html')

// req => request : res = response
const server = http.createServer((req, res) => {
    console.log("User hit the server");

    res.writeHead(200, {
        "content-type": "text/html"
    })
    res.write(homepage);
    
    // Indicate that all headers & body sent down (page will load if it is missing)
    res.end();
});

// Setting server to port number
server.listen(5000);