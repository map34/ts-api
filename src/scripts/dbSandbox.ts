// tslint:disable: await-promise
import { logger } from '../services';
import {
  dbConnection,
  User,
  File
} from '../models';

export const createUsersWithFiles = async () => {
  const newUser = await User.create({
    username: 'ulrich0203',
    fileLimit: 10,
    files: [{
      url: 'haha',
      sizeBytes: 123,
      sha256: '111'
    }]
  }, {
    include: [File]
  });

  logger.info(JSON.stringify(newUser.files));
};
