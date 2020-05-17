// tslint:disable: await-promise

import { Server } from './app';
import { config } from './config';
import { logger } from './services';

const debug = require('debug')('express:server');

const port = parseInt(process.env.PORT, 10) || config.port;

// create http server
export const server = Server.bootstrap().app;
server.listen(port);
logger.info(`Successfully started server! PORT: ${port}`);
