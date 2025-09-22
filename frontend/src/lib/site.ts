import siteRaw from '@data/site.json'
import { getNews, getProjects } from '@lib/data'
import type { Locale, SiteMeta, Social } from '@lib/types'

const site = siteRaw as SiteMeta

export function getTagline(locale: Locale): string {
  return locale === 'es' ? site.tagline_es : site.tagline_en
}

export function getFeatured(locale: Locale) {
  const f = site.featured
  if (!f) return null

  if (f.kind === 'project') {
    // convention: Spanish project ids use "-es" suffix
    const id = locale === 'es' ? `${f.id}-es` : f.id
    return getProjects(locale).find((p) => p.id === id) ?? null
  }

  // TODO: handle 'pub' if you later want to feature a paper
  return null
}

export function getContactEmail(): string {
  return site.contact_email
}

export function getSocial(): Social {
  return site.social ?? {}
}

export function getRecentNews(locale: Locale, n = 3) {
  return getNews(locale).slice(0, n)
}
