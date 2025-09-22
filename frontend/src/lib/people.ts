import peopleRaw from '@data/people.json'
import type { Locale, Person } from '@lib/types'

const all = peopleRaw as Person[]

export function getPI(locale: Locale): Person[] {
  return all.filter((p) => p.locale === locale && p.role === 'PI')
}

export function getStudents(locale: Locale): Person[] {
  return all.filter(
    (p) => p.locale === locale && (p.role === 'PhD' || p.role === 'MSc' || p.role === 'BSc'),
  )
}

export function getAlumni(locale: Locale): Person[] {
  return all
    .filter((p) => p.locale === locale && p.role === 'Alumni')
    .sort((a, b) => (b.period || '').localeCompare(a.period || ''))
}
