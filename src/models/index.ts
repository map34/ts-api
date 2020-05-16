import { Sequelize } from 'sequelize-typescript';
import { User } from './user';
import { File } from './file';

const sequelize = new Sequelize(
  process.env.DATABASE || 'objects',
  process.env.DATABASE_USER || 'user',
  process.env.DATABASE_PASSWORD || 'password',
  {
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    models: [User, File]
  }
);

export * from './config.model';
export {
  sequelize as dbConnection,
  User,
  File
};
