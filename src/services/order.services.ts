import { OrderModel } from "../models/order.model";
import { IOrder } from "../types";

export const getOrders = () => OrderModel.find();

export const getOrderById = (id: string) => OrderModel.findById(id);

export const createOrder = (values: IOrder) =>
  new OrderModel(values).save().then((order: any) => order.toObject());

export const cancelOrderById = (id: string) =>
  OrderModel.findByIdAndUpdate(id, { status: "Canceled" }, { new: true });

export const completeOrderById = (id: string) =>
  OrderModel.findByIdAndUpdate(id, { status: "Completed" }, { new: true });

export const updateOrderById = (id: string, values: IOrder) =>
  OrderModel.findByIdAndUpdate(id, values);
