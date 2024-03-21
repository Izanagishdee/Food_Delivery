import { Router } from "express";
import { GetFoodsController } from "../../Controller";
import { CreateFoodsController } from "../../Controller";

export const FoodRouter = Router();

FoodRouter.post("/Foods", GetFoodsController);

FoodRouter.post("/Create-food", CreateFoodsController);
