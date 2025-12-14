// Adding express
const express = require('express');

// Creating app with express
const app = express();

const people = require('./routes/people')
const auth = require('./routes/auth')

// Static Assets
app.use(express.static('./methods-public'))


// Parse form data (built-in middleware)
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.use('/api/people', people)
app.use('/login', auth)



// Starting server
app.listen(5000, () => {
    console.log("Express server is listning on port 5000....");
});
/*
*/