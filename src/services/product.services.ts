import { ProductModel } from "../models/product.model";
import { IProduct } from "../types";

export const getProducts = () => ProductModel.find();

export const getProductById = (id: string) => ProductModel.findById(id);

export const createProduct = (values: IProduct) =>
  new ProductModel(values).save().then((product) => product.toObject());

export const deleteProductById = (id: string) =>
  ProductModel.findOneAndDelete({ _id: id });

export const updateProductById = (id: string, values: IProduct) =>
  ProductModel.findByIdAndUpdate(id, values);
