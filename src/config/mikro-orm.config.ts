import * as dotenv from 'dotenv';
dotenv.config();

import {
  NOSQL_DB_HOST,
  NOSQL_DB_PORT,
  NOSQL_DB_USER,
  NOSQL_DB_PASSWORD,
  NOSQL_DB_NAME,
} from '@/common/utils/constants';

import { defineConfig, MongoDriver } from '@mikro-orm/mongodb';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

const clientUrl =
  NOSQL_DB_USER && NOSQL_DB_PASSWORD
    ? `mongodb://${NOSQL_DB_USER}:${encodeURIComponent(NOSQL_DB_PASSWORD)}@${NOSQL_DB_HOST}:${NOSQL_DB_PORT}/${NOSQL_DB_NAME}`
    : `mongodb://${NOSQL_DB_HOST}:${NOSQL_DB_PORT}/${NOSQL_DB_NAME}`;

export default defineConfig({
  driver: MongoDriver,
  clientUrl,
  debug: true,
  entitiesTs: ['src/**/*.entity.ts'],
  entities: ['dist/**/*.entity.js'],
  metadataProvider: TsMorphMetadataProvider,
});
