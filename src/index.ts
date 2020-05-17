// tslint:disable: await-promise

import { Server } from './app';
import { config } from './config';
import { logger } from './services';
import {
  dbConnection
} from './models';
import 'express-async-errors';

const debug = require('debug')('express:server');

const port = parseInt(process.env.PORT, 10) || config.port;

// create http server

(async () => {
  // Sync db
  await dbConnection.sync();

  // Start applicatiom
  const server = Server.bootstrap().app;
  server.listen(port);
})().then(() => {
  logger.info(`Server started successfully :), serving on port: ${port}`);
}, (err) => {
  logger.error(err);
});
