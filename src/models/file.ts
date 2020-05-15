import { Sequelize, DataTypes } from 'sequelize';
import { ModelsMap, FileModel } from '../types';

export const file = (sequelize: Sequelize): FileModel => {
  const File = sequelize.define('file', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    url: {
      type: DataTypes.STRING,
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
    },
    size_mb: {
      type: DataTypes.BIGINT,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  }) as FileModel;

  File.associate = (models: ModelsMap) => {
    File.belongsTo(models.User);
  };

  return File;
};
