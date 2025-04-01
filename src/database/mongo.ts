import { Db, MongoClient, ServerApiVersion } from 'mongodb';

import { env } from '@/config/env';
import { logger } from '@/helpers';

let database: Db | null = null;

const client: MongoClient = new MongoClient(env.databaseUrl, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  maxPoolSize: 20,
  minPoolSize: 5,
  connectTimeoutMS: 10000,
});

export async function connect(): Promise<Db> {
  if (database) return database;

  try {
    await client.connect();
    database = client.db('wiredcraft');
    logger.info('Successfully connected to MongoDB!');
    return database;
  } catch (error) {
    logger.error('Failed to connect with database:', error);
    throw new Error(`Database connection failed: ${error}`);
  }
}

export async function getCollection() {
  const db = await connect();
  return db.collection('users');
}
