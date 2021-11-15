import "reflect-metadata";
import {ApolloServer} from 'apollo-server';
import {ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core';
import { Connection, createConnection } from 'typeorm';
import {mongoConfig} from './config';
import { typeDefs, resolvers } from './posts/post';
import { PostRepo } from "./posts/repository";

const app = async () => {
	
	let connection: Connection;
	try {
		connection = await createConnection(mongoConfig);
		if (!connection.isConnected) {
			await connection.connect();
		}
	} catch(err) {
		console.log(err);
	}
	
	const server = new ApolloServer({
		typeDefs,
		resolvers,
		dataSources: () => {
			return {
				postRepo: new PostRepo()
			}
		},
		plugins: [
			ApolloServerPluginLandingPageGraphQLPlayground({})
		]
	});
 
	const { url, port } = await server.listen({port: process.env.PORT || 4000});
 
	console.log(`
      🚀  Server is running
      🔉  Listening on port ${port}
      📭  Query at ${url}
    `);
}
app();