import { Request, Response } from "express";
import { LogInQuery } from "../../Queries";

export const LogInUserController = async (req: Request, res: Response) => {
  try {
    const user = await LogInQuery(req);
    res.send({ user, message: "suga" });
  } catch (error: any) {
    res.status(400).send(error);
  }
};
