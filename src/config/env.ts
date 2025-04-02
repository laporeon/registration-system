import 'dotenv/config';

export const env = {
  port: process.env.PORT ?? 3000,
  host: process.env.MONGO_HOST ?? 'localhost',
  username: process.env.MONGO_USER ?? '',
  password: process.env.MONGO_PASSWORD ?? '',
  database: process.env.MONGO_DB ?? '',
};
