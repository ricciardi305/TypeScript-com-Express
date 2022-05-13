import { Request, Response } from 'express';
import { AppError, handleError } from '../../errors/appError';
import userCreateservice from '../../services/users/userCreate.service';

const userCreateController = async (req: Request, res: Response) => {
	try {
		const { name, email, password } = req.newUser;

		const newUser = await userCreateservice({ name, email, password });

		return res.status(201).send(newUser);
	} catch (error) {
		if (error instanceof AppError) {
			handleError(error, res);
		}
	}
};

export default userCreateController;
