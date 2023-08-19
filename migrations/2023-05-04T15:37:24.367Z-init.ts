import type { Kysely } from 'kysely'
import { withMySqlV8, withTimestamps } from './sql'

const tables = {
  members: 'members',
  collections: 'collections',
  menus: 'menus',
  courses: 'courses',
  products: 'products',
  services: 'services',
  tags: 'tags',
  memberMetadata: 'member_metadata',
}

export async function up(db: Kysely<AppDatabase>) {
  await db.schema
    .createTable(tables.members)
    .ifNotExists()
    .addColumn('id', 'int4', (col) => col.primaryKey().autoIncrement())
    .addColumn('email', 'varchar(255)', (col) => col.notNull().unique())
    .addColumn('nickname', 'varchar(50)', (col) => col.notNull().unique())
    .addColumn('name', 'varchar(255)', (col) => col.notNull())
    .addColumn('avatarUrl', 'text', (col) => col.notNull())
    .addColumn('order', 'int4', (col) => col.notNull())
    .$call(withTimestamps)
    .$call(withMySqlV8)
    .execute()

  await db.schema
    .createTable(tables.memberMetadata)
    .ifNotExists()
    .addColumn('id', 'int4', (col) => col.primaryKey().autoIncrement())
    .addColumn('member_id', 'int4', (col) => col.notNull().references('members.id'))
    .addColumn('meta', 'jsonb', (col) => col.notNull())
    .$call(withTimestamps)
    .$call(withMySqlV8)
    .execute()
}

export async function down(db: Kysely<AppDatabase>) {
  for await (const table of Object.values(tables)) {
    console.log(`\nDrop table ${table}: ...`)
    await db.schema.dropTable(table).ifExists().execute()
    console.log(`Drop ${table} successfully\n: ...`)
  }
}
