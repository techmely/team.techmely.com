import fs from 'fs'
import path from 'path'

function generateFilePath(fileDir, name) {
  const currentDate = new Date()
  const isoDate = currentDate.toISOString()
  const fileName = `${isoDate}-${name}.ts`

  return path.join(fileDir, fileName)
}

function createFile(fileName) {
  fs.writeFile(fileName, '', 'utf8', (error) => {
    if (error) {
      console.error(`Error creating file: ${error}`)
    } else {
      console.log(`File created: ${fileName}`)
    }
  })
}

function writeFileContent(
  filePath,
  content = `import { Kysely } from "kysely";
import { DatabaseModel } from "types";

export async function up(db: Kysely<DatabaseModel>) {}
export async function down(db: Kysely<DatabaseModel>) {}
						`,
) {
  fs.appendFileSync(filePath, content, { encoding: 'utf-8' })
}

const args = process.argv.slice(2)

if (args.length < 2) {
  console.error('Please provide a directory path as a command-line argument + postfix filename')
  process.exit(1)
}
const fileDir = args[1]
const fileName = args[2]
const filePath = generateFilePath(fileDir, fileName)
createFile(filePath)
writeFileContent(filePath)
