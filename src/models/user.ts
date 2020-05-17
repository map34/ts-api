import {
  Table,
  Model,
  Column,
  DataType,
  HasMany
} from 'sequelize-typescript';
import { File } from './file';

/**
 * / model
 *
 * @class User
 */
@Table
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  })
  username: string;

  @Column({
    type: DataType.INTEGER,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  })
  fileLimit: number;

  @HasMany(() => File)
  files: File[];
}
