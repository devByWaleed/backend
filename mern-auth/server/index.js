// npm i express cors dotenv nodemon jsonwebtoken mongoose bcryptjs nodemailer cookie-parser


// "type": "module"  to use import / export

import express from "express"
import cors from "cors"
import 'dotenv/config'
import cookieParser from "cookie-parser"
import connectDB from './config/mongodb.js'

const app = express()
const port = process.env.PORT || 4000

connectDB()

app.use(express.json())
app.use(cookieParser())
app.use(cors({ credentials: true }))

app.get('/', (req, res) => {
    // Empty for all users
    res.send("API Working!!!")
})

app.listen(port, () => {
    console.log(`Server started on PORT: ${port}`);
})