import publications from '@data/publications.json'

import type { Publication } from './types'
import type { Locale } from './types'

export function getPublications(locale: Locale): Publication[] {
  return (publications as Publication[])
    .filter((p) => p.language === locale)
    .sort((a, b) => (b.year ?? 0) - (a.year ?? 0))
}

export function distinctYears(locale: Locale): number[] {
  const years = new Set<number>()
  for (const p of publications as Publication[]) {
    if (p.language === locale && p.year) years.add(p.year)
  }
  return Array.from(years).sort((a, b) => b - a)
}
