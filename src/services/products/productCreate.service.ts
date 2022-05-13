import { AppDataSource } from '../../data-source';
import { Product } from '../../entities/product.entity';
import { AppError } from '../../errors/appError';
import { IProductCreate } from '../../interfaces/products';

const productCreateService = async ({
	name,
	description,
	price,
}: IProductCreate) => {
	const productRepository = AppDataSource.getRepository(Product);

	const productAlreadyExists = await productRepository.findOne({
		where: { name },
	});

	if (productAlreadyExists) {
		throw new AppError(409, 'Product Already Registered!');
	}

	const product = productRepository.create({
		name,
		description,
		price,
	});

	await productRepository.save(product);

	return product;
};

export default productCreateService;
