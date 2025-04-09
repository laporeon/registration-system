import 'dotenv/config';

export const env = {
  port: process.env.PORT || 3001,
  host: process.env.MONGO_HOST || 'localhost',
  username: process.env.MONGO_USER || 'root',
  password: process.env.MONGO_PASSWORD || 'password',
  database: process.env.MONGO_DB || 'wiredcraft',
  secret: process.env.JWT_SECRET || 'my-super-secret-here',
};
