import {
  Database,
  DrizzleAsyncProvider,
} from '@/common/providers/drizzle.provider';
import { usersTable } from '@/database/schemas/users.schema';
import { Inject, Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';

@Injectable()
export class UserRepository {
  constructor(
    @Inject(DrizzleAsyncProvider)
    private readonly db: Database,
  ) {}

  async findAll() {
    return await this.db.select().from(usersTable);
  }

  async findById(id: number) {
    return await this.db.select().from(usersTable).where(eq(usersTable.id, id));
  }

  async findByEmail(email: string) {
    return await this.db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email));
  }

  async createUser(name: string, email: string) {
    return await this.db.insert(usersTable).values({ name, email }).returning();
  }

  async updateUser(id: number, name: string, email: string) {
    return await this.db
      .update(usersTable)
      .set({ name, email })
      .where(eq(usersTable.id, id))
      .returning();
  }

  async deleteUser(id: number) {
    await this.db.delete(usersTable).where(eq(usersTable.id, id));

    return {
      message: `User has been deleted`,
    };
  }
}
