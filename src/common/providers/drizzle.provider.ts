import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { ConfigService } from '@nestjs/config';

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

      return drizzle({
        client: pool,
      });
    },
  },
];

export type DrizzleProvider = typeof DrizzleAsyncProvider;
