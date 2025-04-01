import { ObjectId } from 'mongodb';

import { getCollection } from '@/database/mongo';
import { InvalidRequiredField, NotFoundError } from '@/errors';
import { User } from '@/interfaces';

export class UserRepository {
  async create(userData: User): Promise<any> {
    const collection = await getCollection();

    const user = await collection.insertOne({
      ...userData,
      createdAt: new Date(),
    });

    return user;
  }

  async list(id?: string): Promise<any> {
    const collection = await getCollection();

    if (id && !ObjectId.isValid(id)) throw new InvalidRequiredField();

    const data = await collection
      .find({
        ...(id && { _id: new ObjectId(id) }),
      })
      .toArray();

    if (data.length <= 0) throw new NotFoundError();

    return data;
  }

  async delete(id: string): Promise<void> {
    const collection = await getCollection();

    if (!ObjectId.isValid(id)) throw new InvalidRequiredField();

    const user = await collection.findOne({ _id: new ObjectId(id) });

    if (!user) throw new NotFoundError();

    await collection.deleteOne({ _id: new ObjectId(id) });
  }
}
