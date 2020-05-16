// tslint:disable: await-promise

import { Server } from './app';
import { config } from './config';
import { logger } from './services';
import {
  dbConnection,
  User,
  File
} from './models';

const debug = require('debug')('express:server');

const port = parseInt(process.env.PORT, 10) || config.port;

// create http server
export const server = Server.bootstrap().app;
const createUsersWithFiles = async () => {
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

(async () => {
  await dbConnection.sync({ force: true });
  await createUsersWithFiles();
  server.listen(port);
})().then(() => {
  logger.info('Server started successfully :)');
}, (err) => {
  logger.error(err);
});
