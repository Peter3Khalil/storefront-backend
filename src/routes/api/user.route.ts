import { Router } from 'express';
import * as userController from '../../controller/user.controller';
const route = Router();
route.post('/', userController.create);
route.get('/', userController.get);
route.get('/:id', userController.getUser);
route.delete('/:id', userController.deleteUser);
export default route;
