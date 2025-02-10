import {
  pgTable,
  serial,
  text,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/pg-core';
import { timestamps } from '../helpers/columns.helpers';

// Define a blogs table
export const blogsTable = pgTable(
  'blogs',
  {
    id: serial('id').primaryKey(),
    title: varchar('title', { length: 255 }).notNull(),
    content: text('content').notNull(),
    ...timestamps,
  },
  (table) => [uniqueIndex('title_idx').on(table.title)],
);
