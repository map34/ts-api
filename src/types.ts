import { Client } from 'pg';

export interface ConnectionMap {
  [details: string]: Client;
}
