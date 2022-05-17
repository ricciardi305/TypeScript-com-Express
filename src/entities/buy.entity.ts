import { userInfo } from 'os';
import {
	Column,
	Entity,
	JoinTable,
	ManyToMany,
	ManyToOne,
	PrimaryColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Product } from './product.entity';
import { User } from './user.entity';

@Entity()
export class Buy {
	@PrimaryColumn('uuid')
	readonly id: string;

	@ManyToOne((type) => User, (user) => user.buys)
	user: User;

	@ManyToMany((type) => Product, {
		eager: true,
	})
	@JoinTable()
	products: Product[];

	@Column('float')
	total: number;

	constructor() {
		if (!this.id) {
			this.id = uuid();
		}
	}
}
