import { Model, Table, Column, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { User } from './user';

/**
 * / model
 *
 * @class File
 */
@Table
export class File extends Model<File> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  })
  url: string;

  @Column(DataType.TEXT)
  description: string;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  })
  sizeBytes: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  })
  sha256: string;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => User)
  @Column
  userId: number;
}
