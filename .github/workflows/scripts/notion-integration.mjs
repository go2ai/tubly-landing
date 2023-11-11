import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_INTEGRATION_TOKEN })
console.log('🚀 ~ file: notion-integration.mjs:4 ~ notion:', notion)

const databaseId = process.env.SITE_NOTION_DB_ID
console.log('🚀 ~ file: notion-integration.mjs:6 ~ databaseId:', databaseId)

const [hash, date, taskUrl, project, responsible] = process.argv.slice(2)
console.log('🚀 ~ file: notion-integration.mjs:8 ~ responsible:', responsible)
console.log('🚀 ~ file: notion-integration.mjs:8 ~ project:', project)
console.log('🚀 ~ file: notion-integration.mjs:8 ~ taskUrl:', taskUrl)
console.log('🚀 ~ file: notion-integration.mjs:8 ~ date:', date)
console.log('🚀 ~ file: notion-integration.mjs:8 ~ hash:', hash)

async function addRow() {
  try {
    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        'Hash': { title: [{ text: { content: hash } }] },
        'Data': { date: { start: date } },
        'Tarefa': { url: taskUrl },
        'Projeto': { rich_text: [{ text: { content: project } }] },
        'Responsável': { rich_text: [{ text: { content: responsible } }] },
        'Auto-Scaling': { checkbox: false },
        'Rollback': { checkbox: false },
        'Motivo do Rollback': { rich_text: [{ text: { content: 'N/A' } }] },
        'Obs': { rich_text: [{ text: { content: 'N/A' } }] }
      }
    })

    console.log('Row added successfully')
  } catch (error) {
    console.error('Error:', error.body)
  }
}

await addRow()