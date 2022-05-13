import { Router } from 'express';

import userCreateController from '../controllers/users/userCreate.controller';
import userDeleteSelfController from '../controllers/users/userDeleteSelf.controller';
import userListController from '../controllers/users/userList.controller';
import userListOnecontroller from '../controllers/users/userListOne.controller';
import userLoginController from '../controllers/users/userLogin.controller';
import userUpdatePasswordController from '../controllers/users/userUpdatePassword.controller';

import { authuser } from '../middlewares/authUser.middleware';

import { validateUserCreate } from '../middlewares/validateUserCreate.middleware';

const routes = Router();

export const userRoutes = () => {
	routes.post('/', validateUserCreate, userCreateController);
	routes.post('/login', userLoginController);

	routes.get('/', authuser, userListController);
	routes.get('/me', authuser, userListOnecontroller);

	routes.delete('/me', authuser, userDeleteSelfController);
	routes.patch('/me/updatepassword', authuser, userUpdatePasswordController);

	return routes;
};
