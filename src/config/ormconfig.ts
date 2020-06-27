import {
  User,
  File
} from '../models/entity';

import migrations from '../models/migration';
import { ConnectionOptions } from 'typeorm';

const ormConfig: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'test',
  password: 'test',
  database: 'test',
  synchronize: false,
  logging: true ,
  migrations: Object.values(migrations),
  entities: [
    User,
    File
  ]
};

export = ormConfig;
