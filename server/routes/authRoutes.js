import express from "express";
import { loging, logout, register } from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", loging);
authRouter.post("/logout", logout);

export default authRouter;
