import { Model, model, models, Schema } from "mongoose";

export type CategoryModelType = {
  _id: Schema.Types.ObjectId;
  name: string;
  foodId: Schema.Types.ObjectId[];
};

const CategorySchema = new Schema<CategoryModelType>({
  name: { type: String, required: true },
  foodId: { type: [Schema.Types.ObjectId], required: true },
});

CategorySchema.index({ email: 1 }, { unique: true });

export const CategoryModel: Model<CategoryModelType> =
  models["Category"] || model("Category", CategorySchema);
