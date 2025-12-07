const http = require('http');
const { readFileSync } = require('fs');

const homepage = readFileSync('./index.html')
const homeStyle = readFileSync('./styles.css')
const project = readFileSync('./projects.html')

// req => request : res = response
const server = http.createServer((req, res) => {
    const url = req.url;
    console.log(url);

    if (url === '/' || url == '/index.html') {
        res.writeHead(200, {
            "content-type": "text/html"
        })
        res.write(homepage);
        
        // Indicate that all headers & body sent down (page will load if it is missing)
        res.end();
    }
    else if (url === '/styles.css') {
        res.writeHead(200, {
            "content-type": "text/css"
        })
        res.write(homeStyle);
        
        // Indicate that all headers & body sent down (page will load if it is missing)
        res.end();
    }
    else if (url === '/project.html') {
        res.writeHead(200, {
            "content-type": "text/html"
        })
        res.write(project);
        
        // Indicate that all headers & body sent down (page will load if it is missing)
        res.end();
    }

    else {
        res.writeHead(404, { "content-type": "text/html" });
        res.write('<h1>404 Page Not Found</h1>');
        res.end();
    }


});

// Setting server to port number
server.listen(5000);