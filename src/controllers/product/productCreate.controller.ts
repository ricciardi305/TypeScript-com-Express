import { Request, Response } from 'express';
import { AppError, handleError } from '../../errors/appError';
import { IProduct } from '../../interfaces/products';
import productCreateService from '../../services/products/productCreate.service';

const productCreateController = async (req: Request, res: Response) => {
	try {
		const data = req.body;

		const product: IProduct = await productCreateService(data);

		return res.status(201).json(product);
	} catch (error) {
		if (error instanceof AppError) {
			handleError(error, res);
		}
	}
};

export default productCreateController;
