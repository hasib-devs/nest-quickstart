import { defineConfig } from 'drizzle-kit';
import * as dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config();

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/database/schemas',
  out: './src/database/migrations',
  dbCredentials: {
    url:
      process.env.DATABASE_URL || 'postgres://:@localhost:5432/nest-quickstart',
  },
});
