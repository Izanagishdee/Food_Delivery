import { Router } from "express";
import { GetFoodsController } from "../../Controller";
import { CreateFoodsController } from "../../Controller";

export const FoodRouter = Router();

FoodRouter.get("/Foods", GetFoodsController);
FoodRouter.post("/Food");
FoodRouter.post("/Create-food", CreateFoodsController);
