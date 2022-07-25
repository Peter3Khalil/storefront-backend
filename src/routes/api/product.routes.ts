import { Router } from 'express';
import * as productController from '../../controller/product.controller';
const route = Router();
route.post('/', productController.create);
route.get('/', productController.get);
route.get('/:id', productController.getProduct);
route.delete('/:id', productController.deleteProduct);
export default route;
