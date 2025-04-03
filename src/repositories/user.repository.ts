import { ObjectId } from 'mongodb';

import { connect } from '@/database/mongo';
import {
  AlreadyRegisteredError,
  InvalidRequiredField,
  NotFoundError,
} from '@/errors';
import { logger } from '@/helpers';
import { User } from '@/interfaces';

export class UserRepository {
  async create(user: User): Promise<any> {
    const { collection } = await connect();

    if (await this.isEmailAlreadyRegistered(user.email))
      throw new AlreadyRegisteredError();

    const { insertedId } = await collection.insertOne({
      ...user,
      createdAt: new Date(),
    });

    logger.info(`User successfully inserted at database.`);

    // Since MongoDB itself doesn't return full object inserted data on insertOne, we need to return it manually
    return {
      _id: insertedId,
      ...user,
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

    logger.info(`User information successfully updated.`);

    return user;
  }

  async delete(id: string): Promise<void> {
    const { collection } = await connect();

    if (!ObjectId.isValid(id)) throw new InvalidRequiredField();

    const user = await collection.findOne({ _id: new ObjectId(id) });

    if (!user) throw new NotFoundError();

    logger.info(`User successfully deleted.`);

    await collection.deleteOne({ _id: new ObjectId(id) });
  }

  async isEmailAlreadyRegistered(email: string) {
    const { collection } = await connect();

    return await collection.findOne({
      email,
    });
  }
}
