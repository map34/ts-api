export interface DatabaseConfig {
  user: string;
  password: string;
  database: string;
  host: string;
  port: number;
  queryTimeout: number;
}

export interface Config {
  name: string;
  port: number;
  env: string;
  version?: string;
  db: DatabaseConfig;
}
