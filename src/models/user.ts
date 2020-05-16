import { Sequelize, DataTypes, Model } from 'sequelize';
import { File } from './file';

export class User extends Model {}

export const init = (sequelize: Sequelize) => {
  User.init({
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    file_limit: {
      type: DataTypes.INTEGER,
      unique: false,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  }, {
    sequelize,
    modelName: 'user'
  });
};
