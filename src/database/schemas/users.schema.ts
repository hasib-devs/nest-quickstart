import {
  pgEnum,
  pgTable,
  serial,
  text,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/pg-core';
import { timestamps } from '../helpers/columns.helpers';

// Define an enum for user roles
export const rolesEnum = pgEnum('roles', ['guest', 'user', 'admin']);

// Define a users table
export const usersTable = pgTable(
  'users',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }).notNull(),
    email: text('email').unique().notNull(),
    role: rolesEnum().default('guest'),
    ...timestamps,
  },
  (table) => [uniqueIndex('email_idx').on(table.email)],
);
