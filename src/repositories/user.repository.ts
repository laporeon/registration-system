import { connectToMongoDB, disconnectMongoDB } from '@database/mongo';
import { User } from '@interfaces/User';

export class UserRepository {
  async connectToCollection() {
    const database = await connectToMongoDB();
    const collection = await database.collection<User>('users');
    return collection;
  }

  async create(userData: User) {
    const collection = await this.connectToCollection();

    const user = await collection.insertOne({
      ...userData,
      createdAt: new Date(),
    });

    await disconnectMongoDB();

    return user;
  }

  async list() {
    const collection = await this.connectToCollection();

    const users = await collection.find().toArray();

    await disconnectMongoDB();

    return users;
  }
}
