import { Sequelize, DataTypes } from 'sequelize';
import { UserModel } from '../types';

export const user = (sequelize: Sequelize): UserModel => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
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
  }) as UserModel;

  User.associate = (models) => {
    User.hasMany(models.File);
  };

  return User;
};
