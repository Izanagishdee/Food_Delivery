import { Request } from "express";
import { CategoryModel, FoodModel } from "../../db";

export const getCategoryQuery = async (req: Request) => {
  const { id } = req.body;

  const category = await CategoryModel.findById({ _id: id }).populate("foodId");

  console.log(category);

  return category;
};
