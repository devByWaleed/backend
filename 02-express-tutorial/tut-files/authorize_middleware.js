// Adding express
const express = require('express');

// Creating app with express
const app = express();

// req => middleware => res

const logger = require('./logger');
const authorize = require('./authorize');

// Invoke logger for all routes
app.use([authorize, logger])

// They executed in order, hence correct order: authorize -> logger
// app.use([logger, authorize])


app.get('/', (req, res) => {
    res.send('Home');
});

app.get('/api/products', (req, res) => {
    res.send('Products');
});

app.get('/api/items', (req, res) => {
    console.log(req.user);
    
    res.send('Items');
});

app.get('/about', (req, res) => {
    res.send('About');
});

// Starting server
app.listen(5000, () => {
    console.log("Express server is listning on port 5000....");
});