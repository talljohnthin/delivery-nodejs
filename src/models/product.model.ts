import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    description: { type: String },
    preperationTime: { type: Number },
    storeId: { type: String, required: true },
    categoryId: { type: String, required: true },
    tagId: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

export const ProductModel = mongoose.model("Product", ProductSchema);
