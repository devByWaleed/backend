// Import
import express from "express";
import type { Request, Response } from "express"; // Use 'import type' for interfaces
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/userRoutes.js";
import connectDB from "./config/mongodb.js";


// Configuration
const app = express();
app.use(cors());
app.use(express.json());


// Connect Database
connectDB()


app.get('/', (req: Request, res: Response) => res.send("API Working!!!"))
app.use('/api/user', userRouter)


// Running the server
app.listen(4000, () => {
    console.log("Server is running on port 4000!");
});