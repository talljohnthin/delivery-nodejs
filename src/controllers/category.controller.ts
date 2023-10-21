import express from "express";

import {
  deleteCategoryById,
  getCategories,
  getCategoryById,
} from "../services/category.services";

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
    const { name } = req.body;

    if (!name) {
      return res.sendStatus(400);
    }

    const category = await getCategoryById(id);

    await category?.save();

    return res.status(200).json(category).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
