// Adding express
const express = require('express')

// Creating app with express
const app = express()

// Method to get the resource from server
app.get('/', (req, res) => {
    console.log("User hit the resource");
    console.log(req.url);
    
    res.status(200).send("Home Page")
})

app.get('/about', (req, res) => {
    console.log("User hit the resource");
    console.log(req.url);
        
    res.status(200).send("About Page")
})


// checking all routes to find if requested one is present or not
app.all('*', (req, res) => {
    res.status(404).send("Resource Not Found!!")
})


// Starting server
app.listen(5000, () => {
    console.log("Express server is listning on port");
});