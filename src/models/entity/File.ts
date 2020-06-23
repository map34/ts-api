import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity()
export class File {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column('text')
  description: string;

  @Column('bigint')
  sizeBytes: number;

  @Column()
  sha256: string;

  @ManyToOne(type => User, user => user.files)
  user: User;
}
