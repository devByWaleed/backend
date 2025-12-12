// Adding express
const express = require('express');

// Creating app with express
const app = express();

// req => middleware => res

const logger = require('./logger');

// Invoke logger for all routes

// Invoke logger instantly with all routes starting /api
app.use('/api', logger);
// Invoke logger instantly with all routes starting /api
// app.use(logger);


app.get('/', (req, res) => {
    res.send('Home');
});

app.get('/api/products', (req, res) => {
    res.send('Products');
});

app.get('/api/items', (req, res) => {
    res.send('Items');
});

app.get('/about', (req, res) => {
    res.send('About');
});

// Starting server
app.listen(5000, () => {
    console.log("Express server is listning on port 5000....");
});