import { Config } from '../models';

const env = process.env.NODE_ENV || 'development';
const isProd = env === 'production';

export const config: Config = {
  name: 'api',
  port: isProd ? 3001 : 5000,
  env: isProd ? 'prod' : 'dev',
  db: {
    user: '<user_name>',
    password: isProd ? '<password>' : '<password>',
    host: isProd ? '<host_name>' : '<host_name>',
    database: '<database_name>',
    port: -1,
    query_timeout: 10000
  }
};
