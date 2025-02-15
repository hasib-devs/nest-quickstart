import { plainToInstance } from 'class-transformer';
import { IsNotEmpty, IsString, validateSync } from 'class-validator';

export class EnvConfig {
  APP_PORT?: number;
  APP_NAME?: string;

  @IsNotEmpty()
  @IsString()
  PG_DB_HOST = 'localhost';

  @IsNotEmpty()
  PG_DB_PORT = 5432;

  @IsString()
  PG_DB_USER = '';

  @IsString()
  PG_DB_PASSWORD = '';

  @IsNotEmpty()
  @IsString()
  PG_DB_NAME!: string;

  @IsNotEmpty()
  @IsString()
  NOSQL_DB_HOST = 'localhost';

  @IsNotEmpty()
  NOSQL_DB_PORT = 27017;

  @IsString()
  NOSQL_DB_USER = '';

  @IsString()
  NOSQL_DB_PASSWORD = '';

  @IsNotEmpty()
  @IsString()
  NOSQL_DB_NAME!: string;

  @IsNotEmpty()
  @IsString()
  ENCRYPTION_KEY!: string;

  @IsNotEmpty()
  @IsString()
  HASH_SALT!: string;

  @IsNotEmpty()
  @IsString()
  HASH_SECRET!: string;
}

export function validateEnv(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvConfig, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig, { whitelist: true });

  if (errors.length > 0) {
    console.error('❌ Invalid environment variables:', errors);
    process.exit(1); // Stop the app if env is invalid
  }

  return validatedConfig;
}
