import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as cors from 'cors';
import * as express from 'express';
import * as expressStatusMonitor from 'express-status-monitor';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import * as path from 'path';
import 'source-map-support/register';
import 'express-async-errors';
import 'reflect-metadata';

import { ApiRoutes } from './routes';
import { logger } from './services';
import { ResponseError } from './types/common';

import errorHandler = require('errorhandler');
import methodOverride = require('method-override');

/**
 * The server.
 *
 * @class Server
 */
export class Server {

  public app: express.Application;

  /**
   * Constructor.
   *
   * @class Server
   * @constructor
   */
  constructor () {
    // create expressjs application
    this.app = express();

    // configure application
    this.config();

    // add routes
    this.routes();
  }

  /**
   * Bootstrap the application.
   *
   * @class Server
   * @method bootstrap
   * @static
   */
  static bootstrap (): Server {
    return new Server();
  }

  /**
   * Configure application
   *
   * @class Server
   * @method config
   */
  public config (): void {
    // add static paths
    this.app.use(express.static(path.join(__dirname, 'public')));

    // mount logger
    this.app.use(morgan('tiny', {
      stream: {
        write: message => logger.info(message.trim())
      }
    } as morgan.Options));

    // mount json form parser
    this.app.use(bodyParser.json({ limit: '50mb' }));

    // mount query string parser
    this.app.use(bodyParser.urlencoded({
      extended: true
    }));

    // mount override?
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(compression());
    this.app.use(methodOverride());
    this.app.use(expressStatusMonitor());

    // catch 404 and forward to error handler
    this.app.use((err: ResponseError, req: express.Request, res: express.Response, next: express.NextFunction) => {
      err.status = 404;
      next(err);
    });
    // error handling
    this.app.use(errorHandler());
  }

  /**
   * Create and return Router.
   *
   * @class Server
   * @method routes
   * @return void
   */
  private routes (): void {
    // use router middleware
    this.app.use(ApiRoutes.path, ApiRoutes.router);
  }
}
