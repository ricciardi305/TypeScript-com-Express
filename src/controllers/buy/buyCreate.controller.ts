import { Request, Response } from 'express';
import { AppError, handleError } from '../../errors/appError';
import buyCreateService from '../../services/buy/buyCreate.service';

const buyCreateController = async (req: Request, res: Response) => {
	try {
		const { userEmail } = req;
		const buy = await buyCreateService(userEmail);
		return res.status(201).json(buy);
	} catch (error) {
		if (error instanceof AppError) {
			handleError(error, res);
		}
	}
};

export default buyCreateController;
