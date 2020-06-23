import { Server } from './app';
import { config } from './config';
import { logger } from './services';
import { Model } from './models';
import { executeDBTransaction } from './scripts/dbSync';

const debug = require('debug')('express:server');

const port = parseInt(process.env.PORT, 10) || config.port;
export const server = Server.bootstrap().app;
// create http server

const initializeServer = () => {
  server.listen(port);
  logger.info(`Successfully started server! PORT: ${port}`);
};

const initializeStore = async () => {
  await Model.init();
  logger.info('Successfully initialized DB connection');
};

(async () => {
  await initializeStore();
  initializeServer();
  await executeDBTransaction();
})().catch(logger.error);
