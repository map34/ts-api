// tslint:disable: await-promise
import { logger } from '../services';
import {
  dbConnection,
  User,
  File
} from '../models';

export const createUsersWithFiles = async () => {
  const newUser = await User.create({
    username: 'ulrich020',
    fileLimit: 10,
    files: [{
      url: 'haha',
      sizeBytes: 123,
      sha256: '111'
    }, {
      url: 'haha1',
      sizeBytes: 1234,
      sha256: '1112'
    }]
  }, {
    include: [File]
  });

  logger.info(`${await newUser.$count('files')}`);
};
