import { StoreModel } from "../models/store.model";
import { IStore } from "../types";

export const getStores = () => StoreModel.find();

export const getStoreById = (id: string) => StoreModel.findById(id);

export const createStore = (values: IStore) =>
  new StoreModel(values).save().then((Store: any) => Store.toObject());

export const deleteStoreById = (id: string) =>
  StoreModel.findOneAndDelete({ _id: id });

export const updateStoreById = (id: string, values: IStore) =>
  StoreModel.findByIdAndUpdate(id, values);
