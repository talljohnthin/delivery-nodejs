import { TagModel } from "../models/tag.model";
import { ITag } from "../types";

export const getTags = () => TagModel.find();

export const getTagById = (id: string) => TagModel.findById(id);

export const createTag = (values: ITag) =>
  new TagModel(values).save().then((tag: any) => tag.toObject());

export const deleteTagById = (id: string) =>
  TagModel.findOneAndDelete({ _id: id });

export const updateTagById = (id: string, values: ITag) =>
  TagModel.findByIdAndUpdate(id, values);
