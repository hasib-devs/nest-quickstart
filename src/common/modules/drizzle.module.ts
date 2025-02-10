import { Module } from '@nestjs/common';
import {
  DrizzleAsyncProvider,
  drizzleProvider,
} from '@/common/providers/drizzle.provider';

@Module({
  providers: [...drizzleProvider],
  exports: [DrizzleAsyncProvider],
})
export class DrizzleModule {}
