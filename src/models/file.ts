import { Sequelize, DataTypes, Model } from 'sequelize';
import { User } from './user';

export class File extends Model {}

export const init = (sequelize: Sequelize) => {
  File.init({
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    size_bytes: {
      type: DataTypes.BIGINT,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    sha_256: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  }, {
    sequelize,
    modelName: 'file'
  });

  File.belongsTo(User);
};
