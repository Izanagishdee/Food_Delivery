import { Request, Response } from "express";
import { compareHash, tokenCreate } from "../../Utils";
import { UserModel } from "../../db";

const getUserByEmail = async (email: string) => {
  const user = await UserModel.findOne({ email: email });
  return user;
};

export const LogInQuery = async (req: Request) => {
  const { email, password } = req.body;
  try {
    const user = await getUserByEmail(email);
    console.log(email);
    console.log(password);
    // console.log(user);

    if (user === null) {
      throw new Error("Email or password is wrong");
    }
    const isPasswordCorrect = await compareHash(password, user.password);
    if (!isPasswordCorrect) {
      throw new Error("Email or password is wrong");
    }

    const token = await tokenCreate(user._id.toString());

    return token;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
