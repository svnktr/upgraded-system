import { marked } from 'marked'

// Every .md file in src/posts becomes a note. The file name is its URL slug.
// Start a file with a front matter block:
// ---
// title: My post
// date: 2026-10-26
// summary: One line for the list
// ---
const files = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default', eager: true })

function parse(path, raw) {
  const slug = path.split('/').pop().replace(/\.md$/, '')
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  const meta = {}
  let body = raw
  if (match) {
    for (const line of match[1].split(/\r?\n/)) {
      const i = line.indexOf(':')
      if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim()
    }
    body = match[2]
  }
  return {
    slug,
    title: meta.title || slug,
    date: meta.date || '',
    summary: meta.summary || '',
    draft: meta.draft === 'true',
    html: marked.parse(body),
  }
}

export const posts = Object.entries(files)
  .map(([path, raw]) => parse(path, raw))
  .filter((p) => !p.draft)
  .sort((a, b) => b.date.localeCompare(a.date))

export function formatDate(iso) {
  if (!iso) return ''
  const d = new Date(iso + 'T00:00:00')
  return d.toLocaleDateString('en-CA', { year: 'numeric', month: 'short', day: 'numeric' })
}
