import { TagModel } from "../models/tag.model";

export const getTags = () => TagModel.find();

export const getTagById = (id: string) => TagModel.findById(id);

export const createTag = (values: Record<string, any>) =>
  new TagModel(values).save().then((tag: any) => tag.toObject());

export const deleteTagById = (id: string) =>
  TagModel.findOneAndDelete({ _id: id });

export const updateTagById = (id: string, values: Record<string, any>) =>
  TagModel.findByIdAndUpdate(id, values);
