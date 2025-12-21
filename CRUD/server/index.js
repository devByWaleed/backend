// Importing packages
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')


// Calling express method
const app = express()


// Server side in frontend
app.use(cors())


// Passing data from backend to frontend
app.use(express.json())


// Connect the database
mongoose.connect("mongodb://127.0.0.1:27017/crud")


// Post API to add data
app.post('/createUser', (req, res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})


// Get API to get data
app.get('/', (req, res) => {
    // Empty for all users
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})


// Starting server
app.listen(3001, () => {
    console.log("Server is running!");
})