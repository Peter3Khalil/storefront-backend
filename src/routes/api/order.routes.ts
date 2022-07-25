import { Router } from 'express';
import * as orderController from '../../controller/order.controller';
const route = Router();
route.post('/', orderController.create);
route.get('/', orderController.get);
route.get('/:id', orderController.getOrder);
route.delete('/:id', orderController.deleteOrder);
export default route;
