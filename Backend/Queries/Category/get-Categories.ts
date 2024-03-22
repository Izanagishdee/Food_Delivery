import { CategoryModel } from "../../db";
import { Request } from "express";

export const getCategoriesQuery = async (req: Request) => {
  const categories = await CategoryModel.find();

  const newCategorires = categories.map((item) => {
    return { name: item.name, id: item._id };
  });

  return newCategorires;
};
