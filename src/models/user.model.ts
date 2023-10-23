import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String },
    address: { type: String },
  },
  { timestamps: true, versionKey: false }
);

export const UserModel = mongoose.model("User", UserSchema);
