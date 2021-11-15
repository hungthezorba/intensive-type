import { ObjectIdColumn, ObjectID, Entity, Column } from "typeorm";

@Entity("Post")
export class Post {

	@ObjectIdColumn()
	_id: ObjectID;

	@Column()
	content: string;

	@Column()
	retweet: number;

	@Column()
	hearts: number;

	@Column()
	numberOfComments: number;

	constructor(_id: ObjectID, content: string, retweet: number, hearts: number, numberOfComments: number ){
		this._id = _id;
		this.content = content;
		this.retweet = retweet;
		this.hearts = hearts;
		this.numberOfComments = numberOfComments;
	}
}