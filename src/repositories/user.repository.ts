import { ObjectId } from 'mongodb';

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

  async list(id?: string) {
    const collection = await getCollection();

    const data = await collection
      .find({
        ...(id && { _id: new ObjectId(id) }),
      })
      .toArray();

    return data;
  }

  async delete(id: string) {
    const collection = await getCollection();

    await collection.deleteOne({ _id: new ObjectId(id) });
  }
}
