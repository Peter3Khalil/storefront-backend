import { NextFunction, Request, Response } from 'express';
import userModel from '../model/userModel';
const usermodel = new userModel();
export const create = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const user = await usermodel.create(req.body);
        res.json(user);
    } catch (error) {
        next(error);
    }
};
export const get = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await usermodel.get();
        res.json(users);
    } catch (error) {
        next(error);
    }
};
export const getUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const user = await usermodel.getUser(parseInt(req.params.id));
        res.json(user);
    } catch (error) {
        next(error);
    }
};
export const deleteUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const massage = await usermodel.deleteUser(parseInt(req.params.id));
        res.json(massage);
    } catch (error) {
        next(error);
    }
};
