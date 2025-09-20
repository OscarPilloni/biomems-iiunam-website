export type Locale = 'en' | 'es'

export function getLocaleFromPath(pathname: string): Locale {
  return pathname.startsWith('/es') ? 'es' : 'en'
}

export function switchLocalePath(pathname: string, to: Locale): string {
  const current = getLocaleFromPath(pathname)
  if (current === to) return pathname
  if (to === 'en') return pathname.replace(/^\/es(?=\/|$)/, '/en').replace(/^\/$/, '/en')
  return pathname.replace(/^\/en(?=\/|$)/, '/es').replace(/^\/$/, '/es')
}
// Note: This is a very basic implementation and may not cover all edge cases.
