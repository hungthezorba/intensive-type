import { gql } from "apollo-server";
import { PostRepo } from "./repository";

export const typeDefs = gql`
	type Query {
		getAllPosts: [Post]
	}

	type Mutation {
		createPost(content: String!): createPostResponse! 
	}

  type createPostResponse {
    code: Int!
    success: Boolean!
    message: String!
    post: Post
  }

	type Post {
		id: ID!
		content: String!
		hearts: Int!
		retweet: Int!
		numberOfComments: Int!
	}
`
interface IDataSources {
	postRepo: PostRepo
}

export const resolvers = {
	Query: {
		getAllPosts: (_:any, __: any, {dataSources} : {dataSources: IDataSources}) => {
			return dataSources.postRepo.getAllPost();
		}
	},
	Mutation: {
		createPost: (_:any, {content}: {content: string}, {dataSources} : {dataSources: IDataSources}) => {
			try {
				const post = dataSources.postRepo.createPost({content});
				return {
					code: 200,
					success: true,
					message: "New post created",
					post
				}
			} catch(err) {
					console.log(err);	
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