import { defineConfig } from 'drizzle-kit';
import * as dotenv from 'dotenv';
import { DATABASE_URL } from '@/common/utils/constants';

// Load environment variables from .env
dotenv.config();

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/database/schemas',
  out: './src/database/migrations',

  dbCredentials: {
    url: DATABASE_URL,
  },
});
