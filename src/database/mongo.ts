import { Db, MongoClient } from 'mongodb';

import { env } from '@/config/env';
import { logger } from '@/helpers';

const mongoUri = `mongodb://${env.username}:${env.password}@${env.host}:27017/${env.database}?authSource=admin`;

const client = new MongoClient(mongoUri, {
  timeoutMS: 5000,
  connectTimeoutMS: 5000,
});

let database: Db | null = null;

async function connect(): Promise<Db> {
  if (database) return database;

  try {
    await client.connect();
    database = client.db();
    logger.info('✅️ Succesfully connected to dabatase!');
    return database;
  } catch (error) {
    console.log({ error });
    logger.error(`❌ Database connection failed.`, error);
    throw new Error('Failed to connect to database.');
  }
}

async function disconnect() {
  if (database) await client.close();
  logger.info('Connection with database closed!');
}

export { connect, disconnect };
