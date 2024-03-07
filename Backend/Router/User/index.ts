import { Router } from "express";
import { createUserController } from "../../Controller";
import { LogInUserController } from "../../Controller";

export const userRouter = Router();

userRouter.post("/signup", createUserController);
userRouter.post("/login", LogInUserController);
