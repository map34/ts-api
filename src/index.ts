import { Server } from './app';
import { logger } from './services';
import * as serverConfig from './config/serverconfig';
import { Model } from './models';
import { executeDBTransaction } from './scripts/dbSync';

require('debug')('express:server');

const port = parseInt(process.env.PORT, 10) || serverConfig.port;
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
