import { Router } from 'express';
import buyCreateController from '../controllers/buy/buyCreate.controller';
import { authuser } from '../middlewares/authUser.middleware';

const routes = Router();

export const buyRoutes = () => {
	routes.post('/', authuser, buyCreateController);

	return routes;
};
