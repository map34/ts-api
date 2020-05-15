import { Config } from '../models';

const env = process.env.NODE_ENV || 'development';
const isProd = env === 'production';

export const config: Config = {
  name: 'api',
  port: isProd ? 3001 : 5000,
  env: isProd ? 'prod' : 'dev',
  db: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT, 10),
    queryTimeout: 10000
  }
};
