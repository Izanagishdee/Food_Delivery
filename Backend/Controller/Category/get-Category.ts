import { Request, Response } from "express";
import { getCategoryQuery } from "../../Queries";

export const getCategoryController = async (req: Request, res: Response) => {
  try {
    const result = await getCategoryQuery(req);
    res.send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
