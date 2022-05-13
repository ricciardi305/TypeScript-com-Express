import { Request, Response } from 'express';
import { IProduct } from '../../interfaces/products';
import productListService from '../../services/products/productList.service';

const productListController = async (req: Request, res: Response) => {
	const productList: IProduct[] = await productListService();

	return res.json(productList);
};

export default productListController;
