export type Locale = 'en' | 'es'

export type NewsItem = {
  id: string
  locale: Locale
  date: string // ISO YYYY-MM-DD
  title: string
  summary?: string
  href?: string
}

export type Project = {
  id: string
  locale: Locale
  title: string
  status: 'Active' | 'Past' | 'Proposed' | 'Activo' | 'Pasado' | 'Propuesto'
  funder?: string
  partners?: string[]
  timeline?: string // "2025–2026"
  blurb?: string // 2–3 lines
}

export type Publication = {
  id: string
  type: string
  title: string
  authors: string[]
  venue: string
  year: number | null
  doi?: string
  url?: string
  language: 'en' | 'es'
}
