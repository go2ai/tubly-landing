import { Client } from '@notionhq/client'

console.log(process.env.NOTION_INTEGRATION_TOKEN)
const notion = new Client({ auth: process.env.NOTION_INTEGRATION_TOKEN })

const databaseId = '6c72fc98e4df4d12aa3e32e7c711f48b'

const [hash, date, taskUrl, project, responsible] = process.argv.slice(2)

console.log(hash)
console.log(date)
console.log(taskUrl)
console.log(project)
console.log(JSON.stringify(responsible))

async function addRow() {
  try {
    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        'hash': {
          title: [
            {
              text: {
                content: hash,
              },
            },
          ],
        },
        'Data': {
          date: {
            start: date,
          },
        },
        'Tarefa': {
          url: taskUrl,
        },
        'Projeto': {
          rich_text: [
            {
              text: {
                content: project,
              },
            },
          ],
        },
        'Responsável': {
          rich_text: [
            {
              text: {
                content: responsible,
              },
            },
          ],
        },
        'Auto-Scaling': {
          checkbox: false,
        },
        'Sucesso': {
          checkbox: true,
        },
        'Motivo do Rollback': {
          rich_text: [
            {
              text: {
                content: 'N/A',
              },
            },
          ],
        },
        'Obs': {
          rich_text: [
            {
              text: {
                content: 'N/A',
              },
            },
          ],
        },
      },
    });
    console.log('Row added successfully')
  } catch (error) {
    console.error('Error:', error.body)
  }
}

// Call the function to add a new row to your Notion table
addRow()