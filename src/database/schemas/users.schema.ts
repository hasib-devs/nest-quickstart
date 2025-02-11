import {
  pgTable,
  serial,
  text,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/pg-core';
import { timestamps } from '../helpers/columns.helpers';

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

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  roles: string;
  created_at: Date;
  updated_at: Date | null;
};
