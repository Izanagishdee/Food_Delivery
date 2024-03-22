import { Request, Response } from "express";
import { CategoryModel } from "../../db";

export const getCategoryQuery = async (req: Request) => {
  const { id } = req.body;
  try {
    const category = await CategoryModel.findOne({ _id: id }).populate(
      "foodId"
    );

    return category;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
