import { Request, Response } from "express";

import { passwordRecovery } from "../../Queries";

export const forgotPasswordService = async (req: Request, res: Response) => {
  try {
    const user = await passwordRecovery(req);
    res.json(user);
  } catch (error: any) {
    res.send(error.message);
  }
};
