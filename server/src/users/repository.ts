import { getMongoRepository, MongoRepository, ObjectID } from "typeorm";
import { User } from "./entity";

export class UserRepo {

	repo: MongoRepository<User>;
	constructor() {
		this.repo = getMongoRepository(User);
	}

	async getUser(id: ObjectID): Promise<User | null> {
			const user = await this.repo.findOne({id: id});
			if (user) {
				return user;
			}
			return null;
	}
}