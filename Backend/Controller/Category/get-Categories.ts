import { Request, Response } from "express";
import { getCategoriesQuery } from "../../Queries";

export const getCategoriesController = async (req: Request, res: Response) => {
  try {
    const result = await getCategoriesQuery(req);
    return result;
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
