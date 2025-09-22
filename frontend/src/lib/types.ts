export type Locale = 'en' | 'es'

export type NewsItem = {
  id: string
  locale: Locale
  date: string // ISO YYYY-MM-DD
  title: string
  summary?: string
  href?: string
}

export type ProjectLink = { label: string; href: string }

export type Project = {
  id: string
  slug?: string
  locale: Locale
  title: string
  status: 'Active' | 'Past' | 'Proposed' | 'Activo' | 'Pasado' | 'Propuesto'
  funder?: string
  partners?: string[]
  timeline?: string
  blurb?: string
  heroUrl?: string
  links?: ProjectLink[]
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

export type FeaturedRef = { kind: 'project' | 'pub'; id: string }

export type Social = { github?: string; x?: string }

export interface SiteMeta {
  labName: string
  tagline_en: string
  tagline_es: string
  contact_email: string
  social: Social
  featured?: FeaturedRef
}

export type PersonRole = 'PI' | 'PhD' | 'MSc' | 'BSc' | 'Alumni' | 'Staff'

export interface Person {
  id: string
  locale: Locale // 'en' | 'es'
  name: string
  role: PersonRole
  email?: string
  orcid?: string
  scholar?: string
  website?: string
  avatarUrl?: string // external URL or /assets/...
  period?: string // e.g., "2024–2026" or graduation year
}
