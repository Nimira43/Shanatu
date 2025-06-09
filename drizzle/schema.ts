import { boolean, integer, pgTable, text, uuid } from 'drizzle-orm/pg-core'



export const EventTable = pgTable('events', { 
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  description: text('description'),
  durationInMinutes: integer('durationInMinutes').notNull(),
  clerkUserId: text('clerkUserId').notNull(),
  isActive: boolean('isActive').notNull().default(true),
})