import { Request, Response } from "express";
import { getFoodQuery } from "../../Queries";

export const GetFoodsController = async (req: Request, res: Response) => {
  try {
    const allFoods = await getFoodQuery();
    res.send(allFoods);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
