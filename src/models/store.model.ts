import mongoose from "mongoose";

const StoreSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: Number },
    image: { type: Object, required: true },
    address: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

export const StoreModel = mongoose.model("Store", StoreSchema);
