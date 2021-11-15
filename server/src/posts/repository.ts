import { getMongoRepository, MongoRepository } from "typeorm";
import { Post } from "./entity";
import {DataSource} from 'apollo-datasource';
import { ObjectId } from 'mongodb';

export class PostRepo extends DataSource {
	repo: MongoRepository<Post>;
	constructor() {
		super();
		this.repo = getMongoRepository(Post);
	}

	async getAllPost(): Promise<Post[]> {
		const posts =  await this.repo.find();
		return posts
	}

	async create(data: {content: string}): Promise<Post> {
		const post = this.repo.save({
			content: data.content,
			retweet: 0,
			hearts: 0,
			numberOfComments: 0,
		})
		return post;
	}

	async increase(data: {id: string, field: string}): Promise<Post> {
		const post = await this.repo.findOneAndUpdate({
			_id: new ObjectId(data.id)
			}, { $inc: {[`${data.field}`]: 1}}, { returnOriginal: false }
		)
		return post.value;
	}
}