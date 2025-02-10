import { DrizzleAsyncProvider } from '@/common/providers/drizzle.provider';
import { db } from '@/database';
import { usersTable } from '@/database/schemas/users.schema';
import { Inject, Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as sc from '@/database/schemas';

@Injectable()
export class UserRepository {
  constructor(
    @Inject(DrizzleAsyncProvider)
    private readonly db: NodePgDatabase<typeof sc>,
  ) {}

  async findAll() {
    return await this.db.select().from(usersTable);
  }

  async findById(id: number) {
    return await db.select().from(usersTable).where(eq(usersTable.id, id));
  }

  async findByEmail(email: string) {
    return await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email));
  }

  async createUser(name: string, email: string) {
    return await db.insert(usersTable).values({ name, email }).returning();
  }
}
