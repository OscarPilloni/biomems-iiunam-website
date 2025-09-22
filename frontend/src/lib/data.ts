import newsRaw from '@data/news.json'
import projectsRaw from '@data/projects.json'

import type { Locale, NewsItem, Project } from './types'

const projects = projectsRaw as Project[]

export function getNews(locale: Locale): NewsItem[] {
  return (newsRaw as NewsItem[])
    .filter((n) => n.locale === locale)
    .sort((a, b) => b.date.localeCompare(a.date))
}

export function getProjects(locale: Locale): Project[] {
  return projects.filter((p) => p.locale === locale)
}

// Find by slug (preferred), fallback to id
export function getProjectBySlug(locale: Locale, slugOrId: string): Project | null {
  const bySlug = projects.find((p) => p.locale === locale && p.slug === slugOrId)
  if (bySlug) return bySlug
  const byId = projects.find((p) => p.locale === locale && p.id === slugOrId)
  return byId ?? null
}
