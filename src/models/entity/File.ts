import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity()
export class File {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column('text', { nullable: true })
  description: string;

  @Column('bigint')
  sizeBytes: number;

  @Column()
  sha256: string;

  @ManyToOne(() => User, user => user.files, { onDelete: 'CASCADE' })
  user: User;
}
