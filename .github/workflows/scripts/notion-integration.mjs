import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_INTEGRATION_TOKEN })

const databaseId = process.env.CHECKOUT_NOTION_DB_ID

const [hash, date, taskUrl, project, responsible] = process.argv.slice(2)

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