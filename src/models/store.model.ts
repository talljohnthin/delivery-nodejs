import mongoose from "mongoose";

const StoreSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    phone: { type: Number },
    imageUrl: { type: String },
  },
  { timestamps: true, versionKey: false }
);

export const StoreModel = mongoose.model("Store", StoreSchema);
