import { Response, Request } from "express";
import { CreateUserQuery } from "../../Queries/User";

export const createUserController = async (req: Request, res: Response) => {
  try {
    const User = await CreateUserQuery(req);
    res.send({ message: "Success", User });
  } catch (error: any) {
    res.send(error.message);
  }
};
