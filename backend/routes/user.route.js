import express from "express";
import { login, signup } from "../controller/user.controller.js";

const userRouter = express.Router();

userRouter.post("/login", login).post("/signup", signup);
export default userRouter;
