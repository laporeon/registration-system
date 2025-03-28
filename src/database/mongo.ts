import { Db, MongoClient, ServerApiVersion } from 'mongodb';

import { env } from '@config/env';

const client: MongoClient = new MongoClient(env.databaseUrl, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function connectToMongoDB() {
  try {
    await client.connect();

    const database: Db = client.db('wiredcraft');

    await database.command({ ping: 1 });

    console.log('Successfully connected to MongoDB!');

    return database;
  } catch (error) {
    console.error('Failed to connect with database:', error);
    throw new Error(`Database connection failed: ${error}`);
  }
}

export async function disconnectMongoDB() {
  await client.close();
  console.log('Connection closed!');
}
