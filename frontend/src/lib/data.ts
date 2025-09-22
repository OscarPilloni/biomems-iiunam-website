import newsRaw from '@data/news.json'
import projectsRaw from '@data/projects.json'

import type { Locale, NewsItem, Project } from './types'

export function getNews(locale: Locale): NewsItem[] {
  return (newsRaw as NewsItem[])
    .filter((n) => n.locale === locale)
    .sort((a, b) => b.date.localeCompare(a.date))
}

export function getProjects(locale: Locale): Project[] {
  return (projectsRaw as Project[]).filter((p) => p.locale === locale)
}
