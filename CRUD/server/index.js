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


// Post method to add data
app.post('/createUser', (req, res) => {
    UserModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err))
})


// Get method to get data (Read operation)
app.get('/', (req, res) => {
    // Empty for all users
    UserModel.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err))
})


// Get method to get data (To display on form)
app.get('/getUser/:id', (req, res) => {
    const id = req.params.id

    // Empty for all users
    UserModel.findById({ _id: id })
        .then(users => res.json(users))
        .catch(err => res.json(err))
})


// Update method to update data
app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id

    // Empty for all users
    UserModel.findByIdAndUpdate({ _id: id }, {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    })
        .then(users => res.json(users))
        .catch(err => res.json(err))
})


// Delete method to delete data
app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id

    // Empty for all users
    UserModel.findByIdAndDelete({ _id: id })
        .then(res => res.json(res))
        .catch(err => res.json(err))
})


// Starting server
app.listen(3001, () => {
    console.log("Server is running!");
})