import { Router } from "express";
import { createCategoryController } from "../../Controller/Category/createCategory";
import { getCategoriesController } from "../../Controller/Category/get-Categories";
import { getCategoryController } from "../../Controller";

export const CategoryRouter = Router();

CategoryRouter.post("/createcategory", createCategoryController);
CategoryRouter.post("/category", getCategoryController);
CategoryRouter.get("/categories", getCategoriesController);
