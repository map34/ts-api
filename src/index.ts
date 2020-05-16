// tslint:disable: await-promise

import { Server } from './app';
import { config } from './config';
import { logger } from './services';
import {
  dbConnection
} from './models';

const debug = require('debug')('express:server');

const port = parseInt(process.env.PORT, 10) || config.port;

// create http server
export const server = Server.bootstrap().app;

(async () => {
  await dbConnection.sync();
  server.listen(port);
})().then(() => {
  logger.info(`Server started successfully :), serving on port: ${port}`);
}, (err) => {
  logger.error(err);
});
