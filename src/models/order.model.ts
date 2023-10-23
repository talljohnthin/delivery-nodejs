import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    total: { type: String, required: true },
    products: { type: [Object], require: true },
    status: { type: String, require: true },
  },
  { timestamps: true, versionKey: false }
);

export const OrderModel = mongoose.model("Order", OrderSchema);
