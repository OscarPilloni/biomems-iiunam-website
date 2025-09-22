// src/layouts/SiteLayout.tsx
import LangSwitch from '@components/LangSwitch'
import NavBar from '@components/NavBar'
import type { Lang } from '@lib/routes'
import { Outlet } from 'react-router-dom'

type Props = { lang: Lang }

export default function SiteLayout({ lang }: Props) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      {/* Skip link for a11y */}
      <a
        href="#main"
        className="sr-only z-50 rounded border bg-white px-3 py-2 focus:not-sr-only focus:absolute focus:top-4 focus:left-4"
      >
        Skip to content
      </a>

      {/* Header / Nav */}
      <header className="border-b bg-white/80 backdrop-blur">
        <div className="container mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          {/* Brand */}
          <a href={lang === 'en' ? '/en/' : '/es/'} className="font-semibold tracking-tight">
            BioMEMS @ IIUNAM
          </a>

          {/* Main nav */}
          <nav aria-label="Primary">
            <NavBar lang={lang} />
          </nav>

          {/* Lang toggle */}
          <div className="shrink-0">
            <LangSwitch />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main id="main" className="container mx-auto max-w-6xl flex-1 px-4 py-8">
        <Outlet />
      </main>

      {/* Footer (simple placeholder) */}
      <footer className="border-t">
        <div className="container mx-auto flex max-w-6xl items-center justify-between px-4 py-6 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} BioMEMS Lab · IIUNAM</p>
          <p className="opacity-75">
            {lang === 'en' ? 'Mexico City, Mexico' : 'Ciudad de México, México'}
          </p>
        </div>
      </footer>
    </div>
  )
}
