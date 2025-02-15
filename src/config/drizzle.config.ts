import * as dotenv from 'dotenv';
dotenv.config();

import { defineConfig } from 'drizzle-kit';
import {
  PG_DB_HOST,
  PG_DB_PORT,
  PG_DB_USER,
  PG_DB_PASSWORD,
  PG_DB_NAME,
} from '@/common/utils/constants';

const URL = `postgresql://${PG_DB_USER}:${PG_DB_PASSWORD}@${PG_DB_HOST}:${PG_DB_PORT}/${PG_DB_NAME}`;

export default defineConfig({
  dialect: 'postgresql',
  schema: 'src/database/schemas',
  out: 'src/database/migrations/drizzle',
  strict: true,
  verbose: true,

  dbCredentials: {
    url: URL,
  },
});
