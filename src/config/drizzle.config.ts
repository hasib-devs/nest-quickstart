import { defineConfig } from 'drizzle-kit';
import * as dotenv from 'dotenv';
import {
  PG_DB_HOST,
  PG_DB_PORT,
  PG_DB_USER,
  PG_DB_PASSWORD,
  PG_DB_NAME,
} from '@/common/utils/constants';

// Load environment variables from .env
dotenv.config();

export default defineConfig({
  dialect: 'postgresql',
  schema: 'src/database/schemas',
  out: 'src/database/migrations',

  dbCredentials: {
    host: PG_DB_HOST,
    port: PG_DB_PORT,
    user: PG_DB_USER,
    password: PG_DB_PASSWORD,
    database: PG_DB_NAME,
  },
});
