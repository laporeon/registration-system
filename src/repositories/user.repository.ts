import { ObjectId } from 'mongodb';

import { connect } from '@/database/mongo';
import { InvalidRequiredField, NotFoundError } from '@/errors';
import { User } from '@/interfaces';

export class UserRepository {
  async create(userData: User): Promise<any> {
    const { collection } = await connect();

    const { insertedId } = await collection.insertOne({
      ...userData,
      createdAt: new Date(),
    });

    // Since MongoDB itself doesn't return full object inserted data one insertOne, we need to do it manually
    return {
      _id: insertedId,
      ...userData,
    };
  }

  async list(id?: string): Promise<any> {
    const { collection } = await connect();

    if (id && !ObjectId.isValid(id)) throw new InvalidRequiredField();

    const data = await collection
      .find({
        ...(id && { _id: new ObjectId(id) }),
      })
      .toArray();

    if (data.length <= 0) throw new NotFoundError();

    return data;
  }

  async update(id: string, fieldsToUpdate: Partial<User>): Promise<any> {
    const { collection } = await connect();

    if (!ObjectId.isValid(id)) throw new InvalidRequiredField();

    const user = await collection.findOneAndUpdate(
      {
        _id: new ObjectId(id),
      },
      { $set: { ...fieldsToUpdate, updatedAt: new Date() } },
      { returnDocument: 'after' },
    );

    if (!user) throw new NotFoundError();

    return user;
  }

  async delete(id: string): Promise<void> {
    const { collection } = await connect();

    if (!ObjectId.isValid(id)) throw new InvalidRequiredField();

    const user = await collection.findOne({ _id: new ObjectId(id) });

    if (!user) throw new NotFoundError();

    await collection.deleteOne({ _id: new ObjectId(id) });
  }
}
