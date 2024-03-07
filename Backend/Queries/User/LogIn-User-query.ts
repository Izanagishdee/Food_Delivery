import { Request, Response } from "express";

export const LogInQuery = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
