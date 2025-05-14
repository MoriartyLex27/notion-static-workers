import { NotionAPI } from 'notion-client'
import fs from 'fs'

const notion = new NotionAPI()
const pageId = '1f241143617480b288d5f6b9c2c64c77'

const recordMap = await notion.getPage(pageId)
fs.writeFileSync('./data/recordMap.json', JSON.stringify(recordMap, null, 2))

console.log('✅ Notion data saved to /data/recordMap.json')
