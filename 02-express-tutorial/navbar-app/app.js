const http = require('http');
const { readFileSync } = require('fs');
const path = require('path');

// App will crash for these 3 if these files are on other folder
// const homepage = readFileSync('./index.html')
// const homeStyle = readFileSync('./styles.css')
// const project = readFileSync('./projects.html')

const homepage = readFileSync(path.resolve(__dirname,  'index.html'))
const homeStyle = readFileSync(path.resolve(__dirname,  'styles.css'))
const project = readFileSync(path.resolve(__dirname,  'projects.html'))

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
    else if (url === '/projects.html') {
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
// server.listen(5000);
server.listen(5000, () => {
    console.log('Server is online and listening on port 5000');
});