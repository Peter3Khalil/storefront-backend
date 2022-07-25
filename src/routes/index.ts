import userRoute from './api/user.route';
import productRoute from './api/product.routes';
import orderRoute from './api/order.routes';
import { Router } from 'express';
const route = Router();
route.use('/user', userRoute);
route.use('/product', productRoute);
route.use('/order', orderRoute);
export default route;
