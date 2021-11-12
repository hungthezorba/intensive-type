import { ConnectionOptions } from "typeorm";
import {Post} from "../posts/entity";
require('dotenv').config();
const db = process.env.MONGO_DB;
const port = process.env.MONGO_PORT;

const config: ConnectionOptions = {
	type: 'mongodb',
	database: db,
	port: port? parseInt(port) : 27017,
	entities: [
		Post
	]
}

export {config};