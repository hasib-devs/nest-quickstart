import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schemas from '@/database/schemas';
import { ConfigService } from '@nestjs/config';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';

export const DrizzleAsyncProvider = 'DrizzleAsyncProvider';

export const drizzleProvider = [
  {
    provide: DrizzleAsyncProvider,
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => {
      const connectionString = configService.get<string>('DATABASE_URL');
      const pool = new Pool({
        connectionString,
      });

      return drizzle(pool, { schema: schemas }) as NodePgDatabase<
        typeof schemas
      >;
    },
  },
];

export type Database = NodePgDatabase<typeof schemas>;
export type DrizzleProvider = typeof DrizzleAsyncProvider;
