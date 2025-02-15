export const APP_PORT = process.env.APP_PORT || 8100;
export const APP_NAME = process.env.APP_NAME || 'NestJS API';

export const PG_DB_HOST = process.env.PG_DB_HOST || 'localhost';
export const PG_DB_PORT = Number(process.env.PG_DB_PORT || 5432);
export const PG_DB_USER = process.env.PG_DB_USER;
export const PG_DB_PASSWORD = process.env.PG_DB_PASSWORD;
export const PG_DB_NAME = process.env.PG_DB_NAME || 'nest-quickstart';

export const NOSQL_DB_HOST = process.env.NOSQL_DB_HOST || 'localhost';
export const NOSQL_DB_PORT = Number(process.env.NOSQL_DB_PORT || 27017);
export const NOSQL_DB_USER = process.env.NOSQL_DB_USER;
export const NOSQL_DB_PASSWORD = process.env.NOSQL_DB_PASSWORD;
export const NOSQL_DB_NAME = process.env.NOSQL_DB_NAME || 'nest-quickstart';
