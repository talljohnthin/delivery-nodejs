import { CategoryModel } from "../models/category.model";
import { ICategory } from "../types";

export const getCategories = () => CategoryModel.find();

export const getCategoryById = (id: string) => CategoryModel.findById(id);

export const createCategory = (values: ICategory) =>
  new CategoryModel(values).save().then((category) => category.toObject());

export const deleteCategoryById = (id: string) =>
  CategoryModel.findOneAndDelete({ _id: id });

export const updateCategoryById = (id: string, values: ICategory) =>
  CategoryModel.findByIdAndUpdate(id, values);
