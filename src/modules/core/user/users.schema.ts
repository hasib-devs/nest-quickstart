import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import {
  pgTable,
  serial,
  text,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/pg-core';
import { timestamps } from '@/database/helpers/columns.helpers';

// Define a users table
export const usersTable = pgTable(
  'users',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }).notNull(),
    email: text('email').unique().notNull(),
    password: text('password').notNull(),
    roles: varchar('roles', { length: 255 }).notNull().default('user'),
    ...timestamps,
  },
  (table) => [uniqueIndex('email_idx').on(table.email)],
);

export type User = InferSelectModel<typeof usersTable>;
export type UserCreate = InferInsertModel<typeof usersTable>;
