const http = require('http');

// req => request : res = response
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Welcome to homepage");
    }
    else if (req.url === '/about') {
        res.end("About section");
    }
    else {
        res.end(`
            <h1>Oops!</h1>
            `)
    }

});

// Port number
server.listen(5000);