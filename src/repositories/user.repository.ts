import { getCollection } from '@database/mongo';
import { User } from '@interfaces/User';

export class UserRepository {
  async create(userData: User) {
    const collection = await getCollection();

    const user = await collection.insertOne({
      ...userData,
      createdAt: new Date(),
    });

    return user;
  }

  async list() {
    const collection = await getCollection();

    const users = await collection.find().toArray();

    return users;
  }
}
