import { Client } from '@notionhq/client'

// console.log(process.env.NOTION_INTEGRATION_TOKEN)
const notion = new Client({ auth: process.env.NOTION_INTEGRATION_TOKEN })

const databaseId = '16d2eda8a46a452f96f7194a2b288df3'

const [hash, date, taskUrl, project, responsible] = process.argv.slice(2)

// const database = await notion.databases.retrieve({ database_id: databaseId })
// console.log('DATABASE PROPERTIES', database)

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
        'Hash': {
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
    })
    
    console.log('Row added successfully')
  } catch (error) {
    console.error('Error:', error.body)
  }
}

addRow()