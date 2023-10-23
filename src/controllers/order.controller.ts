import express from "express";

import {
  cancelOrderById,
  createOrder,
  getOrders,
  getOrderById,
  updateOrderById,
  completeOrderById,
} from "../services/order.services";
import { IOrder } from "../types";
import { getUserById } from "../services/user.services";

export const getAllOrders = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const orders = await getOrders();

    return res.status(200).json(orders);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const addOrder = async (req: express.Request, res: express.Response) => {
  try {
    let { userId, total, products } = req.body as IOrder;

    await getUserById(userId);

    if (!userId) {
      return res.status(400).json({
        error: true,
        message: "Can't create order, User not allowed.",
      });
    }

    if (!total) {
      return res
        .status(400)
        .json({ error: true, message: "Need a total value" });
    }

    if (!products || (products && products.length < 1)) {
      return res
        .status(400)
        .json({ error: true, message: "Please add products" });
    }

    const order = await createOrder({ ...req.body, status: "Active" });
    return res.json(order);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const cancelOrder = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    await cancelOrderById(id);

    const order = await getOrderById(id);

    return res.status(200).json(order).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const completeOrder = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    await completeOrderById(id);

    const order = await getOrderById(id);

    return res.status(200).json(order).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const updateOrder = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    let { userId, total, products } = req.body as IOrder;

    if (!userId) {
      return res.status(400).json({
        error: true,
        message: "Can't create order, User not allowed.",
      });
    }

    if (!total) {
      return res
        .status(400)
        .json({ error: true, message: "Need a total value" });
    }

    if (!products || (products && products.length < 1)) {
      return res
        .status(400)
        .json({ error: true, message: "Please add products" });
    }

    await updateOrderById(id, req.body);

    const order = await getOrderById(id);

    return res.status(200).json(order).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
