import { Request, Response } from "express";
import { createCategory } from "../../Queries/Category";
import { log } from "console";

export const createCategoryController = async (req: Request, res: Response) => {
  try {
    const result = await createCategory(req);
    res.send(result);
  } catch (error: any) {
    console.log("asd");

    res.status(400).send(error.message);
  }
};
