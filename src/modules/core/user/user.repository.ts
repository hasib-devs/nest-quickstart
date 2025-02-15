import { DrizzleAsyncProvider } from '@/common/providers/drizzle.provider';
import { CreateUserDto } from '@/modules/core/user/dto/create-user.dto';
import { Inject, Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { usersTable } from './users.schema';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';

@Injectable()
export class UserRepository {
  constructor(
    @Inject(DrizzleAsyncProvider)
    private readonly db: NodePgDatabase,
  ) {}

  async findAll() {
    return await this.db.select().from(usersTable);
  }

  async findById(id: number) {
    const result = await this.db
      .select()
      .from(usersTable)
      .where(eq(usersTable.id, id));

    if (result.length === 0) {
      return null;
    }

    return result[0];
  }

  async findByEmail(email: string) {
    const result = await this.db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email));

    if (result.length === 0) {
      return null;
    }

    return result[0];
  }

  async createUser(createUserDto: CreateUserDto) {
    const result = await this.db
      .insert(usersTable)
      .values(createUserDto)
      .returning();
    return result[0];
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
