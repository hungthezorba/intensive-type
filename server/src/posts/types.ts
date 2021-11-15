import { ObjectID } from "typeorm";
import { PostRepo } from "./repository";

export interface IPost {
	_id: ObjectID,
	content: String,
	hearts: Number,
	retweet: Number,
	numberOfComments: Number
}

export interface IDataSources {
	postRepo: PostRepo
}

export interface IResponse {
	code: number,
	success: boolean,
	message: string,
	post: IPost 
}