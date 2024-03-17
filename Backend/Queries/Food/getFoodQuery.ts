import { Request } from "express";
import { FoodModel } from "../../db";

export const getFoodQuery = async () => {
  const allFoods = await FoodModel.find();
  return allFoods;
};
