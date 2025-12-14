// Adding express
const express = require('express');

// Creating app with express
const app = express();

let { people } = require('./data')

app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data:people})
});


// Starting server
app.listen(5000, () => {
    console.log("Express server is listning on port 5000....");
});
/*
*/