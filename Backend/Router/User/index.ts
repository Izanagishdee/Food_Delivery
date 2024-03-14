import { Router } from "express";
import { createUserController } from "../../Controller";
import { LogInUserController } from "../../Controller";
import { CheckPass } from "../../Controller/User/CheckPass";
import { forgotPasswordService } from "../../Controller/User/PasswordRec";
import { updatePass } from "../../Controller/User/updatePassword";
import { getLoggedInUserController } from "../../Controller/User/verifyTokenController";
import { tokenCreate } from "../../Utils";

export const userRouter = Router();

userRouter.post("/signup", createUserController);
userRouter.post("/login", LogInUserController);
userRouter.post("/forgot-password", forgotPasswordService);
userRouter.post("/check-code", CheckPass);
userRouter.post("/updatePass", updatePass);
userRouter.get("/token", tokenCreate, getLoggedInUserController);
