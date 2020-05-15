export interface DatabaseConfig {
  user: string;
  password: string;
  database: string;
  host: string;
  port: number;
  query_timeout: number;
}

export interface Config {
  name: string;
  port: number;
  env: string;
  version?: string;
  db: DatabaseConfig;
}
