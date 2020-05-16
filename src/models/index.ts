import { Sequelize } from 'sequelize-typescript';
import { User } from './structured//user';
import { File } from './structured/file';

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

export * from './structured/config.model';
export {
  sequelize as dbConnection,
  User,
  File
};
