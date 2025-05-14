import React from 'react'
import { NotionRenderer } from 'react-notion-x'
import 'react-notion-x/src/styles.css'
import recordMap from '../data/recordMap.json'

export default function Home() {
  return (
    <main>
      <h1>Shopify Business Blueprint</h1>
      <NotionRenderer recordMap={recordMap} fullPage darkMode={false} />
    </main>
  )
}
