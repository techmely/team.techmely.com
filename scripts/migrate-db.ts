import { promises as fs } from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'
import * as dotenv from 'dotenv'
import { Kysely, Migrator, FileMigrationProvider, NO_MIGRATIONS } from 'kysely'
import { PlanetScaleDialect } from 'kysely-planetscale'

const envFile = {
  dev: '.env',
  prod: '.env.prod',
  test: '.env.test',
}

const __filename = fileURLToPath(import.meta.url)
const args = process.argv.slice(2)
if (args.length < 2) {
  console.error(
    'Please provide 2: environment want to migrate including [dev, prod, test] & 2: Migrate options includes [down, none, latest]',
  )
  process.exit(1)
}

const env = args[0]
const migrateOption = args[1]

if (!['dev', 'prod', 'test'].includes(env) || !['latest', 'down', 'none'].includes(migrateOption)) {
  console.error(
    'Please provide 2: environment want to migrate including [dev, prod, test] & 2: Migrate options includes [down, none, latest]',
  )
  process.exit(1)
}

dotenv.config({ path: path.join(path.dirname(__filename), `../${envFile[env]}`) })

const db = new Kysely({
  dialect: new PlanetScaleDialect({
    username: process.env.PLANET_SCALE_USERNAME,
    password: process.env.PLANET_SCALE_PASSWORD,
    host: process.env.PLANET_SCALE_HOST,
  }),
})

const migrator = new Migrator({
  db,
  provider: new FileMigrationProvider({
    fs,
    path,
    migrationFolder: path.join(path.dirname(__filename), '../migrations'),
  }),
})

if (migrateOption === 'down') {
  migrateDown()
} else if (migrateOption === 'latest') {
  migrateToLatest()
} else if (migrateOption === 'none') {
  migrateNone()
}

async function migrateToLatest() {
  const { error, results } = await migrator.migrateToLatest()
  results?.forEach((it) => {
    if (it.status === 'Success') {
      console.log(`migration '${it.migrationName}' was executed successfully`)
    } else if (it.status === 'Error') {
      console.error(`\nfailed to execute migration "${it.migrationName}"\n`)
    }
  })

  if (error) {
    console.error('\nfailed to migrate\n')
    console.error(error)
    process.exit(1)
  }

  await db.destroy()
}

async function migrateDown() {
  const { error, results } = await migrator.migrateDown()
  results?.forEach((it) => {
    if (it.status === 'Success') {
      console.log(`migration '${it.migrationName}' was reverted successfully`)
    } else if (it.status === 'Error') {
      console.error(`failed to execute migration "${it.migrationName}"`)
    }
  })

  if (error) {
    console.error('failed to migrate')
    console.error(error)
    process.exit(1)
  }

  await db.destroy()
}

async function migrateNone() {
  const { error, results } = await migrator.migrateTo(NO_MIGRATIONS)
  results?.forEach((it) => {
    if (it.status === 'Success') {
      console.log(`migration '${it.migrationName}' was reverted successfully`)
    } else if (it.status === 'Error') {
      console.error(`failed to execute migration "${it.migrationName}"`)
    }
  })

  if (error) {
    console.error('\nfailed to migrate\n')
    console.error(error)
    process.exit(1)
  }

  await db.destroy()
}
