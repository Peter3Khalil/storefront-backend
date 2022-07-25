import { NextFunction, Request, Response } from 'express';
import productModel from '../model/productModel';
const productmodel = new productModel();
export const create = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const product = await productmodel.create(req.body);
        res.json(product);
    } catch (error) {
        next(error);
    }
};
export const get = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const products = await productmodel.get();
        res.json(products);
    } catch (error) {
        next(error);
    }
};
export const getProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const product = await productmodel.getProduct(parseInt(req.params.id));
        res.json(product);
    } catch (error) {
        next(error);
    }
};
export const deleteProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const massage = await productmodel.deleteProduct(
            parseInt(req.params.id)
        );
        res.json(massage);
    } catch (error) {
        next(error);
    }
};
