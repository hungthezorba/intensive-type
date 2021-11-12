import {Entity, Column, ObjectID, ObjectIdColumn} from 'typeorm';

@Entity()
export class User {
	@ObjectIdColumn()
	id: ObjectID;

	@Column()
	name: string;

	@Column()
	email: string;

	@Column()
	password: string;

	constructor(id: ObjectID, name: string, email: string, password: string) {
		this.id = id
		this.name = name
		this.email = email
		this.password = password
	} 
}