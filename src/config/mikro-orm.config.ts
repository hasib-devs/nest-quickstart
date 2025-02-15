import { defineConfig, PostgreSqlDriver } from '@mikro-orm/postgresql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

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
