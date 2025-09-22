import fs from 'node:fs'
import path from 'node:path'
import * as bib from 'bibtex-parse-js'

const root = path.resolve(process.cwd())
const inPath = path.join(root, 'src', 'data', 'publications.bib')
const outPath = path.join(root, 'src', 'data', 'publications.json')

const raw = fs.readFileSync(inPath, 'utf8')
const parsed = bib.toJSON(raw)

// Normalize a bit
const pubs = parsed.map((e) => {
  const f = e.entryTags || {}
  // authors: split by ' and ' or ',' (naive split; refine later)
  const authors = (f.author || '')
    .split(/ and |,/gi)
    .map((s) => s.trim())
    .filter(Boolean)

  const venue = f.journal || f.booktitle || f.publisher || ''
  const doi = f.doi || ''
  const lang = (f.language || 'en').toLowerCase()

  return {
    id: e.citationKey,
    type: e.entryType, // article, inproceedings, etc.
    title: f.title || '',
    authors,
    venue,
    year: Number(f.year) || null,
    doi,
    url: f.url || (doi ? `https://doi.org/${doi}` : ''),
    language: ['es', 'en'].includes(lang) ? lang : 'en',
  }
})

fs.writeFileSync(outPath, JSON.stringify(pubs, null, 2), 'utf8')
console.log(`✓ Wrote ${pubs.length} publications → ${path.relative(root, outPath)}`)
