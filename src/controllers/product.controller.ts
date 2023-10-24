import express from "express";

import {
  createProduct,
  deleteProductById,
  getProducts,
  getProductById,
  updateProductById,
} from "../services/product.services";
import { IProduct } from "../types";

export const getAllProducts = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const Products = await getProducts();

    return res.status(200).json(Products);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const addProduct = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const Product = await createProduct(req.body);
    return res.json(Product);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteProduct = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    const deletedProduct = await deleteProductById(id);

    return res.json(deletedProduct);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const updateProduct = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const { name, image, storeId, categoryId, tagId, price } =
      req.body as IProduct;

    if (
      !name ||
      !image.public_id ||
      !price ||
      !storeId ||
      !categoryId ||
      !tagId
    ) {
      return res.sendStatus(400);
    }

    await updateProductById(id, req.body);

    const Product = await getProductById(id);

    return res.status(200).json(Product).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
