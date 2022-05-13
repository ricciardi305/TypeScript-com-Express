import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { v4 } from 'uuid';

@Entity()
export class Product {
	@PrimaryColumn('uuid')
	readonly id: string;

	@Column()
	name: string;

	@Column()
	description: string;

	@Column('float')
	price: number;

	constructor() {
		if (!this.id) {
			this.id = v4();
		}
	}
}
