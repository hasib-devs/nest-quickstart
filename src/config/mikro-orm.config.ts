import { defineConfig, PostgreSqlDriver } from '@mikro-orm/postgresql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

console.log('Database URL: ', process.env.DATABASE_URL);

export default defineConfig({
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
  driver: PostgreSqlDriver,
  host: 'localhost',
  port: 5432,
  user: '',
  password: '',
  debug: true,
  dbName: 'nest-quickstart',
  metadataProvider: TsMorphMetadataProvider,
});
