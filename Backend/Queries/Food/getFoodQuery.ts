import { Request } from "express";
import { FoodModel } from "../../db";

export const getFoodQuery = async (req: Request) => {
  const { filter = {} } = req.body;

  const allFoods = await FoodModel.find(filter);
  return allFoods;
};
