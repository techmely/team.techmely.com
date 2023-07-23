import { CreateTableBuilder, sql } from 'kysely'

export function enumSql(...args: string[]) {
  return sql`enum(${sql.join(args.map(sql.lit))})`
}

export function concatSql(...args: string[]) {
  return sql`concat(${args.join(', "", ')})`
}

export function withTimestamps<Table extends string, Fields extends string>(
  qb: CreateTableBuilder<Table, Fields>,
) {
  return qb
    .addColumn('created_at', 'timestamp', (col) => col.defaultTo(sql`CURRENT_TIMESTAMP`))
    .addColumn('updated_at', 'timestamp', (col) => col.defaultTo(sql`CURRENT_TIMESTAMP`))
}

export function withMySqlV8<Table extends string, Fields extends string>(
  qb: CreateTableBuilder<Table, Fields>,
) {
  return qb.modifyEnd(sql`COLLATE utf8mb4_0900_ai_ci`)
}
