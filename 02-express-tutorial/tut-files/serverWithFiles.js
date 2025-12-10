/*
.sendFile() => For sending file as response
path.resolve(__dirname, 'file-path') => Catch the file with given path
*/

// Adding express
const express = require('express')
const path = require('path')

// Creating app with express
const app = express()

// Setting up static files (css and other assets)
app.use(express.static('./public'))


// Method to get the resource from server

// As index.html also static, keeping it in public folder also works
/*
app.get('/', (req, res) => {
    console.log("User hit the resource");
    console.log(req.url);
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
    
    // res.status(200).send("Home Page")
})
*/


app.get('/project', (req, res) => {
    console.log("User hit the resource");
    console.log(req.url);
    res.sendFile(path.resolve(__dirname, './navbar-app/projects.html'))
})


// checking all routes to find if requested one is present or not
app.all('/{*any}', (req, res) => {
    res.sendFile(path.resolve(__dirname, './navbar-app/not_found.html'))
})


// Starting server
app.listen(5000, () => {
    console.log("Express server is listning on port 5000....");
});