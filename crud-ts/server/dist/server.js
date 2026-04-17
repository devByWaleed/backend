// Import
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/userRoutes.js";
import connectDB from "./config/mongodb.js";
// Configuration
const app = express();
app.use(cors());
app.use(express.json());
// Connect Database
connectDB();
app.get('/', (req, res) => res.send("API Working!!!"));
app.use('/api/user', userRouter);
// Running the server
app.listen(4000, () => {
    console.log("Server is running on port 4000!");
});
//# sourceMappingURL=server.js.map