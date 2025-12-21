const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// Calling express method
const app = express()

// server side in frontend
app.use(cors())

// passing data from backend to frontend
app.use(express.json())

// Starting server
app.listen(3001, () => {
    console.log("Server is running!");
})