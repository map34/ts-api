import { ConnectionPool } from 'mssql';

export interface ConnectionMap {
  [details: string]: ConnectionPool;
}
