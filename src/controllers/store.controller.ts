import express from "express";

import {
  createStore,
  deleteStoreById,
  getStores,
  getStoreById,
  updateStoreById,
} from "../services/store.services";
import { IStore } from "../types";

export const getAllStores = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const stores = await getStores();

    return res.status(200).json(stores);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const addStore = async (req: express.Request, res: express.Response) => {
  try {
    const store = await createStore(req.body);
    return res.json(store);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteStore = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    const deletedStore = await deleteStoreById(id);

    return res.json(deletedStore);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const updateStore = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const { name, imageUrl, address } = req.body as IStore;

    if (!name || !imageUrl || !address) {
      return res.sendStatus(400);
    }

    await updateStoreById(id, req.body);

    const store = await getStoreById(id);

    return res.status(200).json(store).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
