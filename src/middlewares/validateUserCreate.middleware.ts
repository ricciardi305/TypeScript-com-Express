import { Request, Response, NextFunction } from 'express';
import * as yup from 'yup';
import { SchemaOf } from 'yup';
import { IUserCreate } from '../interfaces/users';

const userCreateSchema: SchemaOf<IUserCreate> = yup.object().shape({
	name: yup.string().required(),
	email: yup.string().email().required(),
	password: yup.string().required(),
});

export const validateUserCreate = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	// 	try {
	// 		const data = req.body;

	// 		try {
	// 			const validatedData = await schema.validate(data, {
	// 				abortEarly: false,
	// 				stripUnknown: true,
	// 			});

	// 			req.newUser = validatedData;

	// 			next();
	// 		} catch (error: any) {
	// 			return res.status(400).json({
	// 				error: error.errors?.join(', '),
	// 			});
	// 		}
	// 	} catch (error) {
	// 		next(error);
	// 	}
	const data = req.body;
	console.log('Passou middleware');

	try {
		const validatedData = await userCreateSchema.validate(data, {
			abortEarly: false,
			stripUnknown: true,
		});

		req.newUser = validatedData;

		console.log('Passou middleware');
		next();
	} catch (error: any) {
		return res.status(400).json({
			error: error.errors?.join(', '),
		});
	}
};
