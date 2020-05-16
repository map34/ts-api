// tslint:disable: await-promise

import { Server } from './app';
import { config } from './config';
import { logger } from './services';
import { dbConnection, User, File } from './models';

const debug = require('debug')('express:server');

const port = parseInt(process.env.PORT, 10) || config.port;

// create http server
export const server = Server.bootstrap().app;
const createUsersWithFiles = async () => {
  const newUser = await User.create({
    username: 'ulrich0201',
    file_limit: 10
  });

  const newFile = await File.create({
    url: 'haha',
    size_bytes: 123,
    sha_256: '111',
    userId: newUser.get('id')
  });

  const file = await File.findOne({
    where: {
      userId: newUser.get('id')
    }
  });

  logger.info(JSON.stringify(file.toJSON()));

};

(async () => {
  await dbConnection.sync();
  server.listen(port);
})().then(() => {
  logger.info('Server started successfully :)');
}, (err) => {
  logger.error(err);
});
