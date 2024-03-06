import { Router } from "express";
import { createUserController } from "../../Controller";

export const userRouter = Router();

userRouter.post("/signup", createUserController);
