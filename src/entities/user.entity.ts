import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { v4 } from 'uuid';
import { Cart } from './cart.entity';

@Entity()
export class User {
	@PrimaryColumn('uuid')
	readonly id: string;

	@Column()
	name: string;

	@Column()
	email: string;

	@Column()
	password: string;

	@OneToOne((type) => Cart, {
		eager: true,
	})
	
	@JoinColumn()
	cart: Cart;

	constructor() {
		if (!this.id) {
			this.id = v4();
		}
	}
}
