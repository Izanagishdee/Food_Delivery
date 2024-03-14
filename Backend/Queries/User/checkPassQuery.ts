import { Request, Response } from "express";
import { UserModel } from "../../db";

const getUserByEmail = async (email: string) => {
  const user = await UserModel.findOne({ email: email });
  return user;
};

export const checkPassQuery = async (req: Request) => {
  const { code, email } = req.body;
  try {
    const user = await getUserByEmail(email);

    if (user?.otp === code) {
      await UserModel.updateOne({ email: user?.email }, { $set: { otp: "" } });
      return "success";
    } else {
      return "invalid code";
    }
  } catch (er: any) {
    throw new Error(er.message);
  }
};
