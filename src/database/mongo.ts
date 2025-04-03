import { Collection, Db, MongoClient } from 'mongodb';

import { env } from '@/config/env';
import { logger } from '@/helpers';

const mongoUri = `mongodb://${env.username}:${env.password}@${env.host}:27017/${env.database}?authSource=admin`;

const client = new MongoClient(mongoUri, {
  timeoutMS: 5000,
});

// TODO: refactor connection
async function connect(): Promise<any> {
  try {
    await client.connect();
    const database: Db = client.db(env.database);
    const collection: Collection = await database.collection('users');
    logger.info('Connected to dabatase.');
    return { database, collection };
  } catch (error) {
    console.log({ error });
    logger.error(`Database connection failed.`, error);
    throw new Error('Failed to connect to database.');
  }
}

async function disconnect() {
  await client.close();
  logger.info('Connection with database closed!');
}

export { connect, disconnect };
