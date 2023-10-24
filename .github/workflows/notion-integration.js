const { Client } = require('@notionhq/client')

// Initialize a new Notion Client
const notion = new Client({ auth: process.env.NOTION_INTEGRATION_TOKEN })

const databaseId = '6c72fc98e4df4d12aa3e32e7c711f48b'

async function addRow(deployData) {
  try {
    await notion.pages.create({
      parent: { id: databaseId },
      properties: {
        'hash': {
          title: [
            {
              text: {
                content: deployData.hash,
              },
            },
          ],
        },
        'Data': {
          date: {
            start: deployData.date,
          },
        },
        'Tarefa': {
          url: deployData.taskUrl,
        },
        'Projeto': {
          rich_text: [
            {
              text: {
                content: deployData.project,
              },
            },
          ],
        },
        'Responsável': {
          rich_text: [
            {
              text: {
                content: deployData.responsible,
              },
            },
          ],
        },
        'Auto-Scaling': {
          checkbox: deployData.autoScaling,
        },
        'Sucesso': {
          checkbox: deployData.success,
        },
        'Motivo do Rollback': {
          rich_text: [
            {
              text: {
                content: deployData.rollbackReason,
              },
            },
          ],
        },
        'Obs': {
          rich_text: [
            {
              text: {
                content: deployData.observation,
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

// Example deploy data
const deployData = {
  hash: 'https://github.com/somosyampi/checkout/commit/8b1e9a1f247080176fce7298b22b630172bbc9c6',
  date: '2023-10-19T10:59:59',
  taskUrl: 'https://github.com/somosyampi/checkout/pull/1630',
  project: 'Checkout',
  responsible: 'Eitor',
  autoScaling: false,
  success: true,
  rollbackReason: '',
  observation: ''
}

// Call the function to add a new row to your Notion table
addRow(deployData)