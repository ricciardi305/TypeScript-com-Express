import { Express } from 'express';
import { buyRoutes } from './buy.routes';
import { cartroutes } from './cart.routes';
import { productroutes } from './products.routes';
import { userRoutes } from './user.routes';

export const appRoutes = (app: Express) => {
	app.use('/users', userRoutes());
	app.use('/products', productroutes());
	app.use('/cart', cartroutes());
	app.use('/buy', buyRoutes());
};
