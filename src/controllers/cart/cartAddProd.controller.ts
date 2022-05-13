import { Request, Response } from 'express';
import { AppError, handleError } from '../../errors/appError';
import cartAddProdService from '../../services/cart/cartAddProd.service';

const cartAddProdController = async (req: Request, res: Response) => {
	try {
		const { userEmail } = req;

		const { product_id } = req.body;

		const addCart = await cartAddProdService(product_id, userEmail);

		return res.json(addCart);
	} catch (error) {
		if (error instanceof AppError) {
			handleError(error, res);
		}
	}
};

export default cartAddProdController;
