import { Sequelize } from 'sequelize';
import { User, init as userInit } from './user';
import { File, init as fileInit } from './file';

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
    }
  }
);

userInit(sequelize);
fileInit(sequelize);

export { sequelize as dbConnection, User, File };
export * from './config.model';
