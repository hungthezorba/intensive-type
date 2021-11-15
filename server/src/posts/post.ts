import { gql } from "apollo-server";
import { IPost, IDataSources, IResponse } from "./types";

export const typeDefs = gql`
	type Query {
		getAllPosts: [Post]
	}

	type Mutation {
		createPost(content: String!): commandPostResponse! 
		heartPost(id: ID!): commandPostResponse!
		retweetPost(id: ID!): Boolean!
	}

	type commandPostResponse {
    code: Int!
    success: Boolean!
    message: String!
    post: Post
  }

	type Post {
		_id: ID!
		content: String!
		hearts: Int!
		retweet: Int!
		numberOfComments: Int!
	}
`

export const resolvers = {
	Query: {
		getAllPosts: (_:any, __: any, {dataSources} : {dataSources: IDataSources}) => {
			return dataSources.postRepo.getAllPost();
		}
	},
	Mutation: {
		createPost: async (_:any, {content}: {content: string}, {dataSources} : {dataSources: IDataSources}) => {
			try {
				const post = await dataSources.postRepo.create({content});
				
				return returnCommandSuccessResponse({
					message: "New post created",
					post
				})
			} catch(err) {
					console.log(err);
						
					return {
						code: 500,
						success: false,
						message: "MongoDB operation failed",
						post: null
					}
			}
		},
		heartPost: async (_: any, {id}: {id: string}, {dataSources} : {dataSources: IDataSources}) => {
			try {
				const post = await dataSources.postRepo.increase({id, field: "hearts"});
				return returnCommandSuccessResponse({
					message: "Update heart success",
					post
				})	
			} catch (err) {
					return {
						code: 500,
						success: false,
						message: "MongoDB operation failed",
						post: null
					}	
			}
		}
	}
}

function returnCommandSuccessResponse(data : {message: string , post: IPost}): IResponse {
	return {
		code: 200,
		message: data.message,
		success: true,
		post: data.post
	}
}