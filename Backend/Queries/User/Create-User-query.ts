import { Request, Response } from "express";
import { UserModel } from "../../db";
import { passwordHash, tokenCreate } from "../../Utils";

export const CreateUserQuery = async (req: Request) => {
  try {
    const { name, email, phone, password } = req.body;
    const hash = passwordHash(password);

    const User = await UserModel.create({
      name,
      email,
      phone,
      password: hash,
    });
    if (!User) {
      throw new Error("User creation failed");
    }
    const token = await tokenCreate(User._id.toString());

    return token;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
