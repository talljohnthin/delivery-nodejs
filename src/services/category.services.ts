import { CategoryModel } from "../models/category.model";

export const getCategories = () => CategoryModel.find();

export const getCategoryById = (id: string) => CategoryModel.findById(id);

export const createCategory = (values: Record<string, any>) =>
  new CategoryModel(values).save().then((category) => category.toObject());

export const deleteCategoryById = (id: string) =>
  CategoryModel.findOneAndDelete({ _id: id });

export const updateCategoryById = (id: string, values: Record<string, any>) =>
  CategoryModel.findByIdAndUpdate(id, values);
