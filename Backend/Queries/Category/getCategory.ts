import { Request } from "express";
import { CategoryModel, FoodModel } from "../../db";

export const getCategoryQuery = async (req: Request) => {
  const { id } = req.body;

  try {
    const category = await CategoryModel.findById({ _id: id }).populate(
      "foodId"
    );
    return category;
    console.log(category);
  } catch (error: any) {
    throw new Error();
  }
};
