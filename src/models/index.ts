import { createConnection, Connection } from 'typeorm';
import { ormConfig } from '../config';

export class Model {
  private static connection: Connection;

  static async init () {
    Model.connection = await createConnection(ormConfig);
  }

  static getConnection (): Connection {
    if (!Model.connection) {
      throw new Error('Connection is not initialized! Please do Model.init()');
    }
    return Model.connection;
  }
}

export * from './entity';
