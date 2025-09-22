// src/components/NavBar.tsx
import { LABEL, type Lang, type PageKey,pathFor } from '@lib/routes'
import { Link } from 'react-router-dom'

type Props = { lang: Lang }

const NAV_PAGES: PageKey[] = [
  'people',
  'research',
  'publications',
  'projects',
  'facilities',
  'news',
  'open',
  'contact',
]

export default function NavBar({ lang }: Props) {
  const labels = LABEL[lang]

  return (
    <nav className="flex flex-wrap gap-4">
      <Link to={pathFor('home', lang)}>{labels.home}</Link>
      {NAV_PAGES.map((key) => (
        <Link key={key} to={pathFor(key, lang)}>
          {labels[key]}
        </Link>
      ))}
    </nav>
  )
}
