import { Router } from 'express';
import { Client } from 'pg';
import { config } from '../config';
import { ConnectionMap } from '../types';

const sqlConfig = (name: string): any => config.db[name];

export abstract class BaseRoute {
  /**
   * Constructor
   *
   * @class BaseRoute
   * @constructor
   */

  protected router: Router = Router();
  protected connection: ConnectionMap = {};

  async connect (name: string): Promise<Client> {
    if (!this.connection[name]) {
      this.connection[name] = new Client(sqlConfig(name));
    }

    await this.connection[name].connect();

    return this.connection[name];
  }

  async disconnect (name: string): Promise<boolean> {
    try {
      await this.connection[name].end();
      return true;

    } catch (e) {
      console.error('Error while disconnecting from database:', e);
      return false;
    }
  }
}
