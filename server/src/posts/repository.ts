import { getMongoRepository, MongoRepository } from "typeorm";
import { Post } from "./entity";
import {DataSource} from 'apollo-datasource';

interface IPost {
	content: string
}

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

	async createPost(data: IPost): Promise<Post> {
		const post = this.repo.save({
			content: data.content,
			retweet: 0,
			hearts: 0,
			numberOfComments: 0,
		})
		return post;
	}

}