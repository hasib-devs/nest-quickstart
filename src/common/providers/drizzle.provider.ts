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
      const host = configService.get<string>('PG_DB_HOST');
      const port = configService.get<number>('PG_DB_PORT');
      const user = configService.get<string>('PG_DB_USER');
      const password = configService.get<string>('PG_DB_PASSWORD');
      const database = configService.get<string>('PG_DB_NAME');

      const pool = new Pool({
        host,
        port,
        user,
        password,
        database,
      });

      return drizzle(pool, { schema: schemas }) as NodePgDatabase<
        typeof schemas
      >;
    },
  },
];

export type Database = NodePgDatabase<typeof schemas>;
export type DrizzleProvider = typeof DrizzleAsyncProvider;
