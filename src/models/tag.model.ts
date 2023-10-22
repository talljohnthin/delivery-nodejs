import mongoose from "mongoose";

const TagSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

export const TagModel = mongoose.model("Tag", TagSchema);
