/*
- Functions that execute during request of server.
- Have acces to req, res
- Everywhere in express.js
- next is a must in middleware
*/

// Adding express
const express = require('express')

// Creating app with express
const app = express()

// req => middleware => res

// Method that keep data will use mostly
const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next();     // Not writting this will cause the request will get "stuck"
    // res.send("Testing")
}


app.get('/', logger, (req, res) => {


    res.send('Home');
});

app.get('/about', logger, (req, res) => {
    res.send('About');
});

// Starting server
app.listen(5000, () => {
    console.log("Express server is listning on port 5000....");
});