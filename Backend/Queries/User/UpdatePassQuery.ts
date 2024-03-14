import { Request, Response } from "express";
import { passwordHash } from "../../Utils";
import { UserModel } from "../../db";

const getUserByEmail = async (email: string) => {
  const user = await UserModel.findOne({ email: email });
  return user;
};

export const updatePassQuery = async (req: Request) => {
  const { email, password } = req.body;
  try {
    const user = await getUserByEmail(email);
    if (!user) {
      return "User not found";
    }
    const hash = await passwordHash(password);

    const updatePass = await UserModel.updateOne(
      { email: user.email },
      { $set: { password: hash } }
    );

    return updatePass;
  } catch (error) {
    return "can't update the password";
  }
};
