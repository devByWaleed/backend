import express, { Router } from "express";
// Keep the .js extension for compatibility with your "type": "module" setup
import {
    createUser,
    deleteUser,
    getUser,
    updateUser
} from "../controllers/userController.js";

// Annotate the router as an Express Router type
const userRouter: Router = express.Router();

// Public routes
userRouter.post('/create-user', createUser);
userRouter.get('/get-user', getUser);
userRouter.put('/update-user', updateUser);
userRouter.delete('/delete-user', deleteUser);

export default userRouter;