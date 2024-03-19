import { Request } from "express";
import { CategoryModel } from "../../db";

export const createCategory = async (req: Request) => {
  try {
    const { name, foodIds } = req.body;

    const result = await CategoryModel.create({
      name,
      foodId: [...foodIds],
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return result._id;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
