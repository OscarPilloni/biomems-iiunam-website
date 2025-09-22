// src/lib/routes.ts
export type Lang = 'en' | 'es'
export type PageKey =
  | 'home'
  | 'people'
  | 'research'
  | 'publications'
  | 'projects'
  | 'facilities'
  | 'news'
  | 'open'
  | 'contact'

// 1) Canonical slugs (same for both languages)
export const SLUG: Record<PageKey, string> = {
  home: '',
  people: 'people',
  research: 'research',
  publications: 'publications',
  projects: 'projects',
  facilities: 'facilities',
  news: 'news',
  open: 'open-data-code',
  contact: 'contact',
}

// 2) Menu labels per language (UI text only)
export const LABEL: Record<Lang, Record<PageKey, string>> = {
  en: {
    home: 'Home',
    people: 'People',
    research: 'Research',
    publications: 'Publications',
    projects: 'Projects',
    facilities: 'Facilities',
    news: 'News & Events',
    open: 'Open Data / Code',
    contact: 'Contact / Visit',
  },
  es: {
    home: 'Inicio',
    people: 'Personas',
    research: 'Investigación',
    publications: 'Publicaciones',
    projects: 'Proyectos',
    facilities: 'Instalaciones',
    news: 'Noticias / Eventos',
    open: 'Datos / Código',
    contact: 'Contacto / Visítanos',
  },
}

// 3) Helpers
export function pathFor(page: PageKey, lang: Lang) {
  const base = lang === 'en' ? '/en' : '/es'
  const slug = SLUG[page]
  return slug ? `${base}/${slug}` : `${base}/`
}

export function isLang(segment: string): segment is Lang {
  return segment === 'en' || segment === 'es'
}

export function getLangFromPath(pathname: string): Lang | null {
  const seg = pathname.split('/').filter(Boolean)[0]
  return isLang(seg) ? seg : null
}

/** Return the PageKey for a given pathname (ignores language). */
export function getPageKeyFromPath(pathname: string): PageKey | null {
  const [, maybeSlug] = pathname.split('/').filter(Boolean) // [lang, slug?]
  if (!maybeSlug) return 'home'
  // Match slug to canonical
  const match = (Object.keys(SLUG) as PageKey[]).find((k) => SLUG[k] === maybeSlug)
  return match ?? null
}

/** Given a current path, return the same page in the other language. */
export function switchLangPath(pathname: string): string {
  const curr = getLangFromPath(pathname) ?? 'en'
  const other: Lang = curr === 'en' ? 'es' : 'en'
  const key = getPageKeyFromPath(pathname) ?? 'home'
  return pathFor(key, other)
}
