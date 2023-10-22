import express from "express";

import {
  createCategory,
  deleteCategoryById,
  getCategories,
  getCategoryById,
  updateCategoryById,
} from "../services/category.services";
import { ICategory } from "../types";

export const getAllCategories = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const categories = await getCategories();

    return res.status(200).json(categories);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const addCategory = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const category = await createCategory(req.body);
    return res.json(category);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteCategory = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    const deletedCategory = await deleteCategoryById(id);

    return res.json(deletedCategory);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const updateCategory = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const { title, imageUrl } = req.body as ICategory;

    if (!title || !imageUrl) {
      return res.sendStatus(400);
    }

    await updateCategoryById(id, req.body);

    const category = await getCategoryById(id);

    return res.status(200).json(category).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
