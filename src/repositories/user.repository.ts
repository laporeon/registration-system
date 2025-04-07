import { hash } from 'bcryptjs';
import { ObjectId } from 'mongodb';

import { connect } from '@/database/mongo';
import { AlreadyRegisteredError, NotFoundError } from '@/errors';
import { User } from '@/interfaces';

export class UserRepository {
  private readonly collectionName = 'users';

  async create(user: User): Promise<any> {
    const db = await connect();

    if (await this.isEmailAlreadyRegistered(user.email))
      throw new AlreadyRegisteredError();

    const hashedPassword = await hash(user.password, 10);

    const { insertedId } = await db.collection(this.collectionName).insertOne({
      ...user,
      password: hashedPassword,
      createdAt: new Date(),
    });

    return {
      message: 'User successfully created!',
      _id: insertedId,
    };
  }

  async list(id?: string): Promise<any> {
    const db = await connect();

    const data = await db
      .collection(this.collectionName)
      .find({
        ...(id && { _id: new ObjectId(id) }),
      })
      .toArray();

    if (data.length <= 0) throw new NotFoundError();

    return data;
  }

  async update(id: string, fieldsToUpdate: Partial<User>): Promise<any> {
    const db = await connect();

    const user = await db.collection(this.collectionName).findOneAndUpdate(
      {
        _id: new ObjectId(id),
      },
      { $set: { ...fieldsToUpdate, updatedAt: new Date() } },
      { returnDocument: 'after' }
    );

    if (!user) throw new NotFoundError();

    return user;
  }

  async delete(id: string): Promise<void> {
    const db = await connect();

    const user = await db
      .collection(this.collectionName)
      .findOne({ _id: new ObjectId(id) });

    if (!user) throw new NotFoundError();

    await db
      .collection(this.collectionName)
      .deleteOne({ _id: new ObjectId(id) });
  }

  async isEmailAlreadyRegistered(email: string) {
    const db = await connect();

    return await db.collection(this.collectionName).findOne({
      email,
    });
  }
}
