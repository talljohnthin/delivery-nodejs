import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    image: { type: Object, required: true },
  },
  { timestamps: true, versionKey: false }
);

export const CategoryModel = mongoose.model("Category", CategorySchema);
