import { gql } from "apollo-server";

export const typeDefs = gql`
	type Query {
		"retrieve a list of users"
		getUsers: [User]!
		"retrieve a user information by ID. Return a User object"
		getUser(id: ID!): User
	}

	type User {
		id: ID!
		name: String!
		email: String!
		password: String!
	}
`