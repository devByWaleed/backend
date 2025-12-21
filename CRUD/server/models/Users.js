const mongoose = require('mongoose')


// Creating user schema
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})


// .model gets collection name & schema
const UserModel = mongoose.model("users", UserSchema)


// Exporting the model
module.exports = UserModel