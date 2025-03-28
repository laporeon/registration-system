import 'dotenv/config';

export const env = {
  port: process.env.PORT ?? 3000,
  databaseUrl: process.env.DB_URL ?? '',
};
