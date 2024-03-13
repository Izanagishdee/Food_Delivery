import { Request, Response } from "express";
import { UserModel } from "../../db";
import { passwordHash } from "../../Utils";

export const CreateUserQuery = async (req: Request) => {
  try {
    const { name, email, phone, password } = req.body;
    console.log(req.body);

    const hash = await passwordHash(password);

    const User = await UserModel.create({
      name,
      email,
      phone,
      password: hash,
    });
    console.log(User);
    return User;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
