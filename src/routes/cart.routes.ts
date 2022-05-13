import { Router } from 'express';

import cartAddProdController from '../controllers/cart/cartAddProd.controller';
import cartDelProdController from '../controllers/cart/cartDelProd.controller';

import { authuser } from '../middlewares/authUser.middleware';

const routes = Router();

export const cartroutes = () => {
	routes.post('/', authuser, cartAddProdController);

	routes.delete('/:product_id', authuser, cartDelProdController);

	return routes;
};
