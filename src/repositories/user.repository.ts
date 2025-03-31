import { ObjectId } from 'mongodb';

import { getCollection } from '@database/mongo';
import { NotFoundError } from '@errors/index';
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

    if (data.length <= 0) throw new NotFoundError();

    return data;
  }

  async delete(id: string) {
    const collection = await getCollection();

    const user = await collection.findOne({ _id: new ObjectId(id) });

    if (!user) throw new NotFoundError();

    await collection.deleteOne({ _id: new ObjectId(id) });
  }
}
