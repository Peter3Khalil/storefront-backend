import { NextFunction, Request, Response } from 'express';
import orderModel from '../model/orderModel';
const ordermodel = new orderModel();
export const create = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const order = await ordermodel.create(req.body);
        res.json(order);
    } catch (error) {
        next(error);
    }
};
export const get = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const orders = await ordermodel.get();
        res.json(orders);
    } catch (error) {
        next(error);
    }
};
export const getOrder = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const order = await ordermodel.getOrder(parseInt(req.params.id));
        res.json(order);
    } catch (error) {
        next(error);
    }
};
export const deleteOrder = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const massage = await ordermodel.deleteOrder(parseInt(req.params.id));
        res.json(massage);
    } catch (error) {
        next(error);
    }
};
