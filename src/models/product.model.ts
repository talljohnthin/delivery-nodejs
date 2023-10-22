import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    phone: { type: Number },
    imageUrl: { type: String },
  },
  { timestamps: true, versionKey: false }
);

export const ProductModel = mongoose.model("Product", ProductSchema);
