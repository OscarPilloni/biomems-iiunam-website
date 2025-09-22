import instrumentsRaw from '@data/instruments.json'
import policiesRaw from '@data/policies.json'
import type { Instrument, Locale } from '@lib/types'

export function getInstruments(locale: Locale): Instrument[] {
  return (instrumentsRaw as Instrument[]).filter((i) => i.locale === locale)
}

export function getFacilityText(locale: Locale) {
  const p = policiesRaw as {
    en: { bookingPolicy: string; collaboration: string }
    es: { bookingPolicy: string; collaboration: string }
  }
  return locale === 'es' ? p.es : p.en
}
