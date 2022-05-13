import { Router } from 'express';

import productCreateController from '../controllers/product/productCreate.controller';
import productListController from '../controllers/product/productList.controller';

const routes = Router();

export const productroutes = () => {
	routes.get('/', productListController);
	routes.post('/', productCreateController);

	return routes;
};
